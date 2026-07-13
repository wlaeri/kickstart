// Vercel Serverless Function: returns the live Google review count.
// Edge-cached for a day (see Cache-Control below) so Google's Places API is
// hit at most ~once per day across all visitors. The API key stays server-side
// and is never sent to the browser. On any error the response is empty and the
// client falls back to the hardcoded count in src/data/reviews.json.

const PLACE_ID = process.env.PLACE_ID || 'ChIJu4cDUyYr80gRmvtFi7vk7Iw'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY

export default async function handler(req, res) {
  if (!API_KEY) {
    res.status(204).end()
    return
  }

  try {
    const upstream = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'userRatingCount',
        },
      },
    )

    if (!upstream.ok) {
      res.status(204).end()
      return
    }

    const place = await upstream.json()
    const total = place.userRatingCount

    if (typeof total !== 'number') {
      res.status(204).end()
      return
    }

    // Cache on Vercel's CDN for 24h; serve stale while revalidating so no
    // visitor ever waits on the upstream refresh.
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=86400')
    res.status(200).json({ total })
  } catch {
    res.status(204).end()
  }
}
