"use client";

import AuthField from "@/components/auth/AuthField";
import AuthForm from "@/components/auth/AuthForm";
import AuthFormFooter from "@/components/auth/AuthFormFooter";
import AuthFormHeader from "@/components/auth/AuthFormHeader";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { images } from "@/lib/images";
import { useFormValidation } from "@/lib/useFormValidation";
import { validateEmail, validateRequired } from "@/lib/validation";

type LoginFields = "email" | "password";

const socialButtonClassName =
  " w-full min-h-[56px] max-w-[56px] lg:min-h-[72px] lg:max-w-[72px] rounded-2xl lg:rounded-3xl border-[#d1d1d1] bg-white hover:border-[#d1d1d1]";

export default function LoginForm() {
  const { errors, handleChange, handleSubmit } = useFormValidation<LoginFields>(
    {
      email: validateEmail,
      password: (value) => validateRequired(value, "Password"),
    },
  );

  return (
    <AuthForm onChange={handleChange} onSubmit={handleSubmit}>
      <AuthFormHeader eyebrow="Sign In" heading="Welcome Back" />

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

      <AuthFormFooter
        titleVariant="raw"
        className="mt-12 flex justify-center gap-1 text-base text-[#888888] md:mt-[73px]"
        prompt="New user?"
        linkLabel="Create an account"
        href="/register"
      />
    </AuthForm>
  );
}
