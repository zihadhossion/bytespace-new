"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { validateEmail } from "@/lib/validation";

export default function NewsletterForm() {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (error === null) return;
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    setError(validateEmail(target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(validateEmail(String(new FormData(event.currentTarget).get("email") ?? "")));
  };

  return (
    <form
      className="flex w-full flex-col gap-2"
      noValidate
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-3 sm:gap-6">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
          required
          autoComplete="email"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "newsletter-email-error" : undefined}
          className={`h-10 sm:h-[52px] w-[376px] max-w-full min-w-0 rounded-full border bg-white px-4 sm:px-6 text-base text-steel-950 placeholder:text-steel-950 focus:outline-none ${
            error ? "border-error-600" : "border-steel-200 focus:border-steel-950"
          }`}
        />
        <Button type="submit" className="shrink-0 text-label-l">
          Subscribe
        </Button>
      </div>
      {error ? (
        <Title
          as="p"
          id="newsletter-email-error"
          role="alert"
          variant="raw"
          className="pl-4 text-sm text-error-600"
        >
          {error}
        </Title>
      ) : null}
    </form>
  );
}
