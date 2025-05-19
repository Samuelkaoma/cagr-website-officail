import Link from "next/link"
import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="bg-[#2E3A46] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo textColor="white" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Crest Atlas Geospatial and Research LTD is an emerging leader in Zambia, providing innovative geomatic
              solutions, civil-engineering services, and professional training.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#84a27a]" />
                <span className="text-sm text-gray-300">Lusaka, Zambia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#84a27a]" />
                <span className="text-sm text-gray-300">+260 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#84a27a]" />
                <span className="text-sm text-gray-300">info@geomaticresearch.com</span>
              </li>
              <li className="flex gap-4 mt-4">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Center for Applied Geomatics and Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
