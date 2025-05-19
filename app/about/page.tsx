import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata = {
  title: "About Us",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description="Learn about our mission, vision, and the values that drive our work" />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "About" }]} />

        <div className="max-w-4xl mx-auto py-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#84a27a]">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[#2E3A46] mb-4">
                  The Center for Applied Geomatics and Research (CAGR) is an emerging leader in Zambia, founded by
                  visionary engineers committed to revolutionizing geomatic solutions, civil-engineering services, and
                  professional training.
                </p>
                <p className="text-[#2E3A46]">
                  We harness cutting-edge technologies and innovative methodologies to deliver precise data insights
                  that drive sustainable infrastructure projects and empower communities. Our team of experts combines
                  academic excellence with practical field experience to provide solutions that meet the unique
                  challenges of the African continent.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="CAGR team working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border rounded-lg shadow-sm bg-gray-50 transition-transform hover:scale-105">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#84a27a]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#84a27a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#84a27a]">Our Mission</h3>
              <p className="text-[#2E3A46]">
                To provide innovative, accurate, and efficient geospatial data analysis, engineering services, and
                professional training that drive sustainable development and empower communities to tackle future
                challenges.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm bg-gray-50 transition-transform hover:scale-105">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#84a27a]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#84a27a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#84a27a]">Our Vision</h3>
              <p className="text-[#2E3A46]">
                To be a globally recognized centre of excellence in geospatial research, engineering, and capacity
                building, fostering innovation and sustainable solutions across Zambia and beyond.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-[#84a27a]">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                title: "Innovation",
                description: "Harnessing next-generation GIS, remote sensing, and custom spatial-system development.",
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
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                ),
              },
              {
                title: "Excellence",
                description: "Upholding the highest standards of precision and quality in every project.",
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description: "Committed to transparency, ethics, and responsible data stewardship.",
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Sustainability",
                description: "Implementing environmentally conscious approaches in geomatics and civil works.",
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
                    <path d="M2 22a8 8 0 0 1 8-8" />
                    <path d="M2 22a8 8 0 0 0 8-8" />
                    <path d="M9 16a5 5 0 0 0 5-5" />
                    <path d="M9 16a5 5 0 0 1 5-5" />
                    <path d="M14 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description: "Building strong partnerships and nurturing talent through hands-on training.",
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border transition-all hover:shadow-md"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#84a27a]">{value.title}</h3>
                <p className="text-sm text-[#2E3A46]">{value.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-[#84a27a]">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="CAGR approach" fill className="object-cover" />
            </div>
            <div>
              <p className="text-[#2E3A46] mb-4">
                At CAGR, we believe in a holistic approach to geospatial and engineering challenges. We combine
                cutting-edge technology with local expertise to deliver solutions that are not only technically sound
                but also culturally and environmentally appropriate.
              </p>
              <p className="text-[#2E3A46]">
                Our work is guided by a commitment to sustainable development and capacity building. We don't just
                complete projects; we transfer knowledge and skills to local communities and professionals, ensuring
                long-term impact and self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
