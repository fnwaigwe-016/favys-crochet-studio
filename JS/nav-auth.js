import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const accountLink = document.getElementById("account-link");
const logoutLink = document.getElementById("logout-link");


onAuthStateChanged(auth, async (user) => {

    if (user) {

        loginLink.style.display = "none";
        signupLink.style.display = "none";

        accountLink.style.display = "inline-block";
        logoutLink.style.display = "inline-block";

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            const data = docSnap.data();

            accountLink.innerHTML = `👋 Welcome, ${data.fullName}`;

        } else {

            accountLink.innerHTML = "👤 My Account";

        }

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

const accountBtn = document.getElementById("accountBtn");
const accountDropdown = document.getElementById("accountDropdown");


accountLink?.addEventListener("click", (e)=>{

    e.preventDefault();

    accountDropdown.classList.toggle("active");

});