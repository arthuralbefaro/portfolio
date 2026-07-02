import { ImageResponse } from "next/og";

import { getDictionary } from "@/content/dictionary";
import { defaultLocale, isLocale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const { profile, ui } = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0b0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#928d84",
            fontSize: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#ecebe8",
            }}
          />
          {profile.availability}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#ecebe8", fontSize: 88, fontWeight: 700 }}>
            {profile.name}
          </div>
          <div style={{ color: "#c9c5bd", fontSize: 44, fontWeight: 500 }}>
            {profile.role}
          </div>
          <div
            style={{
              color: "#928d84",
              fontSize: 30,
              maxWidth: 900,
              marginTop: 8,
            }}
          >
            {ui.meta.ogTagline}
          </div>
        </div>

        <div style={{ color: "#5c574e", fontSize: 28 }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
