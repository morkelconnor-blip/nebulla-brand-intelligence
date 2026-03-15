import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { useInView } from "@/hooks/use-in-view";
import { Globe, Sparkles, Zap, Users, Target, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  { icon: Globe,     title: "Global Quality",          description: "World-class standards in everything we create" },
  { icon: Sparkles,  title: "Creative Intelligence",   description: "Where human creativity meets AI capability" },
  { icon: Zap,       title: "AI-Enhanced Workflows",   description: "Automation that amplifies, not replaces" },
  { icon: Users,     title: "Transparent Partnership", description: "Collaboration built on trust and clarity" },
  { icon: Target,    title: "Measurable Results",      description: "Data-driven decisions, proven outcomes" },
];

const whyItems = [
  "Strategic brand systems that scale globally",
  "AI-powered workflows that save time and money",
  "Data-driven insights that drive real growth",
  "Creative excellence backed by technology",
];

const About = () => {
  const storySection   = useInView(0.1);
  const valuesGrid     = useInView(0.1);
  const whySection     = useInView(0.1);

  return (
    <div className="min-h-screen bg-background nebula-bg animate-page-enter">
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow delay-300" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              A Global Agency with{" "}
              <span className="gradient-text">South African Roots</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-100">
              And a Worldwide Mindset
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div ref={storySection[0]} className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left */}
            <div
              style={{
                opacity: storySection[1] ? 1 : 0,
                transform: storySection[1] ? "none" : "translateX(-40px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Nebulla was created to bridge the gap between traditional creative agencies and the modern, AI-powered growth systems used by top global brands.
                </p>
                <p>
                  With experience across South Africa, the United States, China, and the Middle East, Nebulla blends creativity, systems thinking, and automation to deliver world-class digital experiences.
                </p>
                <p>
                  We believe that the future of branding lies at the intersection of human creativity and artificial intelligence — and we're building that future today.
                </p>
              </div>
            </div>

            {/* Right */}
            <div
              className="relative"
              style={{
                opacity: storySection[1] ? 1 : 0,
                transform: storySection[1] ? "none" : "translateX(40px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "150ms",
              }}
            >
              <div className="aspect-[4/3] rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/80 p-8 card-glow">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {["SA", "US", "CN", "ME"].map((region, i) => (
                      <div
                        key={i}
                        className="flex h-20 w-20 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                        style={{
                          opacity: storySection[1] ? 1 : 0,
                          transform: storySection[1] ? "none" : "scale(0.8)",
                          transitionProperty: "opacity, transform, border-color, box-shadow",
                          transitionDuration: "500ms",
                          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                          transitionDelay: `${300 + i * 80}ms`,
                        }}
                      >
                        <span className="font-display text-xl font-bold text-primary">{region}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />

        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimateIn>

          <div ref={valuesGrid[0]} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_hsl(var(--primary)/0.15)]"
                style={{
                  opacity: valuesGrid[1] ? 1 : 0,
                  transform: valuesGrid[1] ? "none" : "translateY(36px)",
                  transitionProperty: "opacity, transform, border-color, box-shadow",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-3 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Nebulla ────────────────────────────────────────── */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up">
            <div
              ref={whySection[0]}
              className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/80 p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />

              <div className="relative max-w-3xl">
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-8">
                  Why Nebulla Exists
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Brands today need more than just beautiful visuals — they need systems, automation, intelligence, and consistent performance. Nebulla builds that infrastructure.
                </p>

                <div className="space-y-4 mb-10">
                  {whyItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                      style={{
                        opacity: whySection[1] ? 1 : 0,
                        transform: whySection[1] ? "none" : "translateX(-20px)",
                        transitionProperty: "opacity, transform",
                        transitionDuration: "500ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: `${200 + i * 80}ms`,
                      }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="group">
                    Let's Work Together
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
