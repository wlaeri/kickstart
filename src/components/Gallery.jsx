import { useEffect, useRef, useState } from 'react'

const photos = [
  { src: '/images/action_1.jpg', alt: 'Kids enjoying soccer practice' },
  { src: '/images/action_2.jpg', alt: 'Kids in action on the field' },
  { src: '/images/action_3.jpg', alt: 'Kickstart kids playing soccer' },
  { src: '/images/action_4.jpg', alt: 'Smiles and soccer at Kickstart' },
  { src: '/images/action_5.jpg', alt: 'Kids having fun with soccer balls' },
]

const AUTO_ADVANCE_MS = 4500

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  const goTo = (next) => setIndex((next + photos.length) % photos.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [paused])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-sky-light text-navy font-extrabold text-sm uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-5">
            In Action
          </span>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight">
            Smiles, Soccer &amp;<br />
            <span className="text-orange">Adventures</span>
          </h2>
        </div>

        <div className="reveal mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] bg-navy aspect-video max-w-4xl mx-auto">
            <video
              src="/images/IMG_6675.MOV"
              poster="/images/action_1.jpg"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className="reveal relative max-w-2xl mx-auto px-6 md:px-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] bg-navy aspect-[3/4]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {photos.map((photo, i) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-navy shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-navy shadow-lg flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                  i === index ? 'w-8 bg-orange' : 'w-2.5 bg-navy/20 hover:bg-navy/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
