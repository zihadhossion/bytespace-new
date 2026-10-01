"use client";

import AuthField from "@/components/auth/AuthField";
import AuthForm from "@/components/auth/AuthForm";
import AuthFormFooter from "@/components/auth/AuthFormFooter";
import AuthFormHeader from "@/components/auth/AuthFormHeader";
import Button from "@/components/ui/Button";
import { useFormValidation } from "@/lib/useFormValidation";
import {
  validateEmail,
  validateMinLength,
  validateRequired,
} from "@/lib/validation";

type RegisterFields = "fullName" | "email" | "password";

export default function RegisterForm() {
  const { errors, handleChange, handleSubmit } =
    useFormValidation<RegisterFields>({
      fullName: (value) => validateRequired(value, "Full name"),
      email: validateEmail,
      password: (value) => validateMinLength(value, 8, "Password"),
    });

  return (
    <AuthForm onChange={handleChange} onSubmit={handleSubmit}>
      <AuthFormHeader
        eyebrow="Create an Account"
        heading="Welcome to ByteSpace"
      />

      <div className="mt-10 flex flex-col gap-6">
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
        <Button type="submit" className="w-full sm:w-auto">
          Continue
        </Button>
      </div>

      <AuthFormFooter
        titleVariant="base"
        className="mt-12 flex justify-center gap-1 text-base text-steel-700 md:mt-[122px]"
        prompt="Already have an account?"
        linkLabel="Login"
        href="/login"
      />
    </AuthForm>
  );
}
