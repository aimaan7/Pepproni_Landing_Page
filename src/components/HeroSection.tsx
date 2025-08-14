import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import heroImage from '../assets/images/hero-image-1b122d.png'

// Register GSAP plugins
gsap.registerPlugin(TextPlugin)

const HeroSection = () => {
  const animatedTextRef = useRef<HTMLDivElement>(null)

  const textItems = [
    "invest?",
    "earn?", 
    "grow your wealth?",
    "grab your slice?"
  ]

  useEffect(() => {
    if (!animatedTextRef.current) return

    const textElements = animatedTextRef.current.children
    let currentIndex = 0

    // Initialize: hide all items except the first one using GSAP
    gsap.set(textElements, { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      rotationX: 15,
      filter: "blur(5px)"
    })
    
    gsap.set(textElements[0], { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotationX: 0,
      filter: "blur(0px)"
    })

    const animateText = () => {
      const currentItem = textElements[currentIndex]
      const nextIndex = (currentIndex + 1) % textElements.length
      const nextItem = textElements[nextIndex]
      
      // Create a master timeline for smooth transition
      const tl = gsap.timeline()
      
      // Animate out current item with scramble effect
      tl.to(currentItem, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        rotationX: -15,
        filter: "blur(5px)",
        duration: 0.5,
        ease: "power2.in"
      })
      
      // Add scramble effect before showing next text
      .set(nextItem, {
        opacity: 1,
        y: 30,
        scale: 0.95,
        rotationX: 15,
        filter: "blur(5px)"
      })
      
      // Animate in next item with spring-like effect and unblur
      .to(nextItem, {
        y: 0,
        scale: 1,
        rotationX: 0,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "back.out(1.2)"
      }, "-=0.2")
      
      // Add text scramble effect for extra smoothness
      .to(nextItem, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.4")
      
      currentIndex = nextIndex
    }

    // Create initial simple animation on load
    const initialAnimation = () => {
      const firstItem = textElements[0]
      gsap.fromTo(firstItem, 
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          filter: "blur(3px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        }
      )
    }

    // Start with simple animation, then begin cycling
    gsap.delayedCall(0.5, initialAnimation)
    
    gsap.delayedCall(2, () => {
      gsap.to({}, {
        duration: 3.5,
        repeat: -1,
        onRepeat: animateText
      })
    })

    // Cleanup function
    return () => {
      gsap.killTweensOf(textElements)
      gsap.killTweensOf({})
    }
  }, [])

  // Add page load animations
  useEffect(() => {
    const tl = gsap.timeline()
    
    // Animate hero elements on load
    tl.fromTo(".hero-title", {
      y: 50,
      opacity: 0,
      scale: 0.9
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    })
    .fromTo(".hero-subtitle", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .fromTo(".features-bar", {
      y: 30,
      opacity: 0,
      scale: 0.95
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.3")
    .fromTo(".hero-cta", {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="hero min-h-screen pt-[100px] md:pt-[150px] pb-[60px] md:pb-[100px] px-4 sm:px-8 md:px-[50px] lg:px-[89px] relative flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Hero Content */}
      <div className="hero-content flex-1 max-w-[1163px] relative z-[2] w-full">
        <div className="hero-text">
          {/* Hero Title with Animated Text */}
          <h1 className="hero-title mb-6 md:mb-10 flex flex-col sm:flex-row sm:items-center sm:flex-wrap">
            <span className="ready-text text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[90px] font-bold text-white leading-[1.2] md:leading-[1.35] mb-2 sm:mb-0">
              Ready to{' '}
            </span>
            <div 
              ref={animatedTextRef}
              className="animated-text relative h-[50px] sm:h-[65px] md:h-[80px] lg:h-[100px] xl:h-[122px] overflow-hidden inline-block min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px] align-baseline sm:ml-2 md:ml-5"
            >
              {textItems.map((text, index) => (
                <span 
                  key={index}
                  className="text-item absolute text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[90px] font-black bg-gradient-to-r from-white via-[#6CC3C8] to-[#49C0C7] bg-clip-text text-transparent leading-[1.2] md:leading-[1.35]"
                >
                  {text}
                </span>
              ))}
            </div>
          </h1>

          {/* Hero Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl font-normal text-white mb-8 md:mb-15 leading-[1.35]">
            Invest in a slice of real estate. Own a slice of tomorrow.
          </p>

          {/* Features Bar */}
          <section className="features-bar relative flex flex-col sm:flex-row items-center gap-4 sm:gap-[20px] md:gap-[34px] bg-white/10 backdrop-blur-[10px] p-4 sm:p-[15px_25px] md:p-[20px_30px] rounded-2xl z-[3] w-full sm:max-w-fit mb-8 md:mb-15 justify-center">
            <div className="feature-item flex items-center sm:items-end gap-[10px] md:gap-[15px] w-full sm:w-auto justify-center sm:justify-start">
              <div className="feature-icon w-5 h-5 md:w-6 md:h-6 border border-gray-400/70 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-400/70 tracking-[-0.04em]">
                Instant Investment
              </span>
            </div>
            
            <div className="feature-divider hidden sm:block w-px h-8 md:h-12 bg-gray-600/70" />
            
            <div className="feature-item flex items-center sm:items-end gap-[10px] md:gap-[15px] w-full sm:w-auto justify-center sm:justify-start">
              <div className="feature-icon w-5 h-5 md:w-6 md:h-6 border border-gray-400/70 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-400/70 tracking-[-0.04em]">
                Portfolio Management
              </span>
            </div>
            
            <div className="feature-divider hidden sm:block w-px h-8 md:h-12 bg-gray-600/70" />
            
            <div className="feature-item flex items-center sm:items-end gap-[10px] md:gap-[15px] w-full sm:w-auto justify-center sm:justify-start">
              <div className="feature-icon w-5 h-5 md:w-6 md:h-6 border border-gray-400/70 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-7 4 7M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-400/70 tracking-[-0.04em]">
                Investment Diversification
              </span>
            </div>
          </section>

          {/* Hero CTA */}
          <div className="hero-cta text-center sm:text-left">
            <p className="hero-cta-text text-lg sm:text-xl font-normal text-white mb-4 md:mb-5">
              We'll be ready soon - but in the meantime,
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3OzUaXvim5ZumXtWlcLbxA4hy5TQbYoFJJwHgOQNjgM3pkg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="join-revolution-btn bg-[#2CBCC4] text-[#FBFBFB] border-none py-3 sm:py-4 md:py-[18px] px-8 sm:px-12 md:px-[57px] rounded-xl text-lg sm:text-xl font-medium cursor-pointer transition-colors duration-300 hover:bg-[#25a8b0] w-full sm:w-auto">
              Join the Revolution
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
