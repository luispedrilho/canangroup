import Image from "next/image";
import Link from "next/link";

export default function BeefPage() {
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
          Beef: Excellence in Quality and Global Distribution
        </h1>
      </section>

      {/* Bloco com imagem à direita */}
      <div className="max-w-6xl mx-auto px-1 py-2 flex flex-col md:flex-row items-center gap-10">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 px-1 py-12">
          <p className="text-gray-700 mb-4">
            Our beef is sourced from the most reputable producers in South America, where animal welfare and quality standards are a top priority.
          </p>
          <p className="text-gray-700 mb-4">
            It is a high-quality protein option with international certifications, exported fresh and frozen to meet the diverse needs of global markets.
          </p>
          <p>
            We specialize in customizable cuts, full-traceability logistics, and sustainable production practices, offering top-grade beef for foodservice and retail clients worldwide.
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2">
          <Image
            src="/products/beef.jpg"
            alt="Beef"
            width={200}
            height={200}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-1 py-12 space-y-8 leading-relaxed text-lg">
        <div className="bg-gray-50 p-6 rounded-md shadow-sm text-sm">
          <h2 className="font-bold mb-2">Top Beef Exporters:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Brazil</strong>: ~2.9 million metric tons annually.</li>
            <li><strong>United States</strong>: ~1.5 million metric tons.</li>
            <li><strong>Australia</strong>: ~1.4 million metric tons.</li>
            <li><strong>India</strong>: ~1.3 million metric tons.</li>
            <li><strong>Argentina</strong>: ~800 thousand metric tons.</li>
          </ul>

          <h2 className="font-bold mt-4 mb-2">Main Beef Importers:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>China</strong>: ~2.7 million metric tons (largest global importer).</li>
            <li><strong>United States</strong>: ~1.2 million metric tons.</li>
            <li><strong>Japan</strong>: ~800 thousand metric tons.</li>
            <li><strong>South Korea</strong>: ~600 thousand metric tons.</li>
            <li><strong>EU</strong>: ~500 thousand metric tons.</li>
          </ul>
        </div>

        <p>
          CaNan Group proudly offers premium beef with consistent quality, transparency, and full regulatory compliance — helping feed the world with responsibility and care.
        </p>
      </div>

      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Explore Other Products</h3>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <Link key={product} href={`/products/${product.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition cursor-pointer ${product === "Beef"
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
    </div>
  );
}
