import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-[#111620] nocturnal-bg animate-page-enter">
      <Helmet>
        <title>Nebulla | AI-Native Growth &amp; Automation Agency</title>
        <meta name="description" content="Nebulla replaces manual execution with automated systems — AI workflows, brand infrastructure, high-converting websites, and real-time intelligence for businesses built to scale." />
        <meta name="keywords" content="AI agency, AI automation agency, growth agency, AI-native agency, workflow automation, brand strategy, web design agency, CRM automation, AI workflows, NebullaOS, intelligent automation, business automation" />
        <meta property="og:title" content="Nebulla | AI-Native Growth & Automation Agency" />
        <meta property="og:description" content="We replace manual execution with automated systems. AI workflows, brand infrastructure, and intelligent operations for businesses built to scale globally." />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nebulla | AI-Native Growth & Automation Agency" />
        <meta name="twitter:description" content="AI workflows, brand systems, and intelligent automation — built for ambitious businesses ready to scale without adding headcount." />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/" />
      </Helmet>
      <Header />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        {/* Subtle radial mesh gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(46,144,250,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-2 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-slate-400 animate-spin-slow" />
              <span className="text-xs md:text-sm text-slate-400">Where Strategy Meets Intelligent Execution</span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold tracking-tighter text-slate-100 md:text-6xl lg:text-7xl animate-fade-in-up delay-100">
              Brands Built to{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Compete.</span>{" "}
              Anywhere.
            </h1>

            <p className="mb-10 text-lg text-slate-400 md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">
              Nebulla partners with ambitious companies to build brand systems, digital infrastructure, and AI-powered workflows designed to perform in any market.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <button
                onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}
                className="group bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors duration-200 flex items-center gap-2"
              >
                Book a Strategy Call
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── What We Do Section ─────────────────────────────────── */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-4">
              What We Deliver
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
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
      <section className="py-12 md:py-20 bg-slate-900/20 border-t border-slate-800/50 relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-400">Intelligent Automation</span>
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-6">
              Where Strategy Meets{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Execution</span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
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
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NebullaOS Preview ──────────────────────────────────── */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <AnimateIn direction="scale">
            <div
              ref={nebullaOSSection.ref}
              className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-16 overflow-hidden"
            >
              <div className="relative grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 mb-6">
                    <Globe className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">Early Access</span>
                  </div>

                  <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-6">
                    Introducing{" "}
                    <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>NebullaOS</span>
                  </h2>

                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    A proprietary intelligence platform — real-time analytics, AI content generation, automated reporting, and performance tracking, unified in one dashboard.
                  </p>

                  <Link
                    to="/nebullaos"
                    className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200"
                  >
                    Request Early Access
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {nebullaOSFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="group border border-slate-800 bg-slate-900/50 rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-700 hover:-translate-y-1"
                      style={{
                        opacity: nebullaOSSection.inView ? 1 : 0,
                        transform: nebullaOSSection.inView ? "none" : "translateY(20px)",
                        transitionProperty: "opacity, transform, border-color",
                        transitionDuration: "500ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: `${300 + i * 80}ms`,
                      }}
                    >
                      <item.icon className="h-8 w-8 text-slate-400 group-hover:text-blue-400 transition-colors duration-300 mx-auto mb-3" />
                      <p className="text-sm font-medium text-slate-100">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-slate-900/20 border-t border-slate-800/50">
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
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-6">
                  Ready to Build a Brand That{" "}
                  <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Competes Globally?</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  Schedule a no-obligation strategy call to explore what Nebulla can build for you.
                </p>
                <button
                  onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors duration-200"
                >
                  Book a Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
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
