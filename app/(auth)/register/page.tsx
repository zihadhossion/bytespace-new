import type { Metadata } from "next";

import AuthShell from "@/components/auth/AuthShell";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account",
  description:
    "Create your ByteSpace account and start learning from expert-led courses.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-brand-800">
      <AuthShell
        leftHeading="Sign up and come in"
        leftBody="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      >
        <RegisterForm />
      </AuthShell>
    </div>
  );
}
