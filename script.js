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
       EN / PT / ES / FR
    ===================================================== */

    const supportedLanguages = ["en", "pt", "es", "fr"];


    function setLanguage(language) {

        // Fallback to English
        if (!supportedLanguages.includes(language)) {
            language = "en";
        }


        // Translate all elements containing language data
        document.querySelectorAll("[data-en]").forEach((element) => {

            const translation = element.getAttribute(`data-${language}`);

            if (translation) {
                element.innerHTML = translation;
            }

        });


        // Update HTML language attribute
        document.documentElement.lang = language;


        // Update active language button
        document.querySelectorAll(".lang-btn").forEach((button) => {

            const isActive = button.dataset.lang === language;

            button.classList.toggle("active", isActive);

            button.setAttribute(
                "aria-pressed",
                isActive ? "true" : "false"
            );

        });


        // Remember visitor's language
        localStorage.setItem(
            "pinktrophy-language",
            language
        );

    }


    /* =====================================================
       LANGUAGE BUTTON EVENTS
    ===================================================== */

    document.querySelectorAll(".lang-btn").forEach((button) => {

        button.addEventListener("click", () => {

            const language = button.dataset.lang;

            setLanguage(language);

        });

    });


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
