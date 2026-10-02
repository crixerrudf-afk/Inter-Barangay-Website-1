function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;


// ADMIN ACCOUNT

if(username === "admin" && password === "tayug2026"){


localStorage.setItem("loggedIn","true");


window.location.href="index.html";


}

else{


document.getElementById("message").innerHTML =
"❌ Invalid Username or Password";


}

}

