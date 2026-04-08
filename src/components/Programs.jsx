const programs = [
  {
    name: 'Little Kickers',
    ages: '2 - 6',
    emoji: '\u26BD',
    tagline: 'First touches & big imaginations',
    description:
      'A fun, imaginative introduction to soccer for our youngest players. Through stories and games, kids develop coordination, motor skills, and a love for the game.',
    features: [
      'Imagination-based learning',
      'Boosts motor skills & coordination',
      'All equipment provided',
      'Certified coaches',
      'On-location sessions',
    ],
    accent: 'green',
  },
  {
    name: 'Junior Stars',
    ages: '7 - 14',
    emoji: '\u2B50',
    tagline: 'Skills, teamwork & confidence',
    description:
      'Building on fundamentals with more advanced skills, teamwork, and game play. Kids gain confidence, discipline, and a deeper understanding of soccer.',
    features: [
      'Comprehensive skill development',
      'Teamwork & sportsmanship focus',
      'All equipment provided',
      'Certified coaches',
      'On-location sessions',
    ],
    accent: 'orange',
  },
]

const accentStyles = {
  green: {
    badge: 'bg-green-primary text-white shadow-[0_4px_12px_rgba(76,175,80,0.3)]',
    price: 'text-green-primary',
    check: 'text-green-primary',
    border: 'border-green-primary/10 hover:border-green-primary/30',
    glow: 'hover:shadow-[0_12px_48px_rgba(76,175,80,0.12)]',
  },
  orange: {
    badge: 'bg-orange text-white shadow-[0_4px_12px_rgba(255,152,0,0.3)]',
    price: 'text-orange',
    check: 'text-orange',
    border: 'border-orange/10 hover:border-orange/30',
    glow: 'hover:shadow-[0_12px_48px_rgba(255,152,0,0.12)]',
  },
}

export default function Programs() {
  return (
    <section id="programs" className="relative bg-white overflow-hidden">
      {/* Top wave */}
      <svg viewBox="0 0 1440 80" fill="none" className="w-full block -mt-px" preserveAspectRatio="none">
        <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,0 L0,0 Z" fill="white" />
      </svg>

      <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-orange/10 text-orange-dark font-extrabold text-sm uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-5">
            Programs & Pricing
          </span>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight mb-4">
            Find the Perfect<br />
            <span className="text-orange">Program</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Affordable, all-inclusive soccer programs designed to meet your child where they are.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal-stagger">
          {programs.map((program) => {
            const s = accentStyles[program.accent]
            return (
              <div
                key={program.name}
                className={`reveal relative bg-white rounded-[2rem] border-2 ${s.border} ${s.glow} shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 md:p-10 transition-all duration-400 hover:-translate-y-1`}
              >
                {/* Age badge */}
                <div className={`inline-flex items-center gap-2 ${s.badge} font-extrabold text-sm uppercase tracking-wide px-5 py-2 rounded-full mb-6`}>
                  <span className="text-base">{program.emoji}</span>
                  Ages {program.ages}
                </div>

                <h3 className="text-3xl text-navy mb-1">{program.name}</h3>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-4">{program.tagline}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">{program.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-5xl font-extrabold ${s.price}`}>$60</span>
                  <span className="text-gray-400 font-semibold">/month per child</span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${program.accent === 'green' ? 'bg-green-primary/10' : 'bg-orange/10'} flex items-center justify-center shrink-0`}>
                        <svg
                          className={`w-3.5 h-3.5 ${s.check}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Brochure download */}
        <div className="text-center mt-12 reveal">
          <a
            href="/images/kickstart-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-navy/5 hover:bg-navy/10 text-navy font-bold px-6 py-3 rounded-full transition-all duration-300"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Our Brochure
          </a>
        </div>
      </div>
    </section>
  )
}
