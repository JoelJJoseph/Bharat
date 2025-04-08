import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/auth"
import { PMSForm } from "@/components/admin/pms-form"

export const metadata: Metadata = {
  title: "Add New PMS | Admin Dashboard",
  description: "Add a new Portfolio Management Service",
}

export default function NewPMSPage() {
  // Check if user is admin
  if (!isAdmin()) {
    redirect("/auth/login")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Add New PMS</h1>
      <PMSForm />
    </div>
  )
}
