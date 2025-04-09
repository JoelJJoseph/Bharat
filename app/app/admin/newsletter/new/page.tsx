import { NewsletterForm } from "@/components/admin/newsletter-form"

export default function CreateNewsletterPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Create Newsletter</h1>
      <NewsletterForm />
    </div>
  )
}
