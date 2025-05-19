import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollDownButton } from "@/components/scroll-down-button"

function OldScrollDownButton() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-300 mb-2">Scroll Down</p>
      <ChevronDown className="h-6 w-6 text-white animate-bounce" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Geospatial mapping background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#84a27a]/90 to-[#2E3A46]/80"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Innovating the Future of Geomatic Solutions, Training, and Engineering Services
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-200 md:text-xl">
              Empowering sustainable development through precise geospatial insights, engineering expertise, and
              world-class professional training.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black/80 transition-all duration-300">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
                <Link href="/services">Learn About Our Services</Link>
              </Button>
            </div>
            <div className="mt-16">
              <ScrollDownButton />
            </div>
          </div>
        </section>

        {/* Brief About Section */}
        <section id="about-section" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold text-center mb-6 text-[#84a27a]">About Us</h2>
              <p className="text-lg text-[#2E3A46] mb-8">
                The Center for Applied Geomatics and Research (CAGR) is an emerging leader in Zambia, founded by
                visionary engineers committed to revolutionizing geomatic solutions, civil-engineering services, and
                professional training.
              </p>
              <Button asChild className="bg-[#84a27a] hover:bg-[#84a27a]/90">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Highlights */}
        <section id="services-section" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#84a27a]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Geospatial Solutions",
                  description: "Comprehensive land mapping, GIS, remote sensing, and spatial data management.",
                  icon: (
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
                      className="h-10 w-10 text-[#84a27a]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  ),
                },
                {
                  title: "Research & Training",
                  description: "Professional certifications, hands-on training, and applied research.",
                  icon: (
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
                      className="h-10 w-10 text-[#84a27a]"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  ),
                },
                {
                  title: "Engineering Services",
                  description: "Geotechnical investigations, structural design, and infrastructure planning.",
                  icon: (
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
                      className="h-10 w-10 text-[#84a27a]"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                      <path d="M9 21v-6" />
                      <path d="M15 21v-6" />
                    </svg>
                  ),
                },
                {
                  title: "Construction & Civil",
                  description: "Roads, bridges, building design, and environmental engineering.",
                  icon: (
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
                      className="h-10 w-10 text-[#84a27a]"
                    >
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M12 12h.01" />
                      <path d="M17 12h.01" />
                      <path d="M7 12h.01" />
                    </svg>
                  ),
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border transition-all hover:shadow-md"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#84a27a]">{service.title}</h3>
                  <p className="text-sm text-[#2E3A46] mb-4">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="mt-auto">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild className="bg-[#84a27a] hover:bg-[#84a27a]/90">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Team Highlights */}
        <section id="team-section" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#84a27a]">Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Eng. Ipalo Chama Kabinga",
                  title: "Co-Founder & Geospatial Expert",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Eng. Shawa Maria C.",
                  title: "Co-Founder & Geospatial Expert",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Eng. Luyando Mono",
                  title: "Civil Engineer",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-[#84a27a]">{member.name}</h3>
                    <p className="text-sm font-medium text-[#3A9D23]">{member.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild className="bg-[#84a27a] hover:bg-[#84a27a]/90">
                <Link href="/team">Meet Our Full Team</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-section" className="py-16 md:py-24 bg-[#84a27a] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Contact us today to discuss how our geospatial and engineering expertise can help with your next project.
            </p>
            <Button asChild size="lg" className="bg-[#3A9D23] hover:bg-[#3A9D23]/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
