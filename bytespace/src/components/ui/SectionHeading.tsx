import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  level?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  level: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <Heading className="text-heading-md text-foreground lg:text-heading-lg">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-body-md text-muted lg:text-body-lg">
          {description}
        </p>
      )}
    </div>
  );
}
