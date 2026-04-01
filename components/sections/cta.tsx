import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";

export function CTASection() {
  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl overflow-hidden shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Stop Guessing About Your Coverage
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                Join thousands of patients who have taken the stress out of insurance verification. Get started in minutes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="#"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Try It Now
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Pricing
                </Button>
              </div>
              <p className="mt-6 text-sm text-primary-foreground/60">
                Free tier available. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
