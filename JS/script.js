document.addEventListener("DOMContentLoaded", function () {
    const topBtn = document.getElementById("topBtn");

    window.onscroll = function () {
        if (topBtn) {
            if (document.documentElement.scrollTop > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        }
    };

    if (topBtn) {
        topBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});