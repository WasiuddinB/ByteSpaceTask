import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-page px-4 lg:px-6", className)}
    >
      {children}
    </Component>
  );
}
