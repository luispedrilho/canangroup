import Image from "next/image";
import Link from "next/link";

export default function ChickenPage() {
  const products = ["Sugar", "Corn", "Soybeans", "Beef", "Chicken", "Pork"];

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
          Chicken: Affordable Protein for the World
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-1 py-2 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 px-1 py-12">
          <p className="text-gray-700 mb-4">
            Chicken meat is a widely consumed source of lean protein, valued for its affordability and efficiency of production.
          </p>
          <p className="text-gray-700 mb-4">
            CaNan offers frozen chicken cuts sourced from top-tier certified producers in South America, processed under international hygiene standards.
          </p>
          <p>
            We enable full container and mixed product shipping to meet customer-specific demands.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/products/chicken.jpg"
            alt="Chicken"
            width={200}
            height={200}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-1 py-12 space-y-8 leading-relaxed text-lg">
        <div className="bg-gray-50 p-6 rounded-md shadow-sm text-sm">
          <h2 className="font-bold mb-2">Chicken Exporters:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Brazil</strong>: ~4.5 million metric tons.</li>
            <li><strong>United States</strong>: ~3 million metric tons.</li>
            <li><strong>EU</strong>: ~1.5 million metric tons.</li>
            <li><strong>Thailand</strong>: ~1 million metric tons.</li>
            <li><strong>China</strong>: ~700 thousand metric tons.</li>
          </ul>
          <h2 className="font-bold mt-4 mb-2">Chicken Importers:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>China</strong>: ~1.2 million metric tons.</li>
            <li><strong>Saudi Arabia</strong>: ~1 million metric tons.</li>
            <li><strong>Japan</strong>: ~900 thousand metric tons.</li>
            <li><strong>Mexico</strong>: ~800 thousand metric tons.</li>
            <li><strong>UAE</strong>: ~700 thousand metric tons.</li>
          </ul>
        </div>
        <p>
          CaNan Group provides high-quality poultry that meets international food safety standards, helping nourish families and communities around the world.
        </p>
      </div>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Explore Other Products</h3>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <Link key={product} href={`/products/${product.toLowerCase()}`}>
                <span className={`px-4 py-2 rounded-md border text-sm font-medium transition cursor-pointer ${product === "Chicken"
                  ? "bg-[#1C2E46] text-white"
                  : "bg-white text-[#1C2E46] border-[#1C2E46] hover:bg-[#1C2E46] hover:text-white"}`}>
                  {product}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}