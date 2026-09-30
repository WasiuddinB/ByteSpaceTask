import { AuthIllustration } from "@/components/auth/AuthIllustration";

interface AuthIntroProps {
  title: string;
  description: string;
  className?: string;
}

export function AuthIntro({ title, description, className }: AuthIntroProps) {
  return (
    <div className={className}>
      <h2 className="text-heading-sm text-white">{title}</h2>
      <p className="mt-4 max-w-md text-body-md text-white">{description}</p>

      <div className="mt-10">
        <AuthIllustration />
      </div>
    </div>
  );
}
