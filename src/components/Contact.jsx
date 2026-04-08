export default function Contact() {
  const currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="relative">
      {/* Grass wave top */}
      <svg viewBox="0 0 1440 120" fill="none" className="w-full block" preserveAspectRatio="none">
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,60 L1440,120 L0,120 Z" fill="#2E7D32" />
        <path d="M0,80 C320,110 640,40 960,80 C1160,100 1320,70 1440,80 L1440,120 L0,120 Z" fill="#43A047" />
        <path d="M0,100 C360,120 720,80 1080,100 C1260,110 1380,95 1440,100 L1440,120 L0,120 Z" fill="#1A237E" />
      </svg>

      {/* Contact content */}
      <div className="bg-navy relative grain overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-[10%] w-3 h-3 rounded-full bg-green-primary/20" />
        <div className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-orange/20" />
        <div className="absolute bottom-20 left-[20%] w-4 h-4 rounded-full bg-yellow/10" />

        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center mb-12 reveal">
            <span className="inline-block bg-white/10 text-green-light font-extrabold text-sm uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-5">
              Let&rsquo;s Connect
            </span>
            <h2 className="text-4xl md:text-5xl text-white leading-tight mb-4">
              Ready to <span className="text-yellow">Kick Off</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-md mx-auto">
              Get your child started on their soccer journey today. We&rsquo;d love to hear from you!
            </p>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-5 max-w-xl mx-auto mb-12 reveal-stagger">
            <a
              href="tel:5618437491"
              className="reveal flex-1 group flex items-center gap-4 bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-primary/20 flex items-center justify-center shrink-0 group-hover:bg-green-primary/30 transition-colors">
                <svg className="w-6 h-6 text-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Call Us</p>
                <p className="text-white text-lg font-bold">(561) 843-7491</p>
              </div>
            </a>

            <a
              href="mailto:Jcesaria@yahoo.com"
              className="reveal flex-1 group flex items-center gap-4 bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/20 flex items-center justify-center shrink-0 group-hover:bg-orange/30 transition-colors">
                <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Email Us</p>
                <p className="text-white text-lg font-bold">Jcesaria@yahoo.com</p>
              </div>
            </a>
          </div>

          <p className="text-center text-white/30 text-sm reveal">
            Serving Palm Beach, Florida and surrounding areas
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/soccer-ball.svg"
                alt="Kickstart Kids Soccer"
                className="h-7 w-auto invert brightness-200 opacity-60"
              />
              <span className="font-display text-white/50 text-sm">Kickstart Kids Soccer</span>
            </div>
            <p className="text-white/25 text-sm">
              &copy; {currentYear} Kickstart Kids Soccer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
