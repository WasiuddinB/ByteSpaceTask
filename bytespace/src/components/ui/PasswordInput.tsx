"use client";

import type { ComponentProps } from "react";
import { useState } from "react";
import Image from "next/image";

import iconEye from "@/components/images/IconEye.svg";
import iconEyeOff from "@/components/images/IconEyeOff.svg";
import { Input } from "@/components/ui/Input";

interface PasswordInputProps extends Omit<
  ComponentProps<typeof Input>,
  "type" | "endSlot"
> {
  id: string;
  label: string;
}

export function PasswordInput({ id, label, ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      id={id}
      label={label}
      type={isVisible ? "text" : "password"}
      endSlot={
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-controls={id}
          className="flex h-10 w-10 items-center justify-center rounded-sm"
        >
          <Image
            src={isVisible ? iconEyeOff : iconEye}
            alt=""
            aria-hidden="true"
            className="h-5 w-auto"
          />
        </button>
      }
      {...props}
    />
  );
}
