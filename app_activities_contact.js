    // Vérifier si un élément avec la classe "activities" existe
    if (document.querySelector(".activities")) {

        /* Gestion du menu mobile */
        const menuIcon = document.getElementById("menu-icon");
        const navLinks = document.getElementById("nav-links");

        if (menuIcon && navLinks) {
            menuIcon.addEventListener("click", function (e) {
                e.stopPropagation();
                navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
            });

            document.addEventListener("click", function () {
                if (navLinks.style.display === "block") {
                    navLinks.style.display = "none";
                }
            });
        }
    }







    // Vérifier si un élément avec la classe "contact" existe
    if (document.querySelector(".contact")) {

        // Menu Mobile
        const menuIcon = document.getElementById("menu-icon");
        const navLinks = document.getElementById("nav-links");

        if (menuIcon && navLinks) {
            menuIcon.addEventListener("click", (e) => {
                e.stopPropagation();
                navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
            });

            document.addEventListener("click", () => {
                if (navLinks.style.display === "block") {
                    navLinks.style.display = "none";
                }
            });
        }

        // Formulaire contact
        const form = document.getElementById('formContact');

        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert("Merci ! Votre message a bien été envoyé. (Ceci est une démonstration)");
                this.reset();
            });
        }
    }