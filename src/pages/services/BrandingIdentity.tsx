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
  Target,
  Palette,
  MessageSquare,
  BookOpen,
  CheckCircle,
} from "lucide-react";

const problems = [
  "Inconsistent visuals across platforms erode trust before you even pitch",
  "Messaging that doesn't land internationally limits growth to local markets",
  "No brand system means every new hire, designer, or agency starts from scratch",
  "Design-heavy agencies deliver aesthetics without strategic thinking",
];

const deliverables = [
  {
    icon: Target,
    title: "Strategic Brand Positioning",
    description:
      "We define where your brand sits in the competitive landscape and how it communicates value to the people who matter. This isn't mood boarding — it's commercial strategy translated into brand language.",
  },
  {
    icon: Palette,
    title: "Visual Identity System",
    description:
      "Logo, colour system, typography, and visual language designed as a cohesive system. Built for consistency at scale — whether it's a pitch deck in London or a social ad in Lagos.",
  },
  {
    icon: MessageSquare,
    title: "Tone of Voice & Messaging Framework",
    description:
      "A documented voice that your team, contractors, and AI tools can all follow. Consistent messaging across emails, social, website, and sales materials without bottlenecking through one person.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines & Asset Library",
    description:
      "A comprehensive, practical guide your team actually uses. Not a 60-page PDF that collects dust — a working reference that keeps every touchpoint aligned.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We audit your current brand, analyse your competitive landscape, and identify the gaps between how you present and how you need to be perceived.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define your positioning, messaging architecture, and the brand system structure before any design work begins.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Visual identity, tone of voice, templates, and guidelines are created as a complete, interconnected system.",
  },
  {
    number: "04",
    title: "Handoff & Integration",
    description:
      "Your brand system is delivered with everything your team needs to implement it. We ensure it integrates with your website, content workflows, and sales materials.",
  },
];

const BrandingIdentity = () => {
  const problemSection = useInView(0.1);
  const deliverablesGrid = useInView(0.1);
  const stepsSection = useInView(0.1);
  const whoSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div className="min-h-screen bg-background nebula-bg animate-page-enter">
      <Helmet>
        <title>Brand Identity & Strategy for Ambitious Businesses | Nebulla</title>
        <meta
          name="description"
          content="Strategic brand identity systems built for global credibility. Logo, visual identity, tone of voice, and brand guidelines — engineered to communicate authority from day one."
        />
        <meta property="og:title" content="Brand Identity & Strategy for Ambitious Businesses | Nebulla" />
        <meta
          property="og:description"
          content="Strategic brand identity systems built for global credibility. Logo, visual identity, tone of voice, and brand guidelines — engineered to communicate authority from day one."
        />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/services/branding-identity" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Identity & Strategy for Ambitious Businesses | Nebulla" />
        <meta
          name="twitter:description"
          content="Strategic brand identity systems built for global credibility. Logo, visual identity, tone of voice, and brand guidelines — engineered to communicate authority from day one."
        />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/services/branding-identity" />
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
            <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              Your Brand Is the{" "}
              <span className="gradient-text">First System We Build</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Before automation, before growth — there's identity. We build brand systems that communicate authority on sight and scale across every market you enter.
            </p>
            <div className="animate-fade-in-up delay-200">
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() =>
                  (window as any).Calendly?.initPopupWidget({
                    url: "https://calendly.com/connor-nebulla/30min",
                  })
                }
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />
        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              Why Most Brands Don't Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You've outgrown your original brand. Maybe it was built fast, by a freelancer, or by committee. Now it's costing you credibility in rooms that matter.
            </p>
          </AnimateIn>

          <div ref={problemSection[0]} className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm"
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
                <p className="text-muted-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Deliver ────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              What We Deliver
            </h2>
          </AnimateIn>

          <div ref={deliverablesGrid[0]} className="grid gap-6 md:grid-cols-2">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)]"
                style={{
                  opacity: deliverablesGrid[1] ? 1 : 0,
                  transform: deliverablesGrid[1] ? "none" : "translateY(36px)",
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-3 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
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
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
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
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                    <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2 mb-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
              className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/80 p-8 md:p-16 relative overflow-hidden max-w-4xl mx-auto"
            >
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                  Who This Is For
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This service is built for founders and marketing leads at SMEs, startups, and growth-stage companies who need a brand that earns credibility on a global level — not just looks good on a business card. Ideal if you're entering new markets, raising capital, or scaling a team and need a brand that holds up under scrutiny.
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
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      Once your brand is built, we engineer websites that bring it to life.{" "}
                      <Link to="/services/websites-seo" className="text-primary hover:underline">
                        Explore our Websites & SEO service.
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
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      We also build the content systems that keep your brand visible.{" "}
                      <Link to="/services/content-social" className="text-primary hover:underline">
                        Explore Content Systems.
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
              <div className="rounded-3xl bg-background/90 backdrop-blur-xl p-8 md:p-16">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                    Build a Brand That <span className="gradient-text">Opens Doors</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Schedule a no-obligation strategy call and we'll assess where your brand stands today and what it'll take to get it where it needs to be.
                  </p>
                  <Button
                    variant="hero"
                    size="xl"
                    className="group"
                    onClick={() =>
                      (window as any).Calendly?.initPopupWidget({
                        url: "https://calendly.com/connor-nebulla/30min",
                      })
                    }
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
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

export default BrandingIdentity;
