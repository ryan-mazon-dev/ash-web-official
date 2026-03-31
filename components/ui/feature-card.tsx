import { featureIcons } from "@/components/icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = featureIcons[icon];
  
  return (
    <div className="group relative p-6 bg-card rounded-2xl border border-border transition-all duration-300 hover:shadow-lg hover:border-muted">
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-secondary text-foreground">
        {IconComponent && <IconComponent className="w-6 h-6" />}
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
