import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const NebullaOS = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when NebullaOS launches.",
      });
      setEmail("");
    }
  };

  const features = [
    { icon: BarChart3, title: "Real-time Dashboards", description: "Monitor all your KPIs in one beautiful interface" },
    { icon: FileText, title: "Automated Reports", description: "AI-written performance reports delivered on schedule" },
    { icon: Bot, title: "Content Generation", description: "Generate and schedule content with AI assistance" },
    { icon: Users, title: "Competitor Intelligence", description: "Track and analyze competitor movements" },
    { icon: Zap, title: "Workflow Automation", description: "Automate repetitive tasks across your stack" },
    { icon: Bell, title: "Smart Alerts", description: "Get notified when metrics need your attention" }
  ];

  return (
    <div className="min-h-screen bg-background nebula-bg">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/3 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl animate-pulse-glow delay-500" />
        </div>
        
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Launching Soon</span>
            </div>
            
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up delay-100">
              Introducing{" "}
              <span className="gradient-text">NebullaOS</span>
            </h1>
            
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto animate-fade-in-up delay-200">
              The Intelligence Engine for Modern Brands
            </p>
            
            <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-300">
              A smart operating system that merges AI, automation, analytics, and content workflows into one seamless platform.
            </p>
            
            {/* Waitlist Form */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-md animate-fade-in-up delay-400">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                  required
                />
                <Button variant="hero" size="xl" type="submit">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              NebullaOS brings together all the tools modern brands need to scale intelligently
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="group rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 card-glow"
              >
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-surface/30 to-transparent" />
        
        <div className="container relative mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                Your Brand's{" "}
                <span className="gradient-text">Command Center</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                NebullaOS gives you a complete overview of your brand's performance, content, and automation — all in one intuitive dashboard.
              </p>
              
              <div className="space-y-4">
                {[
                  "Unified analytics across all platforms",
                  "AI-powered content recommendations",
                  "Automated reporting and insights",
                  "Custom workflow builder",
                  "Team collaboration tools"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm card-glow overflow-hidden">
                {/* Mock Dashboard UI */}
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-nebula-surface to-background p-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-20 rounded-lg bg-primary/10 p-3">
                        <div className="h-2 w-12 bg-primary/30 rounded mb-2" />
                        <div className="h-6 w-16 bg-primary/20 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-32 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 mb-4 flex items-end p-4">
                    <div className="flex gap-2 items-end">
                      {[40, 60, 45, 80, 65, 90, 70].map((h, i) => (
                        <div key={i} className="w-8 bg-primary/40 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 rounded-lg bg-muted/30" />
                    <div className="h-16 rounded-lg bg-muted/30" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-px">
            <div className="rounded-3xl bg-background/90 backdrop-blur-xl p-8 md:p-16">
              <div className="mx-auto max-w-2xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Limited Early Access</span>
                </div>
                
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-6">
                  Be the First to Experience{" "}
                  <span className="gradient-text">NebullaOS</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Join our waitlist for exclusive early access and special founding member pricing.
                </p>
                
                <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                    <Button variant="hero" size="xl" type="submit">
                      Join Waitlist
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NebullaOS;
