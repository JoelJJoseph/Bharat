"use client"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, FileText, Users, Database, Settings, Mail } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useState, useCallback } from "react"

async function getStats() {
  try {
    const client = await clientPromise
    const db = client.db("BharatA")

    const blogCount = await db.collection("blogs").countDocuments()
    const userCount = await db.collection("users").countDocuments()
    const inquiryCount = await db.collection("inquiries").countDocuments()
    const pmsCount = await db.collection("pms").countDocuments()

    return {
      blogCount,
      userCount,
      inquiryCount,
      pmsCount,
    }
  } catch (error) {
    console.error("Failed to fetch stats:", error)
    return {
      blogCount: 0,
      userCount: 0,
      inquiryCount: 0,
      pmsCount: 0,
    }
  }
}

export default function AdminDashboardClient() {
  const router = useRouter()
  const [stats, setStats] = useState({
    blogCount: 0,
    userCount: 0,
    inquiryCount: 0,
    pmsCount: 0,
  })

  const loadStats = useCallback(async () => {
    const fetchedStats = await getStats()
    setStats(fetchedStats)
  }, [])

  useEffect(() => {
    // Check if user is admin
    const token = localStorage.getItem("auth_token")
    const userRole = localStorage.getItem("user_role")

    if (!token || userRole !== "admin") {
      router.push("/auth/login")
    }

    loadStats()
  }, [router, loadStats])

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your website content, users, and settings</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/blog/new">New Blog Post</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/pms/new">Add PMS</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.blogCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.blogCount > 0 ? "+1 from last week" : "No blog posts yet"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.userCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.userCount > 0 ? "+2 from last week" : "No users yet"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inquiryCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.inquiryCount > 0 ? "+3 from last week" : "No inquiries yet"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">PMS Entries</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pmsCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.pmsCount > 0 ? "+5 from last month" : "No PMS entries yet"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your website content and settings</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button asChild variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
                  <Link href="/admin/blog">
                    <FileText className="h-6 w-6 mb-2" />
                    <span className="font-medium">Manage Blog Posts</span>
                    <span className="text-xs text-muted-foreground mt-1">Create, edit, and delete blog posts</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
                  <Link href="/admin/pms">
                    <BarChart className="h-6 w-6 mb-2" />
                    <span className="font-medium">Manage PMS Data</span>
                    <span className="text-xs text-muted-foreground mt-1">Update PMS performance data</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
                  <Link href="/admin/inquiries">
                    <Database className="h-6 w-6 mb-2" />
                    <span className="font-medium">View Inquiries</span>
                    <span className="text-xs text-muted-foreground mt-1">Manage customer inquiries</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
                  <Link href="/admin/users">
                    <Users className="h-6 w-6 mb-2" />
                    <span className="font-medium">Manage Users</span>
                    <span className="text-xs text-muted-foreground mt-1">View and manage user accounts</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
                  <Link href="/admin/settings">
                    <Settings className="h-6 w-6 mb-2" />
                    <span className="font-medium">Site Settings</span>
                    <span className="text-xs text-muted-foreground mt-1">Configure website settings</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto flex flex-col items-center justify-center p-6">
                  <Link href="/admin/newsletter">
                    <Mail className="h-6 w-6 mb-2" />
                    <span className="font-medium">Manage Newsletters</span>
                    <span className="text-xs text-muted-foreground mt-1">Manage PMS & AIF Newsletters</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates and changes to your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New blog post created</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">PMS data updated</p>
                    <p className="text-xs text-muted-foreground">Yesterday at 4:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New user registered</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Inquiry received</p>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Analytics</CardTitle>
              <CardDescription>View website traffic and user engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Analytics dashboard coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and download reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Reports feature coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Site Settings</CardTitle>
              <CardDescription>Configure website settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Settings configuration coming soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
