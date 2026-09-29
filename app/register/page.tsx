import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Create an Account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-brand-800">
      <Header tone="dark" />
      <main className="mx-auto flex max-w-page flex-col items-center px-6 py-20 lg:px-10">
        <p className="text-lg text-volt-400">Create an Account</p>
        <h1 className="mt-2 text-title text-white">Welcome to ByteSpace</h1>
        <p className="mt-6 max-w-md text-center text-lg text-steel-100">
          Registration form coming in the next build phase.
        </p>
        <Link
          href="/login"
          className="mt-8 text-base text-white underline underline-offset-4"
        >
          Login
        </Link>
      </main>
    </div>
  );
}
