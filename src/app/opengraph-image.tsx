import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#222222",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "Georgia, serif",
          backgroundImage:
            "linear-gradient(rgba(246,90,18,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(46,158,30,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 28, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Versatile Interior
          </span>
          <span style={{ fontSize: 22, color: "#f65a12" }}>Dhaka / Bangladesh</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.92, maxWidth: 840 }}>
            Calm, precise interiors for real life.
          </div>
          <div style={{ marginTop: 36, width: 520, height: 2, background: "#2e9e1e" }} />
          <p style={{ marginTop: 28, fontSize: 28, lineHeight: 1.35, maxWidth: 780, color: "#666666" }}>
            Homes, workplaces, restaurants, showrooms, and events shaped around local context and site-ready execution.
          </p>
        </div>
      </div>
    ),
    size
  );
}
