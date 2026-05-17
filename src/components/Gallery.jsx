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

        <div className="reveal">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] bg-navy aspect-video max-w-4xl mx-auto">
            <video
              src="/images/IMG_6675.MOV"
              poster="/images/kids_3.png"
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
      </div>
    </section>
  )
}
