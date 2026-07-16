import { auth, db } from "../firebase.js";


import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const orderForm = document.getElementById("orderForm");


let currentUser = null;



onAuthStateChanged(auth,(user)=>{

    currentUser = user;

});



orderForm.addEventListener("submit", async(e)=>{
console.log("Order form submitted");

e.preventDefault();


console.log(currentUser);
if(!currentUser){

    alert("Please login before placing an order.");

    window.location.href="login.html";

    return;

}



const orderData = {


userId: currentUser.uid,


customerName:
document.getElementById("customerName").value,


email:
document.getElementById("customerEmail").value,


product:
document.getElementById("productType").value,


colour:
document.getElementById("colour").value,


design:
document.getElementById("designDetails").value,


size:
document.getElementById("sizeDetails").value,


status:"Pending",


createdAt: serverTimestamp()


};



try{

console.log(orderData);
await addDoc(
collection(db,"orders"),
orderData
);



alert("Your order has been submitted successfully!");


orderForm.reset();



}

catch(error){


console.log(error);


alert("Something went wrong. Please try again.");


}



});