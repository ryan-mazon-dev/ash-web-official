import { CheckIcon } from "@/components/icons";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl border ${
        highlighted
          ? "bg-primary text-primary-foreground border-primary scale-105 shadow-xl"
          : "bg-card text-card-foreground border-border"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
          Most Popular
        </span>
      )}
      <div className="mb-6">
        <h3 className={`text-xl font-semibold mb-2 ${highlighted ? "text-primary-foreground" : "text-card-foreground"}`}>
          {name}
        </h3>
        <p className={`text-sm ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold">
          {price === 0 ? "Free" : `$${price}`}
        </span>
        {price > 0 && (
          <span className={`text-sm ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            /{period}
          </span>
        )}
      </div>
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlighted ? "text-primary-foreground" : "text-accent"}`} />
            <span className={`text-sm ${highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`w-full py-3 px-6 text-center font-medium rounded-full transition-colors ${
          highlighted
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
