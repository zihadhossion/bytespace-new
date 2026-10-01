import { useState, type ChangeEvent, type FormEvent } from "react";

import type { FieldErrors } from "@/lib/validation";

type FieldValidator = (value: string) => string | null;

export function useFormValidation<K extends string>(
  validators: Record<K, FieldValidator>,
) {
  const [errors, setErrors] = useState<FieldErrors<K>>({});

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const { name, value } = target;
    if (!(name in errors)) return;
    setErrors((prev) => ({
      ...prev,
      [name]: validators[name as K](value),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: FieldErrors<K> = {};
    for (const name of Object.keys(validators) as K[]) {
      next[name] = validators[name](String(data.get(name) ?? ""));
    }
    setErrors(next);
  };

  return { errors, handleChange, handleSubmit };
}
