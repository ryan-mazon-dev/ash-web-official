import { StarIcon, QuoteIcon } from "@/components/icons";

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({ name, role, location, quote, rating }: TestimonialCardProps) {
  return (
    <div className="relative p-8 bg-card rounded-2xl border border-border">
      <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-muted opacity-20" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-muted"}`}
            filled={i < rating}
          />
        ))}
      </div>
      <blockquote className="text-card-foreground leading-relaxed mb-6">
        &quot;{quote}&quot;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-semibold text-secondary-foreground">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-card-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role} - {location}</p>
        </div>
      </div>
    </div>
  );
}
