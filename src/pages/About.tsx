import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { useInView } from "@/hooks/use-in-view";
import { Globe, Sparkles, Zap, Users, Target, LayoutGrid, ArrowRight, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const values = [
  { icon: Globe,       title: "Global Standards",           description: "We hold every deliverable to the same standard, regardless of market or project size." },
  { icon: Sparkles,    title: "Creative Intelligence",      description: "We combine strategic thinking with AI capability to produce work that is both purposeful and precise." },
  { icon: Zap,         title: "Systems Over Shortcuts",     description: "We build infrastructure that compounds — not quick fixes that fade." },
  { icon: Users,       title: "Honest Collaboration",       description: "We communicate clearly, move decisively, and treat your business goals as our own." },
  { icon: Target,      title: "Accountability to Outcomes", description: "We measure success by your results, not our output volume." },
  { icon: LayoutGrid,  title: "Precision at Scale",         description: "We design every brand touchpoint to perform consistently across regions, languages, and channels — without sacrificing quality." },
];

const whyItems = [
  "Strategic brand systems built to scale across global markets",
  "AI-powered workflows that reduce operational overhead",
  "Data-driven insights that connect creative output to commercial results",
  "One integrated partner across brand, digital, content, and automation",
];

const About = () => {
  const storySection   = useInView(0.1);
  const valuesGrid     = useInView(0.1);
  const whySection     = useInView(0.1);

  return (
    <div className="min-h-screen bg-background nebula-bg animate-page-enter">
      <Helmet>
        <title>About Nebulla | The AI-Native Agency Built for How Business Actually Scales</title>
        <meta name="description" content="Nebulla was built to close the gap between creative output and the intelligent systems businesses depend on to grow. We design, deploy, and continuously optimise AI-driven systems for ambitious companies worldwide." />
        <meta name="keywords" content="about Nebulla, AI-native agency, AI operations agency, intelligent automation company, brand and automation agency, AI systems for business, growth and operations agency" />
        <meta property="og:title" content="About Nebulla | The AI-Native Agency Built for How Business Actually Scales" />
        <meta property="og:description" content="We believe the most competitive businesses aren't just well-designed — they're well-engineered. Nebulla builds the systems behind the brand." />
        <meta property="og:image" content="https://nebulla.agency/logo.png" />
        <meta property="og:url" content="https://nebulla.agency/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nebulla | AI-Native Agency Built to Scale" />
        <meta name="twitter:description" content="We build the systems behind ambitious brands — strategy, design, and automation engineered for global growth." />
        <meta name="twitter:image" content="https://nebulla.agency/logo.png" />
        <link rel="canonical" href="https://nebulla.agency/about" />
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
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              Built for Companies That{" "}
              <span className="gradient-text">Think Beyond Borders</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-100">
              Where Ambition Meets Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div
            ref={storySection[0]}
            className="mx-auto max-w-3xl text-center"
            style={{
              opacity: storySection[1] ? 1 : 0,
              transform: storySection[1] ? "none" : "translateY(40px)",
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
                Nebulla was founded to close the gap between high-calibre creative output and the intelligent systems that global brands depend on to grow.
              </p>
              <p>
                We work with companies across the globe — bringing consistent strategy, design, and automation to every market we enter.
              </p>
              <p>
                We believe the most competitive brands aren't just well-designed — they're well-engineered. That's what we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />

        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that shape how we work and who we work with.
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up">
            <div
              ref={whySection[0]}
              className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/80 p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />

              <div className="relative max-w-3xl">
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-8">
                  Why Nebulla
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Most agencies deliver creative work. We deliver the infrastructure behind it — brand systems, automation, and intelligence that perform consistently across markets.
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
                    Start the Conversation
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
