import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forgot Password | Bharat Alternates",
  description: "Reset your password to regain access to your account",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Forgot Password</h1>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}
