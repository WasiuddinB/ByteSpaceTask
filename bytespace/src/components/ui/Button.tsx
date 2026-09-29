import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  accent: "bg-accent text-foreground hover:opacity-90",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "h-12 px-6 text-label-md",
  lg: "h-14 px-8 text-label-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full transition-colors transition-opacity disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
