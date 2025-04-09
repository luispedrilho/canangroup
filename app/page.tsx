import Image from "next/image";
import "../styles/globals.css";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-[#F5F7FA] text-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Image src="/logo-canan.png" alt="CaNan Group Logo" width={240} height={80} />
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#vision" className="hover:underline">Our Vision</a>
            <a href="#team" className="hover:underline">Our Team</a>
            <a href="#services" className="hover:underline">What We Do</a>
            <a href="#products" className="hover:underline">Our Products</a>
          </nav>
        </div>
      </header>

      <section
        className="relative h-[90vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: 'url(/banner-impact.jpg)' }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Bridging Southern Excellence</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Connecting Guangdong’s consumer power with South America’s agricultural abundance.
          </p>
        </div>
      </section>

      <div className="overflow-hidden whitespace-nowrap bg-[#1C2E46] text-white py-2">
        <div className="animate-marquee inline-block">
          {['Sugar', 'Corn', 'Soybeans', 'Beef', 'Chicken', 'Pork'].map((product, i) => (
            <span key={i} className="mx-8 text-lg font-semibold">{product}</span>
          ))}
        </div>
      </div>

      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          CaNan Group was founded to establish a dynamic business network that unites two powerhouse southern regions—Guangdong and South America. We bridge consumer and production power to create sustainable global food supply chains.
        </p>
      </section>

      <section id="vision" className="py-16 px-6 max-w-5xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg">
          To build a bridge between southern regions, fostering mutual growth and prosperity through strategic partnerships, innovation, and sustainability.
        </p>
      </section>

      <section id="team" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-lg mb-4">
          Our experienced teams operate across China and Brazil. In Guangdong, our sales experts have over 30 years of experience and deep industry relationships. In Brazil, our procurement specialists ensure high-quality, sustainable sourcing.
        </p>
      </section>

      <section id="services" className="py-16 px-6 max-w-5xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Procurement Services</li>
          <li>Financing Solutions</li>
          <li>Custom Food Sourcing</li>
          <li>Distribution and Global Trade</li>
        </ul>
      </section>

      <section id="products" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {['Sugar', 'Corn', 'Soybeans', 'Beef', 'Chicken', 'Pork'].map(product => (
            <div key={product} className="p-4 bg-white border shadow rounded-xl text-center">
              <Image
                src={`/products/${product.toLowerCase()}.jpg`}
                alt={product}
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="text-xl font-semibold">{product}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}