export const DEFAULT_INPUTS = {
  price: 59900,
  cashDiscount: 3000,
  emiDiscount: 4500,
  annualRate: 15,
  tenure: 6,
  processingFee: 299,
  gstRate: 18,
};

export function calculateEmi(inputs) {
  const price = Math.max(0, Number(inputs.price) || 0);
  const cashDiscount = Math.max(0, Number(inputs.cashDiscount) || 0);
  const emiDiscount = Math.max(0, Number(inputs.emiDiscount) || 0);
  const annualRate = Math.max(0, Number(inputs.annualRate) || 0);
  const tenure = Math.max(1, Math.round(Number(inputs.tenure) || 1));
  const processingFee = Math.max(0, Number(inputs.processingFee) || 0);
  const gstRate = Math.max(0, Number(inputs.gstRate) || 0);

  const financedAmount = Math.max(0, price - emiDiscount);
  const monthlyRate = annualRate / 1200;
  const emi =
    monthlyRate === 0
      ? financedAmount / tenure
      : (financedAmount * monthlyRate * (1 + monthlyRate) ** tenure) /
        ((1 + monthlyRate) ** tenure - 1);

  let balance = financedAmount;
  let totalInterest = 0;
  let totalGstOnInterest = 0;
  const schedule = [];

  for (let month = 1; month <= tenure; month += 1) {
    const interest = monthlyRate === 0 ? 0 : balance * monthlyRate;
    const principal =
      month === tenure ? balance : Math.min(balance, emi - interest);
    const gstOnInterest = interest * (gstRate / 100);
    balance = Math.max(0, balance - principal);
    totalInterest += interest;
    totalGstOnInterest += gstOnInterest;
    schedule.push({
      month,
      principal,
      interest,
      gst: gstOnInterest,
      payment: principal + interest + gstOnInterest,
      balance,
    });
  }

  const feeGst = processingFee * (gstRate / 100);
  const cashCost = Math.max(0, price - cashDiscount);
  const emiCost =
    financedAmount +
    totalInterest +
    totalGstOnInterest +
    processingFee +
    feeGst;
  const difference = emiCost - cashCost;

  return {
    financedAmount,
    monthlyEmi: emi,
    totalInterest,
    totalGstOnInterest,
    feeGst,
    cashCost,
    emiCost,
    difference,
    schedule,
    normalized: {
      price,
      cashDiscount,
      emiDiscount,
      annualRate,
      tenure,
      processingFee,
      gstRate,
    },
  };
}

/** Approximate seller subsidy for a typical 6-month no-cost EMI at list price. */
export function estimateNoCostEmiDiscount(
  price,
  annualRate = 15,
  tenure = 6,
) {
  const { totalInterest } = calculateEmi({
    price,
    cashDiscount: 0,
    emiDiscount: 0,
    annualRate,
    tenure,
    processingFee: 0,
    gstRate: 0,
  });
  return Math.round(totalInterest);
}

function buildNoCostPreset({
  id,
  label,
  detail,
  note,
  price,
  cashDiscount,
  tenure = 6,
  annualRate = 15,
  processingFee = 299,
  gstRate = 18,
}) {
  return {
    id,
    label,
    detail,
    note,
    inputs: {
      price,
      cashDiscount,
      emiDiscount: estimateNoCostEmiDiscount(price, annualRate, tenure),
      annualRate,
      tenure,
      processingFee,
      gstRate,
    },
  };
}

export const offerPresets = [
  buildNoCostPreset({
    id: "iphone-16",
    label: "iPhone 16",
    detail: "128GB · 6M",
    note:
      "Apple India store price ₹69,900 for 128GB (Jun 2026). Amazon/Flipkart sales often add ₹4,000–₹5,000 HDFC or Axis instant off on full payment — usually separate from the 6-month no-cost EMI path.",
    price: 69900,
    cashDiscount: 5000,
  }),
  buildNoCostPreset({
    id: "macbook-m4",
    label: "MacBook Air M4",
    detail: "256GB · 6M",
    note:
      "Apple India ₹97,900 for 13″ MacBook Air M4 (16GB/256GB). Apple’s store banner (Jun 2026): up to 6-month no-cost EMI plus up to ₹10,000 instant cashback on eligible cards when you pay in full.",
    price: 97900,
    cashDiscount: 10000,
  }),
  buildNoCostPreset({
    id: "oneplus-13",
    label: "OnePlus 13",
    detail: "12+256GB · 6M",
    note:
      "OnePlus India MRP ₹64,999 for 12GB+256GB. During Amazon Great Summer Sale 2026 the list price dropped to ₹57,999; bank instant discounts of ₹3,500–₹5,000 are common on full swipe at checkout.",
    price: 64999,
    cashDiscount: 5000,
  }),
  buildNoCostPreset({
    id: "galaxy-s25",
    label: "Galaxy S25",
    detail: "256GB · 6M",
    note:
      "Samsung India online price ₹92,999 for Galaxy S25 256GB (Jun 2026). Samsung Finance+ and partner banks run 6-month no-cost EMI; full-payment deals on Amazon and Flipkart often cut ₹6,000–₹8,000 with card instant discount.",
    price: 92999,
    cashDiscount: 7000,
  }),
];

export function findMatchingPreset(inputs) {
  return offerPresets.find((preset) =>
    Object.keys(preset.inputs).every(
      (key) => Number(preset.inputs[key]) === Number(inputs[key]),
    ),
  );
}

export function readInputsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const parsed = { ...DEFAULT_INPUTS };
  Object.keys(parsed).forEach((key) => {
    const value = params.get(key);
    if (value !== null && Number.isFinite(Number(value))) {
      parsed[key] = Number(value);
    }
  });
  return parsed;
}

export function toShareUrl(inputs) {
  const url = new URL(window.location.href);
  url.search = "";
  Object.entries(inputs).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });
  return url.toString();
}