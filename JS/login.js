import { auth } from "./firebase.js";

import { 
signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const loginForm = document.getElementById("login-form");


loginForm.addEventListener("submit",(e)=>{


e.preventDefault();


const email = document.getElementById("email").value;

const password = document.getElementById("password").value;



signInWithEmailAndPassword(auth,email,password)


.then(()=>{


document.getElementById("login-message").innerHTML =
"Login successful! Redirecting...";


setTimeout(()=>{

window.location.href="account.html";

},1500);



})


.catch((error)=>{


document.getElementById("login-message").innerHTML =
error.message;


});


});