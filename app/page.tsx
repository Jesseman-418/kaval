import Link from "next/link";

/* ============================================================================
   Kaval — The trust layer for the internet
   Warm Editorial Intelligence. Built to the Million-Dollar Product Brief v1.0.
   Signal → Investigation → Evidence Graph → Judgement → Action.
============================================================================= */

/* ----------------------------------------------------------------------------
   Primitives
----------------------------------------------------------------------------- */
function Mark({ size = 34 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[9px] bg-ember"
      style={{
        width: size,
        height: size,
        boxShadow: "inset 0 -6px 18px rgba(127,42,36,0.28)",
      }}
      aria-label="Kaval"
    >
      <span
        className="font-display leading-none text-paper"
        style={{ fontSize: size * 0.76, transform: "translateY(0.06em)" }}
      >
        *
      </span>
    </span>
  );
}

function WatchDot({ label }: { label?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="watch-dot" aria-hidden />
      {label && <span>{label}</span>}
    </span>
  );
}

function Eyebrow({
  children,
  tone = "ember",
}: {
  children: React.ReactNode;
  tone?: "ember" | "sage" | "cream";
}) {
  const color =
    tone === "cream"
      ? "text-cream/60"
      : tone === "sage"
        ? "text-sage"
        : "text-ember-deep";
  return (
    <div className={`eyebrow ${color}`}>
      <span className="watch-dot" aria-hidden />
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Navigation
----------------------------------------------------------------------------- */
function Nav() {
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#surfaces", label: "Surfaces" },
    { href: "#evidence", label: "Evidence" },
    { href: "#vision", label: "Vision" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-7 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Mark size={30} />
          <span className="font-display text-[21px] tracking-tight text-ink">
            Kaval
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] text-body md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#access"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-4 py-2 text-[13px] text-ink backdrop-blur transition hover:border-ink/30"
        >
          Request access
        </a>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------------
   Hero — Concept A: the trust layer between noisy signals and clean action
----------------------------------------------------------------------------- */
const HERO_SIGNALS = [
  "WhatsApp forward",
  "Fake support page",
  "Suspicious domain",
  "Complaint cluster",
  "Signup anomaly",
  "Misinformation spike",
];

const HERO_ACTIONS = [
  "Personal verdict",
  "Family warning",
  "Review queue",
  "Security ticket",
  "Client brief",
  "Public report",
];

function TrustLayerVisual() {
  return (
    <div className="relative">
      {/* ambient ember glow behind the panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[40px] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 60% 40%, rgba(242,106,46,0.20) 0%, rgba(242,106,46,0) 70%)",
        }}
      />
      <div className="relative rounded-[26px] border border-hairline bg-paper p-5 shadow-[0_40px_90px_-40px_rgba(24,32,27,0.35)] md:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-caption">
            Kaval trust layer
          </span>
          <WatchDot label={<span className="font-mono text-[10.5px] text-sage">active</span>} />
        </div>

        {/* incoming signals */}
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-caption">
          Signals in
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {HERO_SIGNALS.map((s, i) => (
            <span
              key={s}
              className={`rounded-full border border-hairline bg-cream px-3 py-1.5 text-[12px] text-charcoal ${
                i % 2 === 0 ? "float-y" : "float-y-slow"
              }`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* the layer */}
        <div className="relative my-5 overflow-hidden rounded-2xl border border-ember/30 bg-gradient-to-br from-ember-pale/70 to-paper p-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(rgba(242,106,46,0.10) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-ink">
            <span className="font-display text-[17px] text-ember-deep">
              Investigation Brain
            </span>
            <span className="text-caption">·</span>
            <span className="font-display text-[17px] text-forest">
              Evidence Graph
            </span>
            <span className="text-caption">·</span>
            <span className="font-display text-[17px] text-ink">
              Risk + Confidence
            </span>
          </div>
          <div className="relative mt-2 font-mono text-[10.5px] text-body">
            extracts observables → forms hypotheses → gathers evidence → scores judgement
          </div>
        </div>

        {/* routed actions */}
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-caption">
          Action out
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {HERO_ACTIONS.map((a) => (
            <span
              key={a}
              className="rounded-full border border-forest/20 bg-mist px-3 py-1.5 text-[12px] text-forest"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-2 font-mono text-[10.5px] text-caption">
        <span>one system, many surfaces</span>
        <span>evidence-backed</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream grain">
      <Nav />
      {/* warm radial light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[680px] w-[1200px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(242,106,46,0.16) 0%, rgba(242,106,46,0) 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 pb-24 pt-36 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 md:pb-32 md:pt-44">
        {/* left — story */}
        <div className="max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper/50 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-body backdrop-blur">
            <span className="watch-dot" aria-hidden />
            Adaptive trust intelligence
          </div>

          <h1
            className="font-display text-ink"
            style={{
              fontSize: "clamp(52px, 9vw, 96px)",
              lineHeight: 0.97,
              letterSpacing: "-0.04em",
            }}
          >
            The trust layer
            <br />
            for the{" "}
            <span className="font-display-italic text-ember-deep">internet.</span>
          </h1>

          <p className="mt-7 max-w-lg text-[17px] leading-[1.6] text-body md:text-[18px]">
            Kaval investigates digital signals, connects evidence, and tells
            people, teams, and institutions what is real, what is risky, what
            matters, and what to do next.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#access"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-cream transition hover:bg-charcoal"
            >
              Explore Kaval
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#access"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/18 px-6 py-3.5 text-[14px] text-ink transition hover:border-ink/40 hover:bg-paper"
            >
              Request private access
            </a>
          </div>

          <div className="mt-9 font-mono text-[11px] uppercase tracking-[0.18em] text-caption">
            For people, teams, and public systems
          </div>
        </div>

        {/* right — trust layer visual */}
        <TrustLayerVisual />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 2 — The Trust Problem
----------------------------------------------------------------------------- */
const PROBLEM_OBJECTS = [
  "message",
  "video",
  "screenshot",
  "domain",
  "account",
  "data leak",
  "news claim",
  "public alert",
  "complaint",
];

function TrustProblem() {
  return (
    <section className="relative bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <div>
            <Eyebrow>The trust problem</Eyebrow>
            <h2
              className="mt-7 font-display text-ink"
              style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.02 }}
            >
              The internet has no
              <br />
              <span className="font-display-italic text-ember-deep">
                shared truth layer.
              </span>
            </h2>
            <div className="mt-8 max-w-md space-y-5 text-[17px] leading-[1.65] text-body">
              <p>
                Messages, videos, screenshots, domains, accounts, claims,
                brands, leaks, complaints, and public events now move faster
                than people or institutions can verify them.
              </p>
              <p>The problem is no longer access to information.</p>
              <p className="text-ink">
                The problem is knowing{" "}
                <span className="font-display-italic text-[19px]">
                  what to trust.
                </span>
              </p>
            </div>
          </div>

          {/* noise settling into a calm layer */}
          <div className="relative">
            <div className="flex flex-wrap gap-2.5">
              {PROBLEM_OBJECTS.map((o, i) => (
                <span
                  key={o}
                  className="rounded-lg border border-hairline bg-cream px-3 py-2 font-mono text-[11.5px] text-caption"
                  style={{ opacity: 1 - i * 0.045 }}
                >
                  {o}
                </span>
              ))}
            </div>
            <div className="my-6 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ember-deep">
              <span className="h-px flex-1 bg-ember/25" />
              <WatchDot label="Kaval separates noise from decision" />
              <span className="h-px flex-1 bg-ember/25" />
            </div>
            <div className="rounded-2xl border border-forest/15 bg-mist p-6">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-sage">
                Resolved
              </div>
              <p className="mt-2 text-[15px] leading-[1.55] text-forest">
                A single, evidence-backed judgement you can act on — and the
                noise you can safely ignore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 3 — Signal to Action System (the spine)
----------------------------------------------------------------------------- */
const SPINE = [
  {
    k: "Signal",
    d: "A message, link, media file, domain, account, post, complaint, anomaly, leak, or public event.",
  },
  {
    k: "Investigation",
    d: "Kaval extracts observables, forms hypotheses, chooses pivots, and gathers source-backed evidence.",
  },
  {
    k: "Evidence Graph",
    d: "Kaval connects domains, accounts, claims, pages, infrastructure, entities, incidents, and sources into a graph.",
  },
  {
    k: "Judgement",
    d: "Kaval scores confidence, risk, impact, affectedness, urgency, evidence quality, and actionability.",
  },
  {
    k: "Action",
    d: "Kaval routes the result into a verdict, brief, warning, ticket, review queue, report, or watch update.",
  },
];

function SignalToAction() {
  return (
    <section id="how" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Eyebrow>Signal to action</Eyebrow>
          <h2
            className="mt-7 font-display text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.02 }}
          >
            From any signal to{" "}
            <span className="font-display-italic text-ember-deep">
              trusted action.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-body">
            Kaval does not just monitor the internet. It investigates digital
            signals, follows the traces, checks evidence, scores confidence and
            risk, and routes the result into the right action.
          </p>
        </div>

        {/* the spine */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {SPINE.map((s, i) => (
            <div
              key={s.k}
              className="group relative flex flex-col rounded-2xl border border-hairline bg-paper p-6 transition hover:border-ember/40"
            >
              <div className="flex items-center gap-2 font-mono text-[10.5px] text-caption">
                <span className="text-ember">0{i + 1}</span>
                {i < SPINE.length - 1 && (
                  <span className="text-ember/40" aria-hidden>
                    →
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-[24px] leading-tight text-ink">
                {s.k}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-body">
                {s.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-caption">
          Signal → Investigation → Evidence Graph → Judgement → Action
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 4 — One Brain, Many Surfaces
----------------------------------------------------------------------------- */
const SURFACES = [
  {
    who: "Individuals",
    input: "Suspicious payment link",
    investigates: "Domain, sender, page behavior, scam patterns, official sources",
    action: "Clear verdict and next step",
  },
  {
    who: "Families",
    input: "Forwarded KYC message",
    investigates: "Link, sender, bank impersonation pattern, phishing feeds",
    action: "Family warning and safety instruction",
  },
  {
    who: "Teams",
    input: "Signup abuse spike",
    investigates: "Email patterns, IP clusters, ASNs, user agents, past incidents",
    action: "Security finding and ticket",
  },
  {
    who: "Organizations",
    input: "Fake refund support page",
    investigates: "Domain, phone, payment handle, complaints, official mismatch",
    action: "Incident candidate and review brief",
  },
  {
    who: "Public systems",
    input: "Misinformation wave",
    investigates: "Claim, spread, source credibility, contradictions, regional relevance",
    action: "Verified public brief",
  },
  {
    who: "Platforms & APIs",
    input: "Risky transaction link",
    investigates: "URL, domain, pattern, user context, threat feeds",
    action: "Embedded trust decision",
  },
];

function ManySurfaces() {
  return (
    <section id="surfaces" className="bg-mist py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Eyebrow tone="sage">One brain, many surfaces</Eyebrow>
          <h2
            className="mt-7 font-display text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.02 }}
          >
            One trust engine.{" "}
            <span className="font-display-italic text-forest">Many worlds.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-body">
            The same Kaval intelligence layer can protect a family, support a
            team, investigate brand abuse, route security signals, and help
            public systems respond to digital risk.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SURFACES.map((s) => (
            <div
              key={s.who}
              className="group flex flex-col rounded-2xl border border-forest/12 bg-paper p-6 transition hover:border-ember/40 hover:shadow-[0_24px_60px_-40px_rgba(33,76,58,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[22px] text-ink">
                  {s.who}
                </span>
                <span className="watch-dot" aria-hidden />
              </div>
              <dl className="mt-5 space-y-3 text-[13px]">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-caption">
                    Signal
                  </dt>
                  <dd className="mt-1 text-charcoal">{s.input}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-caption">
                    Kaval investigates
                  </dt>
                  <dd className="mt-1 leading-[1.5] text-body">
                    {s.investigates}
                  </dd>
                </div>
                <div className="rounded-lg border border-ember/20 bg-ember-pale/40 px-3 py-2">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember-deep">
                    Action routed
                  </dt>
                  <dd className="mt-1 text-ink">{s.action}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 5 — Product Ladder
----------------------------------------------------------------------------- */
const LADDER = [
  {
    n: "01",
    k: "Check",
    d: "Ask whether something is safe, real, official, suspicious, or risky.",
  },
  {
    n: "02",
    k: "Investigate",
    d: "Let Kaval follow the traces, gather evidence, and build a confidence-backed finding.",
  },
  {
    n: "03",
    k: "Watch",
    d: "Create ongoing coverage around a person, family, brand, company, city, market, system, or risk.",
  },
  {
    n: "04",
    k: "Brief",
    d: "Receive the judgement: what happened, why it matters, confidence, evidence, and next action.",
  },
];

function ProductLadder() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Eyebrow>The product ladder</Eyebrow>
          <h2
            className="mt-7 font-display text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.02 }}
          >
            Check. Investigate. Watch.{" "}
            <span className="font-display-italic text-ember-deep">Brief.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-body">
            Kaval can answer a single question, investigate a complex risk
            signal, keep watching what matters, and turn verified findings into
            clear action briefs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-hairline border-y border-hairline sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {LADDER.map((l, i) => (
            <div
              key={l.k}
              className={`px-6 py-8 lg:px-7 ${
                i !== 0 ? "lg:border-l lg:border-hairline" : ""
              }`}
            >
              <div className="font-mono text-[11px] text-ember">{l.n}</div>
              <h3 className="mt-4 font-display text-[34px] leading-none text-ink">
                {l.k}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.55] text-body">{l.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 6 — Evidence-First Trust (canonical brief card + evidence graph)
----------------------------------------------------------------------------- */
function BriefCard() {
  const evidence = [
    "Domain mismatch",
    "Same phone reused",
    "Payment handle mismatch",
    "Complaint post found",
    "URL reputation signal",
    "Archived page screenshot",
  ];
  return (
    <div className="rounded-3xl border border-hairline bg-paper p-7 shadow-[0_30px_80px_-50px_rgba(24,32,27,0.5)] md:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ember-deep">
          Kaval brief
        </span>
        <WatchDot label={<span className="font-mono text-[10.5px] text-sage">compiled</span>} />
      </div>

      <div className="mt-5 space-y-4">
        <Field label="Signal" value="Fake support page detected" />
        <Field
          label="Finding"
          value="Likely impersonation campaign targeting refund customers."
          display
        />
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-caption">
            Confidence
          </span>
          <span className="rounded-full border border-forest/25 bg-mist px-2.5 py-0.5 text-[12px] font-medium text-forest">
            High
          </span>
        </div>
        <Field
          label="Why it matters"
          value="The page uses your brand name, collects payments, and appears in customer complaint searches."
        />
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-caption">
            Evidence
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {evidence.map((e) => (
              <span
                key={e}
                className="rounded-md border border-hairline bg-cream px-2.5 py-1 font-mono text-[11px] text-charcoal"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-ember/25 bg-ember-pale/45 px-4 py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember-deep">
            Recommended action
          </span>
          <p className="mt-1 text-[14px] text-ink">
            Review, report domain, publish customer warning, watch related
            identifiers.
          </p>
        </div>
        <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-caption">
          <span className="uppercase tracking-[0.18em]">Route</span>
          <span className="text-ink">→ Organization · review queue</span>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  display,
}: {
  label: string;
  value: string;
  display?: boolean;
}) {
  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-caption">
        {label}
      </span>
      <p
        className={`mt-1 ${
          display
            ? "font-display text-[20px] leading-snug text-ink"
            : "text-[14px] leading-[1.55] text-body"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function EvidenceGraph() {
  // calm, minimal — not a police board
  return (
    <div className="rounded-3xl border border-hairline bg-cream p-6 md:p-7">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-caption">
          Evidence graph
        </span>
        <span className="font-mono text-[10.5px] text-caption">
          redaction = trust signal
        </span>
      </div>
      <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Evidence graph connecting a protected brand to scam infrastructure">
        <defs>
          <radialGradient id="finding" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8A3D" />
            <stop offset="100%" stopColor="#F26A2E" />
          </radialGradient>
        </defs>

        {/* edges */}
        <g stroke="#C9542A" strokeOpacity="0.4" strokeWidth="1.2" fill="none">
          <line className="edge-flow" x1="180" y1="120" x2="70" y2="50" />
          <line className="edge-flow" x1="180" y1="120" x2="60" y2="150" />
          <line className="edge-flow" x1="180" y1="120" x2="120" y2="210" />
          <line className="edge-flow" x1="180" y1="120" x2="300" y2="60" />
          <line className="edge-flow" x1="180" y1="120" x2="305" y2="160" />
          <line x1="300" y1="60" x2="305" y2="160" stroke="#52715C" strokeOpacity="0.4" />
        </g>

        {/* edge labels */}
        <g fill="#7A8278" fontSize="7.5" fontFamily="var(--font-jetbrains), monospace">
          <text x="112" y="78">domain mismatch</text>
          <text x="96" y="142">same phone</text>
          <text x="120" y="178">complaint</text>
          <text x="236" y="84">url reputation</text>
          <text x="232" y="150">supports</text>
        </g>

        {/* peripheral nodes */}
        <GNode x={70} y={50} label="refund-•••.com" tone="ember" />
        <GNode x={60} y={150} label="+91 ••••" tone="ember" />
        <GNode x={120} y={210} label="complaint post" tone="sage" />
        <GNode x={300} y={60} label="URL feed" tone="sage" />

        {/* finding node */}
        <circle cx="305" cy="160" r="22" fill="url(#finding)" />
        <text x="305" y="158" textAnchor="middle" fill="#FFF9EF" fontSize="8" fontFamily="var(--font-jetbrains), monospace">
          FINDING
        </text>
        <text x="305" y="168" textAnchor="middle" fill="#FFF9EF" fontSize="6.5" fontFamily="var(--font-jetbrains), monospace">
          fake support
        </text>

        {/* protected object — center */}
        <circle cx="180" cy="120" r="30" fill="#214C3A" />
        <text x="180" y="117" textAnchor="middle" fill="#DDE8D8" fontSize="8.5" fontFamily="var(--font-jetbrains), monospace">
          BRAND
        </text>
        <text x="180" y="128" textAnchor="middle" fill="#DDE8D8" fontSize="6.5" fontFamily="var(--font-jetbrains), monospace">
          protected
        </text>
      </svg>
    </div>
  );
}

function GNode({
  x,
  y,
  label,
  tone,
}: {
  x: number;
  y: number;
  label: string;
  tone: "ember" | "sage";
}) {
  const fill = tone === "ember" ? "#FFE2D1" : "#DDE8D8";
  const stroke = tone === "ember" ? "#F26A2E" : "#52715C";
  const text = tone === "ember" ? "#C9542A" : "#214C3A";
  return (
    <g>
      <circle cx={x} cy={y} r="15" fill={fill} stroke={stroke} strokeOpacity="0.55" />
      <text
        x={x}
        y={y + 28}
        textAnchor="middle"
        fill={text}
        fontSize="7.5"
        fontFamily="var(--font-jetbrains), monospace"
      >
        {label}
      </text>
    </g>
  );
}

function EvidenceFirst() {
  return (
    <section id="evidence" className="bg-cream py-28 md:py-36 grain">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Eyebrow>Evidence-first trust</Eyebrow>
          <h2
            className="mt-7 font-display text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.02 }}
          >
            Evidence,{" "}
            <span className="font-display-italic text-ember-deep">not vibes.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-body">
            Every Kaval finding is designed to be backed by sources, timestamps,
            confidence, provenance, visibility rules, and review gates when
            needed.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <BriefCard />
          <EvidenceGraph />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 7 — Use Case Matrix
----------------------------------------------------------------------------- */
const MATRIX = [
  {
    signal: "Suspicious bank message",
    investigate: "URL, sender, pattern, domain, phishing feeds",
    output: "Personal verdict + family warning",
  },
  {
    signal: "Fake support page",
    investigate: "Domain, phone, payment handle, complaints, official mismatch",
    output: "Brand incident candidate + review brief",
  },
  {
    signal: "Signup abuse spike",
    investigate: "Email patterns, IPs, ASNs, user agents, previous incidents",
    output: "Abuse finding + security ticket",
  },
  {
    signal: "Possible API key exposure",
    investigate: "Secret pattern, source page, spread, affected service",
    output: "Redacted urgent review + rotation action",
  },
  {
    signal: "Public misinformation wave",
    investigate: "Claim, source credibility, spread, contradictions, relevance",
    output: "Verified public brief + source trail",
  },
  {
    signal: "Customer complaint cluster",
    investigate: "Complaint theme, location, recurrence, public amplification",
    output: "Reputation insight + recommended response",
  },
];

function UseCaseMatrix() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Eyebrow>Across every surface</Eyebrow>
          <h2
            className="mt-7 font-display text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 60px)", lineHeight: 1.02 }}
          >
            Built for every place{" "}
            <span className="font-display-italic text-ember-deep">
              trust breaks.
            </span>
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-hairline">
          {/* header */}
          <div className="hidden grid-cols-[1fr_1.4fr_1.2fr] gap-6 border-b border-hairline bg-cream px-6 py-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-caption md:grid">
            <span>Signal</span>
            <span>Kaval investigates</span>
            <span>Output</span>
          </div>
          {MATRIX.map((m, i) => (
            <div
              key={m.signal}
              className={`grid grid-cols-1 gap-2 px-6 py-5 md:grid-cols-[1fr_1.4fr_1.2fr] md:gap-6 ${
                i !== MATRIX.length - 1 ? "border-b border-hairline" : ""
              } ${i % 2 ? "bg-paper" : "bg-cream/40"}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="watch-dot" aria-hidden />
                <span className="text-[14px] font-medium text-ink">
                  {m.signal}
                </span>
              </div>
              <div className="text-[13.5px] leading-[1.5] text-body md:pl-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-caption md:hidden">
                  Investigates ·{" "}
                </span>
                {m.investigate}
              </div>
              <div className="text-[13.5px] leading-[1.5] text-ember-deep">
                {m.output}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 8 — Action Routing
----------------------------------------------------------------------------- */
const ROUTES = [
  "Personal verdict",
  "Family warning",
  "Watchdesk incident",
  "Security ticket",
  "Company alert",
  "Weekly report",
  "Review queue",
  "Create / update watch",
  "Source quarantine",
  "Public brief",
  "API decision",
];

function ActionRouting() {
  return (
    <section className="bg-mist py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <Eyebrow tone="sage">Action routing</Eyebrow>
            <h2
              className="mt-7 font-display text-ink"
              style={{ fontSize: "clamp(38px, 5.5vw, 58px)", lineHeight: 1.02 }}
            >
              The right action for the{" "}
              <span className="font-display-italic text-forest">
                right context.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[16.5px] leading-[1.6] text-body">
              A personal risk becomes a clear verdict. A family risk becomes a
              warning. A brand risk enters review. A security signal becomes a
              ticket. A public signal becomes a brief or report.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-forest/20 bg-paper px-4 py-3">
              <span className="watch-dot" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest">
                Input: one verified finding
              </span>
            </div>
          </div>

          {/* routing lanes */}
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-sage">
              Output lanes
            </div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {ROUTES.map((r) => (
                <span
                  key={r}
                  className="group inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper px-4 py-2.5 text-[13px] text-charcoal transition hover:border-ember/40 hover:text-ink"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-ember/60 transition group-hover:bg-ember"
                    aria-hidden
                  />
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] leading-[1.6] text-caption">
              Each lane carries the finding, its confidence, and its evidence —
              so the action is always auditable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Section 9 — Platform Vision (the "huge company" moment)
----------------------------------------------------------------------------- */
function PlatformVision() {
  const inputs = [
    "Messages",
    "Media",
    "Domains",
    "Accounts",
    "Logs",
    "Public sources",
    "Complaints",
    "Claims",
  ];
  const engine = [
    "Investigation Brain",
    "Evidence Graph",
    "Watch Engine",
    "Quant Routing",
    "Review",
  ];
  const outputs = [
    "Verdicts",
    "Briefs",
    "Alerts",
    "Tickets",
    "Reports",
    "APIs",
    "Watches",
  ];
  return (
    <section id="vision" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36 grain grain-dark">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[1000px] -translate-x-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(242,106,46,0.22) 0%, rgba(242,106,46,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Eyebrow tone="cream">Platform vision</Eyebrow>
          <h2
            className="mt-7 font-display text-cream"
            style={{ fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.02 }}
          >
            A trust layer that can{" "}
            <span className="font-display-italic text-ember-soft">
              sit anywhere.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-cream/70">
            Kaval starts as a product people can use directly. Over time, the
            same trust layer can be embedded into messaging, browsers, fintech
            flows, support systems, marketplaces, public safety workflows, and
            enterprise tools.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          <VisionBand label="Inputs" items={inputs} tone="muted" />
          <div className="flex justify-center text-cream/30" aria-hidden>
            ↓
          </div>
          <VisionBand label="Kaval trust layer" items={engine} tone="ember" />
          <div className="flex justify-center text-cream/30" aria-hidden>
            ↓
          </div>
          <VisionBand label="Outputs" items={outputs} tone="sage" />
        </div>
      </div>
    </section>
  );
}

function VisionBand({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: "muted" | "ember" | "sage";
}) {
  const wrap =
    tone === "ember"
      ? "border-ember/40 bg-gradient-to-r from-ember-deep/25 via-ember/10 to-ember-deep/25"
      : "border-cream/10 bg-cream/[0.03]";
  const chip =
    tone === "ember"
      ? "border-ember/40 bg-ink/40 text-ember-soft"
      : tone === "sage"
        ? "border-sage/40 bg-ink/40 text-sage-pale"
        : "border-cream/15 bg-ink/40 text-cream/75";
  return (
    <div className={`rounded-2xl border px-6 py-5 ${wrap}`}>
      <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-cream/45">
        {label}
      </div>
      <div className="flex flex-wrap gap-2.5">
        {items.map((it) => (
          <span
            key={it}
            className={`rounded-full border px-3.5 py-1.5 text-[12.5px] ${chip}`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Section 10 — Final CTA
----------------------------------------------------------------------------- */
function FinalCTA() {
  return (
    <section
      id="access"
      className="relative overflow-hidden bg-cream py-28 md:py-40 grain"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 65% at 50% 45%, rgba(242,106,46,0.16) 0%, rgba(242,106,46,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[920px] px-6 text-center md:px-10">
        <div className="mb-9 flex justify-center">
          <Mark size={52} />
        </div>
        <h2
          className="font-display text-ink"
          style={{ fontSize: "clamp(44px, 7vw, 84px)", lineHeight: 1, letterSpacing: "-0.03em" }}
        >
          Put trust back between
          <br />
          <span className="font-display-italic text-ember-deep">
            you and the internet.
          </span>
        </h2>
        <p className="mx-auto mt-7 max-w-md text-[17px] leading-[1.6] text-body">
          Start with a signal. Build toward a trust layer.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@kaval.chat?subject=Kaval%20private%20access"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[14px] font-medium text-cream transition hover:bg-charcoal"
          >
            Request private access
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/18 px-7 py-4 text-[14px] text-ink transition hover:border-ink/40 hover:bg-paper"
          >
            Explore Kaval
          </a>
        </div>
        <div className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-caption">
          <WatchDot label="The trust layer for the internet" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Footer
----------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-3">
          <Mark size={28} />
          <div>
            <div className="font-display text-[19px] text-ink">Kaval</div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-caption">
              The trust layer for the internet
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-body">
          <a href="#how" className="hover:text-ink">How it works</a>
          <a href="#surfaces" className="hover:text-ink">Surfaces</a>
          <a href="#evidence" className="hover:text-ink">Evidence</a>
          <a href="#vision" className="hover:text-ink">Vision</a>
          <a href="#access" className="hover:text-ink">Request access</a>
        </nav>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------------------
   Page
----------------------------------------------------------------------------- */
export default function Home() {
  return (
    <main>
      <Hero />
      <TrustProblem />
      <SignalToAction />
      <ManySurfaces />
      <ProductLadder />
      <EvidenceFirst />
      <UseCaseMatrix />
      <ActionRouting />
      <PlatformVision />
      <FinalCTA />
      <Footer />
    </main>
  );
}
