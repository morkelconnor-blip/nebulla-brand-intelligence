import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Mail, 
  MessageCircle,
  ArrowRight,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background nebula-bg">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow delay-300" />
        </div>
        
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              Start the{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Whether you have a brief ready or are still defining the scope, we'll help you find the right path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3 mb-20">
            {/* Book a Call */}
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 card-glow">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                Book a Strategy Call
              </h3>
              <p className="text-muted-foreground mb-6">
                A focused 30-minute call to understand your goals and determine how Nebulla can help.
              </p>
              <Button variant="hero" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Schedule Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Email */}
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 card-glow">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Prefer to write? We respond to all enquiries within one business day.
              </p>
              <Button variant="hero-outline" className="w-full" asChild>
                <a href="mailto:hello@nebulla.agency">
                  hello@nebulla.agency
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="group rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 card-glow">
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                For quicker exchanges, reach us directly on WhatsApp.
              </p>
              <Button variant="hero-outline" className="w-full" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Start Chat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-nebula-surface/50 p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl mb-4">
                  Tell Us About Your Project
                </h2>
                <p className="text-muted-foreground">
                  Share the details and we'll come back to you with initial thoughts within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-12 bg-background/50 border-border/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="h-12 bg-background/50 border-border/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-12 bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-background/50 border-border/50"
                    required
                  />
                </div>

                <Button variant="hero" size="xl" type="submit" className="w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground mb-6">Connect with us on social media</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", label: "Twitter" },
                { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", label: "LinkedIn" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", label: "Instagram" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                  aria-label={social.label}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
