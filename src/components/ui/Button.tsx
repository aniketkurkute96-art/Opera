import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "light";

type ButtonProps = {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  light: "btn-light",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
