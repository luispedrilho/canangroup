"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/globals.css";


export default function SoybeansPage() {
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
          <div className="md:hidden mt-4 space-y-2 px-6 text-sm font-medium">
            <a href="/#about" className="block hover:underline">About Us</a>
            <a href="/#vision" className="block hover:underline">Our Vision</a>
            <a href="/#team" className="block hover:underline">Our Team</a>
            <a href="/#services" className="block hover:underline">What We Do</a>
            <a href="/#products" className="block hover:underline">Our Products</a>
          </div>
        )}
      </header>


      <section className="bg-white-100 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Soybeans: A Nutritional Powerhouse and Industrial Marvel
        </h1>
      </section>

      {/* Bloco com imagem à direita */}
      <div className="max-w-6xl mx-auto px-1 py-2 flex flex-col md:flex-row items-center gap-10">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 px-1 py-12">
          <p className="text-gray-700 mb-4">
            Soybeans are one of the most remarkable crops, valued for their nutritional benefits and wide-ranging applications. Primarily used in animal feed, soybeans are a rich source of protein for livestock, supporting global agriculture. They are also processed into soybean oil, a widely popular cooking oil, and soy-based products like tofu, soy milk, and soy protein, providing essential nutrition for human consumption.
          </p>
          <p className="text-gray-700 mb-4">
            Beyond food, soybeans are indispensable in industrial applications such as biodiesel production and eco-friendly materials. Packed with plant-based protein, essential amino acids, and healthy fats, soybeans support heart health, help regulate cholesterol levels, and may reduce the risk of certain diseases. Their versatility makes them an invaluable resource across both food and non-food industries.
          </p>
          <p className="text-gray-700 mb-4">
            At 加南 CaNan, we take pride in delivering premium-quality soybeans, bridging sustainability, innovation, and nutrition to fuel growth and connect communities worldwide.
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2">
          <Image
            src="/products/soybeans.jpg"
            alt="Soybeans"
            width={200}
            height={200}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-1 py-12 space-y-8 leading-relaxed text-lg">
        <div className="bg-gray-50 p-6 rounded-md shadow-sm text-sm">
          <h2 className="font-bold mt-4 mb-2">Top 5 Exporters by volume:          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Brazil</strong>: 53.3% of global export.</li>
            <li><strong>United States</strong>: 34.7%.</li>
            <li><strong>Argentina</strong>: 4%.</li>
            <li><strong>Paraguay</strong>: 3.5%.</li>
            <li><strong>Canada</strong>: 2.9%.</li>
          </ul>

          <h2 className="font-bold mt-4 mb-2">Top 5 Importers by volume:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>China</strong>: 59% of global imports.</li>
            <li><strong>European Union</strong>: 8.8%.</li>
            <li><strong>Mexico</strong>: 4.1%.</li>
            <li><strong>Japan</strong>: 1.9%.</li>
            <li><strong>Thailand</strong>: 1.8%.</li>
          </ul>
        </div>


      </div>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Explore Other Products</h3>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <Link key={product} href={`/products/${product.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition cursor-pointer ${product === "Soybeans"
                    ? "bg-[#1C2E46] text-white"
                    : "bg-white text-[#1C2E46] border-[#1C2E46] hover:bg-[#1C2E46] hover:text-white"}`}
                >
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
