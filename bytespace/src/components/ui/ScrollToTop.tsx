"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import chevronDown from "@/components/images/IconChevronDown.svg";

const SHOW_AFTER = 600;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > SHOW_AFTER);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-6 bottom-6 z-40 flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-card transition hover:opacity-80"
    >
      <Image
        src={chevronDown}
        alt=""
        aria-hidden="true"
        className="h-3 w-auto rotate-180"
      />
    </button>
  );
}
