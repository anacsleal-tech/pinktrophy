document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       YEAR
    ========================= */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =========================
       LANGUAGES
       EN / PT / ES / FR
    ========================= */

    const supportedLanguages = ["en", "pt", "es", "fr"];

    function setLanguage(language) {

        if (!supportedLanguages.includes(language)) {
            language = "en";
        }

        document.querySelectorAll("[data-en]").forEach(element => {

            const translation = element.getAttribute(`data-${language}`);

            if (translation) {
                element.innerHTML = translation;
            }

        });

        document.documentElement.lang = language;

        document.querySelectorAll("[data-lang]").forEach(button => {

            if (button.dataset.lang === language) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }

        });

        localStorage.setItem("pinktrophy-language", language);
    }


    /* Language buttons */

    document.querySelectorAll("[data-lang]").forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.lang;

            setLanguage(language);

        });

    });


    /* Load saved language */

    const savedLanguage =
        localStorage.getItem("pinktrophy-language") || "en";

    setLanguage(savedLanguage);


    /* =========================
       MOBILE MENU
    ========================= */

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

});
