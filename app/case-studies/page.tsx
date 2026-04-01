import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { caseStudies } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-24 lg:pt-32">
        {/* Header */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Case Studies"
              title="Real Results from Real Patients"
              description="See how Medsure has helped patients navigate insurance verification and save time, money, and stress."
            />
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.slice(0, 2).map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  title={caseStudy.title}
                  client={caseStudy.client}
                  challenge={caseStudy.challenge}
                  solution={caseStudy.solution}
                  results={caseStudy.results}
                  quote={caseStudy.quote}
                />
              ))}
            </div>

            {/* Featured Case Study - Full Width */}
            <div className="mt-8">
              <CaseStudyCard
                title={caseStudies[2].title}
                client={caseStudies[2].client}
                challenge={caseStudies[2].challenge}
                solution={caseStudies[2].solution}
                results={caseStudies[2].results}
                quote={caseStudies[2].quote}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">By the Numbers</h2>
              <p className="mt-4 text-muted-foreground">
                The impact of streamlined insurance verification
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: "10,000+", label: "Verifications Completed" },
                { stat: "$2.4M", label: "Saved in Surprise Bills" },
                { stat: "98%", label: "Customer Satisfaction" },
                { stat: "24hrs", label: "Average Response Time" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary">{item.stat}</div>
                  <div className="mt-2 text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Write Your Success Story?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of patients who have simplified their insurance verification process.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Started Now
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
