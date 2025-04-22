import Image from "next/image";
import Link from "next/link";

export default function SoybeansPage() {
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

        <p>
          At 加南 Ca Nan, we take pride in delivering premium-quality soybeans, bridging sustainability, innovation,
          and nutrition to fuel growth and connect communities worldwide.
        </p>
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
