import { useEffect, useRef, useState } from 'react'
import data from '../data/reviews.json'

const REVIEW_URL = 'https://g.page/r/CZr7RYu75OyMEBM/review'
const MAPS_URL = 'https://maps.google.com/?cid=10154147570050366362'

function Stars({ rating, size = 'text-base' }) {
  const full = Math.round(rating ?? 0)
  return (
    <div className={`flex gap-0.5 text-orange ${size}`} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} aria-hidden="true">{i < full ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

function Initials({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <div className="w-10 h-10 rounded-full bg-sky-light text-navy flex items-center justify-center font-extrabold text-sm shrink-0">
      {initials || '★'}
    </div>
  )
}

function Avatar({ src, name }) {
  if (!src) return <Initials name={name} />
  return (
    <img
      src={src}
      alt=""
      referrerPolicy="no-referrer"
      className="w-10 h-10 rounded-full object-cover shrink-0"
      onError={(e) => {
        e.currentTarget.replaceWith(document.createTextNode(''))
      }}
    />
  )
}

function ReviewCard({ review, className = '' }) {
  const [expanded, setExpanded] = useState(false)
  const [showToggle, setShowToggle] = useState(false)
  const quoteRef = useRef(null)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return
    const measure = () => {
      if (expanded) return
      setShowToggle(el.scrollHeight > el.clientHeight + 1)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [expanded, review.text])

  return (
    <article className={`reveal bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 md:p-7 flex flex-col gap-4 ${className}`}>
      <Stars rating={review.rating} />
      <blockquote
        ref={quoteRef}
        className={`text-navy/85 text-base leading-relaxed whitespace-pre-line ${
          expanded ? '' : 'line-clamp-6'
        }`}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
      {(showToggle || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="self-start text-orange-dark hover:text-orange font-extrabold text-xs uppercase tracking-widest transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <div className="flex items-center gap-3 pt-3 border-t border-navy/10 mt-auto">
        <Avatar src={review.profilePhoto} name={review.author} />
        <div className="min-w-0">
          <div className="font-extrabold text-navy truncate">{review.author}</div>
          {review.relativeTime && (
            <div className="text-navy/60 text-xs">{review.relativeTime}</div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Reviews() {
  const { rating, total, reviews } = data
  const hasReviews = reviews && reviews.length > 0

  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
        <div className="text-center mb-10 reveal">
          <span className="inline-block bg-orange-light text-orange-dark font-extrabold text-sm uppercase tracking-[0.15em] px-5 py-2 rounded-full mb-5">
            What Families Say
          </span>
          <h2 className="text-4xl md:text-5xl text-navy leading-tight">
            Real Reviews from<br />
            <span className="text-orange">Real Families</span>
          </h2>
        </div>

        {rating != null && total > 0 && (
          <div className="flex flex-col items-center gap-2 mb-10 reveal">
            <div className="flex items-center gap-3">
              <Stars rating={rating} size="text-2xl" />
              <span className="text-navy font-extrabold text-2xl">{rating.toFixed(1)}</span>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy/70 text-sm hover:text-navy transition-colors"
            >
              from {total} review{total === 1 ? '' : 's'} on Google
            </a>
          </div>
        )}

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-12 reveal-stagger">
            {reviews.slice(0, 5).map((r, i) => (
              <ReviewCard
                key={`${r.author}-${i}`}
                review={r}
                className={`lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-navy/70 mb-12 reveal">
            <p className="mb-2">Read what families are saying on our Google Business Profile.</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 reveal">
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-extrabold px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(255,152,0,0.35)] transition-colors"
          >
            Leave a Review on Google
            <span aria-hidden="true">→</span>
          </a>
          <span className="text-navy/50 text-xs uppercase tracking-widest">Reviews from Google</span>
        </div>
      </div>
    </section>
  )
}
