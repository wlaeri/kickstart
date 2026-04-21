const photos = [
  { src: '/images/kids_1.png', alt: 'Kids lined up with soccer balls ready to play' },
  { src: '/images/kids_2.png', alt: 'Kids practicing soccer dribbling drills' },
  { src: '/images/kids_3.png', alt: 'Kids playing soccer outdoors on a sunny day' },
  { src: '/images/kids_4.png', alt: 'Kids having fun with soccer balls during a session' },
]

export default function Gallery() {
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 reveal-stagger">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`reveal relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] aspect-[4/3] group ${
                i % 2 === 1 ? 'lg:translate-y-6' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
