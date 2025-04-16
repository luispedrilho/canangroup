import Image from "next/image";
import Link from "next/link";

export default function SugarPage() {
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
        <p>
          CaNan Group proudly delivers certified, high-quality sugar with excellence in logistics, sustainability, and global reach.
        </p>
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
    </div>
  );
}