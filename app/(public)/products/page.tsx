// app\(public)\products\page.tsx - 

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, PRODUCT_FEATURES } from "@/constants/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section aria-labelledby="products-hero" className="bg-gradient-to-b from-dark-400 to-dark-300 py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 id="products-hero" className="header mb-6">
                  Product <span className="text-green-500">Information</span>
                </h1>
                <p className="text-dark-700 text-lg mb-8">
                  Frame, lens, sunglass and accessory information. 
                  Products available at our clinic locations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="shad-gray-btn" asChild>
                    <Link href="/locations">Branch Locations</Link>
                  </Button>
                  <Button className="shad-gray-btn" asChild>
                    <Link href="/contact">Contact for Information</Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-dark-500">
                  <Image
                    src="/assets/images/products-showcase.png"
                    width={800}
                    height={600}
                    alt="Product information including frames, sunglasses and lenses"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Information */}
        <section aria-label="Product information" className="py-12 bg-green-600/10">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {PRODUCT_FEATURES.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="size-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg">•</span>
                  </div>
                  <p className="text-sm text-dark-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Navigation */}
        <section aria-label="Product categories" className="py-8 bg-dark-400">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="flex flex-wrap gap-4 justify-center">
              {PRODUCT_CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center gap-2 px-6 py-3 bg-dark-300 hover:bg-dark-500 rounded-full transition text-dark-600"
                >
                  <span>{category.icon}</span>
                  <span className="font-medium">{category.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* All Products Information */}
        <section aria-labelledby="all-products" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="all-products" className="sub-header mb-4">Product Information</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Available at branches. Consultation required.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {PRODUCTS_DATA.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        <section id="frames" aria-labelledby="frames-heading" className="py-16 bg-dark-300">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="frames-heading" className="sub-header mb-4">Frame Information</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Frame options available. Consultation required.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS_DATA
                .filter(p => p.category === 'frames')
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </section>

        <section id="sunglasses" aria-labelledby="sunglasses-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="sunglasses-heading" className="sub-header mb-4">Sunglass Information</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Sunglass options available. Consultation required.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS_DATA
                .filter(p => p.category === 'sunglasses')
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </section>

        <section id="contact-lenses" aria-labelledby="contacts-heading" className="py-16 bg-dark-300">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="contacts-heading" className="sub-header mb-4">Contact Lens Information</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Contact lens options available. Consultation required.
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS_DATA
                .filter(p => p.category === 'contact-lenses')
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section aria-labelledby="products-cta" className="py-16">
          <div className="mx-auto max-w-4xl px-[5%] text-center">
            <article className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
              <header className="mb-8">
                <h2 id="products-cta" className="sub-header mb-6">Product Information</h2>
                <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
                  Product viewing at branches. Consultation required for fitting.
                </p>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/locations">Branch Locations</Link>
                </Button>
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/contact">Contact for Information</Link>
                </Button>
              </div>
              <footer className="pt-8 border-t border-dark-500">
                <p className="text-sm text-dark-600">
                  Products available at branches. Consultation required for fitting.
                </p>
              </footer>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}