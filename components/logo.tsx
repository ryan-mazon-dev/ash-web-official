interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-7 h-7", text: "text-lg", gap: "gap-2" },
    md: { icon: "w-8 h-8", text: "text-xl", gap: "gap-2.5" },
    lg: { icon: "w-10 h-10", text: "text-2xl", gap: "gap-3" },
  };

  return (
    <div className={`flex items-center ${sizes[size].gap} ${className}`}>
      {/* Logo Mark - Abstract "M" formed by two overlapping arcs
          Represents connection, verification, and assurance through 
          interlocking forms that create a sense of completeness */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Left arc - represents the patient/user side */}
          <path
            d="M8 32C8 18.745 18.745 8 32 8"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            className="text-primary"
          />
          {/* Right arc - represents assurance/verification */}
          <path
            d="M32 32C32 18.745 21.255 8 8 8"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            className="text-accent"
          />
          {/* Center point - the moment of verification/certainty */}
          <circle
            cx="20"
            cy="20"
            r="3"
            className="fill-primary"
          />
        </svg>
      </div>

      {/* Logo Text - Clean typography with subtle color accent */}
      {showText && (
        <span className={`${sizes[size].text} font-semibold tracking-tight text-foreground`}>
          med<span className="text-primary">sure</span>
        </span>
      )}
    </div>
  );
}

// Compact icon-only version for favicons and small spaces
export function LogoIcon({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M8 32C8 18.745 18.745 8 32 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        className="text-primary"
      />
      <path
        d="M32 32C32 18.745 21.255 8 8 8"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        className="text-accent"
      />
      <circle
        cx="20"
        cy="20"
        r="3"
        className="fill-primary"
      />
    </svg>
  );
}
