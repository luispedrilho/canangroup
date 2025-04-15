import Image from "next/image";
import Link from "next/link";

export default function CornPage() {
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
          Corn: The Golden Crop Powering Global Markets
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-1 py-2 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 px-1 py-12">
          <p className="text-gray-700 mb-4">
            Corn is a staple commodity used in food, livestock feed, ethanol fuel, and industrial materials.
          </p>
          <p className="text-gray-700 mb-4">
            CaNan connects South American corn producers with major global buyers, offering yellow and white corn in bulk volumes.
          </p>
          <p>
            With efficient logistics and quality controls, we ensure reliable supply chains for this versatile crop.
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
          <h2 className="font-bold mb-2">Corn Exporters:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>United States</strong>: ~60 million metric tons.</li>
            <li><strong>Brazil</strong>: ~45 million metric tons.</li>
            <li><strong>Argentina</strong>: ~35 million metric tons.</li>
            <li><strong>Ukraine</strong>: ~25 million metric tons.</li>
            <li><strong>Russia</strong>: ~6 million metric tons.</li>
          </ul>
          <h2 className="font-bold mt-4 mb-2">Corn Importers:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>China</strong>: ~30 million metric tons.</li>
            <li><strong>EU</strong>: ~20 million metric tons.</li>
            <li><strong>Mexico</strong>: ~15 million metric tons.</li>
            <li><strong>Japan</strong>: ~12 million metric tons.</li>
            <li><strong>South Korea</strong>: ~10 million metric tons.</li>
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
    </div>
  );
}