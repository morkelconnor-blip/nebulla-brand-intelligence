import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background nebula-bg">
      <Helmet>
        <title>Privacy Policy | Nebulla</title>
        <meta name="description" content="Nebulla's Privacy Policy — how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.nebulla.agency/privacy-policy" />
      </Helmet>
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 animate-page-enter">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: March 2026</p>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nebulla ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit nebulla.agency or engage with our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Contact information (name, email address, phone number) when you submit a form</li>
                <li>Usage data (pages visited, time on site, browser type) via Google Analytics</li>
                <li>Communication data when you correspond with us by email</li>
                <li>Email address when you join the NebullaOS waitlist</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To respond to your enquiries and provide our services</li>
                <li>To send you updates about NebullaOS if you join our waitlist</li>
                <li>To analyse website performance and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use third-party services including Google Analytics (analytics), Formspree (form submissions), and Calendly (meeting scheduling). Each operates under its own privacy policy governing how data is used and stored.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal data only as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at{" "}
                <a href="mailto:hello@nebulla.agency" className="text-primary hover:underline">
                  hello@nebulla.agency
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to improve site performance and analyse traffic. You may disable cookies in your browser settings, though this may affect certain site functionality.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any privacy-related questions, please contact us at{" "}
                <a href="mailto:hello@nebulla.agency" className="text-primary hover:underline">
                  hello@nebulla.agency
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
