import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = resolve(__dirname, '..', 'src', 'data', 'reviews.json')
const PLACE_ID = process.env.PLACE_ID || 'ChIJu4cDUyYr80gRmvtFi7vk7Iw'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

async function fetchPlace() {
  const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
    headers: {
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
    },
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Places API ${res.status} ${res.statusText}: ${body}`)
  }
  return res.json()
}

function normalize(place) {
  const reviews = (place.reviews || []).map((r) => ({
    author: r.authorAttribution?.displayName ?? 'Anonymous',
    profilePhoto: r.authorAttribution?.photoUri ?? null,
    authorUrl: r.authorAttribution?.uri ?? null,
    rating: r.rating ?? 5,
    text: r.originalText?.text ?? r.text?.text ?? '',
    relativeTime: r.relativePublishTimeDescription ?? '',
    publishTime: r.publishTime ?? null,
  }))
  return {
    rating: place.rating ?? null,
    total: place.userRatingCount ?? reviews.length,
    fetchedAt: new Date().toISOString(),
    reviews,
  }
}

function useFallback(reason) {
  console.warn(`[fetch-reviews] ${reason}`)
  if (existsSync(OUTPUT_PATH)) {
    console.warn('[fetch-reviews] Using cached src/data/reviews.json')
    return 0
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
  writeFileSync(
    OUTPUT_PATH,
    JSON.stringify({ rating: null, total: 0, fetchedAt: null, reviews: [] }, null, 2),
  )
  console.warn('[fetch-reviews] Wrote empty reviews.json placeholder')
  return 0
}

async function main() {
  if (!API_KEY) {
    return useFallback('GOOGLE_PLACES_API_KEY not set')
  }
  const place = await fetchPlace()
  const data = normalize(place)
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2) + '\n')
  console.log(
    `[fetch-reviews] Wrote ${data.reviews.length} reviews (rating ${data.rating}, total ${data.total})`,
  )
  return 0
}

main().catch((err) => {
  console.error('[fetch-reviews]', err.message)
  process.exit(1)
})
