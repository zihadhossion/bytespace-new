import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

interface SearchPillProps {
  className: string;
  buttonClassName: string;
  inputClassName: string;
  icon: string;
  buttonAriaLabel: string;
  inputAriaLabel: string;
  placeholder: string;
  defaultValue?: string;
  resetKey?: string;
}

export default function SearchPill({
  className,
  buttonClassName,
  inputClassName,
  icon,
  buttonAriaLabel,
  inputAriaLabel,
  placeholder,
  defaultValue,
  resetKey,
}: SearchPillProps) {
  return (
    <div className={className}>
      <Button
        type="submit"
        variant="ghost"
        size="none"
        aria-label={buttonAriaLabel}
        className={buttonClassName}
      >
        <Icon src={icon} alt="Search" className="h-6 w-6" />
      </Button>
      <input
        key={resetKey}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-label={inputAriaLabel}
        className={inputClassName}
      />
    </div>
  );
}
