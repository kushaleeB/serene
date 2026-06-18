import { cn } from "@/utils/cn";
import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "onClick"> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container border border-transparent",
  secondary:
    "bg-transparent text-on-primary border border-gold hover:bg-gold/10",
  ghost:
    "bg-white/10 text-white border border-white/60 backdrop-blur-sm hover:bg-white/20",
  outline:
    "bg-transparent text-primary-container border border-gold hover:bg-gold/5",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "type-btn inline-flex items-center justify-center rounded-full transition-colors duration-300",
    "[@media(hover:hover)]:hover:scale-[1.02]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  if (href) {
    const { onClick } = props;
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as ComponentPropsWithoutRef<typeof Link>["onClick"] | undefined}
      >
        {children}
      </Link>
    );
  }

  const { onClick, ...buttonProps } = props;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
