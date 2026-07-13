const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});