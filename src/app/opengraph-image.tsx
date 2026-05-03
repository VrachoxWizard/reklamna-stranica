import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IT Pomoć i servis računala Zagreb — Direkt IT Pomoć";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDFBF7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#0F766E",
          }}
        />

        {/* Location badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#0F766E",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            M
          </div>
          <span
            style={{
              fontSize: "18px",
              color: "#57534E",
              fontWeight: "500",
            }}
          >
            Mate · IT pomoćnik · Zagreb i okolica
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: "800",
            color: "#1C1917",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "28px",
            maxWidth: "900px",
          }}
        >
          IT pomoć i servis računala Zagreb
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#57534E",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          Poštena IT pomoć za obične ljude. Windows, backup, printer i Wi-Fi.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            right: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#0F766E",
            }}
          >
            direkt-it-pomoc-zagreb.vercel.app
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["Cijena unaprijed", "Bez skrivenih troškova", "Ako ne znam, kažem odmah"].map(
              (cue) => (
                <div
                  key={cue}
                  style={{
                    background: "#F0FDF4",
                    border: "1px solid #BBF7D0",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontSize: "15px",
                    color: "#0F766E",
                    fontWeight: "600",
                  }}
                >
                  {cue}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
