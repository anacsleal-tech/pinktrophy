document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       LANGUAGE SWITCHER
       EN <-> PT
    ===================================================== */

    const languageButton = document.getElementById("languageButton");
    const supportedLanguages = ["en", "pt"];

    function setLanguage(language) {

        if (!supportedLanguages.includes(language)) {
            language = "en";
        }

        document.querySelectorAll("[data-en]").forEach((element) => {

            const translation = element.getAttribute(`data-${language}`);

            if (translation) {
                element.innerHTML = translation;
            }

        });

        document.documentElement.lang = language;

        if (languageButton) {

            if (language === "en") {
                languageButton.textContent = "PT";
                languageButton.setAttribute(
                    "aria-label",
                    "Mudar para Português"
                );
            } else {
                languageButton.textContent = "EN";
                languageButton.setAttribute(
                    "aria-label",
                    "Switch to English"
                );
            }

        }

        localStorage.setItem(
            "pinktrophy-language",
            language
        );
    }


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */

    if (languageButton) {

        languageButton.addEventListener("click", () => {

            const currentLanguage =
                document.documentElement.lang === "pt"
                    ? "pt"
                    : "en";

            const nextLanguage =
                currentLanguage === "en"
                    ? "pt"
                    : "en";

            setLanguage(nextLanguage);

        });

    }


    /* =====================================================
       LOAD SAVED LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem("pinktrophy-language");

    if (
        savedLanguage &&
        supportedLanguages.includes(savedLanguage)
    ) {
        setLanguage(savedLanguage);
    } else {
        setLanguage("en");
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("open");
            menuButton.classList.toggle("active");

        });

        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");
                menuButton.classList.remove("active");

            });

        });

    }

});
