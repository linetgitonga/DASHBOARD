import type { Metadata } from "next"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

export const metadata: Metadata = {
  title: " Dashboard - OpenSource CMS",
  description: " dashboard build with Next.js and Tailwind CSS",
}

export default function ResetPasswordPage() {
  return <ResetPasswordForm />
}
