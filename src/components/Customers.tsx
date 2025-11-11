import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cms } from "@/services/cms";

const Customers = () => {
  const caseStudies = cms
    .getAllCaseStudies()
    .sort((a, b) => a.company.localeCompare(b.company));

  return (
    <section id="customers" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Customer Success at a Glance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse every live case study in one compact view. Click any customer to explore the full story.
          </p>
        </div>

        <Card className="overflow-hidden shadow-sm border-border/60">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">
                    Highlights
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                    Key Metrics
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground uppercase tracking-wider">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {caseStudies.map((study) => {
                  const highlightResults = study.results.slice(0, 2);
                  const metrics = [
                    study.metrics?.timeSaved
                      ? { badge: study.metrics.timeSaved, label: "Time Saved" }
                      : null,
                    study.metrics?.coverage
                      ? { badge: study.metrics.coverage, label: "Coverage" }
                      : null,
                    study.metrics?.roi ? { badge: study.metrics.roi, label: "ROI" } : null,
                  ].filter((metric): metric is { badge: string; label: string } => Boolean(metric));

                  return (
                    <tr key={study.slug} className="hover:bg-muted/40 transition-colors">
                      <td className="px-6 py-5 align-top">
                        <div className="flex items-center gap-4">
                          <img
                            src={study.logo}
                            alt={study.company}
                            className="h-10 w-10 object-contain rounded bg-white p-2 border border-border/50"
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

                      <td className="px-6 py-5 align-top">
                        <ul className="space-y-2 text-muted-foreground">
                          {highlightResults.map((result, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {result}
                            </li>
                          ))}
                        </ul>
                      </td>

                      <td className="px-6 py-5 align-top">
                        <div className="flex flex-wrap gap-2">
                          {metrics.length > 0 ? (
                            metrics.map((metric) => (
                              <span
                                key={metric.label}
                                className="inline-flex items-center gap-1 rounded-full bg-[#962C5D]/10 px-3 py-1 text-xs font-semibold text-[#962C5D]"
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

                      <td className="px-6 py-5 align-top">
                        <Link
                          to={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-background"
                        >
                          Read Case Study
                          <BookOpen className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Customers;
