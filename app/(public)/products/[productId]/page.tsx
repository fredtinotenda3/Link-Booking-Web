// app\(public)\products\[productId]\page.tsx - CORRECTED VERSION

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { PRODUCTS_DATA } from "@/constants/products";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  // Find related products (same category)
  const relatedProducts = PRODUCTS_DATA
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <main>
        {/* Product Information */}
        <section aria-labelledby="product-heading" className="bg-gradient-to-b from-dark-400 to-dark-300 py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-dark-400 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
                <h1 id="product-heading" className="header mb-6">{product.name}</h1>
                <p className="text-dark-700 text-lg mb-8">{product.description}</p>
                
                <div className="p-4 bg-dark-300 rounded-lg mb-8">
                  <p className="text-dark-600">
                    Consultation required for product information and fitting.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="shad-primary-btn" asChild>
                    <Link href={`/book?product=${product.id}`}>
                      Book Fitting Appointment
                    </Link>
                  </Button>
                  <Button className="shad-gray-btn" asChild>
                    <Link href="/locations">
                      Find at Our Clinics
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-dark-500">
                  <Image
                    src={product.image}
                    width={800}
                    height={600}
                    alt={product.name}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section aria-labelledby="details-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Features */}
              <div className="lg:col-span-2">
                <h2 id="details-heading" className="text-24-bold mb-8">Product Information</h2>
                
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-8 mb-8">
                  <h3 className="text-18-bold mb-6">Product Information</h3>
                  <ul className="space-y-4" role="list">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 size-2 bg-green-500 rounded-full"></div>
                        <span className="text-dark-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.materials && (
                  <div className="bg-dark-400 border border-dark-500 rounded-xl p-8 mb-8">
                    <h3 className="text-18-bold mb-6">Material Information</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.materials.map((material, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-dark-300 rounded-full text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Availability */}
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-8">
                  <h3 className="text-18-bold mb-6">Availability Information</h3>
                  <div className="space-y-4">
                    {product.availability.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Image
                          src="/assets/icons/check.svg"
                          width={20}
                          height={20}
                          alt="Available"
                        />
                        <span className="text-dark-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-dark-300 rounded-lg">
                    <p className="text-sm text-dark-600">
                      Visit our clinics for product information. Consultation required for fitting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                {/* Product Information Actions */}
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                  <h3 className="text-18-bold mb-4">Product Information</h3>
                  <div className="space-y-3">
                    <Button className="shad-primary-btn w-full" asChild>
                      <Link href={`/book?product=${product.id}`}>
                        Book Fitting Appointment
                      </Link>
                    </Button>
                    <Button className="shad-gray-btn w-full" asChild>
                      <Link href="/locations">
                        Find at Our Clinics
                      </Link>
                    </Button>
                    <Button className="shad-gray-btn w-full" asChild>
                      <Link href="/contact?subject=product-inquiry">
                        Ask About This Product
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                  <h3 className="text-18-bold mb-4">Product Information</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-dark-300 rounded-full text-sm text-dark-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category Info */}
                <div className="bg-dark-300 border border-dark-500 rounded-xl p-6">
                  <h3 className="text-16-semibold mb-3">Category</h3>
                  <p className="text-dark-600 mb-4">{product.category} • {product.type}</p>
                  <Button className="shad-gray-btn w-full" asChild>
                    <Link href={`/products#${product.category}`}>
                      View All {product.category}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section aria-labelledby="related-heading" className="py-16 bg-dark-300">
            <div className="mx-auto max-w-7xl px-[5%]">
              <h2 id="related-heading" className="sub-header text-center mb-12">Related Product Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((related) => (
                  <div key={related.id} className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                    <div className="h-40 bg-dark-300 rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={related.image}
                        width={300}
                        height={160}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-18-bold mb-2">{related.name}</h3>
                    <p className="text-dark-600 text-sm mb-4 line-clamp-2">{related.description}</p>
                    <div className="p-3 bg-dark-300 rounded-lg mb-4">
                      <p className="text-sm text-dark-600">
                        Consultation required
                      </p>
                    </div>
                    <Button className="shad-primary-btn w-full" size="sm" asChild>
                      <Link href={`/products/${related.id}`}>
                        View Information
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Information Section */}
        <section aria-labelledby="product-cta" className="py-16">
          <div className="mx-auto max-w-4xl px-[5%] text-center">
            <article className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
              <header className="mb-8">
                <h2 id="product-cta" className="sub-header mb-6">Product Information</h2>
                <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
                  Visit our clinics for product information. Fitting appointment information available.
                </p>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="shad-primary-btn px-8 py-6 text-lg" asChild>
                  <Link href="/book">Book Appointment</Link>
                </Button>
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/locations">Find Nearest Clinic</Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}