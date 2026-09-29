import Image from "next/image";

import logoMark from "@/components/images/Logo.svg";
import { SITE } from "@/lib/constants";

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <Image src={logoMark} alt="" aria-hidden="true" className="h-8 w-auto" />
      <span className="text-heading-sm text-white">{SITE.name}</span>
    </span>
  );
}
