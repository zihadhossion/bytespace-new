import Title from "@/components/ui/Title";
import { inputBase } from "@/lib/utils";

interface AuthFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  autoComplete?: string;
  error?: string | null;
}

export default function AuthField({
  id,
  name,
  type,
  label,
  placeholder,
  required,
  minLength,
  autoComplete,
  error,
}: AuthFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={id}
        className="text-label-s font-medium text-steel-950"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`h-[52px] w-full rounded-[12px] border bg-white px-6 ${inputBase} ${
          error
            ? "border-error-600 focus:border-error-600"
            : "border-steel-100 focus:border-brand-800"
        }`}
      />
      {error ? (
        <Title
          as="p"
          id={errorId}
          role="alert"
          variant="raw"
          className="text-sm text-error-600"
        >
          {error}
        </Title>
      ) : null}
    </div>
  );
}
