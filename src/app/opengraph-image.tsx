import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0f0f10",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          color: "#a1a1aa",
          fontSize: 28,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 9999,
            background: "#71717a",
          }}
        />
        {profile.availability}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ color: "#fafafa", fontSize: 88, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div style={{ color: "#d4d4d8", fontSize: 44, fontWeight: 500 }}>
          {profile.role}
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 30,
            maxWidth: 900,
            marginTop: 8,
          }}
        >
          APIs · Automações · Integração de sistemas
        </div>
      </div>

      <div style={{ color: "#71717a", fontSize: 28 }}>
        {siteConfig.url.replace("https://", "")}
      </div>
    </div>,
    { ...size },
  );
}
