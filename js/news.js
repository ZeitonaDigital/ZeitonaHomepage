import { translateKey } from "./i18n.js";

const DATA_URL = "data/news.json";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
let entries = [];
let state = "fallback";

function isSafeLocalPath(value) {
  return typeof value === "string" && !value.startsWith("//") && !value.includes(":") && !value.includes("..\\") && !value.includes("../");
}

function isValidEntry(entry) {
  return entry &&
    typeof entry === "object" &&
    typeof entry.id === "string" &&
    DATE_PATTERN.test(entry.date) &&
    typeof entry.titleKey === "string" &&
    typeof entry.summaryKey === "string" &&
    (entry.url == null || isSafeLocalPath(entry.url)) &&
    (entry.image == null || isSafeLocalPath(entry.image));
}

function text(key, fallback) {
  return translateKey(key) || fallback;
}

function renderState(container, status) {
  const unavailable = status === "unavailable";
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = text("news.status", "Current status");

  const heading = document.createElement("h2");
  heading.id = "news-status";
  heading.textContent = unavailable
    ? text("news.unavailableTitle", "News updates are temporarily unavailable.")
    : text("news.emptyTitle", "No verified news items are available yet.");

  const detail = document.createElement("p");
  detail.textContent = unavailable
    ? text("news.unavailableBody", "The news data could not be loaded. The rest of the website remains available.")
    : text("news.emptyBody", "We will publish factual company developments here when verified information is available. No placeholder announcements have been created.");

  container.className = "empty-state stack";
  container.replaceChildren(eyebrow, heading, detail);
}

function renderEntries(container, items) {
  const list = document.createElement("div");
  list.className = "news-list";

  for (const entry of items) {
    const article = document.createElement("article");
    article.className = "news-item stack--tight";

    const time = document.createElement("time");
    time.dateTime = entry.date;
    time.textContent = new Intl.DateTimeFormat(document.documentElement.lang, { dateStyle: "long" }).format(new Date(`${entry.date}T12:00:00Z`));

    const title = document.createElement("h2");
    const titleText = translateKey(entry.titleKey);
    const summaryText = translateKey(entry.summaryKey);
    if (!titleText || !summaryText) continue;
    title.textContent = titleText;

    const summary = document.createElement("p");
    summary.textContent = summaryText;
    article.append(time, title, summary);

    if (entry.url) {
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = entry.url;
      link.textContent = text("news.readMore", "Read update");
      article.append(link);
    }

    list.append(article);
  }

  if (!list.childElementCount) {
    state = "unavailable";
    renderState(container, state);
    return;
  }

  container.className = "news-results";
  container.replaceChildren(list);
}

function render(container) {
  if (state === "ready") renderEntries(container, entries);
  else renderState(container, state);
}

export async function initializeNews() {
  const container = document.querySelector("[data-news-content]");
  if (!container) return;

  try {
    const response = await fetch(DATA_URL, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`News data returned ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data) || !data.every(isValidEntry)) throw new Error("News data has an invalid structure");
    entries = data.slice().sort((a, b) => b.date.localeCompare(a.date));
    state = entries.length ? "ready" : "empty";
  } catch (error) {
    state = "unavailable";
    console.info("News data unavailable; showing a resilient status message.", error);
  }

  render(container);
  document.addEventListener("zeitona:localechange", () => render(container));
}
