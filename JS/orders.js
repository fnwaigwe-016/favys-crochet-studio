import { auth, db } from "./firebase.js";


import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

collection,
query,
where,
getDocs

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const ordersContainer = document.getElementById("ordersContainer");



onAuthStateChanged(auth, async(user)=>{


if(user){


const ordersRef = collection(db,"orders");


const q = query(
    ordersRef,
    where("userId","==",user.uid)
);



const querySnapshot = await getDocs(q);



if(querySnapshot.empty){


ordersContainer.innerHTML =
`
<p>
You have no orders yet.
</p>
`;

return;

}



ordersContainer.innerHTML="";



querySnapshot.forEach((doc)=>{


const order = doc.data();



ordersContainer.innerHTML +=

`

<div class="order-card">

<h3>
${order.product}
</h3>


<p>
Colour: ${order.colour}
</p>


<p>
Status: ${order.status}
</p>


</div>

`;



});



}

else{


window.location.href="login.html";


}


});
