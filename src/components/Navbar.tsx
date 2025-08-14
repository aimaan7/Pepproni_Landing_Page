import logoImage from '../assets/images/logo-6bd046.png'
import logoText from '../assets/images/logo-text-694e40.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-4 lg:py-6">
      <div className="bg-[#2A2A2A]/70 backdrop-blur-xl border border-white/20 rounded-[22px] px-4 sm:px-6 lg:px-12 py-4 lg:py-6 shadow-2xl" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md overflow-hidden">
              <img src={logoImage} alt="Pepproni Logo" className="w-full h-full object-cover" />
            </div>
            <div className="h-8 lg:h-10">
              <img src={logoText} alt="Pepproni" className="h-full object-contain" />
            </div>
          </div>

          {/* Navigation Links & CTA */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="/about" className="text-white/60 hover:text-white transition-colors duration-200 font-satoshi text-lg lg:text-xl font-normal">
                About Us
              </a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors duration-200 font-satoshi text-lg lg:text-xl font-normal">
                Contact
              </a>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3OzUaXvim5ZumXtWlcLbxA4hy5TQbYoFJJwHgOQNjgM3pkg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-[#2CBCC4] hover:bg-[#2CBCC4]/90 text-[#FBFBFB] px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-satoshi font-medium text-sm sm:text-base lg:text-lg transition-colors duration-200 shadow-lg whitespace-nowrap">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
