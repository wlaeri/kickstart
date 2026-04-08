export default function About() {
  return (
    <section id="about" className="relative bg-green-bg grain overflow-hidden">
      {/* Top decorative dots */}
      <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-orange/30 hidden md:block" />
      <div className="absolute top-16 right-24 w-3 h-3 rounded-full bg-green-primary/20 hidden md:block" />
      <div className="absolute top-12 left-16 w-5 h-5 rounded-full bg-yellow/30 hidden md:block" />

      <div className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-green-primary/10 text-green-dark font-extrabold text-sm uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-5">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight">
            Soccer Through<br />
            <span className="text-green-primary">Imagination</span>
          </h2>
        </div>

        {/* Mission block */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center mb-16 md:mb-24">
          <div className="md:col-span-3 reveal">
            <blockquote className="relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border-l-[6px] border-green-primary">
              <svg className="absolute -top-4 -left-2 w-10 h-10 text-green-primary/20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p className="text-xl md:text-2xl text-navy/80 leading-relaxed font-semibold italic">
                We strive to enrich the community through sports and education,
                bringing families together, and igniting a passion for soccer!
              </p>
            </blockquote>
          </div>

          <div className="md:col-span-2 reveal">
            <div className="bg-white rounded-3xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-primary to-green-light flex items-center justify-center shadow-[0_4px_12px_rgba(76,175,80,0.3)]">
                  <img src="/images/soccer-ball.svg" alt="" className="w-8 h-8 invert brightness-200" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg text-navy font-display">Coach Jesse</h3>
                  <p className="text-sm text-gray-500 font-semibold">Founder & Head Coach</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Jesse Cesaria leads a team of certified coaches dedicated to leaving
                a positive, lasting impact on every child&rsquo;s life. We bring the fun
                directly to your school or location!
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          <FeatureCard
            icon={
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            }
            title="Storytelling Method"
            description="Through imaginative adventures like Charlie the Chicken, kids learn soccer skills while living out exciting stories."
            color="green"
          />
          <FeatureCard
            icon={
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            }
            title="We Come to You"
            description="On-location sessions at your school, park, or facility. We bring all the equipment &mdash; balls, cones, and goals."
            color="orange"
          />
          <FeatureCard
            icon={
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            }
            title="Certified Coaches"
            description="Fully trained, background-checked coaches who specialize in making soccer fun and accessible for young kids."
            color="navy"
          />
        </div>

        {/* Charlie the Chicken showcase */}
        <div className="mt-16 md:mt-24 reveal">
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.08)]">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-orange-light text-orange-dark font-extrabold text-xs uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-5 w-fit">
                  Our Approach
                </span>
                <h3 className="text-2xl md:text-3xl text-navy mb-4 leading-tight">
                  Meet Charlie<br />the Chicken
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Every session is an adventure! Our coaches weave imaginative stories
                  into soccer drills &mdash; kids might be escaping a silly alligator with
                  Charlie or scoring the winning goal in a magical tournament. Learning
                  through play means skills stick and kids can&rsquo;t wait to come back.
                </p>
                <div className="flex gap-3">
                  <span className="px-4 py-2 bg-green-bg text-green-dark text-sm font-bold rounded-full">Imagination</span>
                  <span className="px-4 py-2 bg-sky-light text-navy text-sm font-bold rounded-full">Adventure</span>
                  <span className="px-4 py-2 bg-orange-light text-orange-dark text-sm font-bold rounded-full">Fun</span>
                </div>
              </div>
              <div className="relative min-h-[280px] md:min-h-0">
                <img
                  src="/images/charlie-the-chicken.png"
                  alt="Charlie the Chicken - our storytelling mascot in an adventure scene"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <svg viewBox="0 0 1440 80" fill="none" className="w-full block -mb-px" preserveAspectRatio="none">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="white" />
      </svg>
    </section>
  )
}

function FeatureCard({ icon, title, description, color }) {
  const colorMap = {
    green: {
      bg: 'bg-green-primary/10',
      icon: 'text-green-primary',
      border: 'border-green-primary/20',
    },
    orange: {
      bg: 'bg-orange/10',
      icon: 'text-orange',
      border: 'border-orange/20',
    },
    navy: {
      bg: 'bg-navy/10',
      icon: 'text-navy',
      border: 'border-navy/20',
    },
  }
  const c = colorMap[color]

  return (
    <div className={`reveal bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-2 ${c.border} hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1`}>
      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
        <svg className={`w-6 h-6 ${c.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <h4 className="text-lg text-navy mb-2 font-display">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}
