const THEME_KEY = "theme";
const DARK = "dark";
const LIGHT = "light";

const themeSwitch = document.getElementById("theme-switch");

/* Тема */

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
};

const getThemeByBrowserSettings = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? DARK
    : LIGHT;

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === DARK ? LIGHT : DARK);
};

const initTheme = () => {
  const theme = localStorage.getItem(THEME_KEY) || getThemeByBrowserSettings();

  document.documentElement.setAttribute("data-theme", theme);
  themeSwitch.checked = theme === DARK;
  themeSwitch.addEventListener("change", toggleTheme);
};

/* Запуск */

if (themeSwitch) {
  initTheme();
}
