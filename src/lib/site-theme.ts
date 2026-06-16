export type SiteTheme = "default" | "dark" | "minimal" | "lovable";

export function getSiteTheme(): SiteTheme {
  const theme = process.env.NEXT_PUBLIC_SITE_THEME;
  if (theme === "dark") return "dark";
  if (theme === "minimal") return "minimal";
  if (theme === "lovable") return "lovable";
  return "default";
}

export function isMinimalTheme(): boolean {
  return getSiteTheme() === "minimal";
}

export function isLovableTheme(): boolean {
  return getSiteTheme() === "lovable";
}

export function getThemeClassName(theme: SiteTheme): string {
  if (theme === "dark") return "theme-dark";
  if (theme === "minimal") return "theme-minimal";
  if (theme === "lovable") return "theme-lovable";
  return "";
}
