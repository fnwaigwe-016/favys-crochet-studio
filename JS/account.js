import { auth } from "./firebase.js";


import { 

onAuthStateChanged,
signOut

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";





const emailDisplay = document.getElementById("user-email");

const logoutBtn = document.getElementById("logout-btn");





onAuthStateChanged(auth,(user)=>{


if(user){


emailDisplay.innerHTML = user.email;


}

else{


window.location.href="login.html";


}


});






logoutBtn.addEventListener("click",()=>{


signOut(auth)

.then(()=>{


window.location.href="login.html";


});


});