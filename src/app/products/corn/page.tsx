import Image from "next/image";
import Link from "next/link";

export default function CornPage() {
  const products = ["Sugar", "Corn", "Soybeans", "Beef", "Chicken"];

  return (
    <div className="bg-white text-gray-800">

      <header className="bg-[#F5F7FA] text-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo-canan.png" alt="CaNan Group Logo" width={240} height={80} />
          </Link>          <nav className="space-x-6 text-sm font-medium">
            <a href="/#about" className="hover:underline">About Us</a>
            <a href="/#vision" className="hover:underline">Our Vision</a>
            <a href="/#team" className="hover:underline">Our Team</a>
            <a href="/#services" className="hover:underline">What We Do</a>
            <a href="/#products" className="hover:underline">Our Products</a>
          </nav>
        </div>
      </header>

      <section className="bg-white-100 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Corn: Nature's Golden Treasure
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-1 py-2 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 px-1 py-12">
          <p className="text-gray-700 mb-4">
            Corn, one of the world's most versatile crops, plays a pivotal role in numerous industries and daily life. From the field to your table, it is a staple ingredient in food products, offering nourishment and energy. Beyond human consumption, corn is a primary component in livestock feed, supporting global agriculture and food systems.
          </p>
          <p className="text-gray-700 mb-4">
            The versatility of corn doesn't stop there—it is also a vital resource in producing biofuels, starch, and various industrial goods. Packed with fiber, vitamins, and antioxidants, corn promotes health and sustainability. Its adaptability makes it invaluable to economies and a key player in fostering international trade.
          </p>
          <p className="text-gray-700 mb-4">
            At 加南 CaNan, we are committed to supplying high-quality corn to fuel innovation and feed the world. Together, we grow beyond boundaries, connecting communities and industries with this golden treasure.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/products/corn.jpg"
            alt="Corn"
            width={200}
            height={200}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-1 py-12 space-y-8 leading-relaxed text-lg">
        <div className="bg-gray-50 p-6 rounded-md shadow-sm text-sm">
          <h2 className="font-bold mt-4 mb-2">Top 5 Exporters by volume:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>United States</strong>: 25.9% of global exports.</li>
            <li><strong>Brazil</strong>: 24.8%.</li>
            <li><strong>Argentina</strong>: 15.6%.</li>
            <li><strong>Ukraine</strong>: 11.1%.</li>
            <li><strong>France</strong>: 2.3%.</li>
          </ul>

          <h2 className="font-bold mt-4 mb-2">Top 5 Importers by volume:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>China</strong>: 15.8% of global imports.</li>
            <li><strong>Mexico</strong>: 9.8%.</li>
            <li><strong>Japan</strong>: 8.6%.</li>
            <li><strong>South Korea</strong>: 6.1%.</li>
            <li><strong>Spain</strong>: 4.7%.</li>
          </ul>
        </div>
        <p>
          CaNan Group proudly delivers certified, high-quality corn from South America, enabling consistent supply for both food and industrial use across the globe.
        </p>
      </div>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Explore Other Products</h3>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <Link key={product} href={`/products/${product.toLowerCase()}`}>
                <span className={`px-4 py-2 rounded-md border text-sm font-medium transition cursor-pointer ${product === "Corn"
                  ? "bg-[#1C2E46] text-white"
                  : "bg-white text-[#1C2E46] border-[#1C2E46] hover:bg-[#1C2E46] hover:text-white"}`}>
                  {product}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1C2E46] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo-canan.png" alt="CaNan Group Logo" width={180} height={60} />
            <p className="mt-4 text-sm text-gray-300">
              Bridging Southern Excellence — connecting Guangdong's consumer power with South America's agricultural abundance.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#vision" className="hover:underline">Our Vision</a></li>
              <li><a href="#team" className="hover:underline">Our Team</a></li>
              <li><a href="#services" className="hover:underline">What We Do</a></li>
              <li><a href="#products" className="hover:underline">Our Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-300">📍 Operating between Guangdong, China & South America</p>
            <p className="text-sm text-gray-300 mt-2">✉️ <a href="mailto:contact@canangroup.com.hk" className="underline">contact@canangroup.com.hk</a></p>
            <p className="text-sm text-gray-300 mt-2">🌐 www.canangroup.com.hk</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} CaNan Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}