import phone1 from '../assets/images/phone1-790eb7.png';
import phone2 from '../assets/images/phone2-790eb7.png';
import phone3 from '../assets/images/phone3-660302.png';
import phone4 from '../assets/images/phone4-660302.png';
import phone5 from '../assets/images/phone5-660302.png';
import phone6 from '../assets/images/phone6-600f1d.png';
import phone7 from '../assets/images/phone7-600f1d.png';
import phonesDiagonal from '../assets/images/phones-diagonal.png';

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
];

const HowItWorksStepsSection = () => {
    return (
        <>
            <section className="py-10 sm:py-14 md:py-20 lg:py-32 bg-white relative overflow-hidden">
                {/* Header Section */}
                <div className="w-full flex flex-col items-center mb-8 sm:mb-10 md:mb-12 lg:mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4E4E4E] mb-2 font-satoshi text-center px-2 sm:px-0">
                        India’s <span className="italic font-semibold">first</span> real estate platform
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-[#4E4E4E] font-satoshi text-center">
                        that starts at <span className="font-bold italic">~₹1500!</span>
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
                    {/* Left: Single Phone Image */}
                    <div className="relative h-60 sm:h-80 md:h-96 w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center hidden lg:flex lg:translate-y-[80%] lg:translate-x-[-20%]">
                        {/* Hide image on screens smaller than lg (1024px) */}
                        <img
                            src={phonesDiagonal}
                            alt="Phones Diagonal"
                            className="scale-[1] w-auto object-left object-contain"
                            style={{ maxWidth: 'none', left: 0, margin: 0, padding: 0, border: 'none' }}
                        />
                    </div>

                    {/* Right: Steps */}
                    <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-16 p-8  flex flex-col items-start">
                        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-satoshi font-medium text-[#4D4D4D] mb-2 sm:mb-4 lg:mb-6">
                                How it Works
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4E4E4E] leading-relaxed">
                                5 easy steps to invest and kickstart your journey to building wealth
                            </p>
                        </div>

                        <div className="relative">
                            {steps.map((step, index) => (
                                <div key={index} className="relative">
                                    {/* Step Item */}
                                    <div className={`relative z-10 flex items-center gap-4 sm:gap-6 lg:gap-7 ${index > 0 ? 'mt-6 sm:mt-8 md:mt-10 lg:mt-12' : ''}`}>
                                        {/* Step Number Container - Responsive sizing */}
                                        <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[67px] lg:h-[67px] bg-transparent border-2 border-[#D8D8D8] rounded-full flex items-center justify-center">
                                            <span className="text-[#2CBCC4] font-linear-grotesk font-bold text-base sm:text-lg md:text-xl lg:text-[22px] lg:leading-[1.44]">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Step Text Container */}
                                        <div className="flex-1 max-w-xs sm:max-w-md lg:max-w-[482px] pt-1 sm:pt-2 md:pt-3 lg:pt-0">
                                            <h3 className="text-base sm:text-xl md:text-2xl lg:text-[24px] font-satoshi font-normal text-[#4D4D4D] mb-2 sm:mb-3 lg:mb-0 lg:leading-[1.35]">
                                                {step.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] font-satoshi font-normal text-[#858585] leading-relaxed lg:leading-[1.35] lg:mt-0">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connecting Line - Floating in the middle between circles */}
                                    {index < steps.length - 1 && (
                                        <div
                                            className="absolute left-[18px] sm:left-[32px] md:left-[36px] lg:left-[33px] w-[1px] h-[14px] sm:h-[24px] md:h-[28px] lg:h-[30px] bg-[#D8D8D8] z-0"
                                            style={{
                                                transform: 'translateX(-0.5px)',
                                                top: '100%',
                                                marginTop: '7px'
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorksStepsSection;