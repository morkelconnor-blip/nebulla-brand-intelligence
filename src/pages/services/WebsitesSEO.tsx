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
  MousePointerClick,
  Search,
  Zap,
  LayoutGrid,
  CheckCircle,
} from "lucide-react";

const problems = [
  "Beautiful design with no SEO foundation means no organic traffic",
  "Slow load times and poor mobile experience kill conversions before they start",
  "Generic copy and unclear CTAs leave visitors confused about what you actually do",
  "Rebuilding every 18 months because the original wasn't built to evolve",
];

const deliverables = [
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Design",
    description:
      "Every layout decision is driven by user behaviour and conversion data. Pages are structured to guide visitors from awareness to action with minimal friction.",
  },
  {
    icon: Search,
    title: "SEO Architecture from Day One",
    description:
      "Technical SEO is baked into the build — site structure, page speed, schema markup, metadata, and keyword targeting are configured before launch, not patched on afterward.",
  },
  {
    icon: Zap,
    title: "Fast, Responsive Development",
    description:
      "Lightweight, performant builds that load fast on every device. No bloated templates or unnecessary plugins — clean code that scores well on Core Web Vitals.",
  },
  {
    icon: LayoutGrid,
    title: "CMS & Content Integration",
    description:
      "Built so your team can update content without calling a developer. Integrated with your content workflows and designed to grow with your business.",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description:
      "We assess your current digital presence, map the competitive landscape, and define the site architecture, keyword strategy, and conversion goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and visual design rooted in your brand system and optimised for user flow. Every page has a job to do.",
  },
  {
    number: "03",
    title: "Develop & Optimise",
    description:
      "Clean, fast, responsive build with SEO configured from the ground up. Performance tested before launch.",
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description:
      "We launch, monitor performance, and provide the data you need to continuously improve conversion and rankings.",
  },
];

const WebsitesSEO = () => {
  const problemSection = useInView(0.1);
  const deliverablesGrid = useInView(0.1);
  const stepsSection = useInView(0.1);
  const whoSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div className="min-h-screen bg-[#111620] nocturnal-bg animate-page-enter">
      <Helmet>
        <title>High-Performance Websites & SEO for Growing Businesses | Nebulla</title>
        <meta
          name="description"
          content="Conversion-focused websites engineered to rank and built to sell. Fast, responsive, SEO-optimised web design for startups and SMEs with global ambitions."
        />
        <meta property="og:title" content="High-Performance Websites & SEO for Growing Businesses | Nebulla" />
        <meta
          property="og:description"
          content="Conversion-focused websites engineered to rank and built to sell. Fast, responsive, SEO-optimised web design for startups and SMEs with global ambitions."
        />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/services/websites-seo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High-Performance Websites & SEO for Growing Businesses | Nebulla" />
        <meta
          name="twitter:description"
          content="Conversion-focused websites engineered to rank and built to sell. Fast, responsive, SEO-optimised web design for startups and SMEs with global ambitions."
        />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/services/websites-seo" />
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
              Websites That Rank, Convert,{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>and Scale With You</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Your website is your highest-leverage sales asset. We build sites engineered for search visibility, conversion, and speed — not just aesthetics.
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
              Your Website Is Probably Costing You Revenue
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Most business websites look acceptable but perform poorly. They don't rank, they don't convert, and they don't communicate value clearly enough to close.
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
                  Built for businesses that need their website to actively generate leads and revenue — not just exist as an online placeholder. Ideal for companies launching into new markets, repositioning, or replacing an underperforming site.
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
                      Every high-performing website starts with a solid brand foundation.{" "}
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
                      We also connect your website to automation systems that handle follow-up and lead routing automatically.{" "}
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
                    Turn Your Website Into Your{" "}
                    <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Best Salesperson</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-8">
                    Book a strategy call and we'll audit your current site's performance and show you exactly where you're losing visitors and revenue.
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

export default WebsitesSEO;
