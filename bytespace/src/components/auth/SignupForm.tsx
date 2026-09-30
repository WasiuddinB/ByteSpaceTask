"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { SIGNUP_PAGE } from "@/lib/constants";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "@/lib/validation";

type Status = "idle" | "submitting" | "success";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});
  const [status, setStatus] = useState<Status>("idle");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setErrors(nextErrors);

    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }
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
        ref={nameRef}
        id="signup-name"
        label="Full Name"
        autoComplete="name"
        placeholder="Jamie Davis"
        value={name}
        error={errors.name}
        onChange={(event) => {
          setName(event.target.value);
          if (errors.name)
            setErrors({ ...errors, name: validateName(event.target.value) });
        }}
      />

      <Input
        ref={emailRef}
        id="signup-email"
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
        id="signup-password"
        label="Password"
        autoComplete="new-password"
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
          {status === "submitting" ? SIGNUP_PAGE.pending : SIGNUP_PAGE.action}
        </Button>
      </div>

      <p role="status" className="text-body-sm text-primary">
        {status === "success" ? SIGNUP_PAGE.success : ""}
      </p>
    </form>
  );
}
