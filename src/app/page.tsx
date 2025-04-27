"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "@/styles/globals.css";


export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const bannerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const bannerMessages = [
    "Bridging Southern Excellence",
    "Empowering Corn Trade",
    "Global Reach in Soybean Exports"
  ];
  const bannerDescriptions = [
    "Connecting Guangdong's consumer power with South America's agricultural abundance.",
    "From fertile fields to the global stage, Corn that feeds the world.",
    "Soybeans cultivated for sustainability and global nourishment."
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingKey, setAnimatingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerMessages.length);
      setAnimatingKey((prev) => prev + 1); // força re-render animado
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% visível para disparar
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

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
              { label: "About Us", href: "#about" },
              { label: "Our Vision", href: "#vision" },
              { label: "Our Team", href: "#team" },
              { label: "What We Do", href: "#services" },
              { label: "Our Products", href: "#products" },
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
          <div className="md:hidden mt-4 px-6">
            <div className="bg-white rounded-xl shadow-lg py-4 px-6 space-y-4">
              <a href="#about" className="block text-[#162336] font-semibold hover:text-white hover:bg-[#162336] transition rounded-lg px-4 py-2">About Us</a>
              <a href="#vision" className="block text-[#162336] font-semibold hover:text-white hover:bg-[#162336] transition rounded-lg px-4 py-2">Our Vision</a>
              <a href="#team" className="block text-[#162336] font-semibold hover:text-white hover:bg-[#162336] transition rounded-lg px-4 py-2">Our Team</a>
              <a href="#services" className="block text-[#162336] font-semibold hover:text-white hover:bg-[#162336] transition rounded-lg px-4 py-2">What We Do</a>
              <a href="#products" className="block text-[#162336] font-semibold hover:text-white hover:bg-[#162336] transition rounded-lg px-4 py-2">Our Products</a>
            </div>
          </div>
        )}

      </header>

      {/* Seção de Banner */}
      <section
        id="banner"
        ref={bannerRef}
        className={`relative h-[75vh] flex items-center justify-end text-white bg-cover bg-center px-4 md:px-12 transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
      >
        {/* Imagem Desktop */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/banner-impact.jpg)" }}
        />

        {/* Imagem Mobile */}
        <div
          className="block md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/banner-impact-mobile.jpg)" }}
        />

        {/* Gradiente sobre a imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

        {/* Texto do banner */}
        <div className="relative z-10 text-right w-full max-w-xs md:max-w-4xl ml-auto mt-40 md:mt-60 transition-all duration-700">
          <div key={animatingKey} className="animate-slideDown transition-all duration-700">
            <h1 className="text-xl md:text-5xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-xl drop-shadow-lg inline-block bg-black/50 text-white text-right">
              {bannerMessages[currentIndex]}
            </h1>
            <p className="text-sm md:text-xl max-w-xs md:max-w-2xl ml-auto mt-2 text-white text-right">
              {bannerDescriptions[currentIndex]}
            </p>
          </div>
          <Link
            href="#about"
            className="mt-4 md:mt-6 inline-block bg-[#ffffff] text-[#162336] font-medium px-5 md:px-6 py-2 rounded-full hover:bg-[#162336] hover:text-white transition drop-shadow-lg text-sm md:text-base"
          >
            Learn More
          </Link>
        </div>
      </section>



      {/* Marquee com links para as subpáginas */}
      <div className="sticky top-[130px] z-40 bg-[#F9FAFC] shadow-lg">
        <div className="overflow-x-auto py-3 px-6 flex space-x-4 text-sm font-semibold text-black">
          {["Sugar", "Corn", "Soybeans", "Cotton", "Wheat", "Sorghum"].map(product => (
            <Link
              key={product}
              href={`/products/${product.toLowerCase()}`}
              className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-[#EAF0F6] transition-all whitespace-nowrap"
            >
              <Image
                src={`/icons/${product.toLowerCase()}.svg`}
                width={20}
                height={20}
                alt={product}
              />
              {product}
            </Link>
          ))}
        </div>
      </div>

      {/* Seção Sobre Nós */}
      <section id="about" className="scroll-mt-28 py-16 px-6 mx-auto bg-no-repeat bg-left bg-contain" style={{ backgroundImage: "url('/back-section-left.png')" }}>
        <div className="relative max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-6">
            At 加南 CaNan Group was conceived to establish a dynamic business network
            that unites two powerhouse southern regions on a shared platform. By transcending geographical boundaries, we connect Guangdong, China's
            southern economic giant, to the resource-rich southern hemisphere of America—creating a seamless supply chain that drives innovation,
            sustainability, and growth.
          </p>

          <h3 className="text-lg font-semibold mb-2">A Southern Hub of Consumption</h3>
          <p className="mb-4">
            Situated in southern China, Guangdong stands as one of the country's most influential provinces. Home to around 130 million active consumers,
            it boasts an economy larger than any other province in China, with a GDP of nearly USD 2 trillion—ranking among the top 10 economies globally.
            Its strategic location along one of China's longest coastlines, fronting the South China Sea, has established Guangdong as a global trade gateway.
          </p>
          <p className="mb-6">
            Guangdong's major cities, such as Guangzhou and Shenzhen, are not only renowned for their manufacturing prowess but have also become global centers
            of technology and innovation. As a vital driver of China's economic growth, Guangdong represents the epitome of consumer power and industrial strength.
          </p>

          <h3 className="text-lg font-semibold mb-2">A Southern Source of Supply</h3>
          <p className="mb-4">
            In the southern hemisphere, South America emerges as a global leader in food production and exportation. With some of the world's most fertile lands,
            including Brazil's <span className="italic">Cerrado</span> and Argentina's Pampas, the continent is a powerhouse for crops like soybeans, corn,
            coffee, sugarcane, and beef. Abundant freshwater resources and diverse climates allow for sustainable, year-round agricultural practices.
          </p>
          <p>
            South America's unique combination of natural assets, vast farmland, renewable energy potential, and efficient production costs gives it a significant
            edge in the global food market. This agricultural dominance ensures the continent's critical role in advancing global food security and sustainability.
          </p>
        </div>
      </section>

      {/* Seção Nossa Visão */}
      <section id="vision" className="scroll-mt-28 py-16 px-6  mx-auto">
        <div className="relative max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="mb-6">
            加南 CaNan Group was founded with a clear purpose: to build a bridge between these two southern
            regions, creating a unified network that fosters mutual growth and prosperity. By forging strategic, long-term partnerships with South American
            food suppliers, we ensure the delivery of premium-quality food to meet the growing demands of Guangdong's vibrant market.
          </p>

          <p>
            Our commitment lies in <span className="font-medium">innovation, efficiency, transparency and sustainability</span>, as we strive to set new
            standards in global trade and food supply. At 加南 CaNan Group,
            we believe in <span className="italic">connecting continents</span>, <span className="italic">empowering communities</span>, and creating a
            future where the south leads the world in excellence.
          </p>
        </div>
      </section>

      {/* Seção Nossa Equipe */}
      <section id="team" className="scroll-mt-28 py-16 px-6 mx-auto bg-no-repeat bg-right bg-contain" style={{ backgroundImage: "url('/back-section-right.png')" }}>
        <div className="relative max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="mb-6">
            At 加南 CaNan Group, our success is driven by the expertise and dedication of our
            exceptional team, strategically positioned across two continents to deliver unmatched value in global food trade.
          </p>

          <p className="mb-6">
            <span className="font-semibold">In Guangdong, China</span>, our highly experienced sales team brings over 30 years of expertise to the table.
            With well-established partnerships spanning both public and private sectors, including food processors, distributors, and retailers, they
            ensure seamless connections within one of the world's most dynamic consumer markets. Their in-depth market knowledge and commitment to
            excellence form the foundation of our trusted relationships and success.
          </p>

          <p className="mb-6">
            <span className="font-semibold">In South America, Brazil</span>, our skilled food procurement team boasts more than 20 years of proven experience
            in the agribusiness sector. Their expertise ensures a transparent, sustainable, and efficient food sourcing channel that upholds the highest
            standards of quality and integrity. By leveraging South America's agricultural abundance, this team secures premium products that meet the
            demands of global markets.
          </p>

          <p>
            <span className="font-semibold">Together</span>, our teams embody the values of professionalism, collaboration, and innovation, creating a robust
            supply chain network that unites southern regions and transcends boundaries. At 加南 CaNan Group,
            our people are our greatest asset, delivering first-class solutions with passion and expertise.
          </p>
        </div>
      </section>

      {/* Seção O Que Fazemos */}
      <section id="services" className="scroll-mt-28 py-16 px-6">
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="mb-6">
            At 加南 CaNan Group, we specialize in the trade and distribution of high-quality agricultural products, ensuring that global markets are consistently supplied with essential commodities.
          </p>

          <p className="mb-6">
            We provide a comprehensive suite of services that go beyond simply trading products. Our expertise lies in delivering tailored solutions
            to meet the unique needs of our partners:
          </p>

          <ul className="list-disc pl-6 space-y-4 mb-6">
            <li>
              <strong>Procurement Services</strong>: Leveraging our extensive network and experience to source the finest agricultural goods efficiently and sustainably.
            </li>
            <li>
              <strong>Financing Solutions</strong>: Offering flexible financial options to support smooth and transparent transactions across borders.
            </li>
            <li>
              <strong>Custom Food Sourcing Solutions</strong>: Crafting personalized strategies to meet specific demands, ensuring quality and reliability at every step.
            </li>
            <li>
              <strong>Distribution Services</strong>: Choose 加南 CaNan Group as your trusted distributor,
              connecting your premium food products with markets in China and beyond. We are dedicated to delivering quality, reliability, and professionalism to help your business thrive.
            </li>
          </ul>

          <p>
            • At 加南 CaNan Group, we are committed to creating value by connecting producers to consumers,
            fostering strong partnerships, and delivering excellence in the global agricultural supply chain.
          </p>
        </div>
      </section>

      {/* Seção Nossos Produtos */}
      <section
        id="products"
        className="relative w-full bg-gradient-to-b from-white via-[#72787f] to-[#142F4D] overflow-hidden"
      >
        {/* Conteúdo */}
        <div className="relative z-20 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center text-[#142F4D]">Our Products</h2>
            <div className="grid grid-cols-6 gap-6">
              <Link href="/products/sugar" className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img src="/products/sugar.jpg" alt="Sugar" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#142F4D]">Sugar</h3>
              </Link>
              <Link href="/products/corn" className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img src="/products/corn.jpg" alt="Corn" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#142F4D]">Corn</h3>
              </Link>
              <Link href="/products/soybeans" className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img src="/products/soybeans.jpg" alt="Soybeans" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#142F4D]">Soybeans</h3>
              </Link>
              <Link href="/products/wheat" className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img src="/products/wheat.jpg" alt="wheat" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#142F4D]">Wheat</h3>
              </Link>
              <Link href="/products/cotton" className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img src="/products/cotton.jpg" alt="cotton" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#142F4D]">Cotton</h3>
              </Link>
              <Link href="/products/sorghum" className="col-span-2 flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img src="/products/sorghum.jpg" alt="sorghum" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#142F4D]">Sorghum</h3>
              </Link>
            </div>
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
                { label: "About Us", href: "#about" },
                { label: "Our Vision", href: "#vision" },
                { label: "Our Team", href: "#team" },
                { label: "What We Do", href: "#services" },
                { label: "Our Products", href: "#products" },
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
