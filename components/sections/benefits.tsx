import { benefits } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Benefits"
          title="Why Patients Choose Medsure"
          description="We take the frustration out of insurance verification so you can focus on what matters most - your health."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">{benefit.stat}</span>
                <span className="block text-sm text-muted-foreground mt-1">{benefit.statLabel}</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
