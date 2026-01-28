import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PasskeyModal from "@/components/PasskeyModal";
import { SearchParamProps } from "@/types";
import {
  HOME_SERVICES_PREVIEW,
  HOME_HERO_DATA,
} from "@/constants/home";

export default async function Home({ searchParams }: SearchParamProps) {
  const params = await searchParams;
  const isAdmin = params?.admin === "true";

  return (
    <div className="min-h-screen">
      {isAdmin && <PasskeyModal />}

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[80vh]">
        <div className="container my-auto py-12 lg:py-0">
          <div className="max-w-2xl">
            <h1 className="header mb-6">
              Link <span className="text-green-500">Opticians</span>
            </h1>
            <p className="text-dark-700 mb-6 text-lg">
              Optometry services are available at our clinic locations. The practice was established in 2008.
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-green-500 rounded-full"></div>
                <span className="text-dark-600">Medical aid claims are accepted, subject to the terms of your individual medical aid plan.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 bg-green-500 rounded-full"></div>
                <span className="text-dark-600">Optometry services are provided by registered practitioners.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 bg-green-500 rounded-full"></div>
                <span className="text-dark-600">On-site lens manufacturing facilities are available.</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="shad-primary-btn" size="lg" asChild>
                <Link href={HOME_HERO_DATA.primaryCta.href}>
                  Book Appointment
                </Link>
              </Button>
              <Button className="shad-gray-btn" size="lg" asChild>
                <Link href="/services">
                  Services Information
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <Image
            src={HOME_HERO_DATA.image.src}
            height={800}
            width={1200}
            alt="Optometrist conducting eye examination"
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Practice Services */}
      <section className="py-12 bg-green-600/10 border-y border-green-500/20">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔬</div>
              <h2 className="text-18-bold mb-2">On-Site Laboratory</h2>
              <p className="text-dark-600">
                Spectacle lenses are manufactured on-site.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h2 className="text-18-bold mb-2">Accepted Payments</h2>
              <p className="text-dark-600">
                Medical aid and cash payments are accepted.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚕️</div>
              <h2 className="text-18-bold mb-2">Practice Locations</h2>
              <p className="text-dark-600">
                Practices are located in Harare, Chipinge, and Chiredzi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-dark-400 py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="text-center mb-12">
            <h2 className="sub-header mb-4">Services Provided</h2>
            <p className="text-dark-700 max-w-2xl mx-auto">
              Professional eye care services are provided.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES_PREVIEW.map((service) => (
              <ServicePreviewCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="shad-gray-btn" asChild>
              <Link href="/services">Service Information</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Services Information */}
      <section className="py-16 bg-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="sub-header mb-6">
                Community <span className="text-green-500">Initiatives</span>
              </h2>
              <p className="text-dark-700 mb-6">
                School vision screenings and mobile outreach services are conducted.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">School-based vision screenings</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">Mobile outreach to rural communities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">Eye health assessments for diabetic patients</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="shad-gray-btn" asChild>
                  <Link href="/community">Community Services Information</Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-dark-500">
                <Image
                  src="/assets/images/community-home.png"
                  width={800}
                  height={600}
                  alt="Community eye care service"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optical Products Available */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="text-center mb-12">
            <h2 className="sub-header mb-4">Optical Products</h2>
            <p className="text-dark-700 max-w-2xl mx-auto">
              Optical products are available at our practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="size-16 bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👓</span>
              </div>
              <h3 className="text-16-semibold mb-2">Frames</h3>
              <p className="text-dark-600 text-sm">Spectacle frames are available.</p>
            </div>
            <div className="text-center p-6">
              <div className="size-16 bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕶️</span>
              </div>
              <h3 className="text-16-semibold mb-2">Sunglasses</h3>
              <p className="text-dark-600 text-sm">Prescription and non-prescription sunglasses are available.</p>
            </div>
            <div className="text-center p-6">
              <div className="size-16 bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧿</span>
              </div>
              <h3 className="text-16-semibold mb-2">Contact Lenses</h3>
              <p className="text-dark-600 text-sm">Contact lenses are available.</p>
            </div>
            <div className="text-center p-6">
              <div className="size-16 bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧴</span>
              </div>
              <h3 className="text-16-semibold mb-2">Accessories</h3>
              <p className="text-dark-600 text-sm">Eyewear maintenance accessories are available.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="shad-gray-btn" asChild>
              <Link href="/products">Product Information</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final Information Section */}
      <section className="py-16 bg-dark-400">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <div className="bg-dark-300 border border-dark-500 rounded-2xl p-12">
            <h2 className="sub-header mb-6">Schedule an Appointment</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Appointments are available. Medical aid and cash payments are accepted, subject to the terms of your individual medical aid plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                <Link href="/book">Book Appointment</Link>
              </Button>
              <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                <Link href="/locations">Location Information</Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-dark-500">
              <p className="text-sm text-dark-600">
                Established in 2008 • Registered Optometry Practice
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Preview Card Component
const ServicePreviewCard = ({
  service
}: {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }
}) => {
  return (
    <div className="bg-dark-300 p-6 rounded-lg border border-dark-500 h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-dark-400 rounded">
          <Image
            src={service.icon}
            width={24}
            height={24}
            alt={`${service.title} icon`}
          />
        </div>
        <h3 className="text-18-bold">{service.title}</h3>
      </div>
      <p className="text-dark-600">
        {service.description}
      </p>
    </div>
  );
};