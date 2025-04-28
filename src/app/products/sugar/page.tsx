"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/globals.css";

export default function SugarPage() {
  const products = ["Sugar", "Corn", "Soybeans", "Cotton", "Wheat", "Sorghum"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">

      {/* Cabeçalho */}
      <header className="bg-[#f6f7f9] text-gray-900 px-6 py-0 shadow-md sticky top-0 z-50">

        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo-canan.png" alt="CaNan Group Logo" width={240} height={80} />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-4 text-sm font-semibold text-[#1C2E46] tracking-wide drop-shadow-lg">
            {[
              { label: "About Us", href: "/#about" },
              { label: "Our Vision", href: "/#vision" },
              { label: "Our Team", href: "/#team" },
              { label: "What We Do", href: "/#services" },
              { label: "Our Products", href: "/#products" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-[#EAF0F6] transition-all"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Botão de Toggle para Menu Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 px-6 py-4">
            <div className="bg-white rounded-xl shadow-lg py-4 px-6 space-y-1">
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="block text-[#162336] font-semibold hover:text-[#162336] hover:bg-[#EAF0F6] transition rounded-lg px-4 py-1"
              >
                About Us
              </a>
              <a
                href="/#vision"
                onClick={() => setIsOpen(false)}
                className="block text-[#162336] font-semibold hover:text-[#162336] hover:bg-[#EAF0F6] transition rounded-lg px-4 py-1"
              >
                Our Vision
              </a>
              <a
                href="/#team"
                onClick={() => setIsOpen(false)}
                className="block text-[#162336] font-semibold hover:text-[#162336] hover:bg-[#EAF0F6] transition rounded-lg px-4 py-1"
              >
                Our Team
              </a>
              <a
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="block text-[#162336] font-semibold hover:text-[#162336] hover:bg-[#EAF0F6] transition rounded-lg px-4 py-1"
              >
                What We Do
              </a>
              <a
                href="/#products"
                onClick={() => setIsOpen(false)}
                className="block text-[#162336] font-semibold hover:text-[#162336] hover:bg-[#EAF0F6] transition rounded-lg px-4 py-1"
              >
                Our Products
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="bg-white-100 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Sugar: Sweetening Lives and Driving Industries
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-1 py-2 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 px-1 py-12">
          <p className="text-gray-700 mb-4">
            Sugar is much more than a sweetener—it's a vital ingredient that supports a variety of industries and enhances everyday life. From food and beverage production to pharmaceuticals and cosmetics, sugar plays a key role in creating products we rely on. Its versatility extends from preserving fruits and boosting flavors to being a natural exfoliant in skincare products.
          </p>
          <p className="text-gray-700 mb-4">
            Known for its practical benefits, sugar serves as a quick source of energy, supports physical endurance, and contributes to mood regulation by elevating serotonin and dopamine levels. Whether it’s adding sweetness to your favorite recipes or enriching industrial applications, sugar is indispensable.
          </p>
          <p className="text-gray-700 mb-4">
            At 加南 CaNan, we are committed to providing high-quality sugar to cater to diverse needs, ensuring it remains a cornerstone of global trade and daily life. Together, we bring the sweetness that connects cultures, flavors, and industries.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/products/sugar.jpg"
            alt="Sugar"
            width={200}
            height={200}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-1 py-12 space-y-8 leading-relaxed text-lg">
        <div className="bg-gray-50 p-6 rounded-md shadow-sm text-sm">
          <h2 className="font-bold mt-4 mb-2">Top Exporters by Volume:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Brazil</strong>: 43.4% of global exports.</li>
            <li><strong>India</strong>: 32.5%.</li>
            <li><strong>Thailand</strong>: 9.5%.</li>
            <li><strong>France</strong>: 3.3%.</li>
            <li><strong>Germany</strong>: 2.7%.</li>
          </ul>

          <h2 className="font-bold mt-4 mb-2">Top Importers by Volume:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Indonesia</strong>: 7.2% of global imports.</li>
            <li><strong>United States</strong>: 6.1%.</li>
            <li><strong>China</strong>: 5.7%.</li>
            <li><strong>Italy</strong>: 4%.</li>
            <li><strong>India</strong>: 3.7%.</li>
          </ul>
        </div>

      </div>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Explore Other Products</h3>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <Link key={product} href={`/products/${product.toLowerCase()}`}>
                <span className={`px-4 py-2 rounded-md border text-sm font-medium transition cursor-pointer ${product === "Sugar"
                  ? "bg-[#1C2E46] text-white"
                  : "bg-white text-[#1C2E46] border-[#1C2E46] hover:bg-[#1C2E46] hover:text-white"}`}>
                  {product}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gradient-to-b from-[#142F4D] to-[#0A1A2F] text-white pt-16 pb-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-6">
          {/* Logo + Slogan */}
          <div className="flex flex-col gap-4">
            <Image src="/logo-canan-white.png" alt="CaNan Group Logo" width={200} height={60} />
            <p className="text-sm text-gray-300 leading-relaxed">
              Bridging Southern Excellence — connecting Guangdong's consumer power with South America's agricultural abundance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Our Vision", href: "/#vision" },
                { label: "Our Team", href: "/#team" },
                { label: "What We Do", href: "/#services" },
                { label: "Our Products", href: "/#products" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Guangdong, China & South America</li>
              <li>✉️ <a href="mailto:contact@canangroup.com.hk" className="underline text-white">contact@canangroup.com.hk</a></li>
              <li>🌐 <a href="https://www.canangroup.com.hk" target="_blank" className="underline text-white">www.canangroup.com.hk</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-600 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} CaNan Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}