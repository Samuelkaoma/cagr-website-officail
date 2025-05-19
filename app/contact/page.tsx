import { MapPin, Phone, Mail, Linkedin, Facebook } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export const metadata = {
  title: "Contact Us",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" description="Get in touch with our team to discuss your project requirements" />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="max-w-5xl mx-auto py-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-[#84a27a]">Get In Touch</h2>
              <p className="mb-8 text-[#2E3A46]">
                We'd love to hear from you. Please fill out the form below or use our contact information to get in
                touch with our team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#84a27a] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-[#2E3A46]">Lusaka, Zambia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#84a27a] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-[#2E3A46]">+260 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#84a27a] mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-[#2E3A46]">info@geomaticresearch.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5 text-[#84a27a]" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5 text-[#84a27a]" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
                <div className="aspect-video relative rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=300&width=500" alt="Map location" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-6 text-[#84a27a]">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>
                </div>
                <Button className="w-full bg-[#84a27a] hover:bg-[#84a27a]/90">Submit</Button>
              </form>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-[#84a27a] text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What areas do you serve?",
                  answer:
                    "We primarily serve Zambia and neighboring countries in Southern Africa, but we can work on projects throughout the African continent.",
                },
                {
                  question: "How can I request a quote for my project?",
                  answer:
                    "You can request a quote by filling out our contact form, sending us an email, or calling our office directly. We'll get back to you within 24-48 hours.",
                },
                {
                  question: "Do you offer training for organizations?",
                  answer:
                    "Yes, we offer customized training programs for organizations in GIS, remote sensing, surveying, and civil engineering. Contact us to discuss your specific needs.",
                },
                {
                  question: "What types of projects do you typically work on?",
                  answer:
                    "We work on a wide range of projects including land mapping, infrastructure development, urban planning, environmental assessments, and more.",
                },
              ].map((faq, index) => (
                <div key={index} className="p-6 border rounded-lg">
                  <h3 className="font-bold mb-2 text-[#84a27a]">{faq.question}</h3>
                  <p className="text-sm text-[#2E3A46]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
