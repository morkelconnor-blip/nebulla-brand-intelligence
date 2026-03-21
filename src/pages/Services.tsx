import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    href: "/services/branding-identity",
    description: "A complete brand identity — visual system, tone of voice, and strategic positioning — engineered to communicate authority in any market.",
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
    href: "/services/websites-seo",
    description: "High-performance websites built to convert. Designed with clarity, developed for speed, and optimised for search from the ground up.",
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
    href: "/services/content-social",
    description: "Structured content systems powered by AI — built to keep your brand visible, consistent, and commercially relevant across every channel.",
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
    href: "/services/automation-intelligence",
    description: "Custom AI workflows and intelligent infrastructure that reduce operational friction and allow your team to focus on decisions, not administration.",
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

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, inView] = useInView(0.08);
  return (
    <div
      ref={ref}
      className="group relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/50 p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-primary/30"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transitionProperty: "opacity, transform, border-color, box-shadow",
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Hover glow */}
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid gap-8 lg:grid-cols-2 items-start">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 transition-transform duration-300 group-hover:scale-110">
            <service.icon className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl mb-4">
            {service.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>
          <Link
            to={service.href}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-colors"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right: feature badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feature, j) => (
            <div
              key={j}
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background/50 hover:-translate-y-0.5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(16px)",
                transitionProperty: "opacity, transform, border-color, background-color",
                transitionDuration: "450ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${index * 80 + 150 + j * 60}ms`,
              }}
            >
              <feature.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature.text}</span>
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
    <div className="min-h-screen bg-background nebula-bg animate-page-enter">
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              Everything You Need to{" "}
              <span className="gradient-text">Build, Launch & Scale</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-8 md:space-y-16">
            {services.map((service, i) => (
              <ServiceRow key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ────────────────────────────────────── */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />

        <div className="container relative mx-auto px-6">
          <AnimateIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                  <span className="font-display text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {i < 3 && (
                  <div
                    className="hidden md:block mt-6 mx-auto h-px bg-gradient-to-r from-transparent via-border to-transparent overflow-hidden"
                    style={{ width: "64px" }}
                  >
                    <div
                      style={{
                        height: "1px",
                        width: processSection[1] ? "100%" : "0%",
                        background: "linear-gradient(to right, transparent, hsl(var(--border)), transparent)",
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
                    Ready to Build a Brand That <span className="gradient-text">Competes Globally?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Schedule a no-obligation strategy call to explore what Nebulla can build for you.
                  </p>
                  <Button variant="hero" size="xl" className="group" onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}>
                    Book a Call
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

export default Services;
