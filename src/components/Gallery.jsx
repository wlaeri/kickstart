const photos = [
  { src: '/images/action_1.jpg', alt: 'Kids enjoying soccer practice' },
  { src: '/images/action_2.jpg', alt: 'Kids in action on the field' },
  { src: '/images/action_3.jpg', alt: 'Kickstart kids playing soccer' },
  { src: '/images/action_4.jpg', alt: 'Smiles and soccer at Kickstart' },
  { src: '/images/action_5.jpg', alt: 'Kids having fun with soccer balls' },
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

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 reveal-stagger">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`reveal relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] aspect-[4/3] group ${
                i % 2 === 1 ? 'lg:translate-y-6' : ''
              } ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
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
