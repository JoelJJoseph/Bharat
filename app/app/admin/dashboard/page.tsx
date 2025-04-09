import type { Metadata } from "next"
import AdminDashboardClient from "./AdminDashboardClient"

export const metadata: Metadata = {
  title: "Admin Dashboard | Bharat Alternates",
  description: "Admin dashboard for Bharat Alternates",
}

export default function AdminDashboard() {
  return <AdminDashboardClient />
}
