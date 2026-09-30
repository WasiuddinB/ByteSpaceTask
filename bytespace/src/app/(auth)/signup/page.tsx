import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/AuthCard";
import { AuthIntro } from "@/components/auth/AuthIntro";
import { SignupForm } from "@/components/auth/SignupForm";
import { SIGNUP_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Create an Account ByteSpace",
  description: SIGNUP_PAGE.intro.description,
};

export default function SignupPage() {
  return (
    <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
      <AuthCard
        eyebrow={SIGNUP_PAGE.eyebrow}
        title={SIGNUP_PAGE.title}
        footer={SIGNUP_PAGE.footer}
        className="lg:order-2"
      >
        <SignupForm />
      </AuthCard>

      <AuthIntro
        title={SIGNUP_PAGE.intro.title}
        description={SIGNUP_PAGE.intro.description}
        className="lg:order-1"
      />
    </div>
  );
}
