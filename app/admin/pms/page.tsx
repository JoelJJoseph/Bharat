import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { isAdmin } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Manage PMS Data | Admin Dashboard",
  description: "Manage Portfolio Management Services data",
}

async function getPMSData() {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    const pmsData = await db.collection("pms").find({}).sort({ name: 1 }).toArray()

    return JSON.parse(JSON.stringify(pmsData))
  } catch (error) {
    console.error("Failed to fetch PMS data:", error)
    return []
  }
}

export default async function AdminPMSPage() {
  // Check if user is admin
  if (!isAdmin()) {
    redirect("/auth/login")
  }

  const pmsData = await getPMSData()

  // Format return value
  const formatReturn = (value?: number) => {
    if (value === undefined) return "N/A"
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
  }

  // Get return color class
  const getReturnColorClass = (value?: number) => {
    if (value === undefined) return "text-gray-500"
    return value > 0 ? "text-green-600" : value < 0 ? "text-red-600" : "text-gray-600"
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage PMS Data</h1>
          <p className="text-muted-foreground mt-1">Create, edit, and delete Portfolio Management Services data</p>
        </div>
        <Button asChild>
          <Link href="/admin/pms/new">Add New PMS</Link>
        </Button>
      </div>

      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">PMS Name</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Strategy</TableHead>
                <TableHead className="text-right">AUM (₹ Cr)</TableHead>
                <TableHead className="text-right">1M Returns</TableHead>
                <TableHead className="text-right">1Y Returns</TableHead>
                <TableHead>Risk Profile</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pmsData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No PMS data found. Add your first PMS entry.
                  </TableCell>
                </TableRow>
              ) : (
                pmsData.map((pms) => (
                  <TableRow key={pms._id}>
                    <TableCell className="font-medium">
                      <Link href={`/admin/pms/${pms._id}/edit`} className="hover:text-blue-600 transition-colors">
                        {pms.name}
                      </Link>
                    </TableCell>
                    <TableCell>{pms.provider}</TableCell>
                    <TableCell>{pms.strategy}</TableCell>
                    <TableCell className="text-right">{pms.aum.toLocaleString()}</TableCell>
                    <TableCell className={`text-right font-medium ${getReturnColorClass(pms.returns.oneMonth)}`}>
                      {formatReturn(pms.returns.oneMonth)}
                    </TableCell>
                    <TableCell className={`text-right font-medium ${getReturnColorClass(pms.returns.oneYear)}`}>
                      {formatReturn(pms.returns.oneYear)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                          ${pms.riskProfile === "Low" ? "bg-green-100 text-green-800" : ""}
                          ${pms.riskProfile === "Medium" ? "bg-blue-100 text-blue-800" : ""}
                          ${pms.riskProfile === "High" ? "bg-orange-100 text-orange-800" : ""}
                          ${pms.riskProfile === "Very High" ? "bg-red-100 text-red-800" : ""}
                        `}
                      >
                        {pms.riskProfile}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/admin/pms/${pms._id}/edit`}>Edit</Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Link href={`/admin/pms/${pms._id}/delete`}>Delete</Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
