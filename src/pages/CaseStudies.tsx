import { Fragment, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ChevronDown } from "lucide-react";
import { cms } from "@/services/cms";

const summarize = (text: string, sentences = 1) => {
  const parts = text.split(/(?<=\.)\s+/).filter(Boolean);
  const summary = parts.slice(0, sentences).join(" ");
  return summary.endsWith(".") ? summary : `${summary}.`;
};

const CaseStudies = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const caseStudies = cms
    .getAllCaseStudies()
    .sort((a, b) => a.company.localeCompare(b.company));

  const toggleRow = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  const clampStyles: CSSProperties = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 5,
    overflow: "hidden",
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Customer Success Stories
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Explore every AskUI case study in a single view. Filter, compare, and dive deeper into the stories that match your needs.
            </p>
            <div className="flex flex-wrap gap-8 justify-center text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-1">70%</div>
                <div className="text-sm text-white/80">Average Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-1">90%</div>
                <div className="text-sm text-white/80">Average Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-1">300%</div>
                <div className="text-sm text-white/80">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="overflow-hidden border-border/60 shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">Challenge Snapshot</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">AskUI Solution</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">Key Metrics</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">Key Results</th>
                    <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {caseStudies.map((study) => {
                    const isExpanded = expandedSlug === study.slug;
                    const challengeSummary = summarize(study.challenge, 2);
                    const solutionSummary = summarize(study.solution, 2);
                    const keyResults = study.results.slice(0, 2);
                    const metrics = [
                      study.metrics?.timeSaved
                        ? { badge: study.metrics.timeSaved, label: "Time Saved" }
                        : null,
                      study.metrics?.coverage
                        ? { badge: study.metrics.coverage, label: "Coverage" }
                        : null,
                      study.metrics?.roi
                        ? { badge: study.metrics.roi, label: "ROI" }
                        : null,
                    ].filter((metric): metric is { badge: string; label: string } => Boolean(metric));

                    return (
                      <Fragment key={study.slug}>
                        <tr className="hover:bg-muted/40 transition-colors">
                          <td className="px-6 py-4 align-middle h-24">
                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                onClick={() => toggleRow(study.slug)}
                                aria-expanded={isExpanded}
                                aria-label={`Toggle details for ${study.company}`}
                                className="flex h-8 w-8 items-center justify-center rounded-md border border-border/70 text-muted-foreground hover:bg-muted/60 transition"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                                />
                              </button>
                              <img
                                src={study.logo}
                                alt={study.company}
                                className="h-12 w-12 object-contain rounded bg-white p-3 border border-border/50"
                              />
                              <div>
                                <Link
                                  to={`/case-studies/${study.slug}`}
                                  className="text-base font-semibold text-foreground hover:text-[#962C5D] transition-colors"
                                >
                                  {study.company}
                                </Link>
                                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                                  {study.industry}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4 align-middle h-24 text-muted-foreground leading-relaxed text-sm" style={{ maxWidth: "18rem" }}>
                            <div style={clampStyles}>{challengeSummary}</div>
                          </td>

                          <td className="px-6 py-4 align-middle h-24 text-muted-foreground leading-relaxed text-sm" style={{ maxWidth: "18rem" }}>
                            <div style={clampStyles}>{solutionSummary}</div>
                          </td>

                          <td className="px-6 py-4 align-middle h-24">
                            <div className="flex flex-col gap-2">
                              {metrics.length > 0 ? (
                                metrics.map((metric) => (
                                  <span
                                    key={metric.label}
                                    className="inline-flex items-center gap-2 rounded-md bg-[#962C5D]/10 px-3 py-1 text-xs font-semibold text-[#962C5D]"
                                  >
                                    {metric.badge}
                                    <span className="text-muted-foreground/80 font-medium">{metric.label}</span>
                                  </span>
                                ))
                              ) : (
                                <span className="text-xs text-muted-foreground">—</span>
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-4 align-middle h-24">
                            <ul className="space-y-2 text-muted-foreground text-sm">
                              {keyResults.map((result, idx) => (
                                <li key={idx} className="leading-relaxed">
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </td>

                          <td className="px-6 py-4 align-middle h-24">
                            <div className="flex flex-col gap-2">
                              <Button
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-accent font-semibold shadow-sm"
                                asChild
                              >
                                <Link to={`/case-studies/${study.slug}`}>
                                  Read Full Case Study
                                  <BookOpen className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              <button
                                type="button"
                                onClick={() => toggleRow(study.slug)}
                                aria-expanded={isExpanded}
                                className="text-xs font-semibold text-[#962C5D] hover:underline"
                              >
                                {isExpanded ? "Hide details" : "Show details"}
                              </button>
                            </div>
                          </td>
                        </tr>

                        {isExpanded && (
                          <tr className="bg-muted/20">
                            <td colSpan={6} className="px-6 py-6">
                              <div className="grid gap-6 lg:grid-cols-3">
                                <div className="lg:col-span-2 space-y-4">
                                  <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                      Full Challenge
                                    </h3>
                                    <p className="text-sm leading-relaxed text-foreground">
                                      {study.challenge}
                                    </p>
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                      Full Solution
                                    </h3>
                                    <p className="text-sm leading-relaxed text-foreground">
                                      {study.solution}
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="rounded-lg border border-border/50 bg-background p-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                                      Quote
                                    </h4>
                                    <p className="text-sm italic text-foreground/90 mb-3">“{study.quote}”</p>
                                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                                      {study.author}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Testing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join these industry leaders and see similar results in your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/enterprise">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.caesr.ai" target="_blank" rel="noopener noreferrer">
                  Try Caesr
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
