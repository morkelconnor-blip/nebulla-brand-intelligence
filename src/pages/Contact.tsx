import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Mail,
  ArrowRight,
  Send,
  MessageCircle
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mgondkav", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast({
          title: "Something went wrong.",
          description: "Please try again or email us directly at hello@nebulla.agency.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong.",
        description: "Please try again or email us directly at hello@nebulla.agency.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#111620] nocturnal-bg">
      <Helmet>
        <title>Contact Nebulla | Start the Conversation</title>
        <meta name="description" content="Ready to replace manual execution with automated systems? Book a free strategy call or send us a message — we respond to all enquiries within one business day." />
        <meta name="keywords" content="contact Nebulla, book a strategy call, AI agency enquiry, hire AI automation agency, brand strategy call" />
        <meta property="og:title" content="Contact Nebulla | Start the Conversation" />
        <meta property="og:description" content="Book a free strategy call or send us a message. We respond to all enquiries within one business day." />
        <meta property="og:image" content="https://www.nebulla.agency/og-image.png" />
        <meta property="og:url" content="https://www.nebulla.agency/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Nebulla | Start the Conversation" />
        <meta name="twitter:description" content="Book a free strategy call or send an enquiry — Nebulla responds within one business day." />
        <meta name="twitter:image" content="https://www.nebulla.agency/og-image.png" />
        <link rel="canonical" href="https://www.nebulla.agency/contact" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, rgba(158,119,237,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tighter text-slate-100 md:text-5xl lg:text-6xl animate-fade-in-up">
              Start the{" "}
              <span style={{ color: '#2E90FA', textShadow: '0 0 20px rgba(46, 144, 250, 0.5)' }}>Conversation</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Whether you have a brief ready or are still defining the scope, we'll help you find the right path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2 max-w-3xl mx-auto mb-20">
            {/* Book a Call */}
            <div className="group border border-slate-800 bg-slate-900/30 rounded-2xl p-8 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
              <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-4">
                <Calendar className="h-8 w-8 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
                Book a Strategy Call
              </h3>
              <p className="text-slate-400 mb-6">
                A focused 30-minute call to understand your goals and determine how Nebulla can help.
              </p>
              <button
                onClick={() => (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/connor-nebulla/30min' })}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-6 py-3 transition-colors duration-200"
              >
                Schedule Call
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Email */}
            <div className="group border border-slate-800 bg-slate-900/30 rounded-2xl p-8 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
              <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-4">
                <Mail className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
                Email Us
              </h3>
              <p className="text-slate-400 mb-6">
                Prefer to write? We respond to all enquiries within one business day.
              </p>
              <a
                href="mailto:hello@nebulla.agency"
                className="w-full inline-flex items-center justify-center border border-slate-700 hover:border-blue-400 text-slate-300 font-semibold rounded-xl px-6 py-3 transition-colors duration-200"
              >
                hello@nebulla.agency
              </a>
            </div>
            {/* WhatsApp — temporarily hidden until account is created
            <div className="group border border-slate-800 bg-slate-900/30 rounded-2xl p-8 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
              <div className="mb-6 inline-flex bg-slate-800/60 rounded-xl p-4">
                <MessageCircle className="h-8 w-8 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-slate-100">
                WhatsApp
              </h3>
              <p className="text-slate-400 mb-6">
                For quicker exchanges, reach us directly on WhatsApp.
              </p>
              <a href="https://wa.me/YOURNUMBER" target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-400 text-slate-300 font-semibold rounded-xl px-6 py-3 transition-colors duration-200">
                Start Chat
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            */}
          </div>

          {/* Contact Form */}
          <div className="mx-auto max-w-2xl">
            <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl font-bold text-slate-100 md:text-3xl mb-4">
                  Tell Us About Your Project
                </h2>
                <p className="text-slate-400">
                  Share the details and we'll come back to you with initial thoughts within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-100 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-12 bg-slate-900 border-slate-800 focus:border-blue-400 text-slate-100 placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-100 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="h-12 bg-slate-900 border-slate-800 focus:border-blue-400 text-slate-100 placeholder:text-slate-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-100 mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="h-12 bg-slate-900 border-slate-800 focus:border-blue-400 text-slate-100 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-100 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] bg-slate-900 border-slate-800 focus:border-blue-400 text-slate-100 placeholder:text-slate-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl px-8 py-4 transition-colors duration-200"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-20 text-center">
            <p className="text-slate-400 mb-6">Connect with us on social media</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", label: "Twitter" },
                { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", label: "LinkedIn" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", label: "Instagram" }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/30 text-slate-400 transition-all duration-300 hover:border-slate-700 hover:text-blue-400"
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
