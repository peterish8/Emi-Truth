import { useEffect, useMemo, useRef, useState } from "react";
import {
  calculateEmi,
  readInputsFromUrl,
  toShareUrl,
} from "./calculator";
import {
  getLearningModule,
  learningModules,
  moduleQuizzes,
  officialSources,
} from "./learnData";

const formatInr = (value, maximumFractionDigits = 0) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits,
  }).format(Number.isFinite(value) ? value : 0);

const fields = [
  { key: "price", label: "Product price", hint: "Listed price", prefix: "₹" },
  {
    key: "cashDiscount",
    label: "Cash discount",
    hint: "Discount lost with EMI",
    prefix: "₹",
  },
  {
    key: "emiDiscount",
    label: "EMI discount",
    hint: "Instant card discount",
    prefix: "₹",
  },
  {
    key: "annualRate",
    label: "Annual interest",
    hint: "Bank's reducing rate",
    suffix: "%",
    step: "0.1",
  },
  {
    key: "processingFee",
    label: "Processing fee",
    hint: "Before GST",
    prefix: "₹",
  },
  {
    key: "gstRate",
    label: "GST rate",
    hint: "On interest and fees",
    suffix: "%",
    step: "0.1",
  },
];

function Header({ learn = false }) {
  return (
    <div className="header-bar">
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="EMI Truth home">
        <img src="/logo.jpeg" alt="EMI Truth" className="site-logo" />
        <span>EMI Truth</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/#calculator">Calculator</a>
        <a className={learn ? "active-link" : ""} href="/learn">
          Learn
        </a>
        <a href="/#faq">FAQ</a>
      </nav>
      <a className="method-link" href={learn ? "/#calculator" : "/learn"}>
        {learn ? "Open calculator" : "Learn EMI basics"} <Arrow />
      </a>
    </header>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
}

function NumberInput({ field, value, onChange }) {
  return (
    <label className="input-block">
      <span className="input-label">{field.label}</span>
      <span className="input-hint">{field.hint}</span>
      <span className="input-shell">
        {field.prefix ? <span>{field.prefix}</span> : null}
        <input
          type="number"
          min="0"
          step={field.step || "1"}
          value={value}
          onChange={(event) => onChange(field.key, event.target.value)}
          inputMode="decimal"
          aria-label={field.label}
        />
        {field.suffix ? <span>{field.suffix}</span> : null}
      </span>
    </label>
  );
}

function Verdict({ result }) {
  const costsMore = result.difference >= 0;
  return (
    <div className="verdict">
      <span className="figure-label">RESULT / LIVE</span>
      <p className="verdict-prefix">
        {costsMore ? "EMI costs" : "EMI saves"}
      </p>
      <strong className={costsMore ? "negative" : "positive"}>
        {formatInr(Math.abs(result.difference))}
      </strong>
      <p className="verdict-suffix">
        {costsMore ? "more than paying now." : "compared with paying now."}
      </p>
    </div>
  );
}

function ComparisonChart({ result }) {
  const max = Math.max(result.cashCost, result.emiCost, 1);
  return (
    <div className="comparison-chart" aria-label="Cash and EMI cost comparison">
      <div className="chart-row">
        <div>
          <span>PAY NOW</span>
          <strong>{formatInr(result.cashCost)}</strong>
        </div>
        <div className="track">
          <span
            className="bar cash"
            style={{ width: `${(result.cashCost / max) * 100}%` }}
          />
        </div>
      </div>
      <div className="chart-row">
        <div>
          <span>EMI TOTAL</span>
          <strong>{formatInr(result.emiCost)}</strong>
        </div>
        <div className="track">
          <span
            className="bar emi"
            style={{ width: `${(result.emiCost / max) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function CostComposition({ result }) {
  const items = [
    ["Financed", result.financedAmount, "principal"],
    ["Interest", result.totalInterest, "interest"],
    ["GST", result.totalGstOnInterest + result.feeGst, "gst"],
    ["Fee", result.normalized.processingFee, "fee"],
  ];
  const total = items.reduce((sum, item) => sum + item[1], 0) || 1;
  let cursor = 0;
  const stops = items
    .map(([, value, className]) => {
      const start = (cursor / total) * 100;
      cursor += value;
      const end = (cursor / total) * 100;
      return `var(--${className}) ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="composition">
      <div className="donut" style={{ "--segments": stops }}>
        <div>
          <span>TOTAL</span>
          <strong>{formatInr(result.emiCost)}</strong>
        </div>
      </div>
      <div className="legend">
        {items.map(([label, value, className]) => (
          <div key={label}>
            <span>
              <i className={className} /> {label}
            </span>
            <strong>{formatInr(value)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  const [inputs, setInputs] = useState(readInputsFromUrl);
  const [copied, setCopied] = useState(false);
  const result = useMemo(() => calculateEmi(inputs), [inputs]);

  const updateInput = (key, value) => {
    setInputs((current) => ({ ...current, [key]: value }));
    setCopied(false);
  };

  const share = async () => {
    const url = toShareUrl(result.normalized);
    await navigator.clipboard.writeText(url);
    window.history.replaceState({}, "", url);
    setCopied(true);
  };

  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <div className="landing-view">
          <section className="hero">
          <div className="hero-index">
            <span>01</span>
            <span>CALCULATOR</span>
          </div>
          <div className="hero-copy" data-reveal>
            <h1>
              Is it actually
              <br />
              <em>no-cost?</em>
            </h1>
            <p>
              Type the price, pick the plan. We show you the real total: interest, GST, processing fee and all. So you know exactly what you pay before you tap Buy.
            </p>
          </div>
          </section>

          <section className="calculator-section" id="calculator">
          <div className="calculator-form">
            <div className="section-topline">
              <span className="figure-label">INPUT / OFFER DETAILS</span>
              <span>Calculated on your device.</span>
            </div>
            <div className="input-grid">
              {fields.slice(0, 3).map((field) => (
                <NumberInput
                  field={field}
                  key={field.key}
                  value={inputs[field.key]}
                  onChange={updateInput}
                />
              ))}
            </div>
            <div className="tenure-row">
              <div>
                <span className="input-label">Tenure</span>
                <span className="input-hint">Monthly payments</span>
              </div>
              <div className="tenure-options" aria-label="EMI tenure">
                {[3, 6, 9, 12, 18, 24].map((month) => (
                  <button
                    className={Number(inputs.tenure) === month ? "active" : ""}
                    key={month}
                    onClick={() => updateInput("tenure", month)}
                    aria-pressed={Number(inputs.tenure) === month}
                  >
                    {month}M
                  </button>
                ))}
              </div>
            </div>
            <div className="input-grid lower-inputs">
              {fields.slice(3).map((field) => (
                <NumberInput
                  field={field}
                  key={field.key}
                  value={inputs[field.key]}
                  onChange={updateInput}
                />
              ))}
            </div>
          </div>

          <div className="result-panel" aria-live="polite">
            <Verdict result={result} />
            <div className="monthly">
              <span>BASE MONTHLY EMI</span>
              <strong>{formatInr(result.monthlyEmi)}</strong>
              <small>+ GST on each month’s interest</small>
            </div>
            <ComparisonChart result={result} />
            <button className="share-button" onClick={share}>
              {copied ? "Result link copied" : "Share this result"} <Arrow />
            </button>
          </div>
          </section>
        </div>

        <section className="free-resource" data-reveal>
          <div className="section-rail">
            <span>FREE</span>
            <span>COMIC BOOK</span>
          </div>
          <div className="resource-content">
            <a className="book-cover-link" href="/comics/the-no-cost-trap">
              <img
                src="/books/the-no-cost-trap/cover.png"
                alt="The No-Cost Trap, a Mira Money Story comic cover"
              />
            </a>
            <div className="resource-copy">
              <span className="figure-label">FREE RESOURCE / 5 PAGES</span>
              <h2>Learn it as a comic.</h2>
              <p>
                Follow Mira through a real checkout decision. Four illustrated
                pages explain hidden interest, GST, fees and the one comparison
                that reveals the truth.
              </p>
              <div className="resource-actions">
                <a href="/comics/the-no-cost-trap">
                  Read free <Arrow />
                </a>
                <a
                  href="/books/the-no-cost-trap/the-no-cost-trap.pdf"
                  download
                >
                  Download PDF <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="analysis-section">
          <div className="section-rail">
            <span>02</span>
            <span>THE TRUTH</span>
          </div>
          <div className="analysis-content">
            <div className="analysis-heading" data-reveal>
              <div>
                <h2>What you actually pay.</h2>
              </div>
              <p>The seller covers the interest but that is where it stops. GST, a processing fee and the cash discount you gave up all quietly push the total higher.</p>
            </div>
            <CostComposition result={result} />
            <div className="truth-grid" data-reveal-group>
              <article>
                <h3>Interest</h3>
                <p>The bank is still giving you a loan. The seller might cover the interest on "no-cost" offers, but only up to a point. Anything beyond that limit comes out of your pocket.</p>
              </article>
              <article>
                <h3>GST on interest &amp; fee</h3>
                <p>Whatever interest you pay has 18% GST on top of it. Same with the processing fee. The seller's "no-cost" promise almost never covers this part, so it lands on you quietly.</p>
              </article>
              <article>
                <h3>Processing fee</h3>
                <p>The bank charges a small fee just to set up the EMI. The amount varies by lender, typically a few hundred rupees but sometimes more. It gets added to your first instalment and most people never notice it.</p>
              </article>
              <article>
                <h3>Lost cash discount</h3>
                <p>If you paid today in full, you could probably get a better price. A bank offer, a coupon, a deal. When you pick EMI you give that up. That gap is money you paid extra.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="method-section" id="method">
          <div className="section-rail">
            <span>03</span>
            <span>THE METHOD</span>
          </div>
          <div className="method-content">
            <div className="method-intro" data-reveal>
              <h2>
                Simple math.
                <br />
                No hidden logic.
              </h2>
              <p>
                We calculate a reducing-balance loan, then add GST to each
                month’s interest and GST to the processing fee.
              </p>
            </div>
            <div className="formula" data-reveal style={{ transitionDelay: "100ms" }}>
              <span>MONTHLY EMI</span>
              <code>
                P × r × (1 + r)<sup>n</sup>
                <br />
                ─────────────────
                <br />
                (1 + r)<sup>n</sup> − 1
              </code>
              <dl>
                <div>
                  <dt>P</dt>
                  <dd>Price minus EMI discount</dd>
                </div>
                <div>
                  <dt>r</dt>
                  <dd>Annual rate % ÷ 1200 (monthly decimal)</dd>
                </div>
                <div>
                  <dt>n</dt>
                  <dd>Number of monthly payments</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-rail">
            <span>04</span>
            <span>FAQ</span>
          </div>
          <div className="faq-content">
            <h2>Questions worth asking before checkout.</h2>
            <div className="faq-list" data-reveal-group>
              <details>
                <summary>Is no-cost EMI actually free?</summary>
                <p>
                  Usually not completely. The interest may be offset by an
                  upfront discount, but GST on interest, processing fees and
                  lost cash discounts can make EMI more expensive.
                </p>
              </details>
              <details>
                <summary>Why is GST charged every month?</summary>
                <p>
                  GST applies to the interest charged by the bank. Since the
                  interest portion changes each month, the GST amount also
                  changes.
                </p>
              </details>
              <details>
                <summary>Does this match every bank statement?</summary>
                <p>
                  It is an estimate based on the values you enter. Banks may use
                  different rounding, billing dates, foreclosure charges or
                  additional taxes. Verify the final offer terms.
                </p>
              </details>
              <details>
                <summary>Do you store my purchase information?</summary>
                <p>
                  No. The calculation runs in your browser. Sharing creates a
                  URL containing only the numbers entered into the calculator.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter tagline="Know the cost before the commitment." />
    </>
  );
}

function SiteFooter({ tagline }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);

  return (
    <footer className="site-footer" ref={ref}>
      <div className="footer-inner">
        <div className="footer-col footer-col-brand" data-reveal style={{ transitionDelay: "0ms" }}>
          <a href="/" className="footer-logo-link" aria-label="EMI Truth home">
            <img src="/logo.jpeg" alt="EMI Truth" className="footer-logo-img" />
          </a>
          <p className="footer-tagline">{tagline}</p>
          <span className="footer-sub">Free. No login. No catch.</span>
        </div>

        <div className="footer-col footer-col-nav" data-reveal style={{ transitionDelay: "100ms" }}>
          <p className="footer-col-head">Explore</p>
          <a href="/#calculator" className="footer-link">EMI Calculator</a>
          <a href="/learn/what-is-emi" className="footer-link">Learn EMI</a>
          <a href="/comics/the-no-cost-trap" className="footer-link">Comics</a>
        </div>

        <div className="footer-col footer-col-disclaimer" data-reveal style={{ transitionDelay: "200ms" }}>
          <p className="footer-col-head">Fine print</p>
          <p className="footer-disclaimer-text">
            This is a free educational tool. Numbers are estimates only. Always
            read your lender's key fact statement and check the final checkout
            amount before paying.
          </p>
        </div>
      </div>

      <div className="footer-bottom" data-reveal style={{ transitionDelay: "300ms" }}>
        <div className="footer-inner footer-bottom-inner">
          <span>© {new Date().getFullYear()} EMI Truth</span>
          <span>Not financial advice</span>
          <span>Made in India</span>
        </div>
      </div>
    </footer>
  );
}

function AdSlot({ side = false, reader = false }) {
  if (reader) {
    return (
      <aside className="ad-slot-reader">
        {/* 300×600 Half Page — swap for AdSense <ins> when publisher ID is ready */}
        <div className="ad-unit ad-unit-halfpage">
          <span>ADVERTISEMENT</span>
          <p>300 × 600</p>
        </div>
        {/* 300×250 Medium Rectangle */}
        <div className="ad-unit ad-unit-mrec">
          <span>ADVERTISEMENT</span>
          <p>300 × 250</p>
        </div>
      </aside>
    );
  }
  return (
    <aside className={side ? "ad-slot ad-slot-side" : "ad-slot"}>
      <span>ADVERTISEMENT</span>
      <p>Reserved for a relevant, non-intrusive ad.</p>
    </aside>
  );
}

function LearnPage() {
  return (
    <>
      <div id="top" />
      <Header learn />
      <main className="learn-page">
        <section className="learn-hero">
          <div className="learn-rail">
            <span>FREE GUIDE</span>
            <span>8 MODULES</span>
          </div>
          <div data-reveal>
            <h1>
              Money,
              <br />
              without <em>traps.</em>
            </h1>
            <p>
              A free consumer academy for understanding EMI, GST, credit,
              checkout tricks and your complaint options.
            </p>
          </div>
        </section>

        <section className="learn-layout">
          <div className="lesson-list" data-reveal-group>
            {learningModules.map((module) => (
              <article className="lesson module-card" key={module.slug}>
                <div className="lesson-number">{module.number}</div>
                <div className="lesson-body">
                  <span className="module-time">{module.readTime} READ</span>
                  <h2>{module.title}</h2>
                  <p className="lesson-summary">{module.short}</p>
                  <a className="module-open" href={`/learn/${module.slug}`}>
                    Start module <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="learn-side">
            <nav className="chapter-nav" aria-label="Lesson chapters">
              <span>ON THIS PAGE</span>
              {learningModules.map((module) => (
                <a href={`/learn/${module.slug}`} key={module.slug}>
                  <b>{module.number}</b> {module.title}
                </a>
              ))}
            </nav>
            <a className="comic-promo" href="/comics/the-no-cost-trap" data-reveal>
              <span>READ AS A COMIC</span>
              <strong>The no-cost trap</strong>
              <Arrow />
            </a>
            <AdSlot side />
          </div>
        </section>

        <section className="learn-cta" data-reveal>
          <div>
            <span>READY TO CHECK AN OFFER?</span>
            <h2>Turn the lesson into a real number.</h2>
          </div>
          <a href="/#calculator">
            Open the calculator <Arrow />
          </a>
        </section>
        <AdSlot />
      </main>
      <SiteFooter tagline="Free financial clarity, without the jargon." />
    </>
  );
}

function ModulePage({ module }) {
  const index = learningModules.findIndex((item) => item.slug === module.slug);
  const next = learningModules[index + 1] || learningModules[0];

  return (
    <>
      <div id="top" />
      <Header learn />
      <main className="module-page">
        <section className="module-hero">
          <div className="module-hero-index">
            <span>MODULE {module.number}</span>
            <span>{module.readTime}</span>
          </div>
          <div className="module-hero-copy" data-reveal>
            <a href="/learn">← All modules</a>
            <h1>{module.title}</h1>
            <p>{module.short}</p>
          </div>
        </section>

        <div className="module-layout">
          <article className="module-content">

            {module.prerequisites ? (
              <section className="module-prerequisites" data-reveal>
                <span className="figure-label">BEFORE YOU START</span>
                <ul>
                  {module.prerequisites.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {module.keyTerms ? (
              <section className="module-key-terms">
                <div className="key-terms-heading">
                  <span className="figure-label">KEY TERMS / PLAIN LANGUAGE</span>
                  <p>These words appear in this module. Read them once before continuing.</p>
                </div>
                <div className="key-terms-grid" data-reveal-group>
                  {module.keyTerms.map(({ term, definition }) => (
                    <article className="term-card" key={term}>
                      <strong>{term}</strong>
                      <p>{definition}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {module.slug === "no-cost-emi" ? (
              <a className="module-comic-banner" href="/comics/the-no-cost-trap" data-reveal>
                <span>VISUAL STORY</span>
                <strong>Read "The no-cost trap" with Mira</strong>
                <Arrow />
              </a>
            ) : null}

            {module.sections.map((section, sectionIndex) => (
              <section className="topic-section" key={section.title} data-reveal>
                <div className="topic-number">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </div>
                <div className="topic-body">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.visual ? (
                    <figure className="lesson-visual">
                      <img src={section.visual.src} alt={section.visual.alt} loading="lazy" decoding="async" />
                      <figcaption>
                        <span>VISUAL EXPLAINER</span>
                        {section.visual.caption}
                      </figcaption>
                    </figure>
                  ) : null}
                  {section.points ? (
                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.example ? (
                    <div className="decision-box">
                      <span>{section.example.label}</span>
                      <strong>{section.example.text}</strong>
                    </div>
                  ) : null}
                  {section.links ? (
                    <div className="official-links">
                      {section.links.map(([label, href]) => (
                        <a href={href} target="_blank" rel="noreferrer" key={href}>
                          {label} <Arrow />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>
            ))}

            {module.analogy ? (
              <section className="module-analogy" data-reveal>
                <div className="analogy-label">
                  <span className="figure-label">ANALOGY</span>
                </div>
                <div className="analogy-body">
                  <h2>{module.analogy.heading}</h2>
                  <p>{module.analogy.body}</p>
                </div>
              </section>
            ) : null}

            {module.summary ? (
              <section className="module-summary-block" data-reveal>
                <div className="summary-heading">
                  <span className="figure-label">MODULE SUMMARY</span>
                  <h2>{module.summary.heading}</h2>
                  <p className="summary-body">{module.summary.body}</p>
                </div>
                <div className="summary-pointers">
                  <span className="figure-label">WHAT TO REMEMBER / KEY DECISIONS</span>
                  <ul>
                    {module.summary.pointers.map((pointer) => (
                      <li key={pointer}>{pointer}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : null}

            <section className="module-sources" data-reveal>
              <span>OFFICIAL REFERENCES</span>
              <p>
                Rules and processes can change. Verify current terms with the
                lender and the relevant official authority.
              </p>
              <div>
                {officialSources.map(([label, href]) => (
                  <a href={href} target="_blank" rel="noreferrer" key={href}>
                    {label} <Arrow />
                  </a>
                ))}
              </div>
            </section>
            <ModuleQuiz
              questions={moduleQuizzes[module.slug]}
              moduleTitle={module.title}
              next={next}
            />
          </article>

          <aside className="module-sidebar">
            <div className="module-progress">
              <span>ACADEMY</span>
              {learningModules.map((item) => (
                <a
                  className={item.slug === module.slug ? "current" : ""}
                  href={`/learn/${item.slug}`}
                  key={item.slug}
                >
                  <b>{item.number}</b> {item.title}
                </a>
              ))}
            </div>
            <AdSlot side />
          </aside>
        </div>

        <section className="next-module" data-reveal>
          <div>
            <span>NEXT MODULE / {next.number}</span>
            <h2>{next.title}</h2>
          </div>
          <a href={`/learn/${next.slug}`}>
            Continue <Arrow />
          </a>
        </section>
        <AdSlot />
      </main>
      <SiteFooter tagline="Know the cost. Keep the evidence." />
    </>
  );
}

function ModuleQuiz({ questions, moduleTitle, next }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0,
  );
  const complete = questions.every((_, index) => answers[index] !== undefined);

  const choose = (questionIndex, optionIndex) => {
    if (submitted) return;
    setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }));
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="module-quiz">
      <div className="quiz-heading">
        <span>EXERCISES / APPLY THE LESSON</span>
        <h2>Check what you understood.</h2>
        <p>
          Three practical questions from {moduleTitle}. Select one answer for
          each question, then check your reasoning.
        </p>
      </div>

      <div className="quiz-questions">
        {questions.map((question, questionIndex) => (
          <fieldset className="quiz-question" key={question.question}>
            <legend>
              <span>{String(questionIndex + 1).padStart(2, "0")}</span>
              {question.question}
            </legend>
            <div className="quiz-options">
              {question.options.map((option, optionIndex) => {
                const selected = answers[questionIndex] === optionIndex;
                const correct = question.answer === optionIndex;
                const state = submitted
                  ? correct
                    ? "correct"
                    : selected
                      ? "incorrect"
                      : ""
                  : selected
                    ? "selected"
                    : "";
                return (
                  <button
                    className={`quiz-option ${state}`}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(questionIndex, optionIndex)}
                    key={option}
                  >
                    <span>{String.fromCharCode(65 + optionIndex)}</span>
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted ? (
              <div
                className={`quiz-explanation ${
                  answers[questionIndex] === question.answer ? "right" : "wrong"
                }`}
              >
                <strong>
                  {answers[questionIndex] === question.answer
                    ? "Correct."
                    : "Not quite."}
                </strong>{" "}
                {question.explanation}
              </div>
            ) : null}
          </fieldset>
        ))}
      </div>

      <div className="quiz-actions">
        {submitted ? (
          <>
            <div className="quiz-score">
              <span>YOUR SCORE</span>
              <strong>
                {score} / {questions.length}
              </strong>
            </div>
            <button type="button" className="quiz-retry" onClick={retry}>
              Try again
            </button>
            <a href={`/learn/${next.slug}`}>
              Next module <Arrow />
            </a>
          </>
        ) : (
          <button
            type="button"
            className="quiz-submit"
            disabled={!complete}
            onClick={() => setSubmitted(true)}
          >
            {complete ? "Check answers" : "Answer all questions"}
            <Arrow />
          </button>
        )}
      </div>
    </section>
  );
}

function ComicPage() {
  const pages = [
    ["cover.png", "The No-Cost Trap comic cover."],
    ["page-01.png", "Mira pauses a no-cost EMI checkout and decides to compare the full price."],
    ["page-02.png", "Mira calculates cash price, EMI principal, GST, fees and total EMI."],
    ["page-03.png", "Mira asks the seller for complete offer terms."],
    ["page-04.png", "Mira teaches the three-number EMI decision checklist."],
  ];
  const glossary = [
    ["Principal", "The amount you actually borrow or finance."],
    ["Interest", "The lender’s charge for letting you repay over time."],
    ["GST", "Tax that can apply to EMI interest and service fees."],
    ["Processing fee", "A one-time charge for creating or converting the EMI."],
    ["Cash price", "The best final price if you pay immediately."],
    ["Total EMI", "Every instalment, interest, tax and fee added together."],
  ];
  const [pageIndex, setPageIndex] = useState(0);
  const [animPhase, setAnimPhase] = useState("idle");
  const [pendingPage, setPendingPage] = useState(null);
  const maxPage = pages.length - 1;
  const visiblePages = pages.slice(pageIndex, pageIndex + 2);

  const turnPage = (nextPage) => {
    if (nextPage < 0 || nextPage > maxPage || animPhase !== "idle") return;
    const dir = nextPage > pageIndex ? "next" : "prev";
    setPendingPage(nextPage);
    setAnimPhase(`exit-${dir}`);
  };

  const handleAnimEnd = () => {
    setPageIndex(pendingPage);
    setAnimPhase("idle");
    setPendingPage(null);
  };

  const flipIndex = animPhase.endsWith("next")
    ? Math.min(1, visiblePages.length - 1)
    : 0;
  const pageFlipClass = (i) =>
    animPhase.startsWith("exit") && i === flipIndex ? ` flip-${animPhase}` : "";

  return (
    <>
      <div id="top" />
      <Header learn />
      <main className="comic-page">
        <section className="comic-hero">
          <div className="comic-rail">
            <span>BOOK / 01</span>
            <span>4 PAGES</span>
          </div>
          <div className="comic-hero-copy" data-reveal>
            <a href="/learn/no-cost-emi">← Read the lesson</a>
            <h1>
              The no-cost
              <br />
              <em>trap.</em>
            </h1>
            <p>
              A portrait comic book about the difference between a checkout
              promise and the money that actually leaves your pocket.
            </p>
            <a
              className="comic-download"
              href="/books/the-no-cost-trap/the-no-cost-trap.pdf"
              download
            >
              Download the book <Arrow />
            </a>
          </div>
        </section>

        <section className="comic-prerequisites" data-reveal>
          <div className="prerequisite-heading">
            <span>BEFORE YOU READ / 60 SECONDS</span>
            <h2>Six words make the story clear.</h2>
            <p>
              You do not need financial knowledge. Keep these simple meanings
              in mind while Mira compares the offer.
            </p>
          </div>
          <div className="glossary-grid" data-reveal-group>
            {glossary.map(([term, definition]) => (
              <article key={term}>
                <strong>{term}</strong>
                <p>{definition}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="book-reader">
          <div className="reader-layout">
            <div className="reader-main">
              <div className="reader-topline">
                <span>THE NO-COST TRAP / ONLINE READER</span>
                <span>
                  {pageIndex + 1}–{Math.min(pageIndex + 2, pages.length)} / {pages.length}
                </span>
              </div>
              <div className="book-spread">
                <button
                  className="spread-nav spread-nav-prev"
                  onClick={() => turnPage(pageIndex - 1)}
                  disabled={pageIndex === 0}
                  aria-label="Previous pages"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 19l-7-7 7-7"/></svg>
                </button>
                {visiblePages.map(([file, alt], index) => (
                  <article
                    className={`reader-page${pageFlipClass(index)}`}
                    onAnimationEnd={index === flipIndex && animPhase !== "idle" ? handleAnimEnd : undefined}
                    key={file}
                  >
                    <img src={`/books/the-no-cost-trap/${file}`} alt={alt} loading="lazy" decoding="async" />
                    <span>
                      {file === "cover.png"
                        ? "COVER"
                        : `PAGE ${String(pageIndex + index).padStart(2, "0")}`}
                    </span>
                  </article>
                ))}
                {visiblePages.length === 1 ? <div className="reader-end">END</div> : null}
                <button
                  className="spread-nav spread-nav-next"
                  onClick={() => turnPage(pageIndex + 1)}
                  disabled={pageIndex === maxPage}
                  aria-label="Next pages"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
              <div className="reader-controls">
                <div className="reader-progress" aria-label="Comic reading progress">
                  {pages.map(([, alt], index) => (
                    <button
                      aria-label={`Open ${alt}`}
                      className={index === pageIndex ? "active" : ""}
                      onClick={() => turnPage(index)}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="reader-ad-panel">
              <AdSlot reader />
            </div>
          </div>
        </section>

        <section className="comic-takeaway" data-reveal>
          <div>
            <span>THE TAKEAWAY</span>
            <h2>Compare totals, not promises.</h2>
            <p>
              A no-cost EMI may still include GST, fees and a lost cash
              discount. Put the exact offer into EMI Truth before checkout.
            </p>
          </div>
          <a href="/#calculator">
            Check an offer <Arrow />
          </a>
        </section>
        <AdSlot />
      </main>
      <SiteFooter tagline="Small stories. Better money decisions." />
    </>
  );
}

function App() {
  const path = window.location.pathname;

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal], [data-reveal-group]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);
  const isComic = path === "/comics/the-no-cost-trap";
  const moduleSlug = path.startsWith("/learn/") ? path.split("/")[2] : "";
  const module = moduleSlug ? getLearningModule(moduleSlug) : null;
  const isLearn = path.startsWith("/learn");
  document.title = isComic
    ? "The No-Cost Trap — EMI Truth Comic"
    : module
    ? `${module.title} — EMI Truth`
    : isLearn
      ? "Consumer EMI Academy — EMI Truth"
    : "EMI Truth — True No-Cost EMI Calculator";

  if (isComic) return <ComicPage />;
  if (module) return <ModulePage module={module} />;
  if (isLearn) return <LearnPage />;
  return <HomePage />;
}

export default App;
