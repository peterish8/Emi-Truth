export const checkoutQuestions = [
  {
    ask: "What is my total payable if I pay cash today versus on EMI?",
    context: "Ask on the payment page or chat support before you confirm.",
    good: "Cash is ₹56,900 after the bank/UPI discount. EMI total is ₹60,450 including GST on interest and a ₹299 processing fee.",
    bad: "\"It's no-cost — same price either way.\" Or they only quote the monthly EMI and skip the full total.",
  },
  {
    ask: "Is there a cash, UPI or card discount that disappears if I pick EMI?",
    context: "Compare the price on the product page with the total on the final payment screen.",
    good: "Yes — the 10% instant discount applies only on full payment. The EMI path uses a separate offer.",
    bad: "\"All offers work on every payment mode.\" Or the cash discount vanishes when you select EMI and nobody mentions it.",
  },
  {
    ask: "What fees apply — processing fee, convenience fee, GST on interest?",
    context: "Open the terms link on the EMI radio button before tapping Pay.",
    good: "₹199 processing fee plus 18% GST on the interest portion each month. Amounts are in the checkout terms.",
    bad: "\"Zero extra charges.\" Or \"We'll confirm after the EMI is converted on your card.\"",
  },
  {
    ask: "Will my full purchase amount stay blocked on my credit limit?",
    context: "Ask your card issuer if buying above ₹30,000–₹50,000 on EMI.",
    good: "Yes — the full ₹59,900 stays blocked until the EMI ends. Limit frees up each month as you pay.",
    bad: "\"Only the monthly EMI blocks your limit.\" Or they say the limit is unaffected.",
  },
  {
    ask: "Can I prepay or cancel the EMI early — and what is the foreclosure charge?",
    context: "Ask the bank before assuming you can exit cheaply after grabbing a discount.",
    good: "3% on outstanding principal plus GST. You usually keep no saving because interest was already adjusted upfront.",
    bad: "\"Close anytime for free on no-cost EMI.\" Or no mention of foreclosure in writing.",
  },
  {
    ask: "Do I earn reward points or cashback on this EMI transaction?",
    context: "Check your card's MITC or the issuer's EMI rewards policy.",
    good: "No reward points on EMI purchases for this card. Cash payment would have earned ₹500 cashback.",
    bad: "\"You'll get full rewards.\" Or they avoid the question and rush you to pay.",
  },
  {
    ask: "What happens if I miss one EMI payment?",
    context: "Ask the lender — not the salesperson finishing the sale.",
    good: "Late fee, penal interest on the outstanding balance and a hit to your credit score until cleared.",
    bad: "\"Just pay next month — nothing serious.\" Or no late-fee disclosure at checkout.",
  },
];