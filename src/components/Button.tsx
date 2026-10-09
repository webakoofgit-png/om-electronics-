import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "amber";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-electric text-white hover:bg-electric-deep shadow-sm",
  secondary: "bg-navy text-white hover:bg-navy-deep",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-light-grey",
  amber: "bg-amber text-navy hover:bg-amber/90 font-semibold",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  to,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:opacity-50 disabled:pointer-events-none";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
