// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// =========================
// CERRAR MENU AL HACER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================
// ANIMACIONES AL HACER SCROLL
// =========================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


const animatedElements = document.querySelectorAll(
    ".service-card, .gallery-item, .about-content, .intro-content"
);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});