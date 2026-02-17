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
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://checkout.dodopayments.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.dodopayments.com https://test.dodopayments.com https://live.dodopayments.com https://www.google-analytics.com",
              "frame-src 'self' https://checkout.dodopayments.com",
              "frame-ancestors 'self' http://localhost:* https://localhost:*",
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ultrafastutilities.com',
          },
        ],
        destination: 'https://ultrafastutilities.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
