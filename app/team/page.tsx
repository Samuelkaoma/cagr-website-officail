import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Our Team",
}

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet Our Team"
        description="The experts behind our innovative geospatial and engineering solutions"
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Team" }]} />

        <div className="max-w-5xl mx-auto py-8">
          <p className="text-lg text-center mb-12">
            Our team combines academic excellence with practical field experience to deliver innovative solutions. We
            are passionate about leveraging technology to solve complex geospatial and engineering challenges.
          </p>

          <h2 className="text-2xl font-bold mb-8 text-[#84a27a]">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Eng. Ipalo Chama Kabinga",
                title: "Co-Founder & Geospatial Expert",
                bio: "A geospatial enthusiast with deep expertise in land surveying principles, web development, and GIS system development. Passionate about leveraging modern technology to advance geomatic workflows.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Eng. Shawa Maria C.",
                title: "Co-Founder & Geospatial Expert",
                bio: "An accomplished Geoinformatics Engineer specializing in GIS, remote sensing, and project management. Leads operations and mentors aspiring professionals.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Eng. Luyando Mono",
                title: "Civil Engineer",
                bio: "Dynamic civil engineer focused on infrastructure development and construction, applying innovative solutions for excellence in every project.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-[#84a27a]">{member.name}</h3>
                  <p className="text-sm font-medium text-[#3A9D23] mb-3">{member.title}</p>
                  <p className="text-sm text-[#2E3A46]">{member.bio}</p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5 text-[#84a27a]" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8 text-[#84a27a]">Technical Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                name: "Samuel Kaoma",
                title: "Software engineer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Agatha Zulu",
                title: "Systems engineer",
                image: "/placeholder.svg?height=300&width=300",
              },
             
              
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-[#84a27a]">{member.name}</h3>
                  <p className="text-sm font-medium text-[#3A9D23]">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#84a27a]/10 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#84a27a] text-center">Join Our Team</h2>
            <p className="text-center mb-6">
              We're always looking for talented individuals who are passionate about geospatial technology and
              engineering. If you're interested in joining our team, we'd love to hear from you.
            </p>
            <div className="text-center">
              <Button asChild className="bg-[#84a27a] hover:bg-[#84a27a]/90">
                <Link href="/contact">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
