"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Until mounted, the resolved theme is unknown on the server. Render a
  // theme-independent button so the server and the client's first render match,
  // avoiding a hydration mismatch on `aria-label`.
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Alternar tema">
        <span className="size-[1.15rem]" aria-hidden />
        <span className="sr-only">Alternar tema</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="size-[1.15rem]" />
      ) : (
        <Moon className="size-[1.15rem]" />
      )}
    </Button>
  );
}
