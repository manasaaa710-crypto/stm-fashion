function register(){


let user = {


name:
document.getElementById("name").value,


email:
document.getElementById("email").value,


password:
document.getElementById("password").value


};



localStorage.setItem(
"user",
JSON.stringify(user)
);



alert("Registration Successful");


window.location.href="login.html";


}





function login(){


let user =
JSON.parse(localStorage.getItem("user"));



let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



if(
user &&
user.email === email &&
user.password === password
){


localStorage.setItem(
"login",
"true"
);



alert("Login Successful");


window.location.href="profile.html";


}

else{


alert("Invalid Email or Password");


}


}