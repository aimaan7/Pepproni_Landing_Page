import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center px-4 py-12 max-w-5xl ml-4 md:ml-10  mt-16 md:mt-24 lg:mt-32">
        <section className="mb-12 md:mb-16 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Our Story</h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-10">
            Real estate has always been one of the most powerful ways to build wealth. But for most people, investing in it feels impossible, too expensive, too complex, and too slow.<br />
            We started Pepproni to change that.<br />
            Our platform makes real estate investing simple, transparent, and accessible. With just ₹1,500, anyone can invest in high-quality properties, earn rental income, and benefit from long-term growth all without the barriers and hassles.<br />
            We're building the future of real estate investing, because investing in real estate shouldn’t be a privilege, but a possibility.
          </p>
        </section>
        <section className="mb-12 md:mb-16 w-full">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">Built for Returns</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Real estate has always been a powerful way to build wealth, but it hasn’t always been accessible. Pepproni changes that by making it easy to invest in high-quality properties and start earning with as little as ₹1,500—no large down payments, no paperwork, just a simple tap to invest and track. Investors can earn 8–12% annual rental income, with steady cash flow from real tenants deposited directly into their wallets. In addition, properties offer 3–6% average annual appreciation, allowing assets to grow in value over time. With structured exit windows and full transparency, investors can sell their shares without surprises. Every property is carefully vetted, fractionalised, and professionally managed, ensuring real assets deliver real returns.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
