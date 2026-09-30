import type { Metadata } from "next";

import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to ByteSpace and continue your learning journey.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-800">
      <AuthShell
        leftHeading="Sign in with ease"
        leftBody="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      >
        <LoginForm />
      </AuthShell>
    </div>
  );
}
