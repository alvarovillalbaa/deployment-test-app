export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            CivicAI for Public Contracts
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#how-it-works"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
            >
              See how it works
            </a>
            <a
              href="#cta"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
            >
              Get a demo
            </a>
          </div>
        </header>

        <main className="mt-14 grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-300 ring-1 ring-white/10">
                AI for public procurement, built for operators
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Win government contracts 10x faster with contract-grade AI.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                We monitor every RFP, read the fine print, map requirements to your
                assets, and generate compliant responses—so your team moves from
                chasing paperwork to winning strategic deals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-400"
              >
                Book a live walkthrough
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Download sample response
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400/60 to-cyan-500/60 blur" />
                ISO 27001 ready · GovCloud on request
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Cycle time", value: "↓ 78%", detail: "Draft to final" },
                { label: "Win-rate lift", value: "+22%", detail: "vs. 6m baseline" },
                { label: "Compliance gaps", value: "0 flagged", detail: "auto-audited" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm uppercase tracking-[0.08em] text-white/50">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="text-sm text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-emerald-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Live RFP intel</span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-200">
                  Real-time
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                </span>
              </div>
              <div className="mt-4 space-y-3 rounded-2xl bg-slate-950/60 p-4 ring-1 ring-white/10">
                {[
                  {
                    title: "City of Austin · Workforce Platform RFP",
                    value: "Fit: 93%",
                    detail: "Security, HIPAA, SOC2 mapping complete",
                  },
                  {
                    title: "US Dept. of Labor · Skills Analytics",
                    value: "Fit: 88%",
                    detail: "Data residency cleared · AI disclosures ready",
                  },
                  {
                    title: "State of CA · Talent Marketplace",
                    value: "Fit: 90%",
                    detail: "Section 508 + FERPA compliance packaged",
                  },
                ].map((row) => (
                  <div
                    key={row.title}
                    className="rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{row.title}</p>
                        <p className="text-sm text-white/60">{row.detail}</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                “CivicAI cut our response time from weeks to days while catching
                compliance gaps we would have missed.” — Director, Public Sector Sales
              </div>
            </div>
          </div>
        </main>

        <section
          id="how-it-works"
          className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-3"
        >
          {[
            {
              title: "Monitor every RFP",
              desc: "We watch federal, state, and local feeds, classify fit, and alert your team in minutes.",
            },
            {
              title: "AI brief & gap map",
              desc: "We read the SOW, extract obligations, map to your controls, and flag missing artifacts.",
            },
            {
              title: "Drafts that ship",
              desc: "Response drafts include compliance language, pricing placeholders, and source citations.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 shadow-lg shadow-black/20"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{card.desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1fr,1.2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-300">
              Built for public-sector rigor
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Security-first, procurement-ready, human-in-the-loop.
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              SOC2, HIPAA, and Section 508 controls out of the box. Human review stays in
              the loop—AI accelerates, you approve. Deploy on AWS GovCloud when needed.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Policy citations
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Source-grounded answers
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Role-based access
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Audit trails
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-emerald-500/10">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Audit-ready exports",
                  desc: "Every AI answer includes citations, timestamps, and reviewer approvals.",
                },
                {
                  title: "Team workflows",
                  desc: "Assign owners, lock sections, and track readiness across bids.",
                },
                {
                  title: "Library sync",
                  desc: "Keep boilerplate, pricing, and resumes synced; AI reuses with context.",
                },
                {
                  title: "Data residency",
                  desc: "US-only processing; optional single-tenant and GovCloud isolation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="mt-16 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-white shadow-lg shadow-emerald-500/10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
                Ready to move faster?
              </p>
              <h3 className="mt-2 text-3xl font-semibold">
                Ship your next government response in days, not weeks.
              </h3>
              <p className="mt-2 text-white/80">
                We set up your workspace, ingest your past bids, and deliver your first
                AI-assisted response in under two weeks.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@civicai.gov"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Talk to us
              </a>
              <a
                href="https://cal.com"
                className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60"
              >
                Schedule a demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
