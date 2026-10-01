"use client";

import Link from "next/link";
import { useState } from "react";
import AuthField from "@/components/auth/AuthField";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { images } from "@/lib/images";
import {
  validateEmail,
  validateRequired,
  type FieldErrors,
} from "@/lib/validation";

type LoginFields = "email" | "password";

const socialButtonClassName =
  " w-full min-h-[56px] max-w-[56px] lg:min-h-[72px] lg:max-w-[72px] rounded-2xl lg:rounded-3xl border-[#d1d1d1] bg-white hover:border-[#d1d1d1]";

export default function LoginForm() {
  const [errors, setErrors] = useState<FieldErrors<LoginFields>>({});

  const validateField = (name: LoginFields, value: string) =>
    name === "email"
      ? validateEmail(value)
      : validateRequired(value, "Password");

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const { name, value } = target;
    if (!(name in errors)) return;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as LoginFields, value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: FieldErrors<LoginFields> = {
      email: validateEmail(String(data.get("email") ?? "")),
      password: validateRequired(
        String(data.get("password") ?? ""),
        "Password",
      ),
    };
    setErrors({
      email: next.email ?? null,
      password: next.password ?? null,
    });
  };

  return (
    <form
      className="flex flex-col"
      noValidate
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <Title as="p" variant="raw" className="text-lg text-brand-800">
        Sign In
      </Title>

      <Title as="h1" variant="title" className="text-title text-steel-950">
        Welcome Back
      </Title>

      <div className="mt-10 flex flex-col gap-6">
        <AuthField
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          required
          autoComplete="email"
          error={errors.email}
        />

        <AuthField
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          required
          autoComplete="current-password"
          error={errors.password}
        />
      </div>

      <div className="mt-[24px] flex justify-end">
        <Button type="submit" className="w-full sm:w-auto">
          Sign In
        </Button>
      </div>

      <div className="mt-12 flex items-center gap-4 md:mt-[73px]">
        <div aria-hidden className="h-px flex-1 bg-[#d1d1d1]" />
        <span className="text-lg text-[#888888]">or</span>
        <div aria-hidden className="h-px flex-1 bg-[#d1d1d1]" />
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Button
          variant="outline"
          size="none"
          aria-label="Sign in with Facebook"
          className={socialButtonClassName}
        >
          <Icon
            src={images.icons.facebook}
            alt="Facebook"
            className="w-full max-w-7 min-h-7 lg:max-w-10 lg:min-h-10"
          />
        </Button>
        <Button
          variant="outline"
          size="none"
          aria-label="Sign in with Google"
          className={socialButtonClassName}
        >
          <Icon
            src={images.icons.google}
            alt="Google"
            className="w-full max-w-7 min-h-7 lg:max-w-10 lg:min-h-10"
          />
        </Button>
      </div>

      <Title
        as="p"
        variant="raw"
        className="mt-12 flex justify-center gap-1 text-base text-[#888888] md:mt-[73px]"
      >
        New user?
        <Link href="/register" className="text-brand-800 hover:underline">
          Create an account
        </Link>
      </Title>
    </form>
  );
}
