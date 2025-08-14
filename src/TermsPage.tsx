import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

function TermsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <br /><br />
      <main className="flex flex-col px-4 py-12 w-full max-w-3xl ml-4 md:ml-10 mt-16 md:mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-left">Terms & Conditions</h1>

        <section className="mb-8 w-full">
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            All information provided on this website is published in good faith and for general informational purposes only. PEPPRONI™️ does not guarantee the completeness, reliability, or accuracy of this information. Any actions taken based on the information found on this website are at your own risk. PEPPRONI™️ will not be liable for any losses or damages arising from the use of this website. The company is not yet incorporated. Any personal information provided to us will be safeguarded and handled in accordance with applicable privacy laws and regulations.
          </p>
        </section>

        <p className="text-lg text-gray-700 leading-relaxed mb-10 text-left">
          We’ll be ready soon - but in the meantime,
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3OzUaXvim5ZumXtWlcLbxA4hy5TQbYoFJJwHgOQNjgM3pkg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-[#2CBCC4] hover:bg-[#2CBCC4]/90 text-[#FBFBFB] px-6 py-3 rounded-xl font-satoshi font-medium text-lg transition-colors duration-200 shadow-lg w-full sm:w-auto">
            Join the Revolution
          </a>
          <button className="bg-[#2A2A2A] hover:bg-[#2A2A2A]/90 text-[#FBFBFB] px-6 py-3 rounded-xl font-satoshi font-medium text-lg transition-colors duration-200 shadow-lg w-full sm:w-auto" onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsPage;
