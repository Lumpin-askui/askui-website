const Features = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-white max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Privacy & Security First
            </h3>
            <p className="text-white/80 mb-6">
              ISO27001 certified with complete data sovereignty. Deploy on-premise or bring your own models for maximum control.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                ISO27001 Certified
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                On-Premise Available
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                BYOM Support
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm">
                SOC 2 Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
