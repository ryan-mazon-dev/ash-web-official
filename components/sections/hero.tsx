import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-secondary border border-primary/20 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              HIPAA Compliant Insurance Verification
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Know Your Coverage.
            <br />
            <span className="text-primary">Before You Book.</span>
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop calling around to verify insurance. Upload your info, tell us which providers you&apos;re considering, and we&apos;ll handle the rest. Get clear answers about your coverage in hours, not days.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#cta" size="lg" className="w-full sm:w-auto gap-2">
              Try It Now
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="mt-16 lg:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-5xl">
            <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-muted" />
                <div className="w-3 h-3 rounded-full bg-muted" />
                <div className="w-3 h-3 rounded-full bg-muted" />
              </div>
              <div className="flex-1 text-center text-sm text-muted-foreground">
                app.medsure.com
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Panel - Provider List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-card-foreground">Provider Verification</h3>
                    <span className="text-xs px-2 py-1 bg-warning/10 text-warning rounded-full font-medium">3 pending</span>
                  </div>
                  {[
                    { name: "Dr. Sarah Chen, MD", specialty: "Dermatology", status: "Verified", statusColor: "bg-success" },
                    { name: "Austin Physical Therapy", specialty: "Physical Therapy", status: "Pending", statusColor: "bg-warning" },
                    { name: "Metro Imaging Center", specialty: "Radiology", status: "Pending", statusColor: "bg-warning" },
                  ].map((provider, i) => (
                    <div key={i} className="p-4 bg-secondary/50 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="font-medium text-card-foreground">{provider.name}</p>
                        <p className="text-sm text-muted-foreground">{provider.specialty}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${provider.statusColor}`} />
                        <span className="text-sm text-muted-foreground">{provider.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Right Panel - Status */}
                <div className="bg-secondary/30 rounded-xl p-6">
                  <h3 className="font-semibold text-card-foreground mb-4">Coverage Status</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Plan</span>
                      <span className="font-medium text-card-foreground">Blue Cross PPO Gold</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">In-Network Found</span>
                      <span className="font-medium text-success">1 provider</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Verification Time</span>
                      <span className="font-medium text-card-foreground">~18 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Est. Savings</span>
                      <span className="font-medium text-primary">$2,400+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
