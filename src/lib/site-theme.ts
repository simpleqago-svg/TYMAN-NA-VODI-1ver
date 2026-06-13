export type SiteTheme = "default" | "dark";

export function getSiteTheme(): SiteTheme {
  return process.env.NEXT_PUBLIC_SITE_THEME === "dark" ? "dark" : "default";
}

export function isDarkTheme(): boolean {
  return getSiteTheme() === "dark";
}
