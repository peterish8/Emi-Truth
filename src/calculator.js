export const DEFAULT_INPUTS = {
  price: 59900,
  cashDiscount: 3000,
  emiDiscount: 4500,
  annualRate: 15,
  tenure: 6,
  processingFee: 299,
  gstRate: 18,
};

export function findMatchingPreset(inputs) {
  return offerPresets.find((preset) =>
    Object.keys(preset.inputs).every(
      (key) => Number(preset.inputs[key]) === Number(inputs[key]),
    ),
  );
}

export const offerPresets = [
  {
    id: "phone",
    label: "Phone",
    note: "₹59,900 · 6M",
    inputs: { ...DEFAULT_INPUTS },
  },
  {
    id: "laptop",
    label: "Laptop",
    note: "₹89,990 · 6M",
    inputs: {
      price: 89990,
      cashDiscount: 5000,
      emiDiscount: 7000,
      annualRate: 15,
      tenure: 6,
      processingFee: 299,
      gstRate: 18,
    },
  },
  {
    id: "appliance",
    label: "Fridge",
    note: "₹42,000 · 9M",
    inputs: {
      price: 42000,
      cashDiscount: 2000,
      emiDiscount: 2500,
      annualRate: 15,
      tenure: 9,
      processingFee: 199,
      gstRate: 18,
    },
  },
];

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
