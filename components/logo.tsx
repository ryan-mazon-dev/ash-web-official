interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-7 h-7", text: "text-lg" },
    md: { icon: "w-9 h-9", text: "text-xl" },
    lg: { icon: "w-12 h-12", text: "text-2xl" },
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo Icon - Modern geometric medical shield with M letterform */}
      <div className={`${sizes[size].icon} relative`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Shield base with rounded corners */}
          <path
            d="M20 2C12.5 2 6 5 6 5V18C6 28 20 38 20 38C20 38 34 28 34 18V5C34 5 27.5 2 20 2Z"
            className="fill-primary"
          />
          {/* Inner highlight gradient effect */}
          <path
            d="M20 4C13.5 4 8 6.5 8 6.5V18C8 26.5 20 35 20 35C20 35 32 26.5 32 18V6.5C32 6.5 26.5 4 20 4Z"
            className="fill-primary"
            fillOpacity="0.9"
          />
          {/* Medical cross / plus sign - centered */}
          <rect
            x="18"
            y="11"
            width="4"
            height="14"
            rx="1"
            className="fill-primary-foreground"
          />
          <rect
            x="13"
            y="16"
            width="14"
            height="4"
            rx="1"
            className="fill-primary-foreground"
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span className={`${sizes[size].text} font-bold tracking-tight text-foreground`}>
          Med<span className="text-primary">sure</span>
        </span>
      )}
    </div>
  );
}

// Compact icon-only version for favicons and small spaces
export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 ${className}`}
    >
      <path
        d="M20 2C12.5 2 6 5 6 5V18C6 28 20 38 20 38C20 38 34 28 34 18V5C34 5 27.5 2 20 2Z"
        className="fill-primary"
      />
      <rect
        x="18"
        y="11"
        width="4"
        height="14"
        rx="1"
        className="fill-primary-foreground"
      />
      <rect
        x="13"
        y="16"
        width="14"
        height="4"
        rx="1"
        className="fill-primary-foreground"
      />
    </svg>
  );
}
