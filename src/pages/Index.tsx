import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { AnimateIn } from "@/components/AnimateIn";
import { useInView } from "@/hooks/use-in-view";
import { Sparkles, Globe, Zap, BarChart3, Palette, Code, PenTool, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const serviceItems = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "A complete visual and strategic identity system — built to communicate authority from day one and scale across every market you enter.",
  },
  {
    icon: Code,
    title: "Websites & SEO",
    description: "Conversion-focused websites engineered for performance, built to rank, and designed to turn visitors into qualified leads.",
  },
  {
    icon: PenTool,
    title: "Content & Creative Systems",
    description: "Structured content systems — consistently branded, AI-assisted, and built to grow audience trust across every channel.",
  },
];

const automationItems = [
  "Custom AI workflows tailored to your operations",
  "Real-time performance dashboards",
  "Scheduled automated reporting",
  "AI-assisted content at scale",
];

const nebullaOSFeatures = [
  { icon: BarChart3, label: "Real-time Analytics" },
  { icon: Sparkles, label: "AI Generation" },
  { icon: Zap, label: "Automation" },
  { icon: Globe, label: "Global Scale" },
];

// Staggered grid reveal hook
function useStaggeredGrid() {
  const [ref, inView] = useInView(0.1);
  return { ref, inView };
}

const Index = () => {
  const servicesGrid = useStaggeredGrid();
  const automationSection = useStaggeredGrid();
  const nebullaOSSection = useStaggeredGrid();
  const ctaSection = useStaggeredGrid();

  return (
    <div className="min-h-screen bg-background nebula-bg animate-page-enter">
      <Helmet>
        <title>Nebulla | AI-Native Growth &amp; Automation Agency for Ambitious Businesses</title>
        <meta name="description" content="Nebulla replaces manual execution with automated systems — AI workflows, brand infrastructure, high-converting websites, and real-time intelligence for businesses built to scale." />
        <meta name="keywords" content="AI agency, AI automation agency, growth agency, AI-native agency, workflow automation, brand strategy, web design agency, CRM automation, AI workflows, NebullaOS, intelligent automation, business automation" />
        <meta property="og:title" content="Nebulla | AI-Native Growth & Automation Agency for Ambitious Businesses" />
        <meta property="og:description" content="We replace manual execution with automated systems. AI workflows, brand infrastructure, and intelligent operations for businesses built to scale globally." />
        <meta property="og:image" content="https://nebulla.agency/logo.png" />
        <meta property="og:url" content="https://nebulla.agency/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nebulla | AI-Native Growth & Automation Agency" />
        <meta name="twitter:description" content="AI workflows, brand systems, and intelligent automation — built for ambitious businesses ready to scale without adding headcount." />
        <meta name="twitter:image" content="https://nebulla.agency/logo.png" />
        <link rel="canonical" href="https://nebulla.agency/" />
      </Helmet>
      <Header />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow delay-500" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
              <span className="text-sm text-muted-foreground">Where Strategy Meets Intelligent Execution</span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-in-up delay-100">
              Brands Built to{" "}
              <span className="gradient-text">Compete.</span>{" "}
              Anywhere.
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">
              Nebulla partners with ambitious companies to build brand systems, digital infrastructure, and AI-powered workflows designed to perform in any market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Button variant="hero" size="xl" className="group" onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}>
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ── What We Do Section ─────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              What We Deliver
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end brand and digital services built for companies with global ambitions.
            </p>
          </AnimateIn>

          <div
            ref={servicesGrid.ref}
            className="grid gap-8 md:grid-cols-3"
          >
            {serviceItems.map((service, i) => (
              <div
                key={i}
                style={{
                  opacity: servicesGrid.inView ? 1 : 0,
                  transform: servicesGrid.inView ? "none" : "translateY(36px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "700ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Automation Section ─────────────────────────────────── */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/50 to-transparent" />

        <div className="container relative mx-auto px-6">
          <div
            ref={automationSection.ref}
            className="mx-auto max-w-3xl"
            style={{
              opacity: automationSection.inView ? 1 : 0,
              transform: automationSection.inView ? "none" : "translateY(40px)",
              transitionProperty: "opacity, transform",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Intelligent Automation</span>
            </div>

            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
              Where Strategy Meets{" "}
              <span className="gradient-text">Execution</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We build the systems behind the brand — custom AI workflows, real-time dashboards, and automated reporting infrastructure that allow your business to scale without adding headcount.
            </p>

            <div className="space-y-4">
              {automationItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{
                    opacity: automationSection.inView ? 1 : 0,
                    transform: automationSection.inView ? "none" : "translateX(-20px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "500ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 hover:scale-110">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NebullaOS Preview ──────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimateIn direction="scale">
            <div
              ref={nebullaOSSection.ref}
              className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/80 p-8 md:p-16 overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-pulse-glow delay-500" />

              <div className="relative grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">Early Access</span>
                  </div>

                  <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                    Introducing{" "}
                    <span className="gradient-text">NebullaOS</span>
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    A proprietary intelligence platform — real-time analytics, AI content generation, automated reporting, and performance tracking, unified in one dashboard.
                  </p>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/nebullaos" className="group">
                      Request Early Access
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {nebullaOSFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-xl border border-border/50 bg-background/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.15)]"
                      style={{
                        opacity: nebullaOSSection.inView ? 1 : 0,
                        transform: nebullaOSSection.inView ? "none" : "translateY(20px)",
                        transitionProperty: "opacity, transform",
                        transitionDuration: "500ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: `${300 + i * 80}ms`,
                      }}
                    >
                      <item.icon className="h-8 w-8 text-primary mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6" ref={ctaSection.ref}>
          <div
            style={{
              opacity: ctaSection.inView ? 1 : 0,
              transform: ctaSection.inView ? "none" : "translateY(40px)",
              transitionProperty: "opacity, transform",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="relative rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-px animate-border-shift">
              <div className="rounded-3xl bg-background/90 backdrop-blur-xl p-8 md:p-16">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                    Ready to Build a Brand That{" "}
                    <span className="gradient-text">Competes Globally?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Schedule a no-obligation strategy call to explore what Nebulla can build for you.
                  </p>
                  <Button variant="hero" size="xl" className="group" onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}>
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

export default Index;
