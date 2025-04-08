import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { PMSForm } from "@/components/admin/pms-form"

export const metadata: Metadata = {
  title: "Edit PMS | Admin Dashboard",
  description: "Edit an existing Portfolio Management Service",
}

async function getPMS(id: string) {
  try {
    if (!ObjectId.isValid(id)) {
      return null
    }

    const client = await clientPromise
    const db = client.db("BharatA")

    const pms = await db.collection("pms").findOne({ _id: new ObjectId(id) })

    if (!pms) {
      return null
    }

    return JSON.parse(JSON.stringify(pms))
  } catch (error) {
    console.error("Failed to fetch PMS:", error)
    return null
  }
}

export default async function EditPMSPage({ params }: { params: { id: string } }) {
  // Check if user is admin
  if (!isAdmin()) {
    redirect("/auth/login")
  }

  const pms = await getPMS(params.id)

  if (!pms) {
    redirect("/admin/pms")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Edit PMS</h1>
      <PMSForm pmsId={params.id} defaultValues={pms} />
    </div>
  )
}
