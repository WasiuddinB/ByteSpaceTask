import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/icons/Logo";
import cartIcon from "@/components/images/CartIcon.svg";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Container } from "@/components/ui/Container";
import { AUTH_LINKS, NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container className="relative">
        <nav
          aria-label="Main"
          className="flex h-20 items-center justify-between gap-6 lg:h-24"
        >
          <Link href="/" aria-label={`${SITE.name} home`}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label-md text-white transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 lg:flex">
            {AUTH_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label-md text-white transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              aria-label="Cart"
              className="text-white transition-opacity hover:opacity-80"
            >
              <Image
                src={cartIcon}
                alt=""
                aria-hidden="true"
                className="h-5 w-auto"
              />
            </Link>
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}
