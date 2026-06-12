export const learningModules = [
  {
    slug: "emi-basics",
    number: "01",
    title: "EMI fundamentals",
    short: "Understand principal, interest, tenure and the real total you repay.",
    readTime: "8 min",
    prerequisites: [
      "No financial background needed.",
      "Just know what a monthly bill feels like.",
    ],
    keyTerms: [
      { term: "EMI", definition: "A fixed amount you pay every month to slowly repay what you borrowed. Think of it like a subscription that ends once the loan is cleared." },
      { term: "Principal", definition: "The actual amount you borrowed. Not the interest, not the fees. Just the original sum the bank lent you." },
      { term: "Interest", definition: "The extra money the lender charges for letting you pay over time. Think of it as rent for borrowed money." },
      { term: "Tenure", definition: "How many months you will keep making EMI payments. Longer tenure usually means more total interest paid overall." },
      { term: "Total repayment", definition: "Every instalment added up, including all interest, fees and taxes. This is the true cost. Not the monthly number." },
    ],
    sections: [
      {
        title: "The four numbers behind every EMI",
        body: "An equated monthly instalment combines principal and interest into one recurring payment. The payment may stay fixed, but the split changes every month.",
        points: [
          "Principal: the amount actually financed.",
          "Interest rate: the lender's price for giving you time to repay.",
          "Tenure: how many monthly payments you will make.",
          "Total repayment: every instalment plus fees and taxes.",
        ],
      },
      {
        title: "Monthly affordability is not total affordability",
        body: "A smaller EMI can simply mean a longer tenure. That feels easier each month but can increase the total interest substantially.",
        example: {
          label: "DECISION RULE",
          text: "Compare the total repayment first. Use the monthly EMI only to check whether the payment fits your budget.",
        },
      },
      {
        title: "How an EMI changes over time",
        body: "In a reducing-balance loan, early instalments contain more interest because the outstanding principal is higher. As the balance falls, more of each EMI repays principal.",
        visual: {
          src: "/visuals/amortization.png",
          alt: "Storyboard showing interest shrinking and principal repayment growing over an EMI tenure.",
          caption: "The EMI stays fixed but the interest portion shrinks and the principal portion grows every month.",
        },
        points: [
          "A fixed EMI does not mean a fixed interest amount.",
          "Prepayment is usually more valuable earlier in the tenure.",
          "Your statement should show principal, interest and outstanding balance.",
        ],
      },
    ],
    analogy: {
      heading: "Why the total matters more than the monthly amount",
      body: "Imagine renting a flat at ₹5,000 a month for five years. At the end you have paid ₹3,00,000 but the flat was worth ₹2,00,000 all along. The monthly payment felt easy but the total was 50% more than the value. EMI works the same way. The monthly amount feels manageable but what you actually pay in total is the number that matters.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "An EMI splits a large payment into smaller monthly pieces. Paying in parts always costs extra because the bank charges interest for waiting. The longer you take to repay, the more you pay overall. Always look at the total repayment, not just the monthly number.",
      pointers: [
        "Calculate total repayment before agreeing to anything. The monthly number is just one part of the story.",
        "A lower EMI often means a longer tenure and more total interest paid.",
        "Early instalments are mostly interest. Later ones repay more of the principal.",
        "Prepaying is most effective early in the loan when interest is the dominant part.",
        "Your bank statement should show principal paid, interest charged and outstanding balance each month.",
      ],
    },
  },
  {
    slug: "no-cost-emi",
    number: "02",
    title: "No-cost EMI decoded",
    short: "See how the discount, bank interest, GST and lost cash offer interact.",
    readTime: "9 min",
    prerequisites: [
      "What EMI and principal mean (Module 01 or everyday knowledge).",
      "The idea that a discount reduces a price.",
    ],
    keyTerms: [
      { term: "Cash price", definition: "The best price you can actually pay today, after every discount you get for paying in full right now. This is your real alternative to EMI." },
      { term: "MRP", definition: "Maximum Retail Price. The printed number on the product. Almost always higher than what anyone actually pays. Never compare your EMI total against MRP." },
      { term: "EMI discount", definition: "An amount the seller or bank deducts from the product price when you choose EMI. It is meant to offset the bank's interest charge." },
      { term: "Cash discount", definition: "A separate, often larger discount available only when you pay in full immediately. You may lose this by choosing EMI." },
      { term: "Processing fee", definition: "A one-time charge for setting up the EMI loan. It is separate from interest and usually attracts GST on top." },
    ],
    sections: [
      {
        title: "The name is marketing, not the calculation",
        body: "The bank commonly creates a normal interest-bearing EMI. A merchant or manufacturer discount is intended to offset that interest, but it may not offset every related cost.",
        visual: {
          src: "/visuals/no-cost-flow.png",
          alt: "Money-flow diagram showing the shop discount, bank interest, GST, fees and lost cash discount.",
          caption: "The merchant discount and the bank's charges are separate. GST, fees and a lost cash discount sit outside the headline promise.",
        },
        points: [
          "The EMI discount can be different from the cash discount.",
          "GST may apply to the interest charged in each statement.",
          "Processing fees and fee GST may remain payable.",
        ],
      },
      {
        title: "The honest comparison",
        body: "Do not compare EMI total with the product's printed MRP. Compare it with the best price you can actually pay today.",
        example: {
          label: "TRUE COST",
          text: "EMI total + GST + fees − rewards, compared with cash price after its discount.",
        },
      },
      {
        title: "When no-cost EMI can still make sense",
        body: "It may be reasonable when the extra cost is small, the purchase is necessary, the EMI is comfortably affordable and retaining cash protects your emergency fund.",
      },
    ],
    analogy: {
      heading: "The free dessert that isn't free",
      body: "A restaurant offers 'free dessert' with a ₹350 combo meal. But your main dish alone costs ₹280. The dessert isn't free. You paid ₹70 extra for it. No-cost EMI works the same way. The 'free' interest is offset by a discount you already had, and GST plus processing fees may still remain on top.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "'No-cost EMI' is a marketing phrase, not a financial guarantee. The bank still charges interest and the seller offsets it with a discount. But you may lose a bigger cash discount, still pay GST and fees, and never realise the true cost. Compare the total EMI outflow against the best cash price. That is the only honest comparison.",
      pointers: [
        "Never compare EMI total against MRP. Always compare against the best available cash price.",
        "Ask specifically whether a cash discount disappears when you choose EMI.",
        "GST on interest and processing fees are usually still payable even on no-cost EMI.",
        "Get the final amount in writing before confirming any EMI offer.",
        "No-cost EMI can still be worth it if the extra cost is small and you genuinely need the cash flexibility.",
      ],
    },
  },
  {
    slug: "gst-and-fees",
    number: "03",
    title: "GST, fees and charges",
    short: "Identify each amount that can sit outside the advertised monthly payment.",
    readTime: "10 min",
    prerequisites: [
      "Basic understanding of what EMI is.",
      "GST is a government tax — currently 18% on most financial services.",
    ],
    keyTerms: [
      { term: "GST", definition: "Goods and Services Tax. A government tax at 18% on financial services like interest and processing fees. It is charged on top of the fee, not included within the stated amount." },
      { term: "Processing fee", definition: "A one-time charge when an EMI is created or converted. Almost always shown before GST so the actual cost is 18% higher than the number you see." },
      { term: "Foreclosure charge", definition: "A fee some lenders charge when you repay the entire loan early before the tenure ends. Must be disclosed in the agreement before you sign." },
      { term: "Penal charge", definition: "An extra fee for breaking a rule like missing a payment or bouncing an EMI. Must be clearly stated in the agreement upfront, not revealed later." },
      { term: "KFS (Key Fact Statement)", definition: "An official summary document lenders must give you before you agree to a loan. It shows APR, all charges and the full repayment schedule in plain terms." },
    ],
    sections: [
      {
        title: "Where GST enters the bill",
        body: "For a card EMI, GST can be charged on the interest component of each instalment. GST can also apply to processing, conversion or foreclosure fees.",
        visual: {
          src: "/visuals/gst-statement.png",
          alt: "Simplified card statement highlighting interest, GST on interest and processing fee plus GST.",
          caption: "GST follows the taxable interest and fee entries. Both amounts change month to month as the outstanding principal falls.",
        },
        points: [
          "GST on interest changes as the monthly interest changes.",
          "A fee shown before tax will cost more after GST.",
          "Rounding can create small differences between an estimate and a statement.",
        ],
      },
      {
        title: "Common extra charges",
        body: "Look for processing fees, convenience fees, documentation charges, late charges, penal charges and foreclosure charges.",
        example: {
          label: "READ BEFORE ACCEPTING",
          text: "The Key Fact Statement, card MITC, sanction letter, checkout terms and the lender's schedule of charges.",
        },
      },
      {
        title: "Penal charges should be disclosed",
        body: "RBI guidance says the reason and amount of applicable penal charges should be disclosed upfront in the agreement and KFS or most important terms, as applicable.",
      },
    ],
    analogy: {
      heading: "The restaurant bill surprise",
      body: "A menu shows a dish at ₹200. When the bill arrives it reads: ₹200 + ₹20 service charge + ₹18 GST = ₹238 final. The advertised price and the final amount are different. EMI offers work exactly the same way. The headline number is almost always the pre-tax, pre-fee figure. Always ask: is this the final amount including all taxes?",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "The EMI or fee you see in an advertisement is almost always the pre-tax number. After adding 18% GST on interest and any applicable fees, your actual outflow is higher. And it changes every month. The KFS document is your right before signing. It must show all charges clearly.",
      pointers: [
        "Any fee quoted before GST costs 18% more in reality. Always ask for the post-GST number.",
        "GST on interest changes every month because the interest amount changes as the principal falls.",
        "Read the KFS to find all applicable fees, penal charges and taxes before agreeing.",
        "Foreclosure and penal charges must be disclosed upfront. If they are not shown, ask directly.",
        "Compare the final checkout total with your first statement. Any difference needs an explanation.",
      ],
    },
  },
  {
    slug: "credit-card-emi",
    number: "04",
    title: "Credit-card EMI",
    short: "Understand merchant EMI, conversion after purchase and card-statement effects.",
    readTime: "11 min",
    prerequisites: [
      "What a credit card limit is.",
      "Basic understanding of what EMI means.",
    ],
    keyTerms: [
      { term: "Credit limit", definition: "The maximum total amount your card issuer allows you to borrow at any one time. Think of it as a ceiling on your card spending." },
      { term: "Available limit", definition: "The part of your credit limit currently free to use. After an EMI purchase, this drops by the full financed amount immediately." },
      { term: "Credit utilisation", definition: "The percentage of your total credit limit currently in use. Keeping this below 30% is generally better for your credit score." },
      { term: "Merchant EMI", definition: "An EMI offer you select at the checkout point before the payment is made. Terms, discounts and rates are fixed at that moment." },
      { term: "Post-purchase conversion", definition: "Converting a normal card charge into EMI after the purchase is complete. You do this through your bank app or customer care. May carry different rates and fees than merchant EMI." },
      { term: "Due date", definition: "The date by which your card payment must reach the bank. Missing it by even one day can trigger late fees, penalty interest and a negative note on your credit report." },
    ],
    sections: [
      {
        title: "Two different products",
        body: "Merchant EMI is selected at checkout. Post-purchase conversion happens after a normal card transaction. Their rates, discounts, fees and eligibility can differ.",
        points: [
          "Confirm whether the merchant discount applies before choosing EMI.",
          "Check the conversion fee for post-purchase EMI.",
          "Do not assume an app's EMI offer matches the checkout offer.",
        ],
      },
      {
        title: "Your credit limit may remain blocked",
        body: "Many issuers reduce the available credit limit by the financed amount and restore it as principal is repaid. A low available limit can increase utilization and reduce flexibility.",
        visual: {
          src: "/visuals/card-limit.png",
          alt: "Three-stage storyboard showing card limit before purchase, blocked after purchase and restored during repayment.",
          caption: "The financed amount blocks your available limit immediately. It restores gradually as each monthly principal repayment is made.",
        },
      },
      {
        title: "Missing one payment can become expensive",
        body: "A missed card payment can trigger late fees, interest, taxes and credit-history damage. Autopay still needs enough bank balance on the due date.",
        example: {
          label: "SAFE PRACTICE",
          text: "Keep the full EMI amount ready several days before the card due date and verify the first two statements manually.",
        },
      },
    ],
    analogy: {
      heading: "A water tank with slow refill",
      body: "Your credit card limit is like a water tank with a fixed capacity. When you choose EMI for a ₹30,000 purchase, it is like draining ₹30,000 from the tank all at once. The water refills slowly as you repay each month but until it does you have less available for everything else. And if the tank runs dry at the wrong moment, even routine purchases become difficult.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "A credit card EMI blocks your available limit immediately, attracts interest and GST each month, and one missed payment can snowball into late fees, penalty interest and a damaged credit history. Merchant EMI at checkout and post-purchase conversion are different products with different rates. Always verify which one you are agreeing to and what the full terms are.",
      pointers: [
        "Your available credit limit drops by the full financed amount the moment an EMI purchase is made.",
        "Merchant EMI and post-purchase conversion have different discounts, rates and fees. Do not assume they match.",
        "Keep the full EMI amount funded in your bank account several days before the card due date.",
        "Check the first two statements after any EMI conversion to catch incorrect setups early.",
        "High EMI balances on a card raise credit utilisation. This can reduce your credit score over time.",
      ],
    },
  },
  {
    slug: "loan-emi",
    number: "05",
    title: "Loan EMI and prepayment",
    short: "Compare loan types, fixed and floating rates, APR and prepayment choices.",
    readTime: "12 min",
    prerequisites: [
      "What principal, interest and tenure mean (Module 01).",
      "The general idea of a bank loan.",
    ],
    keyTerms: [
      { term: "APR (Annual Percentage Rate)", definition: "The true annual cost of a loan, including interest and most fees, expressed as a single percentage. More reliable than the nominal rate when comparing offers across lenders." },
      { term: "KFS (Key Fact Statement)", definition: "A standardised summary the lender must provide before you sign. It contains APR, the full repayment schedule and all applicable charges." },
      { term: "Fixed rate", definition: "An interest rate that stays the same for the life of the loan or a fixed period. Your EMI is predictable but you cannot benefit if market rates fall." },
      { term: "Floating rate", definition: "An interest rate linked to a market benchmark that can rise or fall. Your EMI or tenure may change when the benchmark moves." },
      { term: "Prepayment", definition: "Paying an extra lump sum towards the loan principal before it is due. Reduces the outstanding balance and saves future interest." },
      { term: "Foreclosure", definition: "Paying off the entire remaining loan in a single payment before the tenure ends. Some lenders charge a foreclosure fee. Check the KFS." },
    ],
    sections: [
      {
        title: "Rate is not the complete price",
        body: "APR is designed to express the annual cost of credit more broadly than the nominal interest rate. Review the KFS for APR, repayment schedule and disclosed charges.",
        points: [
          "Ask for the KFS before signing.",
          "Compare APR and total repayment across lenders.",
          "Do not finance insurance or add-ons without checking their separate value.",
        ],
      },
      {
        title: "Fixed versus floating",
        body: "A fixed rate offers payment predictability under its contract terms. A floating rate can change with its benchmark, potentially changing the EMI, tenure or both.",
      },
      {
        title: "Prepayment: reduce EMI or tenure?",
        body: "Reducing tenure generally saves more interest when you can continue paying the existing EMI. Reducing EMI improves monthly cash flow.",
        visual: {
          src: "/visuals/prepayment-choice.png",
          alt: "Comparison of reducing the monthly EMI versus shortening the loan tenure after prepayment.",
          caption: "Reducing the EMI lowers monthly load. Reducing the tenure saves more total interest. Pick whichever matters more to you right now.",
        },
        example: {
          label: "CHOICE",
          text: "Choose tenure reduction for maximum interest savings; choose EMI reduction when monthly resilience matters more.",
        },
      },
    ],
    analogy: {
      heading: "Reading a rental agreement properly",
      body: "You would not sign a flat rental for ₹5 lakh a year just because the monthly rent sounds manageable. You would read the whole agreement: does the rent increase? Are there maintenance charges? Can you leave early without penalty? A loan agreement deserves exactly the same scrutiny. The EMI is just one line in the document.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "A loan's monthly EMI is only one number. The full picture includes APR, total interest across all months, all fees, and what happens if rates change or you prepay. Prepaying early saves the most interest. And when you can afford the same EMI, reducing tenure saves more than reducing the EMI amount.",
      pointers: [
        "Always ask for the KFS before signing. It shows APR, all charges and the full repayment schedule.",
        "Compare lenders using APR, not just the advertised interest rate.",
        "Floating rates can increase your EMI or extend your tenure when the benchmark rises. Plan for it.",
        "Prepay as early in the tenure as possible for the maximum interest saving.",
        "Choose tenure reduction over EMI reduction when you can still afford the current monthly amount.",
      ],
    },
  },
  {
    slug: "emi-scams",
    number: "06",
    title: "Scams and dark patterns",
    short: "Recognise unsafe loan offers, misleading pricing and pressure tactics.",
    readTime: "10 min",
    prerequisites: [
      "No financial knowledge needed.",
      "Helpful to know what OTPs and UPI PINs are used for.",
    ],
    keyTerms: [
      { term: "OTP (One Time Password)", definition: "A temporary code sent to your phone or email to verify your identity. It authorises a transaction or login. Sharing it with anyone gives them that same authorisation. Treat it like a key to your account." },
      { term: "UPI PIN", definition: "A secret number that approves UPI payments from your bank account. No legitimate lender, support agent or bank employee will ever ask for it." },
      { term: "Dark pattern", definition: "A design trick in an app or website that steers you into a choice you would not consciously make. Like a preselected paid insurance option in small text, or a fee revealed only at the final step." },
      { term: "Advance fee", definition: "An upfront payment demanded before a loan is released or approved. This is a common fraud tactic. Legitimate lenders deduct fees from the disbursed amount, not before." },
      { term: "Grievance channel", definition: "The official, documented route for lodging a complaint. Think the lender's written complaint desk, RBI CMS portal or National Consumer Helpline." },
    ],
    sections: [
      {
        title: "Warning signs before you borrow",
        body: "Treat an offer as high risk when the lender identity is unclear, an advance fee is demanded to release a loan, or the seller pressures you to share credentials.",
        visual: {
          src: "/visuals/scam-red-flags.png",
          alt: "Four loan scam warning signs: advance fee, OTP request, screen sharing and payment to a personal account.",
          caption: "Stop and verify immediately when any offer asks for credentials, remote screen access, or payment to a personal account.",
        },
        points: [
          "Never share an OTP, card PIN, UPI PIN or banking password.",
          "Verify the regulated lender behind a loan app.",
          "Do not install remote-access or screen-sharing apps for loan approval.",
          "Do not pay a personal account to unlock or cancel a loan.",
        ],
      },
      {
        title: "Misleading checkout patterns",
        body: "Watch for a preselected EMI option, hidden cash discount, add-on insurance, a monthly price shown more prominently than the total, or fees revealed only at the final step.",
        example: {
          label: "PAUSE THE CHECKOUT",
          text: "Capture screenshots of the product price, selected offer, fee disclosure and final payable amount before confirming.",
        },
      },
      {
        title: "This guide identifies red flags, not legal guilt",
        body: "A warning sign does not by itself prove fraud. Verify the lender, preserve evidence and use official reporting or grievance channels when money or personal data is at risk.",
      },
    ],
    analogy: {
      heading: "The street magic trick",
      body: "A street performer shows something impressive with one hand while the other hand does the actual work. Dark checkout patterns work the same way: the 'no-cost' headline or the excitement of a discount keeps your attention up top, while a preselected insurance, a hidden fee or a dangerous permission request happens quietly at the bottom of the screen.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "The most costly financial mistakes are often not outright fraud. They are carefully designed distractions. Preselected options, fees revealed at the last step, and high-pressure time limits are legal but expensive. The best defence is a simple habit: pause, read every screen carefully, and verify before confirming. When something feels wrong, stop completely before sharing anything.",
      pointers: [
        "Never share an OTP, UPI PIN, card PIN or banking password. Not even to cancel a loan.",
        "Verify that a lender is registered with RBI before sharing any personal or financial information.",
        "Screenshot every checkout screen before confirming. It costs nothing and creates instant evidence.",
        "An advance fee demanded before loan release is a fraud signal. Stop and walk away immediately.",
        "A red flag is not legal proof of fraud. Verify, document and report through official channels.",
      ],
    },
  },
  {
    slug: "checkout-checklist",
    number: "07",
    title: "Checkout decision guide",
    short: "Use a repeatable process before accepting any EMI at checkout.",
    readTime: "7 min",
    prerequisites: [
      "Basic understanding of what EMI total means.",
      "Awareness that cash and EMI prices can differ.",
    ],
    keyTerms: [
      { term: "Cash price", definition: "The best price available if you pay the full amount today, after every applicable discount. This is your true alternative to choosing EMI." },
      { term: "Financed amount", definition: "The principal the bank actually lends you. May differ from the product price if a down payment or EMI discount is applied." },
      { term: "Total EMI cost", definition: "Every monthly instalment added together, plus all one-time fees and taxes. This is what you will actually pay if you choose EMI." },
      { term: "Opportunity cost", definition: "The cash discount or benefit you give up by choosing EMI instead of paying now. Always include this as part of the EMI's real cost." },
      { term: "Emergency reserve", definition: "Money kept aside for unexpected costs like medical bills, job loss or urgent repairs. A sound financial decision keeps this buffer intact." },
    ],
    sections: [
      {
        title: "The five-number check",
        body: "Write down five numbers before deciding: cash price, financed amount, monthly EMI, all fees and total repayment.",
        visual: {
          src: "/visuals/checkout-five-steps.png",
          alt: "Five-step path from cash price through financed amount, taxes, fees and total EMI with a final pay-now vs EMI decision scale.",
          caption: "A repeatable five-step check prevents one attractive monthly number from controlling the whole decision.",
        },
        points: [
          "Cash price after every eligible discount.",
          "EMI discount and financed principal.",
          "Interest and GST over the full tenure.",
          "Processing and convenience charges including tax.",
          "Total EMI cost minus the cash price.",
        ],
      },
      {
        title: "The affordability check",
        body: "A purchase is not affordable merely because the EMI fits this month's income. Account for existing debt, irregular expenses and an emergency reserve.",
        example: {
          label: "STOP SIGNAL",
          text: "If one missed salary or unexpected bill would force you to revolve card debt, the EMI is too fragile.",
        },
      },
      {
        title: "Keep evidence",
        body: "Save the order page, offer terms, final invoice, EMI conversion confirmation and first statement. These documents make correction and escalation much easier.",
      },
    ],
    analogy: {
      heading: "A pilot's pre-flight checklist",
      body: "Pilots are highly trained, yet they still follow a written checklist before every flight. Not because they don't know the steps. It's because excitement, familiarity and time pressure are exactly the conditions that cause even experienced people to miss things. A five-number EMI check works the same way. It is not a lack of confidence. It is a repeatable process that catches what the thrill of checkout makes easy to skip.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "No EMI decision needs to be made under time pressure in the moment. A five-number check takes two minutes and shows the complete picture. Affordability is not just fitting the payment into this month. It means you can still survive an unexpected bill without going into revolving card debt.",
      pointers: [
        "Write down five numbers before any EMI: cash price, financed amount, monthly EMI, all fees, total repayment.",
        "If total EMI significantly exceeds the cash price, decide consciously whether the extra cost is worth the liquidity benefit.",
        "Affordability means surviving a missed salary or unexpected expense. Not just fitting the EMI this month.",
        "Save evidence at every step: screenshots, invoice, EMI confirmation and first two statements.",
        "A preselected option, hidden fee or countdown timer deserves extra scrutiny before you confirm.",
      ],
    },
  },
  {
    slug: "consumer-rights",
    number: "08",
    title: "Complaints and consumer rights",
    short: "Document a wrong charge and escalate it through the correct official channel.",
    readTime: "12 min",
    prerequisites: [
      "Awareness that RBI-regulated lenders must follow official guidelines.",
      "Understanding that complaints work far better when documented in writing.",
    ],
    keyTerms: [
      { term: "RBI (Reserve Bank of India)", definition: "India's central bank and financial regulator. It oversees banks, NBFCs and digital lenders. If a lender is RBI-regulated, you have an official escalation path through RBI CMS." },
      { term: "NBFC", definition: "Non-Banking Financial Company. A lender that provides loans or financial services but is not a traditional bank. Most NBFCs are regulated by RBI." },
      { term: "RBI CMS", definition: "RBI Complaint Management System. The official online portal at cms.rbi.org.in for filing complaints against RBI-regulated entities when internal resolution fails." },
      { term: "Ombudsman", definition: "An independent official who investigates complaints against regulated financial entities. Accessed through RBI's Integrated Ombudsman scheme when the internal complaint process is exhausted." },
      { term: "NCH (National Consumer Helpline)", definition: "A government initiative providing pre-litigation consumer grievance support. Official helpline numbers: 1915 and 1800-11-4000." },
      { term: "Grievance", definition: "A formal, documented complaint about a wrong charge, misleading offer or violation of stated terms. You submit it through an official channel and get a reference number." },
    ],
    sections: [
      {
        title: "Start with a precise written complaint",
        body: "Contact the merchant or regulated lender first. State the transaction date, amount, expected term, actual charge and exact remedy requested.",
        visual: {
          src: "/visuals/complaint-escalation.png",
          alt: "Complaint escalation path: gather evidence, complain to lender, escalate to RBI CMS or NCH 1915, obtain written outcome.",
          caption: "Gather your evidence first, then complain to the lender, then escalate to RBI CMS or NCH if unresolved.",
        },
        points: [
          "Attach the invoice, screenshots, statement and prior communication.",
          "Use the lender's official grievance channel, not only social media.",
          "Keep complaint numbers and dates for every escalation.",
        ],
      },
      {
        title: "Escalating a banking complaint",
        body: "If a complaint against an RBI-regulated entity remains unresolved under the applicable process, the RBI Complaint Management System is the official online route under the Integrated Ombudsman framework.",
        links: [
          ["RBI Complaint Management System", "https://cms.rbi.org.in"],
          ["RBI Ombudsman FAQ", "https://www.rbi.org.in/commonperson/english/scripts/FAQs.aspx?Id=3407"],
        ],
      },
      {
        title: "Consumer grievance support",
        body: "The National Consumer Helpline provides pre-litigation grievance support through its portal and other channels. Its official numbers include 1915 and 1800-11-4000.",
        links: [
          ["National Consumer Helpline", "https://consumerhelpline.gov.in/"],
          ["NCH contact options", "https://consumerhelpline.gov.in/public/contact"],
        ],
        example: {
          label: "COMPLAINT PACK",
          text: "Timeline + evidence + amount disputed + rule or promise relied on + exact resolution requested.",
        },
      },
    ],
    analogy: {
      heading: "The receipt at the store",
      body: "When a shopkeeper overcharges you, you point to the receipt that shows the agreed price. Without it, it is your word against theirs. Your financial documents like screenshots, invoices, statements and prior correspondence are exactly that receipt. They transform a vague complaint into a specific, verifiable, dateable claim that an ombudsman or consumer court can actually act on.",
    },
    summary: {
      heading: "The simplest way to put it",
      body: "Every consumer has the right to accurate charges and a formal resolution process. Start with a precise written complaint to the lender through their official channel. If unresolved, escalate to RBI CMS for banking or NBFC matters, or to the National Consumer Helpline for general consumer issues. The key ingredient in every successful complaint is documentation. Dates, amounts, promises and reference numbers.",
      pointers: [
        "Always complain first to the lender's official grievance channel. Not only on social media.",
        "Keep every complaint reference number and the date and method of each escalation.",
        "If unresolved within 30 days or the response is unsatisfactory, escalate to RBI CMS at cms.rbi.org.in.",
        "For non-banking or general consumer issues, call NCH on 1915 or 1800-11-4000.",
        "A complete complaint pack = timeline + evidence + disputed amount + rule violated + exact remedy requested.",
      ],
    },
  },
];

export const moduleQuizzes = {
  "emi-basics": [
    {
      question: "Two loans have the same principal and rate. Which one usually costs more overall?",
      options: ["The shorter-tenure loan", "The longer-tenure loan", "They always cost exactly the same", "The loan with the larger first EMI"],
      answer: 1,
      explanation: "A longer tenure means interest accrues for more months, increasing total repayment even though each EMI may be smaller.",
    },
    {
      question: "In a reducing-balance loan, what normally happens as the loan progresses?",
      options: ["The interest portion rises every month", "The principal never changes", "Interest falls as outstanding principal falls", "The EMI becomes a cash discount"],
      answer: 2,
      explanation: "Interest is calculated on the outstanding balance. As principal is repaid each month, the interest component generally declines.",
    },
    {
      question: "Which number best tells you the complete financial burden of an EMI?",
      options: ["Monthly EMI alone", "Printed product price", "Total repayment including charges", "The first month's interest"],
      answer: 2,
      explanation: "Monthly affordability matters for cash flow, but total repayment including interest, fees and taxes reveals the complete cost.",
    },
  ],
  "no-cost-emi": [
    {
      question: "What is the fairest comparison for a no-cost EMI offer?",
      options: ["EMI total vs printed MRP", "Monthly EMI vs salary", "EMI total vs best available cash price", "EMI discount vs card limit"],
      answer: 2,
      explanation: "The cash price includes the discount you give up by choosing EMI. Comparing against MRP hides that opportunity cost.",
    },
    {
      question: "Why can a no-cost EMI still cost extra?",
      options: ["The bank never charges interest", "GST and processing fees may remain payable", "Cash discounts increase automatically", "The tenure becomes zero"],
      answer: 1,
      explanation: "The merchant discount may offset interest, but GST on interest, processing fees and a lost cash discount can remain.",
    },
    {
      question: "When can paying a small extra EMI cost still be reasonable?",
      options: ["When the monthly payment is hidden", "When it protects needed emergency cash and remains affordable", "Whenever the seller says it is free", "When you do not know the total"],
      answer: 1,
      explanation: "A modest, understood cost may be rational when retaining liquidity is valuable and the repayment is comfortably affordable.",
    },
  ],
  "gst-and-fees": [
    {
      question: "On a credit-card EMI, GST may commonly apply to which amount?",
      options: ["Only the product MRP", "The interest and applicable service fees", "The principal repaid", "The cash discount"],
      answer: 1,
      explanation: "GST can apply to the interest component and to fees such as processing or foreclosure charges.",
    },
    {
      question: "A processing fee is shown as ₹500 before GST. What should you assume?",
      options: ["₹500 is necessarily the final cost", "The fee may cost more after GST", "GST reduces the fee", "The fee replaces principal"],
      answer: 1,
      explanation: "A fee quoted before tax will generally have 18% GST added, so the final debit can exceed ₹500.",
    },
    {
      question: "Where should disclosed penal charges be checked before borrowing?",
      options: ["Only in an advertisement", "KFS, agreement or applicable important terms", "A friend's statement", "The product box"],
      answer: 1,
      explanation: "RBI guidance requires applicable penal charges and their reasons to be disclosed upfront in relevant loan documents.",
    },
  ],
  "credit-card-emi": [
    {
      question: "What can happen to your available card limit after an EMI purchase?",
      options: ["It always doubles", "The financed amount may block part of the limit", "It becomes unlimited", "Only interest affects the limit"],
      answer: 1,
      explanation: "Many issuers block the financed amount and gradually restore available limit as principal is repaid each month.",
    },
    {
      question: "Which statement about merchant EMI and post-purchase conversion is correct?",
      options: ["They always have identical terms", "They can have different discounts, rates and fees", "Post-purchase conversion is always free", "Merchant EMI has no lender"],
      answer: 1,
      explanation: "They are different offers and may vary in eligibility, processing fees, interest rates and merchant discounts.",
    },
    {
      question: "What is the safest autopay practice for a card EMI?",
      options: ["Keep no balance until the due date", "Assume autopay can never fail", "Fund the account early and verify statements", "Pay only after a late fee appears"],
      answer: 2,
      explanation: "Autopay still needs adequate funds. Funding early and checking the first statements helps catch failures or incorrect conversion.",
    },
  ],
  "loan-emi": [
    {
      question: "Which document should help you compare APR, charges and repayment terms?",
      options: ["A marketing banner", "The Key Fact Statement", "A social-media comment", "A product invoice only"],
      answer: 1,
      explanation: "The KFS is intended to present key loan facts — including APR and charges — in a comparable, standardised form.",
    },
    {
      question: "If you can continue paying the existing EMI, which prepayment choice usually saves more interest?",
      options: ["Increasing tenure", "Reducing tenure", "Adding another fee", "Skipping the next EMI"],
      answer: 1,
      explanation: "Keeping the EMI and shortening the tenure generally removes more future interest than lowering the EMI.",
    },
    {
      question: "What can happen when a floating benchmark rate rises?",
      options: ["EMI, tenure or both may change", "The principal disappears", "APR becomes irrelevant", "All fees are refunded"],
      answer: 0,
      explanation: "A lender may adjust EMI, tenure or both according to the loan terms when the floating benchmark rate changes.",
    },
  ],
  "emi-scams": [
    {
      question: "A loan agent asks for your OTP to release approved funds. What should you do?",
      options: ["Share it quickly", "Share half the OTP", "Refuse and use official channels", "Install a screen-sharing app"],
      answer: 2,
      explanation: "OTPs authorise access or transactions. Legitimate support should never require you to reveal them.",
    },
    {
      question: "Which checkout pattern deserves an immediate pause?",
      options: ["The total cost is clearly shown", "EMI is preselected and fees appear only at the final step", "Cash and EMI prices are compared", "Terms are downloadable"],
      answer: 1,
      explanation: "Preselection and delayed fee disclosure can steer consumers into a decision before they understand the complete cost.",
    },
    {
      question: "Does one warning sign by itself legally prove fraud?",
      options: ["Always", "Never investigate further", "No; verify, preserve evidence and report appropriately", "Only when the EMI is small"],
      answer: 2,
      explanation: "A red flag indicates risk, not a legal conclusion. Verification and documented reporting are the appropriate next steps.",
    },
  ],
  "checkout-checklist": [
    {
      question: "Which set of numbers is most useful before accepting EMI?",
      options: ["MRP and colour", "Cash price, financed amount, fees and total repayment", "Only monthly EMI", "Reward points alone"],
      answer: 1,
      explanation: "These numbers expose the actual alternative price, the financed principal and the complete cost of choosing EMI.",
    },
    {
      question: "An EMI fits your salary, but one emergency would force you into card debt. What is the safer conclusion?",
      options: ["The EMI is comfortably affordable", "The repayment plan is financially fragile", "Fees no longer matter", "Choose a longer tenure automatically"],
      answer: 1,
      explanation: "Affordability includes resilience. A payment that fails under a common emergency is not comfortably affordable.",
    },
    {
      question: "What evidence is most useful if the charged offer differs from checkout?",
      options: ["Memory alone", "Screenshots, invoice, confirmation and statements", "A verbal promise only", "The product packaging"],
      answer: 1,
      explanation: "Dated documents establish what was offered, accepted and eventually charged — essential for any dispute.",
    },
  ],
  "consumer-rights": [
    {
      question: "What should generally happen before an RBI Ombudsman complaint against a card issuer?",
      options: ["Complain only on social media", "First approach the card issuer through its grievance process", "Wait without reporting it", "Delete all statements"],
      answer: 1,
      explanation: "RBI guidance says the customer should first approach the concerned issuer. CMS escalation applies when the response is absent or unsatisfactory.",
    },
    {
      question: "When may an unresolved complaint generally become eligible for RBI CMS escalation?",
      options: ["Immediately before contacting the lender", "After no reply within 30 days or an unsatisfactory response", "Only after five years", "Only when cash was used"],
      answer: 1,
      explanation: "The Integrated Ombudsman framework covers eligible complaints when the regulated entity has not replied within 30 days or the response is unsatisfactory.",
    },
    {
      question: "Which is an official National Consumer Helpline number?",
      options: ["1915", "1122", "4040", "999"],
      answer: 0,
      explanation: "The National Consumer Helpline lists 1915 and 1800-11-4000 as official grievance contact numbers.",
    },
  ],
};

export const officialSources = [
  ["RBI digital lending guidance", "https://www.rbi.org.in/commonman/english/scripts/FAQs.aspx?Id=3413"],
  ["RBI credit-card FAQ", "https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=3580"],
  ["RBI floating-rate reset FAQ", "https://www.rbi.org.in/commonman/english/scripts/FAQs.aspx?Id=3687"],
  ["National Consumer Helpline", "https://consumerhelpline.gov.in/"],
];

export function getLearningModule(slug) {
  return learningModules.find((module) => module.slug === slug);
}
