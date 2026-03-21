import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background nebula-bg">
      <Helmet>
        <title>Terms of Service | Nebulla</title>
        <meta name="description" content="Nebulla's Terms of Service — the rules and conditions governing use of our website and services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.nebulla.agency/terms-of-service" />
      </Helmet>
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 animate-page-enter">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: March 2026</p>

          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using nebulla.agency, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nebulla provides brand strategy, web design, content systems, and AI automation services. The specific scope, deliverables, and pricing for any engagement will be defined in a separate agreement or proposal provided to the client.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Use of the Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use the site for any unlawful purpose or in violation of any regulations</li>
                <li>Attempt to gain unauthorised access to any part of the website or its infrastructure</li>
                <li>Reproduce, duplicate, or exploit any content on this site without our written consent</li>
                <li>Transmit any harmful, offensive, or disruptive content through our contact forms</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website — including text, graphics, logos, and design — is the property of Nebulla and protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided for general informational purposes only. Nebulla makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or reliability of any content on this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Nebulla shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. These are provided for convenience only. Nebulla has no control over and accepts no responsibility for the content or practices of any third-party sites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the relevant courts.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these terms, please contact us at{" "}
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

export default TermsOfService;
