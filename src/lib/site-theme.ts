export type SiteTheme = "default" | "dark" | "minimal";

export function getSiteTheme(): SiteTheme {
  const theme = process.env.NEXT_PUBLIC_SITE_THEME;
  if (theme === "dark") return "dark";
  if (theme === "minimal") return "minimal";
  return "default";
}

export function getThemeClassName(theme: SiteTheme): string {
  if (theme === "dark") return "theme-dark";
  if (theme === "minimal") return "theme-minimal";
  return "";
}
