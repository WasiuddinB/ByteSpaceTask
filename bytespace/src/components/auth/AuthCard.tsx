import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface AuthCardProps {
  eyebrow: string;
  title: string;
  footer: { text: string; linkLabel: string; href: string };
  children: ReactNode;
  className?: string;
}

export function AuthCard({
  eyebrow,
  title,
  footer,
  children,
  className,
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg bg-surface p-6 sm:p-10 lg:p-12",
        className,
      )}
    >
      <p className="text-body-lg text-primary">{eyebrow}</p>
      <h1 className="mt-2 text-heading-md text-foreground lg:text-heading-lg">
        {title}
      </h1>

      <div className="mt-8">{children}</div>

      <p className="mt-12 text-center text-body-md text-muted">
        {footer.text}{" "}
        <Link href={footer.href} className="text-primary">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}
