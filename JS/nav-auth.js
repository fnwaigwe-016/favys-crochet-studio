import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const accountLink = document.getElementById("account-link");
const logoutLink = document.getElementById("logout-link");


onAuthStateChanged(auth, (user) => {

    if (user) {

        loginLink.style.display = "none";
        signupLink.style.display = "none";

        accountLink.style.display = "inline-block";
        logoutLink.style.display = "inline-block";

        accountLink.innerHTML = `👋 ${user.email}`;

    } else {

        loginLink.style.display = "inline-block";
        signupLink.style.display = "inline-block";

        accountLink.style.display = "none";
        logoutLink.style.display = "none";

    }

});


logoutLink.addEventListener("click", (e) => {

    e.preventDefault();

    signOut(auth).then(() => {

        window.location.href = "index.html";

    });

});