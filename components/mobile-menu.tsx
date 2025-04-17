"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "#",
      label: "PMS",
      active: pathname.includes("/pms"),
      children: [
        {
          href: "/pms/what-is-pms",
          label: "What is PMS?",
          active: pathname === "/pms/what-is-pms",
        },
        {
          href: "/pms/who-should-invest",
          label: "Who Should Invest in PMS?",
          active: pathname === "/pms/who-should-invest",
        },
        {
          href: "/pms/top-pms-in-india",
          label: "Top PMS in India",
          active: pathname === "/pms/top-pms-in-india",
        },
        {
          href: "/pms/pms-faq",
          label: "PMS FAQ",
          active: pathname === "/pms/pms-faq",
        },
      ],
    },
    {
      href: "/resources/blog",
      label: "Blog",
      active: pathname === "/resources/blog",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetHeader className="text-left">
          <SheetTitle>Bharat Alternates</SheetTitle>
          <SheetDescription>Investment Advisory Services</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 pt-6">
          {routes.map((route) =>
            route.children ? (
              <Accordion key={route.label} type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger
                    className={`${route.active ? "font-bold" : ""} justify-start p-0 hover:no-underline`}
                  >
                    {route.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pt-2">
                      {route.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`${child.active ? "font-bold" : ""} pl-4 text-sm transition-colors hover:text-foreground/80`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={`${route.active ? "font-bold" : ""} text-sm transition-colors hover:text-foreground/80`}
              >
                {route.label}
              </Link>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
