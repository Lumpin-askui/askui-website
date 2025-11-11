import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import { cms } from "@/services/cms";

const CustomerStory = () => {
  const caseStudy = cms.getCaseStudyBySlug(
    "deutsche-bahn-boosts-efficiency-with-askui-test-automation"
  );

  if (!caseStudy) {
    return null;
  }

  const keyResults = caseStudy.results.slice(0, 4);

  const impactMetrics = (
    [
      caseStudy.metrics?.timeSaved
        ? { label: "Time Saved", value: caseStudy.metrics.timeSaved }
        : null,
      caseStudy.metrics?.coverage
        ? { label: "Coverage", value: caseStudy.metrics.coverage }
        : null,
      caseStudy.metrics?.roi
        ? { label: "ROI", value: caseStudy.metrics.roi }
        : null,
    ] as Array<{ label: string; value: string } | null>
  ).filter((metric): metric is { label: string; value: string } => Boolean(metric));

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="max-w-5xl mx-auto shadow-lg border-border/40">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
            <div className="p-6 sm:p-10 bg-background flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <img
                  src={caseStudy.logo}
                  alt={caseStudy.company}
                  className="h-14 w-auto object-contain bg-white p-3 rounded-md shadow-sm"
                />
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {caseStudy.industry}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {caseStudy.company}
                </h2>
              </div>

              {caseStudy.quote && (
                <div className="rounded-lg border border-border/50 bg-muted/40 p-5">
                  <Quote className="h-5 w-5 text-[#962C5D] mb-3" />
                  <p className="text-sm sm:text-base italic text-foreground/90 mb-3">
                    “{caseStudy.quote}”
                  </p>
                  {caseStudy.author && (
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {caseStudy.author}
                    </div>
                  )}
                </div>
              )}

              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-accent" asChild>
                <a href={`/case-studies/${caseStudy.slug}`}>
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="p-6 sm:p-10 bg-[#f8fbe7] dark:bg-[#241d27] flex flex-col gap-8 border-t lg:border-t-0 lg:border-l border-border/30">
              {keyResults.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                    Key Results
                  </h3>
                  <ul className="space-y-3">
                    {keyResults.map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle className="h-5 w-5 text-[#92c51e] flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {impactMetrics.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                    Impact Metrics
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {impactMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg bg-white/70 dark:bg-white/10 p-4 text-center shadow-sm"
                      >
                        <div className="text-xl font-bold text-[#7ab310] mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CustomerStory;
