import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, localeCookie, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

function detectLocale(request: NextRequest): Locale {
  const chosen = request.cookies.get(localeCookie)?.value;
  if (isLocale(chosen)) {
    return chosen;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const primary = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";

  if (primary.startsWith("pt")) {
    return "pt";
  }
  if (primary === "") {
    return defaultLocale;
  }
  return "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
