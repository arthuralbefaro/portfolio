import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getDictionary } from "@/content/dictionary";
import {
  defaultLocale,
  isLocale,
  locales,
  localeHtmlLang,
  localeOgLocale,
} from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getPersonJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const { meta } = getDictionary(locale).ui;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: meta.title,
      template: `%s · ${siteConfig.name}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeOgLocale[locale],
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <html lang={localeHtmlLang[locale]} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd(locale)),
          }}
        />
        <a
          href="#inicio"
          className="focus:bg-emphasis focus:text-invert-fg focus:text-body sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2"
        >
          {dict.ui.skipToContent}
        </a>
        <Header
          locale={locale}
          navItems={dict.navItems}
          ui={dict.ui.header}
          resumeUrl={dict.profile.resumeUrl}
        />
        <main>{children}</main>
        <Footer dict={dict} locale={locale} />
        <ScrollReveal />
      </body>
    </html>
  );
}
