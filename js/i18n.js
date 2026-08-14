const SUPPORTED = ["en", "en-GB", "pt-BR", "pt-PT"];
const STORAGE_KEY = "zeitona-locale";
const textBindings = [];
const attributeBindings = [];
let sourceValues = {};
let activeValues = {};

function flatten(value, path = "", result = {}) {
  if (typeof value === "string") result[path] = value;
  else if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) flatten(child, path ? `${path}.${key}` : key, result);
  }
  return result;
}

function readPreference() {
  try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
}

function storePreference(locale) {
  try { localStorage.setItem(STORAGE_KEY, locale); } catch { /* Session behavior remains available. */ }
}

export function resolveLocale(candidates = []) {
  for (const candidate of candidates) {
    if (!candidate) continue;
    const normalized = candidate.replace("_", "-");
    const exact = SUPPORTED.find(locale => locale.toLowerCase() === normalized.toLowerCase());
    if (exact) return exact;
    if (normalized.toLowerCase().startsWith("pt")) return "pt-PT";
    if (normalized.toLowerCase().startsWith("en")) return "en";
  }
  return "en";
}

async function loadLocale(locale) {
  const response = await fetch(`locales/${locale}.json`);
  if (!response.ok) throw new Error(`Locale ${locale} returned ${response.status}`);
  return response.json();
}

function captureBindings() {
  const reverse = new Map(Object.entries(sourceValues).map(([key, value]) => [value, key]));
  const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (["SCRIPT", "STYLE", "OPTION"].includes(node.parentElement?.tagName)) continue;
    const value = node.nodeValue.trim();
    const key = reverse.get(value);
    if (key) textBindings.push({ node, key, prefix: node.nodeValue.match(/^\s*/)[0], suffix: node.nodeValue.match(/\s*$/)[0] });
  }
  for (const element of document.querySelectorAll("[aria-label], [title], [alt], meta[content]")) {
    for (const name of ["aria-label", "title", "alt", "content"]) {
      if (!element.hasAttribute(name)) continue;
      const key = reverse.get(element.getAttribute(name));
      if (key) attributeBindings.push({ element, name, key });
    }
  }
}

function applyLocale(locale, values) {
  activeValues = values;
  for (const binding of textBindings) binding.node.nodeValue = `${binding.prefix}${values[binding.key] ?? sourceValues[binding.key]}${binding.suffix}`;
  for (const binding of attributeBindings) binding.element.setAttribute(binding.name, values[binding.key] ?? sourceValues[binding.key]);
  document.documentElement.lang = locale;
  document.querySelector("[data-locale-select]")?.setAttribute("value", locale);
  const selector = document.querySelector("[data-locale-select]");
  if (selector) selector.value = locale;
  document.dispatchEvent(new CustomEvent("zeitona:localechange"));
}

export function translateKey(key) {
  return activeValues[key] ?? sourceValues[key] ?? "";
}

export async function initializeI18n() {
  const selector = document.querySelector("[data-locale-select]");
  try {
    const source = await loadLocale("en");
    sourceValues = flatten(source);
    activeValues = sourceValues;
    captureBindings();
  } catch (error) {
    console.info("English locale unavailable; retaining document fallback content.", error);
    return;
  }

  const initial = resolveLocale([readPreference(), ...(navigator.languages ?? [navigator.language])]);
  const selectLocale = async (locale, persist = false) => {
    let values = sourceValues;
    let resolved = resolveLocale([locale]);
    if (resolved !== "en") {
      try { values = flatten(await loadLocale(resolved)); }
      catch (error) { console.info(`Locale ${resolved} unavailable; using English.`, error); resolved = "en"; }
    }
    applyLocale(resolved, values);
    if (persist) storePreference(resolved);
  };

  await selectLocale(initial);
  selector?.addEventListener("change", event => selectLocale(event.target.value, true));
}
