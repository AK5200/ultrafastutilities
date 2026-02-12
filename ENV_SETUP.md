# Environment Variables Setup for Dodo Payments

Copy these variables to your `.env.local` file:

```bash
# Dodo Payments Configuration
# Get these from: https://app.dodopayments.com/

# Server-side API Key (required)
# Get from: Dashboard → Developer → API
DODO_PAYMENTS_API_KEY=your_api_key_here

# Environment: "test_mode" or "live_mode" (defaults to test_mode)
DODO_PAYMENTS_ENV=test_mode

# Webhook Secret Key (required for webhook verification)
# Get from: Dashboard → Developer → Webhooks
# Set webhook URL to: https://ultrafastutilities.com/api/dodo/webhook
DODO_WEBHOOK_KEY=your_webhook_secret_key_here

# Client-side Product ID (required)
# Get from: Dashboard → Products → Copy Product ID
NEXT_PUBLIC_DODO_PRODUCT_ID=prod_your_product_id_here

# Site URL (used for return URLs)
# For local: http://localhost:3000
# For production: https://ultrafastutilities.com
NEXT_PUBLIC_SITE_URL=https://ultrafastutilities.com
```

## How to Get These Values:

1. **DODO_PAYMENTS_API_KEY**
   - Go to [Dodo Payments Dashboard](https://app.dodopayments.com/)
   - Navigate to: Developer → API
   - Generate or copy your API key

2. **DODO_WEBHOOK_KEY**
   - Go to: Developer → Webhooks
   - Create a webhook endpoint: `https://ultrafastutilities.com/api/dodo/webhook`
   - Copy the webhook secret key

3. **NEXT_PUBLIC_DODO_PRODUCT_ID**
   - Go to: Products
   - Create a product (one-time payment)
   - Copy the Product ID (starts with `prod_`)

4. **DODO_PAYMENTS_ENV**
   - Use `test_mode` for development/testing
   - Use `live_mode` for production

5. **NEXT_PUBLIC_SITE_URL**
   - Use `http://localhost:3000` for local development
   - Use `https://ultrafastutilities.com` for production

## For Vercel Deployment:

Add these same variables in Vercel Dashboard:
- Settings → Environment Variables
- Add each variable (including the `NEXT_PUBLIC_` ones)
- Make sure to set different values for Production vs Preview environments
