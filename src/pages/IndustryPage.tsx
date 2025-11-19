import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Building2, ShieldCheck, BarChart3, Zap } from "lucide-react";

interface IndustryPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const IndustryPage = ({ title, subtitle, description, features }: IndustryPageProps) => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 border-b border-border/40" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
            <Building2 size={16} />
            <span>Industry Solution</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why AskUI for {title}?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">ISO27001 certified and GDPR compliant to ensure your data remains secure.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Scalable Infrastructure</h3>
                <p className="text-muted-foreground">Run thousands of concurrent sessions with Agent OS.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Implementation</h3>
                <p className="text-muted-foreground">Get up and running in days, not months, with our "One Brain" approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default IndustryPage;

