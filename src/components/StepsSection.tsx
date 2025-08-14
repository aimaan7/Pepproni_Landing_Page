const StepsSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Property",
      description: "Explore trusted properties, fully verified and paperwork-ready. Invest in minutes, earn for a lifetime."
    },
    {
      number: "2",
      title: "Invest",
      description: "Invest as little or as much as you like. Quick. Simple. Just a few taps."
    },
    {
      number: "3",
      title: "Earn Rent",
      description: "You earn rent every month and your investment grows over time. Everything lands straight in your wallet."
    },
    {
      number: "4",
      title: "Track Returns",
      description: "See exactly how your money's growing, anytime you want in your portfolio"
    },
    {
      number: "5",
      title: "Easy Exit",
      description: "Get liquidity twice a year through our bi-annual resale windows."
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-16">
        <div className="text-center mb-16">
          <h2 className="text-xl font-satoshi text-[#4D4D4D] mb-8">
            5 easy steps to invest and kickstart your journey to building wealth
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute left-8 top-16 bottom-16 w-px bg-[#D8D8D8]"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-7">
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#D9D9D9] border-2 border-[#D8D8D8] rounded-full flex items-center justify-center">
                  <span className="text-[#2CBCC4] font-linear-grotesk font-bold text-xl">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-satoshi text-[#4D4D4D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base font-satoshi text-[#858585] leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsSection
