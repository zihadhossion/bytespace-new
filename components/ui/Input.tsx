import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({
  label,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-sm text-steel-950">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={`h-[52px] w-full rounded-lg border border-steel-200 bg-white px-4 text-lg text-steel-950 placeholder:text-steel-400 focus:border-brand-800 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
