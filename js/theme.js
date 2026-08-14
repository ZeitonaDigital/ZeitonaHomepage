const STORAGE_KEY = "zeitona-theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";
import { translateKey } from "./i18n.js";

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The current-page choice still works when persistence is unavailable.
  }
}

function applyTheme(theme, toggle) {
  document.documentElement.dataset.theme = theme;

  if (!toggle) return;

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = translateKey(nextTheme === "dark" ? "controls.useDarkTheme" : "controls.useLightTheme");
  toggle.setAttribute("aria-label", label);
  toggle.setAttribute("title", label);
  toggle.querySelector("[data-theme-label]")?.replaceChildren(translateKey(nextTheme === "dark" ? "controls.darkTheme" : "controls.lightTheme"));
  toggle.querySelector("[data-theme-icon]")?.replaceChildren(theme === "dark" ? "☀" : "☾");
}

export function initializeTheme() {
  const toggle = document.querySelector("[data-theme-toggle]");
  const darkQuery = window.matchMedia(DARK_QUERY);
  let explicitTheme = readStoredTheme();

  applyTheme(explicitTheme ?? (darkQuery.matches ? "dark" : "light"), toggle);

  toggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    explicitTheme = nextTheme;
    storeTheme(nextTheme);
    applyTheme(nextTheme, toggle);
  });

  darkQuery.addEventListener?.("change", (event) => {
    if (!explicitTheme) applyTheme(event.matches ? "dark" : "light", toggle);
  });

  document.addEventListener("zeitona:localechange", () => applyTheme(document.documentElement.dataset.theme, toggle));
}
