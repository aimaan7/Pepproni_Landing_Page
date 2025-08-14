import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksStepsSection from './components/HowItWorksStepsSection'
import BehindTheBuildSection from './components/BehindTheBuildSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorksStepsSection />
      <BehindTheBuildSection />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default App
