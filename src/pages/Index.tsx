import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { AnimateIn } from "@/components/AnimateIn";
import { useInView } from "@/hooks/use-in-view";
import { Sparkles, Globe, Zap, BarChart3, Palette, Code, PenTool, ArrowRight } from "lucide-react";

const serviceItems = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Transform your brand into a globally competitive visual and strategic system that resonates across cultures.",
  },
  {
    icon: Code,
    title: "Websites & SEO",
    description: "Modern, conversion-driven websites built for scale and performance with cutting-edge technology.",
  },
  {
    icon: PenTool,
    title: "Content & Creative Systems",
    description: "AI-assisted content pipelines, social design, and storytelling that convert audiences into customers.",
  },
];

const automationItems = [
  "Custom AI workflow automation",
  "Real-time analytics dashboards",
  "Automated performance reporting",
  "Intelligent content generation",
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
      <Header />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow delay-500" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
              <span className="text-sm text-muted-foreground">Creative Intelligence Meets Automation</span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-in-up delay-100">
              AI-Powered Creative{" "}
              <span className="gradient-text">Intelligence</span>{" "}
              for Global Brands
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">
              Nebulla blends strategic creativity, automation, and data-driven insight to build brands designed for global impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/nebullaos">Explore NebullaOS</Link>
              </Button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-20 text-center animate-fade-in-up delay-400">
            <p className="text-sm text-muted-foreground mb-8">Trusted by teams in SA, Europe, China & the Middle East</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 w-24 rounded shimmer-bg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do Section ─────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services designed to transform your brand into a global powerhouse
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
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/50 to-transparent" />

        <div className="container relative mx-auto px-6">
          <div
            ref={automationSection.ref}
            className="grid gap-16 lg:grid-cols-2 items-center"
          >
            {/* Left content */}
            <div
              style={{
                opacity: automationSection.inView ? 1 : 0,
                transform: automationSection.inView ? "none" : "translateX(-40px)",
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
                Where Creativity Meets{" "}
                <span className="gradient-text">Automation</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nebulla builds custom AI workflows, dashboards, and automated reporting systems that help brands scale smarter, faster, and globally. Our intelligent systems work 24/7 so you don't have to.
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

            {/* Right visual */}
            <div
              className="relative"
              style={{
                opacity: automationSection.inView ? 1 : 0,
                transform: automationSection.inView ? "none" : "translateX(40px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "150ms",
              }}
            >
              <div className="aspect-square rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden card-glow">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
                  alt="Business Intelligence Dashboard"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl animate-pulse-glow delay-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ── NebullaOS Preview ──────────────────────────────────── */}
      <section className="py-20 md:py-32">
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
                    <span className="text-sm text-primary font-medium">Coming Soon</span>
                  </div>

                  <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                    Introducing{" "}
                    <span className="gradient-text">NebullaOS</span>
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our proprietary automation and intelligence platform for real-time analytics, AI content generation, automated reporting, and performance tracking.
                  </p>

                  <Button variant="hero" size="lg" asChild>
                    <Link to="/nebullaos" className="group">
                      Join the Waitlist
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
      <section className="py-20 md:py-32">
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
                    Ready to Build a{" "}
                    <span className="gradient-text">Global-Standard</span> Brand?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Let's discuss how Nebulla can transform your brand into a worldwide success story.
                  </p>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact" className="group">
                      Book a Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
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
