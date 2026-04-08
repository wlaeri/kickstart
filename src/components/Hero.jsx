export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1565C0] via-sky to-sky-light" />

      {/* Clouds */}
      <div className="absolute top-[12%] left-[5%] w-32 md:w-48 h-12 md:h-16 bg-white/30 rounded-full blur-sm" style={{ animation: 'floatSlow 8s ease-in-out infinite' }} />
      <div className="absolute top-[8%] right-[10%] w-40 md:w-56 h-14 md:h-18 bg-white/25 rounded-full blur-sm" style={{ animation: 'floatMedium 10s ease-in-out infinite 1s' }} />
      <div className="absolute top-[20%] left-[40%] w-24 md:w-36 h-10 md:h-12 bg-white/20 rounded-full blur-sm" style={{ animation: 'floatSlow 12s ease-in-out infinite 2s' }} />

      {/* Floating soccer balls */}
      <div className="absolute top-[15%] right-[8%] md:right-[15%] opacity-15" style={{ animation: 'floatSlow 6s ease-in-out infinite' }}>
        <img src="/images/soccer-ball.svg" alt="" className="w-16 md:w-24" aria-hidden="true" />
      </div>
      <div className="absolute bottom-[35%] left-[5%] md:left-[10%] opacity-10" style={{ animation: 'floatMedium 7s ease-in-out infinite 1.5s' }}>
        <img src="/images/soccer-ball.svg" alt="" className="w-12 md:w-16" aria-hidden="true" />
      </div>
      <div className="absolute top-[40%] right-[3%] opacity-10 hidden md:block" style={{ animation: 'floatSlow 9s ease-in-out infinite 3s' }}>
        <img src="/images/soccer-ball.svg" alt="" className="w-10" aria-hidden="true" />
      </div>

      {/* Scattered stars */}
      <Star className="absolute top-[18%] left-[20%] text-yellow w-5 h-5 opacity-60" delay={0} />
      <Star className="absolute top-[25%] right-[20%] text-yellow w-4 h-4 opacity-50" delay={1.5} />
      <Star className="absolute top-[35%] left-[8%] text-yellow w-3 h-3 opacity-40" delay={3} />
      <Star className="absolute bottom-[40%] right-[12%] text-yellow w-4 h-4 opacity-50" delay={2} />

      {/* Main content */}
      <div className="relative z-10 px-5 max-w-3xl">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl text-white mb-5 leading-[1.1] drop-shadow-[0_3px_12px_rgba(0,0,0,0.2)]"
          style={{ animation: 'bounceIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both' }}
        >
          Where Every Kick
          <br />
          <span className="text-yellow">Starts an Adventure</span>
        </h1>

        <p
          className="text-lg md:text-2xl text-white/90 mb-10 font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.15)]"
          style={{ animation: 'bounceIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both' }}
        >
          Youth Soccer Programs in Palm Beach, FL &mdash; Ages 2 to 14
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: 'bounceIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both' }}
        >
          <a
            href="#programs"
            className="group relative bg-orange text-white font-extrabold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-[0_6px_24px_rgba(255,152,0,0.4)] hover:shadow-[0_8px_32px_rgba(255,152,0,0.55)]"
          >
            <span className="relative z-10">View Programs</span>
            <div className="absolute inset-0 bg-orange-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="border-[3px] border-white text-white hover:bg-white hover:text-navy font-extrabold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Grass wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,180 L0,180 Z"
            fill="#43A047"
          />
          <path
            d="M0,110 C240,160 480,60 720,110 C960,160 1200,60 1440,110 L1440,180 L0,180 Z"
            fill="#4CAF50"
          />
          <path
            d="M0,140 C240,170 480,110 720,140 C960,170 1200,110 1440,140 L1440,180 L0,180 Z"
            fill="#E8F5E9"
          />
        </svg>
      </div>
    </section>
  )
}

function Star({ className, delay = 0 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ animation: `floatSlow 4s ease-in-out infinite ${delay}s` }}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
    </svg>
  )
}
