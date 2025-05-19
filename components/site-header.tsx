import Link from "next/link"
import { Logo } from "@/components/logo"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#84a27a] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#84a27a] transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-[#84a27a] transition-colors">
            Services
          </Link>
          <Link href="/team" className="text-sm font-medium hover:text-[#84a27a] transition-colors">
            Team
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#84a27a] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
