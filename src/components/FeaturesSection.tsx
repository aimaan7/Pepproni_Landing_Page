import iconSrc from "../assets/stuff.svg";

const FeaturesSection = () => {

  return (
    <div className="pb-20 bg-white">
      <div className="w-full px-0">
        <div className="overflow-hidden w-full">
          <div className="flex items-center animate-scroll-x w-full" style={{ minWidth: '100vw', height: '100%' }}>
            {[...Array(16)].map((_, i) => (
              <img
                key={i}
                src={iconSrc}
                alt="Feature Icon"
                style={{ height: 'auto', width: 'auto', maxHeight: '300px', maxWidth: 'none', marginLeft: 32, marginRight: 32 }}
                className="inline-block"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 12s linear infinite;
          width: 100vw;
        }
      `}</style>
    </div>
  )
}

export default FeaturesSection
