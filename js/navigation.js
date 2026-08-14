const MOBILE_NAV_QUERY = "(max-width: 56rem)";

export function initializeNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-site-nav]");

  if (!toggle || !navigation) return;

  const mobileQuery = window.matchMedia(MOBILE_NAV_QUERY);
  document.documentElement.dataset.navEnhanced = "";

  const setOpen = (open, returnFocus = false) => {
    toggle.setAttribute("aria-expanded", String(open));
    document.documentElement.toggleAttribute("data-nav-open", open);

    if (open) {
      navigation.querySelector("a")?.focus();
    } else if (returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false, true);
    }
  });

  const resetForViewport = (event) => {
    if (!event.matches) setOpen(false);
  };

  mobileQuery.addEventListener?.("change", resetForViewport);
}
