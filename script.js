document.addEventListener("DOMContentLoaded", () => {

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const languageButton = document.getElementById("languageButton");
  let currentLanguage = "en";

  function setLanguage(language) {
    document.querySelectorAll("[data-en][data-pt]").forEach(element => {
      element.innerHTML = element.dataset[language];
    });

    document.documentElement.lang = language;
    currentLanguage = language;

    if (languageButton) {
      languageButton.textContent = language === "en" ? "PT" : "EN";
    }
  }

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      setLanguage(currentLanguage === "en" ? "pt" : "en");
    });
  }

  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  setLanguage("en");
});
