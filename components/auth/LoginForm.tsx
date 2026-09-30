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

export default function LoginForm() {
  const [errors, setErrors] = useState<FieldErrors<LoginFields>>({});

  const validateField = (name: LoginFields, value: string) =>
    name === "email" ? validateEmail(value) : validateRequired(value, "Password");

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
      password: validateRequired(String(data.get("password") ?? ""), "Password"),
    };
    setErrors({
      email: next.email ?? null,
      password: next.password ?? null,
    });
  };

  return (
    <form className="flex flex-col" noValidate onChange={handleChange} onSubmit={handleSubmit}>
      <Title as="p" variant="raw" className="text-lg text-brand-800">Sign In</Title>

      <Title as="h1" variant="title" className="text-title text-steel-950">Welcome Back</Title>

      <div className="mt-[41px] flex flex-col gap-6">
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
        <Button type="submit">Sign In</Button>
      </div>

      <div className="mt-[73px] flex items-center gap-4">
        <div aria-hidden className="h-px flex-1 bg-[#d1d1d1]" />
        <span className="text-lg text-[#888888]">or</span>
        <div aria-hidden className="h-px flex-1 bg-[#d1d1d1]" />
      </div>

      <div className="mt-[41px] flex justify-center gap-4">
        <Button
          variant="outline"
          size="none"
          aria-label="Sign in with Facebook"
          className="h-[72px] w-[72px] rounded-[24px] border-[#d1d1d1] bg-white hover:border-[#d1d1d1]"
        >
          <Icon src={images.icons.facebook} className="h-[33px] w-[33px]" />
        </Button>
        <Button
          variant="outline"
          size="none"
          aria-label="Sign in with Google"
          className="h-[72px] w-[72px] rounded-[24px] border-[#d1d1d1] bg-white hover:border-[#d1d1d1]"
        >
          <Icon src={images.icons.google} className="h-[33px] w-[33px]" />
        </Button>
      </div>

      <Title
        as="p"
        variant="raw"
        className="mt-[73px] flex justify-center gap-1 text-base text-[#888888]"
      >
        New user?
        <Link href="/register" className="text-brand-800 hover:underline">
          Create an account
        </Link>
      </Title>
    </form>
  );
}
