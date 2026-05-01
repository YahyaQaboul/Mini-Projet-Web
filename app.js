document.addEventListener("DOMContentLoaded", function () {

    /* Sélection des éléments */
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    /* Vérifier que les éléments existent */
    if (menuIcon && navLinks) {

        /* Toggle menu */
        menuIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            navLinks.style.display =
                navLinks.style.display === "block" ? "none" : "block";
        });

        /* Empêcher fermeture si clic dans le menu */
        navLinks.addEventListener("click", function (e) {
            e.stopPropagation();
        });

        /* Fermer menu si clic ailleurs */
        document.addEventListener("click", function () {
            if (navLinks.style.display === "block") {
                navLinks.style.display = "none";
            }
        });
    }

    /* PARTIE SPÉCIFIQUE À LA PAGE ACCUEIL */
    if (document.body.classList.contains("Accueil")) {

        window.addEventListener("load", function () {
            navLinks.style.display = "block";

            setTimeout(() => {
                navLinks.style.display = "none";
            }, 1500); // durée modifiable
        });

    }

});