import { CheckIcon, QuoteIcon } from "@/components/icons";

interface CaseStudyCardProps {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
}

export function CaseStudyCard({
  title,
  client,
  challenge,
  solution,
  results,
  quote,
}: CaseStudyCardProps) {
  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden">
      <div className="p-6 lg:p-8">
        <div className="mb-6">
          <span className="text-sm font-medium text-muted-foreground">{client}</span>
          <h3 className="mt-2 text-xl font-semibold text-card-foreground lg:text-2xl">
            {title}
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
              Challenge
            </h4>
            <p className="text-muted-foreground leading-relaxed">{challenge}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
              Solution
            </h4>
            <p className="text-muted-foreground leading-relaxed">{solution}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
              Results
            </h4>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-secondary/50 p-6 lg:p-8 border-t border-border">
        <QuoteIcon className="w-8 h-8 text-muted opacity-30 mb-3" />
        <blockquote className="text-card-foreground italic leading-relaxed">
          &quot;{quote}&quot;
        </blockquote>
        <p className="mt-3 text-sm font-medium text-muted-foreground">- {client}</p>
      </div>
    </article>
  );
}
