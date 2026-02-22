import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ultrafastutilities - Free Privacy Policy Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #eff6ff, #dbeafe, #bfdbfe)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              borderRadius: 16,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 32 32"
            >
              <path
                d="M9 18a.67.67 0 0 1-.52-1.09l6.6-6.8a.33.33 0 0 1 .57.31l-1.28 4.01A.67.67 0 0 0 15 15.33h4.67a.67.67 0 0 1 .52 1.09l-6.6 6.8a.33.33 0 0 1-.57-.31l1.28-4.01A.67.67 0 0 0 14 18z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 800,
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            ultrafastutilities
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#1e3a5f",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Free Privacy Policy Generator
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#64748b",
            marginTop: "16px",
          }}
        >
          Generate a professional privacy policy in 60 seconds
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
