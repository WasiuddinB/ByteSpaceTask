"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { LOGIN_PAGE } from "@/lib/constants";
import { validateEmail, validatePassword } from "@/lib/validation";

type Status = "idle" | "submitting" | "success";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [status, setStatus] = useState<Status>("idle");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setErrors(nextErrors);

    if (nextErrors.email) {
      emailRef.current?.focus();
      return;
    }
    if (nextErrors.password) {
      passwordRef.current?.focus();
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
        ref={emailRef}
        id="login-email"
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="designer@example.com"
        value={email}
        error={errors.email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (errors.email)
            setErrors({ ...errors, email: validateEmail(event.target.value) });
        }}
      />

      <PasswordInput
        ref={passwordRef}
        id="login-password"
        label="Password"
        autoComplete="current-password"
        placeholder="********"
        value={password}
        error={errors.password}
        onChange={(event) => {
          setPassword(event.target.value);
          if (errors.password)
            setErrors({
              ...errors,
              password: validatePassword(event.target.value),
            });
        }}
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="accent"
          size="md"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? LOGIN_PAGE.pending : LOGIN_PAGE.action}
        </Button>
      </div>

      <p role="status" className="text-body-sm text-primary">
        {status === "success" ? LOGIN_PAGE.success : ""}
      </p>
    </form>
  );
}
