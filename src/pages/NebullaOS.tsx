import { useState } from "react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import {
  BarChart3,
  Bot,
  Zap,
  Globe,
  LineChart,
  Bell,
  FileText,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdzedrq";

const NebullaOS = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast({
          title: "You're on the list!",
          description: "We'll notify you when NebullaOS launches.",
        });
        setEmail("");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us at hello@nebulla.agency",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: BarChart3, title: "Real-time Dashboards", description: "All your key metrics in a single, clear interface. No more switching between platforms." },
    { icon: FileText, title: "Automated Reports", description: "Scheduled, AI-generated performance reports delivered directly to your inbox." },
    { icon: Bot, title: "Content Generation", description: "AI-assisted content creation and scheduling, aligned to your brand voice." },
    { icon: Users, title: "Competitor Intelligence", description: "Monitor competitor positioning and activity across channels in real time." },
    { icon: Zap, title: "Workflow Automation", description: "Eliminate repetitive tasks with custom automation built around your processes." },
    { icon: Bell, title: "Smart Alerts", description: "Receive immediate notifications when performance metrics require your attention." }
  ];

  return (
    <div className="min-h-screen bg-[#111620] nocturnal-bg">
      <Helmet>
        <title>NebullaOS | AI Intelligence Platform for Modern Business</title>
        <meta name="description" content="NebullaOS is Nebulla's proprietary operating platform — unified AI agents, real-time analytics, automated reporting, and performance intelligence in one dashboard." />
        <meta name="keywords" content="NebullaOS, AI operating system, business intelligence platform, AI dashboard, automated reporting, real-time analytics, AI agents, workflow intelligence platform" />
        <meta property="og:title" content="NebullaOS | AI Intelligence Platform for Modern Business" />
        <meta property="og:description" content="Real-time analytics, AI content generation, automated reporting, and performance tracking — unified in one proprietary platform. Coming soon." />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/nebullaos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NebullaOS | AI Intelligence Platform by Nebulla" />
        <meta name="twitter:description" content="Unified AI agents, real-time analytics, and automated reporting — all in one proprietary platform. Coming soon." />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/nebullaos" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, rgba(46,144,250,0.2) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, rgba(158,119,237,0.2) 0%, transparent 70%)' }} />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Launching Soon</span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold tracking-tighter text-slate-100 md:text-5xl lg:text-6xl animate-fade-in-up delay-100">
              Introducing{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>NebullaOS</span>
            </h1>

            <p className="mb-4 text-xl text-slate-400 md:text-2xl max-w-3xl mx-auto animate-fade-in-up delay-200">
              The Operating System for Brand Intelligence
            </p>

            <p className="mb-10 text-lg text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-300">
              A unified platform that brings together AI automation, real-time analytics, content workflows, and performance reporting — so your brand operates smarter at every level.
            </p>

            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-md animate-fade-in-up delay-400">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-400 focus:border-blue-400"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200 whitespace-nowrap disabled:opacity-60"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl mb-4">
              One Platform. Complete Visibility.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              NebullaOS consolidates the tools your team relies on into a single, intelligent platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group border border-slate-800 bg-slate-900/40 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-3">
                  <feature.icon className="h-6 w-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-12 md:py-20 bg-slate-900/20 border-t border-slate-800/50 relative">
        <div className="container relative mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-6">
                Your Brand's{" "}
                <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Command Center</span>
              </h2>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                NebullaOS consolidates your brand's performance data, content pipeline, and automation workflows into one platform — giving you complete visibility and control.
              </p>

              <div className="space-y-4">
                {[
                  "Cross-platform analytics in a single dashboard",
                  "AI-driven content recommendations based on performance data",
                  "Automated performance reports, delivered on schedule",
                  "A custom workflow builder with no-code configuration",
                  "Built-in collaboration tools for distributed teams"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                {/* Dashboard header */}
                <div className="border-b border-slate-800 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">NebullaOS Dashboard</span>
                  <div className="h-5 w-5 rounded bg-slate-800" />
                </div>

                <div className="p-5 space-y-4">
                  {/* Stat row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Marketing ROI", value: "+148%", color: "text-blue-400" },
                      { label: "Leads This Month", value: "2,841", color: "text-purple-400" },
                      { label: "Content Score", value: "94/100", color: "text-blue-400" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-slate-800/60 rounded-xl p-3">
                        <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                        <p className={`text-base font-bold font-display ${stat.color}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Real-time Marketing ROI bar chart */}
                  <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-slate-300">Real-time Marketing ROI</span>
                      <span className="text-xs text-blue-400">Live</span>
                    </div>
                    <svg viewBox="0 0 260 80" className="w-full" preserveAspectRatio="none" style={{ height: 80 }}>
                      {/* Grid lines */}
                      {[20, 40, 60, 80].map((y) => (
                        <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
                      ))}
                      {/* Bars */}
                      {[
                        { x: 10,  h: 35, w: 28 },
                        { x: 48,  h: 52, w: 28 },
                        { x: 86,  h: 42, w: 28 },
                        { x: 124, h: 68, w: 28 },
                        { x: 162, h: 55, w: 28 },
                        { x: 200, h: 72, w: 28 },
                        { x: 225, h: 60, w: 28 },
                      ].map((bar, i) => (
                        <rect
                          key={i}
                          x={bar.x}
                          y={80 - bar.h}
                          width={bar.w}
                          height={bar.h}
                          rx="3"
                          fill={i === 5 ? "#2E90FA" : "rgba(46,144,250,0.35)"}
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Brand Performance line graph */}
                  <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-slate-300">Brand Performance</span>
                      <span className="text-xs text-purple-400">+12% this week</span>
                    </div>
                    <svg viewBox="0 0 260 60" className="w-full" preserveAspectRatio="none" style={{ height: 60 }}>
                      {/* Area fill */}
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9E77ED" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#9E77ED" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 L40,42 L80,38 L120,28 L160,20 L200,15 L260,8 L260,60 L0,60 Z"
                        fill="url(#lineGrad)"
                      />
                      <path
                        d="M0,50 L40,42 L80,38 L120,28 L160,20 L200,15 L260,8"
                        fill="none"
                        stroke="#9E77ED"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      {/* Dots */}
                      {[
                        [0, 50], [40, 42], [80, 38], [120, 28], [160, 20], [200, 15], [260, 8]
                      ].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3" fill="#9E77ED" />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Limited Early Access</span>
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-6">
                Request Early Access to{" "}
                <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>NebullaOS</span>
              </h2>

              <p className="text-lg text-slate-400 mb-8">
                A limited number of early access spots are available. Join the list to secure your place and receive founding member pricing.
              </p>

              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 bg-slate-900 border-slate-800 text-slate-100 placeholder:text-slate-400 focus:border-blue-400"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200 whitespace-nowrap disabled:opacity-60"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NebullaOS;
