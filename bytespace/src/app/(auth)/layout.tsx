import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import logoMark from "@/components/images/Logo.svg";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="on-primary grid-lines min-h-dvh bg-primary py-10 lg:py-14">
      <Container>
        <Link
          href="/"
          aria-label={`${SITE.name} home`}
          className="inline-flex rounded-sm"
        >
          <Image
            src={logoMark}
            alt=""
            aria-hidden="true"
            sizes="40px"
            className="h-10 w-auto"
          />
        </Link>

        {children}
      </Container>
    </div>
  );
}
