"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="mb-6">
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>Center for Applied Geomatics and Research</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-base font-medium hover:text-[#84a27a] transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-medium hover:text-[#84a27a] transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-base font-medium hover:text-[#84a27a] transition-colors"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/team"
            className="text-base font-medium hover:text-[#84a27a] transition-colors"
            onClick={() => setOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium hover:text-[#84a27a] transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
