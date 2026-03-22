import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-[#111620] nocturnal-bg animate-page-enter">
      <Helmet>
        <title>About Nebulla | AI-Native Agency Built for How Business Scales</title>
        <meta name="description" content="Nebulla was built to close the gap between creative output and the intelligent systems global businesses depend on to grow. We design, deploy, and continuously optimise AI-driven systems." />
        <meta name="keywords" content="about Nebulla, AI-native agency, AI operations agency, intelligent automation company, brand and automation agency, AI systems for business, growth and operations agency" />
        <meta property="og:title" content="About Nebulla | AI-Native Agency Built for How Business Scales" />
        <meta property="og:description" content="We believe the most competitive businesses aren't just well-designed — they're well-engineered. Nebulla builds the systems behind the brand." />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nebulla | AI-Native Agency Built to Scale" />
        <meta name="twitter:description" content="We build the systems behind ambitious brands — strategy, design, and automation engineered for global growth." />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/about" />
      </Helmet>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(158,119,237,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-5xl lg:text-6xl animate-fade-in-up">
              Built for Companies That{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Think Beyond Borders</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 animate-fade-in-up delay-100">
              Where Ambition Meets Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
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
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
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
      <section className="py-12 md:py-20 bg-slate-900/20 border-t border-slate-800/50 relative">
        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The principles that shape how we work and who we work with.
            </p>
          </AnimateIn>

          <div ref={valuesGrid[0]} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={i}
                className="group border border-slate-800 bg-slate-900/30 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1"
                style={{
                  opacity: valuesGrid[1] ? 1 : 0,
                  transform: valuesGrid[1] ? "none" : "translateY(36px)",
                  transitionProperty: "opacity, transform, border-color",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-3">
                  <value.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
                  {value.title}
                </h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Nebulla ────────────────────────────────────────── */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up">
            <div
              ref={whySection[0]}
              className="rounded-3xl border border-slate-800 bg-slate-900/30 p-8 md:p-16 relative overflow-hidden"
            >
              <div className="relative max-w-3xl">
                <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-8">
                  Why Nebulla
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
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
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200"
                >
                  Start the Conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
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
