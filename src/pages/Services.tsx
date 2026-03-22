import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateIn } from "@/components/AnimateIn";
import { useInView } from "@/hooks/use-in-view";
import { Helmet } from "react-helmet-async";
import {
  Palette,
  Code,
  PenTool,
  Zap,
  ArrowRight,
  Sparkles,
  Globe,
  BarChart3,
  Search,
  Layers,
  MessageSquare,
  LineChart,
  Bot,
  Database
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "A complete brand identity — visual system, tone of voice, and strategic positioning — engineered to communicate authority in any market.",
    href: "/services/branding-identity",
    features: [
      { icon: Sparkles,     text: "Visual identity design" },
      { icon: Layers,       text: "Logo design & systems" },
      { icon: MessageSquare,text: "Tone of voice development" },
      { icon: Globe,        text: "Brand guidelines & systems" },
    ],
  },
  {
    icon: Code,
    title: "Websites & Digital Presence",
    description: "High-performance websites built to convert. Designed with clarity, developed for speed, and optimised for search from the ground up.",
    href: "/services/websites-seo",
    features: [
      { icon: Palette,   text: "Web design (Framer/Webflow style)" },
      { icon: Code,      text: "Fast, responsive development" },
      { icon: Search,    text: "SEO foundations" },
      { icon: LineChart, text: "Conversion optimization" },
    ],
  },
  {
    icon: PenTool,
    title: "Content & Social Systems",
    description: "Structured content systems powered by AI — built to keep your brand visible, consistent, and commercially relevant across every channel.",
    href: "/services/content-social",
    features: [
      { icon: PenTool,  text: "Monthly social content" },
      { icon: Bot,      text: "AI-assisted content generation" },
      { icon: Sparkles, text: "Creative direction" },
      { icon: Layers,   text: "Campaign asset design" },
    ],
  },
  {
    icon: Zap,
    title: "Automation & Intelligence",
    description: "Custom AI workflows and intelligent infrastructure that reduce operational friction and allow your team to focus on decisions, not administration.",
    href: "/services/automation-intelligence",
    features: [
      { icon: Bot,       text: "AI workflows & automations" },
      { icon: BarChart3, text: "Real-time dashboards" },
      { icon: LineChart, text: "Analytics & reporting" },
      { icon: Database,  text: "CRM automations" },
    ],
  },
];

const processSteps = [
  { step: "01", title: "Discovery",  desc: "Deep dive into your brand, goals, and market" },
  { step: "02", title: "Strategy",   desc: "Define the roadmap for success" },
  { step: "03", title: "Execute",    desc: "Bring the vision to life with precision" },
  { step: "04", title: "Optimize",   desc: "Measure, learn, and continuously improve" },
];

function ServiceRow({ service, index }: { service: typeof services[0] & { href: string }; index: number }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className="group relative border border-slate-800 bg-slate-900/30 rounded-2xl p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-slate-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transitionProperty: "opacity, transform, border-color",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="relative grid gap-8 lg:grid-cols-2 items-start">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-4">
            <service.icon className="h-8 w-8 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-100 md:text-3xl mb-4">
            {service.title}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            {service.description}
          </p>
          <Link
            to={service.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 group/link"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>

        {/* Right: feature badge pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feature, j) => (
            <div
              key={j}
              className="flex items-center gap-3 border border-slate-800 bg-slate-900/50 rounded-xl p-4 transition-all duration-300 hover:border-slate-700 hover:-translate-y-0.5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(16px)",
                transitionProperty: "opacity, transform, border-color",
                transitionDuration: "450ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${index * 80 + 150 + j * 60}ms`,
              }}
            >
              <feature.icon className="h-5 w-5 text-slate-400 flex-shrink-0" />
              <span className="text-sm text-slate-100">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  const processSection = useInView(0.1);
  const ctaSection     = useInView(0.1);

  return (
    <div className="min-h-screen bg-[#111620] nocturnal-bg animate-page-enter">
      <Helmet>
        <title>AI Automation, Branding &amp; Web Design Services | Nebulla</title>
        <meta name="description" content="From AI workflow automation and CRM systems to brand identity and conversion-optimised websites — done-for-you systems built to replace manual execution and scale with your business." />
        <meta name="keywords" content="AI workflow automation, branding agency, web design, CRM automation, content systems, AI agency services, business automation services, brand identity, SEO web design, intelligent operations" />
        <meta property="og:title" content="AI Automation, Branding & Web Design Services | Nebulla" />
        <meta property="og:description" content="Done-for-you systems that replace manual execution. AI workflows, brand identity, high-converting websites, and intelligent automation — built to scale." />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Nebulla AI Automation & Branding Agency" />
        <meta name="twitter:description" content="AI workflows, brand identity, high-converting websites, and intelligent automation — done for you and built to scale." />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/services" />
      </Helmet>
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(46,144,250,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tighter text-slate-100 md:text-5xl lg:text-6xl animate-fade-in-up">
              Everything You Need to{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Build, Launch & Scale</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────── */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="space-y-8 md:space-y-16">
            {services.map((service, i) => (
              <ServiceRow key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-slate-900/20 border-t border-slate-800/50 relative">
        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-4">
              Our Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </AnimateIn>

          <div ref={processSection[0]} className="grid gap-8 md:grid-cols-4">
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="group text-center"
                style={{
                  opacity: processSection[1] ? 1 : 0,
                  transform: processSection[1] ? "none" : "translateY(32px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 transition-all duration-300 group-hover:border-slate-700">
                  <span className="font-display text-xl font-bold text-blue-400">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
                {i < 3 && (
                  <div
                    className="hidden md:block mt-6 mx-auto h-px bg-slate-800 overflow-hidden"
                    style={{ width: "64px" }}
                  >
                    <div
                      style={{
                        height: "1px",
                        width: processSection[1] ? "100%" : "0%",
                        background: "hsl(222 30% 18%)",
                        transition: `width 0.6s ease ${i * 120 + 400}ms`,
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
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
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-6">
                  Ready to Build a Brand That <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Competes Globally?</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8">
                  Schedule a no-obligation strategy call to explore what Nebulla can build for you.
                </p>
                <button
                  onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors duration-200"
                >
                  Book a Call
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

export default Services;
