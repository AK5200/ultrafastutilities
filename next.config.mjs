/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.dodo.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.dodo.com https://sandbox-checkout-service.dodo.com https://sandbox-buy.dodo.com https://www.google-analytics.com",
              "frame-src 'self' https://*.dodo.com https://sandbox-buy.dodo.com",
              "frame-ancestors 'self' http://localhost:* https://localhost:*",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
