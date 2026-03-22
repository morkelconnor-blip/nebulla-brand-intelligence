import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { useInView } from "@/hooks/use-in-view";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  XCircle,
  CalendarDays,
  Bot,
  Megaphone,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const problems = [
  "Inconsistent posting schedules damage brand perception and algorithm reach",
  "Content is produced reactively with no strategic framework behind it",
  "Teams spend hours on creation that could be systematised and AI-assisted",
  "No clear connection between content activity and revenue impact",
];

const deliverables = [
  {
    icon: CalendarDays,
    title: "Monthly Content Production",
    description:
      "A structured content calendar executed on your behalf. Social posts, carousels, short-form copy, and visual assets — all aligned to your brand and commercial goals.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Content Generation",
    description:
      "Custom AI workflows trained on your brand voice, audience, and objectives. We use AI as a production accelerator, not a replacement for strategic thinking.",
  },
  {
    icon: Megaphone,
    title: "Creative Direction & Campaign Assets",
    description:
      "From concept to execution — campaign visuals, ad creative, and content series designed to move specific business metrics, not just engagement vanity numbers.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking & Optimisation",
    description:
      "Every piece of content is connected to measurable outcomes. We track what works, cut what doesn't, and continuously refine the system based on real data.",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description:
      "We map your current content landscape, identify gaps, and build a content strategy tied to business objectives — not vanity metrics.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "We create the content engine — templates, AI workflows, approval processes, and a calendar that runs consistently.",
  },
  {
    number: "03",
    title: "Produce & Publish",
    description:
      "Content is created, reviewed, and published on a predictable schedule. Your team approves — we handle execution.",
  },
  {
    number: "04",
    title: "Measure & Refine",
    description:
      "Monthly performance reviews drive continuous improvement. The system gets sharper over time, not stale.",
  },
];

const ContentSocial = () => {
  const problemSection = useInView(0.1);
  const deliverablesGrid = useInView(0.1);
  const stepsSection = useInView(0.1);
  const whoSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div className="min-h-screen bg-[#111620] nocturnal-bg animate-page-enter">
      <Helmet>
        <title>AI-Powered Content & Social Media Systems for Business Growth | Nebulla</title>
        <meta
          name="description"
          content="Structured content systems powered by AI. Consistent, branded content across every channel — built to grow audience trust and drive commercial outcomes."
        />
        <meta property="og:title" content="AI-Powered Content & Social Media Systems for Business Growth | Nebulla" />
        <meta
          property="og:description"
          content="Structured content systems powered by AI. Consistent, branded content across every channel — built to grow audience trust and drive commercial outcomes."
        />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/services/content-social" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Content & Social Media Systems for Business Growth | Nebulla" />
        <meta
          name="twitter:description"
          content="Structured content systems powered by AI. Consistent, branded content across every channel — built to grow audience trust and drive commercial outcomes."
        />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/services/content-social" />
      </Helmet>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow delay-300" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-5xl lg:text-6xl animate-fade-in-up">
              Content That Runs Like a System,{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Not a Scramble</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
              We build structured content engines — AI-assisted, brand-consistent, and designed to keep your business visible across every channel without burning out your team.
            </p>
            <div className="animate-fade-in-up delay-200">
              <button
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors duration-200"
                onClick={() =>
                  (window as any).Calendly?.initPopupWidget({
                    url: "https://calendly.com/connor-nebulla/30min",
                  })
                }
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-4">
              Content Chaos Is Killing Your Growth
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              You know content matters but the execution is painful. Production is slow, quality varies, and nothing feels connected to an actual business outcome.
            </p>
          </AnimateIn>

          <div ref={problemSection[0]} className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-slate-800/50 bg-slate-900/30 p-6"
                style={{
                  opacity: problemSection[1] ? 1 : 0,
                  transform: problemSection[1] ? "none" : "translateY(24px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-slate-400">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Deliver ────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-4">
              What We Deliver
            </h2>
          </AnimateIn>

          <div ref={deliverablesGrid[0]} className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: deliverablesGrid[1] ? 1 : 0,
                  transform: deliverablesGrid[1] ? "none" : "translateY(36px)",
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="mb-6 inline-flex rounded-xl bg-slate-800/50 p-3 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-4">
              How It Works
            </h2>
          </AnimateIn>

          <div ref={stepsSection[0]} className="max-w-3xl mx-auto space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex gap-6"
                style={{
                  opacity: stepsSection[1] ? 1 : 0,
                  transform: stepsSection[1] ? "none" : "translateY(24px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-800/50 border border-blue-500/30">
                    <span className="font-display text-sm font-bold text-blue-400">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2 mb-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-semibold text-slate-100 mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up">
            <div
              ref={whoSection[0]}
              className="rounded-3xl border border-slate-800/50 bg-slate-900/30 p-8 md:p-16 relative overflow-hidden max-w-4xl mx-auto"
            >
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-6">
                  Who This Is For
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  For businesses that know they need to show up consistently but don't have the internal resources to produce quality content at scale. Ideal for growing companies where the founder or marketing lead is still the bottleneck for content output.
                </p>
                <div className="space-y-3">
                  <div
                    className="flex items-center gap-3"
                    style={{
                      opacity: whoSection[1] ? 1 : 0,
                      transform: whoSection[1] ? "none" : "translateX(-20px)",
                      transitionProperty: "opacity, transform",
                      transitionDuration: "500ms",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: "200ms",
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-100">
                      Effective content starts with a clear brand voice and identity system.{" "}
                      <Link to="/services/branding-identity" className="text-blue-400 hover:underline">
                        Explore Brand Identity.
                      </Link>
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-3"
                    style={{
                      opacity: whoSection[1] ? 1 : 0,
                      transform: whoSection[1] ? "none" : "translateX(-20px)",
                      transitionProperty: "opacity, transform",
                      transitionDuration: "500ms",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: "320ms",
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-100">
                      We connect content performance data directly into your reporting dashboards.{" "}
                      <Link to="/services/automation-intelligence" className="text-blue-400 hover:underline">
                        Explore Automation & Intelligence.
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6" ref={ctaSection[0]}>
          <div
            style={{
              opacity: ctaSection[1] ? 1 : 0,
              transform: ctaSection[1] ? "none" : "translateY(40px)",
              transitionProperty: "opacity, transform",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-px animate-border-shift">
              <div className="rounded-3xl bg-slate-950/90 backdrop-blur-xl p-8 md:p-16">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-6">
                    Stop Scrambling. Start{" "}
                    <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Scaling Your Content.</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-8">
                    Book a strategy call and we'll show you how a structured content system can replace the chaos without adding headcount.
                  </p>
                  <button
                    className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors duration-200"
                    onClick={() =>
                      (window as any).Calendly?.initPopupWidget({
                        url: "https://calendly.com/connor-nebulla/30min",
                      })
                    }
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentSocial;
