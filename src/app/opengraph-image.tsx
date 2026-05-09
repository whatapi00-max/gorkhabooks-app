import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GorkhaBooks – Nepal's #1 Trusted & Legal Gaming Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050508 0%, #0f0f1a 40%, #1a0f00 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold glow top */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "rgba(245,197,24,0.12)",
            filter: "blur(80px)",
          }}
        />
        {/* Green glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.08)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #f5c518, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 900,
              color: "#000",
            }}
          >
            G
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 52,
                fontWeight: 900,
                background: "linear-gradient(90deg, #f5c518, #fbbf24, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 1,
              }}
            >
              GorkhaBooks
            </span>
            <span style={{ fontSize: 18, color: "#6b7280", marginTop: 4 }}>
              gorkha.com · नेपालको #१
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 12,
            maxWidth: 900,
          }}
        >
          Nepal&apos;s #1 Trusted & Legal Gaming Platform
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: 36,
          }}
        >
          नेपालको सर्वश्रेष्ठ भरोसेमान्य र कानूनी गेमिङ प्लेटफर्म
        </div>

        {/* Trust badges row */}
        <div style={{ display: "flex", gap: 16, marginBottom: 36 }}>
          {[
            { icon: "✅", label: "100% Legal & Licensed" },
            { icon: "🔒", label: "256-bit SSL Secure" },
            { icon: "🏆", label: "50,000+ Players" },
            { icon: "⚡", label: "Instant Withdrawal" },
          ].map((b) => (
            <div
              key={b.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 16px",
                borderRadius: 40,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#d1d5db",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>

        {/* Services row */}
        <div style={{ display: "flex", gap: 24 }}>
          {["🏏 Cricket Betting", "⚽ Football", "🎰 Live Casino", "🎮 Esports PUBG"].map((s) => (
            <span
              key={s}
              style={{
                fontSize: 18,
                color: "#f5c518",
                fontWeight: 700,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Bottom domain bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            background: "rgba(245,197,24,0.1)",
            borderTop: "1px solid rgba(245,197,24,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: "#f5c518",
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          GORKHA.COM — eSewa · Khalti · WhatsApp Support 24/7
        </div>
      </div>
    ),
    { ...size }
  );
}
