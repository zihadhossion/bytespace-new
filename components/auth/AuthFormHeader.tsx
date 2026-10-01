import Title from "@/components/ui/Title";

interface AuthFormHeaderProps {
  eyebrow: string;
  heading: string;
}

export default function AuthFormHeader({
  eyebrow,
  heading,
}: AuthFormHeaderProps) {
  return (
    <>
      <Title as="p" variant="raw" className="text-lg text-brand-800">
        {eyebrow}
      </Title>
      <Title as="h1" variant="title">
        {heading}
      </Title>
    </>
  );
}
