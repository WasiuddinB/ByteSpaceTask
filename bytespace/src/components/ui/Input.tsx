import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  id: string;
  label: string;
  error?: string;
  endSlot?: ReactNode;
}

export function Input({
  id,
  label,
  error,
  endSlot,
  className,
  ...props
}: InputProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-label-md text-foreground">
        {label}
      </label>

      <div className="relative mt-2">
        <input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "h-14 w-full min-w-0 rounded-md border bg-surface px-6 text-body-md text-foreground placeholder:text-muted",
            error ? "border-primary" : "border-border",
            endSlot && "pr-14",
            className,
          )}
          {...props}
        />

        {endSlot && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {endSlot}
          </div>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className="mt-2 text-body-sm text-primary">
          {error}
        </p>
      )}
    </div>
  );
}
