import { auth, db } from "./firebase.js";

import { 
createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("signup-form");


form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirm-password").value;


    if(password !== confirmPassword){

        document.getElementById("message").innerHTML =
        "Passwords do not match";

        return;

    }



createUserWithEmailAndPassword(auth, email, password)

.then((userCredential) => {

    const user = userCredential.user;

    return setDoc(doc(db, "users", user.uid), {

        fullName: fullName,
        email: email,
        createdAt: new Date()

    });

})

.then(() => {

    document.getElementById("message").innerHTML =
    "✅ Account created successfully!";

    setTimeout(() => {

        window.location.href = "login.html";

    }, 1500);

})

.catch((error) => {

    document.getElementById("message").innerHTML =
    error.message;

});


});
const passwordInput = document.getElementById("password");

const passwordMessage = document.getElementById("password-message");


passwordInput.addEventListener("input", ()=>{


    const password = passwordInput.value;


    let message = "";


    if(password.length < 6){

        message += "❌ At least 6 characters required<br>";

    }
    else{

        message += "✅ Length is okay<br>";

    }


    if(!/[A-Z]/.test(password)){

        message += "❌ Add at least one uppercase letter<br>";

    }
    else{

        message += "✅ Uppercase letter added<br>";

    }


    if(!/[a-z]/.test(password)){

        message += "❌ Add at least one lowercase letter<br>";

    }
    else{

        message += "✅ Lowercase letter added<br>";

    }


    if(!/[0-9]/.test(password)){

        message += "❌ Add at least one number<br>";

    }
    else{

        message += "✅ Number added<br>";

    }


    passwordMessage.innerHTML = message;
});