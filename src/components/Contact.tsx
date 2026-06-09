const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tighter text-slate-100 md:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 mb-8">
            Ready to work together? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@nebulla.agency"
            className="text-2xl font-semibold transition-colors duration-200"
            style={{ color: '#2E90FA' }}
          >
            hello@nebulla.agency
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
