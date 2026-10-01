import type { ChangeEvent, FormEvent, ReactNode } from "react";

interface AuthFormProps {
  onChange: (event: ChangeEvent<HTMLFormElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export default function AuthForm({
  onChange,
  onSubmit,
  children,
}: AuthFormProps) {
  return (
    <form
      className="flex flex-col"
      noValidate
      onChange={onChange}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
