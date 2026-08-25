import { ImageResponse } from "next/og";

export const alt = "Kanzul Quran Online Academy — personal Quran learning from home";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 78px",
          color: "#fffdf8",
          background: "linear-gradient(135deg, #050f12 0%, #0b2d2a 58%, #0d5b4a 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 999,
            border: "2px solid #d7b66c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#d6b268",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          KQ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ color: "#d6b268", fontSize: 24, letterSpacing: 5 }}>
            ONLINE QURAN ACADEMY
          </div>
          <div style={{ maxWidth: 900, fontSize: 72, lineHeight: 1.08, fontWeight: 700 }}>
            Learn Quran with clarity, care, and confidence.
          </div>
          <div style={{ color: "#aebeb8", fontSize: 27 }}>
            Personal one-to-one classes for children and adults.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
