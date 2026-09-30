"use client";

import Link from "next/link";
import { useState } from "react";

import AuthField from "@/components/auth/AuthField";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import {
  validateEmail,
  validateMinLength,
  validateRequired,
  type FieldErrors,
} from "@/lib/validation";

type RegisterFields = "fullName" | "email" | "password";

function validateField(name: RegisterFields, value: string): string | null {
  switch (name) {
    case "fullName":
      return validateRequired(value, "Full name");
    case "email":
      return validateEmail(value);
    case "password":
      return validateMinLength(value, 8, "Password");
  }
}

export default function RegisterForm() {
  const [errors, setErrors] = useState<FieldErrors<RegisterFields>>({});

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const { name, value } = target;
    if (!(name in errors)) return;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name as RegisterFields, value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setErrors({
      fullName: validateField("fullName", String(data.get("fullName") ?? "")),
      email: validateField("email", String(data.get("email") ?? "")),
      password: validateField("password", String(data.get("password") ?? "")),
    });
  };

  return (
    <form className="flex flex-col" noValidate onChange={handleChange} onSubmit={handleSubmit}>
      <Title as="p" variant="raw" className="text-lg text-brand-800">Create an Account</Title>

      <Title as="h1" variant="title" className="text-title text-steel-950">Welcome to ByteSpace</Title>

      <div className="mt-[93px] flex flex-col gap-6">
        <AuthField
          id="full-name"
          name="fullName"
          type="text"
          label="Full Name"
          placeholder="Jamie Davis"
          required
          autoComplete="name"
          error={errors.fullName}
        />

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
          minLength={8}
          autoComplete="new-password"
          error={errors.password}
        />
      </div>

      <div className="mt-[24px] flex justify-end">
        <Button type="submit">Continue</Button>
      </div>

      <Title
        as="p"
        variant="base"
        className="mt-[122px] flex justify-center gap-1 text-base text-steel-700"
      >
        Already have an account?
        <Link href="/login" className="text-brand-800 hover:underline">
          Login
        </Link>
      </Title>
    </form>
  );
}
