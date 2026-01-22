# Blocked Features & Notes

## Paddle Integration
- Using Paddle.js v2 overlay checkout
- Requires `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` (client-side token, not API key)
- Requires `NEXT_PUBLIC_PADDLE_SELLER_ID` (integer)
- Requires `NEXT_PUBLIC_PADDLE_PRICE_ID` (price ID from Paddle dashboard)
- Optional: `NEXT_PUBLIC_PADDLE_ENV` (sandbox/production)
- Optional: `NEXT_PUBLIC_PADDLE_CHECKOUT_VARIANT` (one-page/multi-page, defaults to multi-page)
- Default payment link must be configured in Paddle Dashboard → Checkout → Checkout settings
- For sandbox: use `http://localhost:3000` as default payment link
- Success URL: `http://localhost:3000/success` (or production URL)
- Official docs: https://developer.paddle.com/build/checkout/build-overlay-checkout

## SEO Indexing
- All SEO pages created and added to sitemap.xml
- All pages have unique meta titles and descriptions with CTAs
- robots.txt configured to allow all crawlers
- Sitemap URL: https://ultrafastutilities.com/sitemap.xml
- **Manual Step Required**: Submit sitemap to Google Search Console
  - Go to https://search.google.com/search-console
  - Add property: https://ultrafastutilities.com
  - Navigate to Sitemaps section
  - Submit: https://ultrafastutilities.com/sitemap.xml
  - Also submit to Bing Webmaster Tools: https://www.bing.com/webmasters

## Internal Linking
- All SEO pages link to main generator page
- Each SEO page links to 2-4 related SEO pages
- Footer includes links to top SEO pages
- Cross-linking strategy implemented
