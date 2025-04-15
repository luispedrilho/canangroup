import Image from "next/image";
import Link from "next/link"; // ✅ Adicionado
import "@/styles/globals.css";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-[#F5F7FA] text-gray-900 px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/logo-canan.png" alt="CaNan Group Logo" width={240} height={80} />
          </Link>
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
        className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
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

      {/* Marquee com links para as subpáginas */}
      <div className="overflow-hidden bg-[#1C2E46] text-white py-2 flex justify-right px-6 space-x-6 text-sm font-semibold">
        <Link href="/products/sugar" className="hover:underline">Sugar</Link>
        <Link href="/products/corn" className="hover:underline">Corn</Link>
        <Link href="/products/soybeans" className="hover:underline">Soybeans</Link>
        <Link href="/products/beef" className="hover:underline">Beef</Link>
        <Link href="/products/chicken" className="hover:underline">Chicken</Link>
        <Link href="/products/pork" className="hover:underline">Pork</Link>
      </div>

      <section id="about" className="scroll-mt-28 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-6">
          At <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span> was conceived to establish a dynamic business network
          that unites two powerhouse southern regions on a shared platform. By transcending geographical boundaries, we connect Guangdong, China’s
          southern economic giant, to the resource-rich southern hemisphere of America—creating a seamless supply chain that drives innovation,
          sustainability, and growth.
        </p>

        <h3 className="text-lg font-semibold mb-2">A Southern Hub of Consumption</h3>
        <p className="mb-4">
          Situated in southern China, Guangdong stands as one of the country's most influential provinces. Home to around 130 million active consumers,
          it boasts an economy larger than any other province in China, with a GDP of nearly USD 2 trillion—ranking among the top 10 economies globally.
          Its strategic location along one of China’s longest coastlines, fronting the South China Sea, has established Guangdong as a global trade gateway.
        </p>
        <p className="mb-6">
          Guangdong’s major cities, such as Guangzhou and Shenzhen, are not only renowned for their manufacturing prowess but have also become global centers
          of technology and innovation. As a vital driver of China’s economic growth, Guangdong represents the epitome of consumer power and industrial strength.
        </p>

        <h3 className="text-lg font-semibold mb-2">A Southern Source of Supply</h3>
        <p className="mb-4">
          In the southern hemisphere, South America emerges as a global leader in food production and exportation. With some of the world's most fertile lands,
          including Brazil’s <span className="italic">Cerrado</span> and Argentina's Pampas, the continent is a powerhouse for crops like soybeans, corn,
          coffee, sugarcane, and beef. Abundant freshwater resources and diverse climates allow for sustainable, year-round agricultural practices.
        </p>
        <p>
          South America’s unique combination of natural assets, vast farmland, renewable energy potential, and efficient production costs gives it a significant
          edge in the global food market. This agricultural dominance ensures the continent’s critical role in advancing global food security and sustainability.
        </p>
      </section>

      <section id="vision" className="scroll-mt-28 py-16 px-6 max-w-5xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="mb-6">
          <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span> was founded with a clear purpose: to build a bridge between these two southern
          regions, creating a unified network that fosters mutual growth and prosperity. By forging strategic, long-term partnerships with South American
          food suppliers, we ensure the delivery of premium-quality food to meet the growing demands of Guangdong’s vibrant market.
        </p>

        <p>
          Our commitment lies in <span className="font-medium">innovation, efficiency, transparency and sustainability</span>, as we strive to set new
          standards in global trade and food supply. At <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span>,
          we believe in <span className="italic">connecting continents</span>, <span className="italic">empowering communities</span>, and creating a
          future where the south leads the world in excellence.
        </p>
      </section>

      <section id="team" className="scroll-mt-28 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="mb-6">
          At <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span>, our success is driven by the expertise and dedication of our
          exceptional team, strategically positioned across two continents to deliver unmatched value in global food trade.
        </p>

        <p className="mb-6">
          <span className="font-semibold">In Guangdong, China</span>, our highly experienced sales team brings over 30 years of expertise to the table.
          With well-established partnerships spanning both public and private sectors, including food processors, distributors, and retailers, they
          ensure seamless connections within one of the world’s most dynamic consumer markets. Their in-depth market knowledge and commitment to
          excellence form the foundation of our trusted relationships and success.
        </p>

        <p className="mb-6">
          <span className="font-semibold">In South America, Brazil</span>, our skilled food procurement team boasts more than 20 years of proven experience
          in the agribusiness sector. Their expertise ensures a transparent, sustainable, and efficient food sourcing channel that upholds the highest
          standards of quality and integrity. By leveraging South America’s agricultural abundance, this team secures premium products that meet the
          demands of global markets.
        </p>

        <p>
          <span className="font-semibold">Together</span>, our teams embody the values of professionalism, collaboration, and innovation, creating a robust
          supply chain network that unites southern regions and transcends boundaries. At <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span>,
          our people are our greatest asset, delivering first-class solutions with passion and expertise.
        </p>
      </section>

      <section id="services" className="scroll-mt-28 py-16 px-6 max-w-5xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="mb-6">
          At <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span>, we specialize in the trade and distribution of
          high-quality agricultural products, ensuring that global markets are consistently supplied with essential commodities.
          Our portfolio includes <span className="font-medium">sugar, corn, soybeans</span>, and premium frozen animal proteins such as
          <span className="font-medium"> beef, chicken, and pork</span>.
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
            <strong>Distribution Services</strong>: Choose <span className="font-bold">加南 <span className="text-indigo-600">CaNan Group</span></span> as your trusted distributor,
            connecting your premium food products with markets in China and beyond. We are dedicated to delivering quality, reliability, and professionalism to help your business thrive.
          </li>
        </ul>

        <p>
          • At <span className="font-bold">CaNan Group</span>, we are committed to creating value by connecting producers to consumers,
          fostering strong partnerships, and delivering excellence in the global agricultural supply chain.
        </p>
      </section>

      <section id="products" className="scroll-mt-28 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {['Sugar', 'Corn', 'Soybeans', 'Beef', 'Chicken', 'Pork'].map(product => (
            <Link
              key={product}
              href={`/products/${product.toLowerCase()}`}
              className="p-4 bg-white border shadow rounded-xl text-center hover:shadow-lg transition"
            >
              <Image
                src={`/products/${product.toLowerCase()}.jpg`}
                alt={product}
                width={100}
                height={100}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="text-xl font-semibold">{product}</h3>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-[#1C2E46] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo-canan.png" alt="CaNan Group Logo" width={180} height={60} />
            <p className="mt-4 text-sm text-gray-300">
              Bridging Southern Excellence — connecting Guangdong’s consumer power with South America’s agricultural abundance.
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
            <p className="text-sm text-gray-300 mt-2">✉️ <a href="mailto:contact@canangroup.com" className="underline">contact@canangroup.com</a></p>
            <p className="text-sm text-gray-300 mt-2">🌐 www.canangroup.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} CaNan Group. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
