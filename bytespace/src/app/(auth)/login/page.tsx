import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/AuthCard";
import { AuthIntro } from "@/components/auth/AuthIntro";
import { LoginForm } from "@/components/auth/LoginForm";
import { SocialSignIn } from "@/components/auth/SocialSignIn";
import { LOGIN_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SignIn ByteSpace",
  description: LOGIN_PAGE.intro.description,
};

export default function LoginPage() {
  return (
    <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
      <AuthCard
        eyebrow={LOGIN_PAGE.eyebrow}
        title={LOGIN_PAGE.title}
        footer={LOGIN_PAGE.footer}
        className="lg:order-2"
      >
        <LoginForm />
        <SocialSignIn />
      </AuthCard>

      <AuthIntro
        title={LOGIN_PAGE.intro.title}
        description={LOGIN_PAGE.intro.description}
        className="lg:order-1"
      />
    </div>
  );
}
