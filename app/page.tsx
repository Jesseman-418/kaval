import Link from "next/link";

/* ----------------------------------------------------------------------------
   Brand mark
----------------------------------------------------------------------------- */
function Mark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-[10px] bg-orange shadow-[inset_0_-8px_24px_rgba(0,0,0,0.18)]"
      style={{ width: size, height: size }}
      aria-label="Kaval"
    >
      <span
        className="font-display text-white leading-none"
        style={{ fontSize: size * 0.78, transform: "translateY(0.08em)" }}
      >
        *
      </span>
    </span>
  );
}

/* ----------------------------------------------------------------------------
   Top nav
----------------------------------------------------------------------------- */
function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link href="/" className="flex items-center gap-3">
          <Mark size={32} />
          <span className="font-display text-[22px] tracking-wide text-cream">
            Kaval
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-[13px] text-cream/70 md:flex">
          <a href="#product" className="hover:text-cream">Product</a>
          <a href="#audience" className="hover:text-cream">For you · For teams</a>
          <a href="#pricing" className="hover:text-cream">Pricing</a>
          <a href="#faq" className="hover:text-cream">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="hidden text-[13px] text-cream/80 hover:text-cream sm:inline"
          >
            Book a demo
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-[13px] font-medium text-ink transition hover:bg-orange-glow"
          >
            Start free on WhatsApp
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------------------------
   Hero chat thread (right side of hero)
----------------------------------------------------------------------------- */
function HeroChat() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-orange/30 via-orange/5 to-transparent blur-2xl" aria-hidden />
      <div className="relative rounded-[28px] border border-hairline-soft bg-[#0a0805] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* phone chrome */}
        <div className="rounded-[22px] bg-[#0E2F22] p-5 pb-6">
          {/* header */}
          <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
            <Mark size={36} />
            <div className="flex-1">
              <div className="text-[14px] font-medium text-white">Kaval</div>
              <div className="text-[11px] text-emerald-200/70">online · always</div>
            </div>
            <div className="flex gap-2 text-emerald-200/70">
              <span className="text-[14px]">⌕</span>
              <span className="text-[14px]">⋮</span>
            </div>
          </div>

          {/* messages */}
          <div className="flex flex-col gap-3 text-[13.5px] leading-snug">
            <div className="self-end max-w-[78%] relative bg-[#1F3A2B] text-[#DCF8C6] px-3.5 py-2.5 rounded-2xl rounded-br-md chat-tail-right">
              <p>Mom just forwarded this 👇</p>
            </div>
            <div className="self-end max-w-[88%] relative bg-[#1F3A2B] text-[#DCF8C6]/95 px-3.5 py-2.5 rounded-2xl rounded-br-md chat-tail-right">
              <p className="text-[12.5px] text-emerald-100/80">
                <span className="block text-emerald-200/60 text-[11px] mb-1">— forwarded —</span>
                "Your KYC has expired. Click here to update or your account
                will be frozen in 24 hrs. hdfc-kyc-update[.]link"
              </p>
            </div>

            <div className="self-start max-w-[88%] relative bg-[#1A1612] text-cream px-3.5 py-2.5 rounded-2xl rounded-bl-md chat-tail-left border border-white/5">
              <p className="flex items-center gap-2 text-[12px] uppercase tracking-wider text-orange">
                <span className="kaval-asterisk text-base">*</span> Phishing · high confidence
              </p>
              <p className="mt-1.5">
                Domain registered 3 days ago. Impersonates HDFC. Real banks
                never send KYC links over SMS.
              </p>
              <p className="mt-1.5 text-cream/70">
                <span className="text-cream">Do this:</span> don't click. Block
                the sender. If she already tapped but didn't enter anything —
                she's safe.
              </p>
            </div>

            <div className="self-start max-w-[55%] relative bg-[#1A1612] text-cream/80 px-3.5 py-2 rounded-2xl rounded-bl-md border border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="typing-dot inline-block h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="typing-dot inline-block h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="typing-dot inline-block h-1.5 w-1.5 rounded-full bg-orange" />
                <span className="ml-2 text-[11px] text-cream/50">drafting a calm reply to your family group</span>
              </div>
            </div>
          </div>

          {/* input */}
          <div className="mt-5 flex items-center gap-2 rounded-full bg-[#0a1f17] border border-white/5 px-3 py-2 text-emerald-200/40 text-[12px]">
            <span className="text-base">＋</span>
            <span className="flex-1">Forward anything to Kaval…</span>
            <span className="text-orange">🎙</span>
          </div>
        </div>

        {/* domain badge */}
        <div className="mt-3 flex items-center justify-between px-3 text-[11px] text-cream/40">
          <span>kaval<span className="text-orange">.chat</span></span>
          <span>WhatsApp · Web · Email soon</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Hero
----------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream grain">
      <Nav />
      {/* warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(216,139,63,0.35) 0%, rgba(216,139,63,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,234,217,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center top, black 30%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-6 pb-28 pt-40 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pt-48 md:pb-32">
        {/* left */}
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cream/15 px-3 py-1 text-[11.5px] uppercase tracking-[0.18em] text-cream/70">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Live on WhatsApp · 5,500+ verifications
          </div>

          <h1 className="font-display text-[58px] leading-[0.95] tracking-tight text-cream sm:text-[72px] md:text-[92px]">
            Kaval for your life.
            <br />
            <span className="font-display-italic text-orange">Kaval</span> for your company.
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-[1.55] text-cream/72 md:text-[18px]">
            A digital safety agent that sits between you and the internet.
            Forward anything. Watch what matters. Get a short brief in plain
            language — what's real, why it matters, what to do.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-3 rounded-full bg-orange px-6 py-3.5 text-[14px] font-medium text-ink transition hover:bg-orange-glow"
            >
              Start free on WhatsApp
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-3 rounded-full border border-cream/20 px-6 py-3.5 text-[14px] text-cream transition hover:border-cream/40 hover:bg-cream/5"
            >
              Set up a company watch
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/10 pt-7 text-[12px] text-cream/55 sm:max-w-md">
            <div>
              <div className="font-display text-2xl text-cream">189</div>
              <div className="mt-0.5">early users</div>
            </div>
            <div>
              <div className="font-display text-2xl text-cream">5.5K+</div>
              <div className="mt-0.5">verifications</div>
            </div>
            <div>
              <div className="font-display text-2xl text-cream">50M+</div>
              <div className="mt-0.5">tokens processed</div>
            </div>
          </div>
        </div>

        {/* right — chat thread */}
        <div className="relative">
          <HeroChat />
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative border-y border-cream/10 bg-ink-soft/40 py-4 overflow-hidden">
        <div className="marquee-track flex w-max gap-12 text-[12px] uppercase tracking-[0.2em] text-cream/45">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="flex shrink-0 gap-12" key={i}>
              <span>Verify</span>
              <span className="text-orange">*</span>
              <span>Watch</span>
              <span className="text-orange">*</span>
              <span>Brief</span>
              <span className="text-orange">*</span>
              <span>WhatsApp-first</span>
              <span className="text-orange">*</span>
              <span>Evidence-backed</span>
              <span className="text-orange">*</span>
              <span>Trust infrastructure for the AI era</span>
              <span className="text-orange">*</span>
              <span>Family safety</span>
              <span className="text-orange">*</span>
              <span>Brand watch</span>
              <span className="text-orange">*</span>
              <span>Built in India · Used worldwide</span>
              <span className="text-orange">*</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Problem
----------------------------------------------------------------------------- */
function Problem() {
  const stats = [
    { n: "3 in 5", label: "Indian adults encountered a scam last year" },
    { n: "₹22,495 Cr", label: "lost to cyber-fraud in India (FY2025)" },
    { n: "1 in 3", label: "victims ever recover funds" },
  ];
  return (
    <section className="relative bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
              <span className="text-orange-deep">The trust crisis</span>
            </div>
            <h2 className="font-display text-[44px] leading-[1] tracking-tight text-ink md:text-[64px]">
              The internet got faster.
              <br />
              <span className="font-display-italic text-orange-deep">Trust did not.</span>
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-[1.6] text-ink/70">
              AI made scams, misinformation, and deepfakes cheaper and harder
              to judge. Families get fake KYC messages every week. Companies
              get impersonated on Instagram, complained about on X, and
              outpaced by competitors before standup. No one has time to
              verify it all. The cost of getting it wrong keeps going up.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-hairline bg-paper p-6 md:p-7"
              >
                <div className="font-display text-[40px] leading-none text-ink md:text-[52px]">
                  {s.n}
                </div>
                <div className="mt-3 text-[13.5px] leading-[1.5] text-ink/65">
                  {s.label}
                </div>
              </div>
            ))}
            <div className="text-[11px] text-ink/40">
              Source: MHA Lok Sabha + PIB cybercrime data 2025, GSMA India 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Three verbs — what Kaval does
----------------------------------------------------------------------------- */
function Verbs() {
  const items = [
    {
      verb: "Verify",
      sub: "Real-time judgement",
      body: "Claims, links, messages, and signals you're not sure about — checked against search, fact-check feeds, threat feeds, and source history. Sources cited. Confidence shown.",
    },
    {
      verb: "Watch",
      sub: "Personal monitoring",
      body: "Tell Kaval what to watch — a parent's WhatsApp, your name online, a brand, a competitor, a topic, a complaint cluster. Kaval keeps reading the internet so you don't have to.",
    },
    {
      verb: "Brief",
      sub: "Plain-language action",
      body: "A short note when something real happens. What happened, why it matters, how confident we are, what to do. No 200-alert inbox. No dashboards to check.",
    },
  ];
  return (
    <section id="product" className="bg-ink py-28 text-cream md:py-36 grain">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
            <span>One agent · Three jobs</span>
          </div>
          <h2 className="font-display text-[44px] leading-[1] tracking-tight md:text-[64px]">
            Verify. Watch.{" "}
            <span className="font-display-italic text-orange">Brief.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-[1.55] text-cream/65">
            Not a wrapper around a model. A trust engine that decides the
            judgement — the AI just writes the explanation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {items.map((it, i) => (
            <div
              key={it.verb}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft p-7 transition hover:border-orange/40"
            >
              <div className="absolute -right-6 -top-6 font-display text-[140px] leading-none text-cream/[0.04]">
                0{i + 1}
              </div>
              <div className="relative flex items-center gap-3">
                <span className="kaval-asterisk text-2xl">*</span>
                <span className="text-[11.5px] uppercase tracking-[0.2em] text-cream/45">
                  {it.sub}
                </span>
              </div>
              <h3 className="relative mt-4 font-display text-[44px] leading-none">
                {it.verb}
              </h3>
              <p className="relative mt-5 text-[14.5px] leading-[1.55] text-cream/68">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   The Brief — side-by-side examples
----------------------------------------------------------------------------- */
function ChatExample({
  tone,
  title,
  user,
  kaval,
  verdict,
  confidence,
}: {
  tone: "personal" | "company";
  title: string;
  user: { label: string; body: string }[];
  kaval: string[];
  verdict: string;
  confidence: string;
}) {
  return (
    <div className="rounded-3xl border border-hairline bg-paper p-6 md:p-8">
      <div className="mb-5 flex items-center justify-between">
        <div className="text-[11.5px] uppercase tracking-[0.22em] text-orange-deep">
          {tone === "personal" ? "Personal · WhatsApp" : "Company · Brand watch"}
        </div>
        <div className="flex items-center gap-2 text-[11px] text-ink/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          {confidence}
        </div>
      </div>
      <h3 className="font-display text-[26px] leading-tight text-ink md:text-[30px]">
        {title}
      </h3>
      <div className="mt-5 space-y-3 text-[13.5px] leading-snug">
        {user.map((u, i) => (
          <div
            key={i}
            className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[#1F3A2B] px-3.5 py-2.5 text-[#DCF8C6]"
          >
            <div className="text-[10.5px] uppercase tracking-wider text-emerald-200/60 mb-1">
              {u.label}
            </div>
            <p>{u.body}</p>
          </div>
        ))}
        <div className="mr-auto max-w-[92%] rounded-2xl rounded-bl-md bg-ink px-4 py-3 text-cream">
          <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-wider text-orange">
            <span className="kaval-asterisk">*</span> Kaval · {verdict}
          </div>
          {kaval.map((k, i) => (
            <p key={i} className="mt-1.5 text-cream/85">{k}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function TheBrief() {
  return (
    <section className="bg-cream-soft py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
            <span className="text-orange-deep">Live examples</span>
          </div>
          <h2 className="font-display text-[44px] leading-[1] tracking-tight md:text-[60px]">
            What a Kaval{" "}
            <span className="font-display-italic text-orange-deep">brief</span>{" "}
            looks like.
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.55] text-ink/65">
            Same agent. Two lives. Both real.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ChatExample
            tone="personal"
            title="Mom forwarded a 'chain hoax' message."
            confidence="98% confident"
            verdict="Hoax · safe to ignore"
            user={[
              {
                label: "Forwarded",
                body: '"Hello family, starting tomorrow do not receive network pictures — they contain hidden code that can hack your bank account."',
              },
            ]}
            kaval={[
              "Classic chain hoax circulating since 2017. Standard WhatsApp images don't contain code that hacks bank accounts on receipt.",
              "Don't forward — it spreads unnecessary panic. Want me to draft a calm reply for your family group?",
            ]}
          />
          <ChatExample
            tone="company"
            title="Brand watch caught a complaint at 7:14 AM."
            confidence="contain in 60 min"
            verdict="Rising signal"
            user={[
              {
                label: "Auto-trigger",
                body: 'Watch: "Acme Coffee" — mentions, sentiment, impersonation.',
              },
            ]}
            kaval={[
              "Complaint about a moldy product gaining traction on X (3 amplifications, 1 mid-size account). Not viral yet — usually contained within 60 minutes if addressed.",
              "Draft reply attached. Two impersonation accounts flagged separately overnight; report links ready.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Audience split
----------------------------------------------------------------------------- */
function AudienceSplit() {
  const personal = [
    "Forward any link or message on WhatsApp",
    "Catch fake bank, KYC, and delivery alerts",
    "Flag deepfake voice notes and videos",
    "Watch your own name across the internet",
    "Family safety — extend Kaval to parents and kids",
    "Important-only alerts. Stays quiet until it matters.",
  ];
  const company = [
    "Brand mentions, sentiment, impersonations",
    "Competitor moves — launches, pricing, hiring",
    "Complaint clusters before they trend",
    "Incident detection across public channels",
    "Market and category signals",
    "One clear analyst note, not 200 alerts",
  ];
  return (
    <section id="audience" className="bg-ink text-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
            <span>Two lives · One agent</span>
          </div>
          <h2 className="font-display text-[46px] leading-[1] tracking-tight md:text-[72px]">
            One Kaval. <span className="font-display-italic text-orange">Two lives.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.55] text-cream/65">
            Same agent. Different watches. Whether you're a parent protecting
            a WhatsApp group or a founder protecting a brand — Kaval works the
            same way.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* personal */}
          <div className="rounded-3xl border border-cream/10 bg-ink-soft p-8 md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="kaval-asterisk text-2xl">*</span>
                <span className="text-[11.5px] uppercase tracking-[0.22em] text-cream/55">
                  For your life
                </span>
              </div>
              <span className="text-[11px] text-cream/40">Free → Pro</span>
            </div>
            <h3 className="mt-5 font-display text-[38px] leading-tight md:text-[46px]">
              Kaval for{" "}
              <span className="font-display-italic text-orange">your family.</span>
            </h3>
            <p className="mt-4 text-[14.5px] leading-[1.6] text-cream/70">
              The internet doesn't care that your mother isn't technical or
              that your nephew forwards everything. Kaval is the quiet agent
              sitting between your family and the noise — on WhatsApp, where
              most of it lands.
            </p>
            <ul className="mt-7 space-y-3 text-[14px] text-cream/75">
              {personal.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-[13px] font-medium text-ink transition hover:bg-orange-glow"
            >
              Protect your family — free →
            </a>
          </div>

          {/* company */}
          <div className="rounded-3xl border border-orange/30 bg-gradient-to-b from-[#1A1612] to-[#0F0C09] p-8 md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="kaval-asterisk text-2xl">*</span>
                <span className="text-[11.5px] uppercase tracking-[0.22em] text-orange/80">
                  For your company
                </span>
              </div>
              <span className="text-[11px] text-cream/40">Team · Enterprise</span>
            </div>
            <h3 className="mt-5 font-display text-[38px] leading-tight md:text-[46px]">
              Kaval for{" "}
              <span className="font-display-italic text-orange">your brand.</span>
            </h3>
            <p className="mt-4 text-[14.5px] leading-[1.6] text-cream/70">
              Most teams don't have a 24/7 analyst seat. Most don't need one
              full-time — they need one that doesn't sleep. Tell Kaval what to
              watch. Get a brief when something real happens.
            </p>
            <ul className="mt-7 space-y-3 text-[14px] text-cream/75">
              {company.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-[13px] font-medium text-ink transition hover:bg-orange-glow"
            >
              Set up a company watch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   How it works
----------------------------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Tell Kaval what to watch.",
      d: "Your name, your family, a brand, a competitor, a link, a topic, a forwarded message. On WhatsApp or web.",
    },
    {
      n: "02",
      t: "Kaval verifies.",
      d: "Search, fact-checks, threat feeds, source history, 16 specialist agents. Structured evidence, not vibes.",
    },
    {
      n: "03",
      t: "You get a brief.",
      d: "Plain language. What happened, why it matters, confidence level, what to do. Quiet until it matters.",
    },
  ];
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
              <span className="text-orange-deep">How it works</span>
            </div>
            <h2 className="font-display text-[44px] leading-[1] tracking-tight md:text-[60px]">
              Three steps.
              <br />
              <span className="font-display-italic text-orange-deep">No setup pain.</span>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.55] text-ink/65">
              Available on WhatsApp and web today. Email, Slack, and API on
              the roadmap.
            </p>
          </div>
          <div className="space-y-5">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex gap-6 rounded-2xl border border-hairline bg-paper p-6 md:p-7"
              >
                <div className="font-display text-[40px] leading-none text-orange-deep">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-[24px] leading-tight text-ink">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-ink/65">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Trust engine
----------------------------------------------------------------------------- */
function TrustEngine() {
  const stats = [
    { n: "150K", l: "lines of production Python" },
    { n: "2,057", l: "passing tests" },
    { n: "16", l: "specialist agents" },
    { n: "80%+", l: "queries without full LLM routing" },
  ];
  const pipeline = [
    { t: "Signal intake", d: "Messages, claims, media, alerts, public signals" },
    { t: "Evidence retrieval", d: "Search, fact-checks, threat feeds, source history" },
    { t: "Specialist reasoning", d: "Scam risk, misinformation, media forensics, synthesis" },
    { t: "Trust decision", d: "Verdict, confidence, risk, relevance, next action" },
    { t: "User brief", d: "Clear explanation with sources and what to do" },
  ];
  return (
    <section className="bg-ink text-cream py-28 md:py-36 grain">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
            <span>The engine</span>
          </div>
          <h2 className="font-display text-[44px] leading-[1] tracking-tight md:text-[68px]">
            Not a wrapper.{" "}
            <span className="font-display-italic text-orange">A trust engine.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.55] text-cream/65">
            Kaval verifies, scores, and explains from structured evidence —
            the AI writes the response, but the system decides the judgement.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-cream/10 bg-ink-soft p-6"
              >
                <div className="font-display text-[44px] leading-none text-orange">
                  {s.n}
                </div>
                <div className="mt-3 text-[13px] leading-snug text-cream/65">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-cream/10 bg-ink-soft p-7 md:p-9">
            <div className="text-[11.5px] uppercase tracking-[0.22em] text-orange mb-6">
              Trust infrastructure pipeline
            </div>
            <ol className="space-y-5">
              {pipeline.map((p, i) => (
                <li key={p.t} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-orange text-[12px] text-orange">
                      {i + 1}
                    </div>
                    {i !== pipeline.length - 1 && (
                      <div className="mt-1 h-9 w-px bg-orange/30" />
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="font-display text-[20px] text-cream">
                      {p.t}
                    </div>
                    <div className="text-[13.5px] text-cream/60">{p.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Use cases
----------------------------------------------------------------------------- */
function UseCases() {
  const cases = [
    {
      tag: "Family",
      title: "Suspicious WhatsApp link",
      ask: "Mom got this from a cousin. Is it safe?",
      reply:
        "Phishing page mimicking Amazon's prize draw. Domain is 4 days old, flagged by two threat feeds today. Don't open. If she tapped but didn't enter info — safe.",
    },
    {
      tag: "Family",
      title: "Fake bank / KYC SMS",
      ask: "Got this SMS — looks real?",
      reply:
        "Spoofed sender ID. Real banks never send KYC links by SMS. If you only tapped, you're fine. If you entered details — change UPI PIN and net-banking password now.",
    },
    {
      tag: "Family",
      title: "Family safety alert (auto)",
      ask: "Watch: my teen's new group memberships.",
      reply:
        "Your son joined a group where the host has been reported twice for inviting minors. Three other minors have left this week. Suggested script attached.",
    },
    {
      tag: "Company",
      title: "Brand impersonation on Instagram",
      ask: "Auto-flag from brand watch.",
      reply:
        "@yourbrand.support (created Tue) impersonating you, DMing followers for OTPs. 14 reports. Meta impersonation report link prefilled. Warning post draft attached.",
    },
    {
      tag: "Company",
      title: "Customer complaint cluster",
      ask: "Auto-flag from complaint watch.",
      reply:
        "5 complaints in 90 min about checkout failing on Safari iOS. One complainer has 22K followers. Engineering should look at the 06:40 IST deploy. Public reply ready.",
    },
    {
      tag: "Company",
      title: "Competitor product signal",
      ask: "Auto-flag from competitor watch.",
      reply:
        "Competitor X raised Pro from $49 → $69 today. No announcement — site copy changed at 09:12 UTC. They added a 'Teams' tier matching your roadmap.",
    },
  ];
  return (
    <section className="bg-cream-soft py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
            <span className="text-orange-deep">Use cases</span>
          </div>
          <h2 className="font-display text-[44px] leading-[1] tracking-tight md:text-[60px]">
            Real things people{" "}
            <span className="font-display-italic text-orange-deep">forward to Kaval.</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-2xl border border-hairline bg-paper p-6 transition hover:border-orange/40"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10.5px] uppercase tracking-[0.22em] ${
                    c.tag === "Family"
                      ? "text-orange-deep"
                      : "text-emerald-800"
                  }`}
                >
                  {c.tag}
                </span>
                <span className="kaval-asterisk">*</span>
              </div>
              <h3 className="mt-4 font-display text-[22px] leading-tight text-ink">
                {c.title}
              </h3>
              <div className="mt-5 space-y-2 text-[13px]">
                <div className="ml-auto inline-block max-w-[90%] rounded-xl rounded-br-sm bg-[#1F3A2B] px-3 py-2 text-[#DCF8C6]">
                  {c.ask}
                </div>
                <div className="mr-auto inline-block max-w-[95%] rounded-xl rounded-bl-sm bg-ink px-3 py-2 text-cream">
                  <span className="text-orange mr-1">*</span>
                  {c.reply}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Pricing
----------------------------------------------------------------------------- */
function Pricing() {
  const tiers = [
    {
      name: "Free",
      tagline: "Trust builder",
      price: "₹0",
      period: "forever",
      features: [
        "Reactive verification on WhatsApp",
        "Limited personal watches",
        "Plain-language briefs",
      ],
      cta: "Start free on WhatsApp",
      featured: false,
    },
    {
      name: "Pro",
      tagline: "Individuals & families",
      price: "₹299",
      period: "/month · or ₹2,499/yr",
      features: [
        "Higher verification limits",
        "Important-only alerts",
        "Family protection (up to 5)",
        "Breach + impersonation monitoring",
      ],
      cta: "Go Pro",
      featured: true,
    },
    {
      name: "Team",
      tagline: "Startups & teams",
      price: "₹7,999",
      period: "to ₹24,999/month",
      features: [
        "Shared watches across team",
        "Brand · competitor · complaints",
        "Incident review + reporting",
        "Analyst-style briefs",
      ],
      cta: "Book a demo",
      featured: false,
    },
    {
      name: "Enterprise · API",
      tagline: "Platforms & integrations",
      price: "Custom",
      period: "trust APIs",
      features: [
        "Embed trust decisions in your product",
        "Custom workflows + SLAs",
        "Real-time risk scoring",
        "Banks · fintechs · insurers · platforms",
      ],
      cta: "Talk to sales",
      featured: false,
    },
  ];
  return (
    <section id="pricing" className="bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
            <span className="text-orange-deep">Pricing</span>
          </div>
          <h2 className="font-display text-[44px] leading-[1] tracking-tight md:text-[60px]">
            Start free. Upgrade when it's{" "}
            <span className="font-display-italic text-orange-deep">saving you time.</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                t.featured
                  ? "border border-orange bg-ink text-cream shadow-[0_20px_60px_-20px_rgba(216,139,63,0.45)]"
                  : "border border-hairline bg-paper text-ink"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-7 rounded-full bg-orange px-3 py-1 text-[10.5px] font-medium uppercase tracking-wider text-ink">
                  Most popular
                </div>
              )}
              <div className="font-display text-[26px] leading-none">
                {t.name}
              </div>
              <div
                className={`mt-1.5 text-[12px] ${
                  t.featured ? "text-orange" : "text-orange-deep"
                }`}
              >
                {t.tagline}
              </div>
              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display text-[38px] leading-none">
                  {t.price}
                </span>
                <span
                  className={`text-[12px] ${
                    t.featured ? "text-cream/55" : "text-ink/55"
                  }`}
                >
                  {t.period}
                </span>
              </div>
              <ul
                className={`mt-7 flex-1 space-y-2.5 text-[13.5px] ${
                  t.featured ? "text-cream/80" : "text-ink/70"
                }`}
              >
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                        t.featured ? "bg-orange" : "bg-orange-deep"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-3 text-[13px] font-medium transition ${
                  t.featured
                    ? "bg-orange text-ink hover:bg-orange-glow"
                    : "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream"
                }`}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-[12px] text-ink/45">
          Free builds trust. Pro monetizes protection. Team plans monetize
          operational intelligence. Enterprise/API is the long-term
          infrastructure path.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   FAQ
----------------------------------------------------------------------------- */
function FAQ() {
  const items = [
    {
      q: "What is Kaval?",
      a: "A digital safety agent that sits between you and the internet. You tell it what to watch — a message, link, name, brand, competitor — and it tells you what's real, how confident it is, and what to do next.",
    },
    {
      q: "Is this only for scams?",
      a: "No. Scam-checking is one thing Kaval does well. The same trust engine watches brand mentions, complaints, competitors, market signals, deepfakes, and family safety.",
    },
    {
      q: "Can individuals use it?",
      a: "Yes — most people start there. Forward any suspicious WhatsApp message to Kaval, or set a watch on your own name, a parent, or your kids. Free to start.",
    },
    {
      q: "Can companies use it?",
      a: "Yes. Teams use Kaval for brand watch, competitor watch, complaint clusters, impersonation, and public risk. One always-on analyst seat. Team plans start at ₹7,999/mo.",
    },
    {
      q: "How does Kaval work?",
      a: "You tell Kaval what to watch. Kaval verifies what it finds against structured evidence — search, fact-check feeds, threat feeds, source history — filters out noise, and sends a short brief with sources and a recommendation.",
    },
    {
      q: "Can I use it on WhatsApp?",
      a: "Yes. Kaval is WhatsApp-first. Add Kaval at kaval.chat, forward any message, get an answer. Web is live too. Email, Slack, and API are on the roadmap.",
    },
    {
      q: "Does it store private messages?",
      a: "No. Forwarded messages are analyzed and not stored as training data. Personal watches are private to your account. Team watches are visible only to your team.",
    },
    {
      q: "How is it different from Google Alerts?",
      a: "Google Alerts sends you a list of links. Kaval reads the links, verifies what's real, ignores the noise, scores confidence, and tells you what to do. Judgement, not RSS.",
    },
    {
      q: "How is it different from ChatGPT?",
      a: "ChatGPT answers when you ask. Kaval watches when you don't. It's an always-on agent with structured evidence behind every verdict — and pings only when something real happens.",
    },
    {
      q: "Where is Kaval based?",
      a: "Built in India by Analog Intelligence Pvt Ltd. Starting where trust failure causes the most immediate harm — Indian consumers and growing businesses — then expanding globally.",
    },
  ];
  return (
    <section id="faq" className="bg-ink text-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="divider-ast mb-8 text-[11.5px] uppercase tracking-[0.22em]">
              <span>FAQ</span>
            </div>
            <h2 className="font-display text-[42px] leading-[1] tracking-tight md:text-[56px]">
              Quiet answers to the{" "}
              <span className="font-display-italic text-orange">loud questions.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.55] text-cream/60">
              Still curious? Forward a message to Kaval — that's the fastest
              answer.
            </p>
          </div>
          <div className="divide-y divide-cream/10 border-y border-cream/10">
            {items.map((it) => (
              <details key={it.q} className="group py-5">
                <summary className="flex items-center justify-between gap-6 text-[16px] text-cream">
                  <span className="font-display text-[20px] leading-snug">
                    {it.q}
                  </span>
                  <span className="faq-icon font-display text-2xl text-orange">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.6] text-cream/65">
                  {it.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
   Final CTA
----------------------------------------------------------------------------- */
function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 50%, rgba(216,139,63,0.18) 0%, rgba(216,139,63,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <div className="mb-10 flex justify-center">
          <Mark size={56} />
        </div>
        <h2 className="font-display text-[52px] leading-[0.98] tracking-tight text-ink md:text-[96px]">
          One Kaval for your life.
          <br />
          <span className="font-display-italic text-orange-deep">
            One Kaval for your company.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[16.5px] leading-[1.6] text-ink/65">
          The internet won't slow down. Get an agent that doesn't either.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://kaval.chat"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[14px] font-medium text-cream transition hover:bg-orange-deep"
          >
            Start free on WhatsApp
            <span className="transition group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="mailto:hello@analogintelligence.in?subject=Kaval%20demo"
            className="inline-flex items-center gap-3 rounded-full border border-ink/20 px-7 py-4 text-[14px] text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
          >
            Book a 15-min demo
          </a>
        </div>
        <div className="mt-12 text-[11.5px] uppercase tracking-[0.25em] text-ink/40">
          kaval<span className="text-orange-deep">.chat</span> · Trust infrastructure for the AI era
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
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-[1240px] px-6 py-14 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <Mark size={32} />
              <span className="font-display text-[22px] text-cream">Kaval</span>
            </div>
            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.55] text-cream/55">
              A digital safety agent that sits between you and the internet.
              Built by Analog Intelligence Pvt Ltd.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-cream/40">
              Product
            </div>
            <ul className="mt-4 space-y-2 text-[13.5px]">
              <li><a href="#product" className="hover:text-cream">What Kaval does</a></li>
              <li><a href="#audience" className="hover:text-cream">For you · For teams</a></li>
              <li><a href="#pricing" className="hover:text-cream">Pricing</a></li>
              <li><a href="#faq" className="hover:text-cream">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-cream/40">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-[13.5px]">
              <li><a href="https://kaval.chat" className="hover:text-cream">kaval.chat</a></li>
              <li><a href="mailto:hello@analogintelligence.in" className="hover:text-cream">hello@analogintelligence.in</a></li>
              <li><a href="mailto:anuranjan@analogintelligence.in" className="hover:text-cream">anuranjan@analogintelligence.in</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-[11.5px] text-cream/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Analog Intelligence Pvt Ltd. All rights reserved.</div>
          <div className="uppercase tracking-[0.22em]">Trust infrastructure for the AI era</div>
        </div>
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
      <Problem />
      <Verbs />
      <TheBrief />
      <AudienceSplit />
      <HowItWorks />
      <TrustEngine />
      <UseCases />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
