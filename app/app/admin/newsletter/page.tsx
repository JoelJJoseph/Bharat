import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsletterList } from "@/components/admin/newsletter-list"

export default function AdminNewsletterPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Newsletters</h1>
        <Button asChild>
          <Link href="/admin/newsletter/new">Create New Newsletter</Link>
        </Button>
      </div>

      <NewsletterList />
    </div>
  )
}
