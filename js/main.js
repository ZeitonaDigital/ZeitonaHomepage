import { initializeNavigation } from "./navigation.js";
import { initializeTheme } from "./theme.js";
import { initializeI18n } from "./i18n.js";
import { initializeNews } from "./news.js";

initializeNavigation();
initializeTheme();
initializeI18n().finally(initializeNews);
