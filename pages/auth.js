// Remember Me Autofill on page load
document.addEventListener("DOMContentLoaded", () => {
    let rememberedEmail = localStorage.getItem("rememberedEmail");
    let emailInput = document.getElementById("email");
    let rememberMeCheckbox = document.getElementById("remember-me");
    
    if (rememberedEmail && emailInput) {
        emailInput.value = rememberedEmail;
        if (rememberMeCheckbox) {
            rememberMeCheckbox.checked = true;
        }
    }
});

function register() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let successMessage = document.getElementById("successMessage");

    // Email format validation regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone format validation regex (10 digits)
    let phoneRegex = /^[0-9]{10}$/;

    // Validations
    if (!name) {
        alert("Please enter your full name.");
        return;
    }
    if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!phone || !phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    };

    // Store user details in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Show success banner
    if (successMessage) {
        successMessage.style.display = "block";
    } else {
        alert("Registration Successful!");
    }

    // Redirect after 1.5 seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}

function login() {
    let user = JSON.parse(localStorage.getItem("user"));
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let rememberMeCheckbox = document.getElementById("remember-me");

    if (!email) {
        alert("Please enter your email address.");
        return;
    }
    if (!password) {
        alert("Please enter your password.");
        return;
    }

    if (user && user.email === email && user.password === password) {
        // Handle Remember Me
        if (rememberMeCheckbox && rememberMeCheckbox.checked) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        localStorage.setItem("login", "true");
        alert("Login Successful!");
        window.location.href = "profile.html";
    } else {
        alert("Invalid Email or Password");
    }
}

// Forgot Password Feature
function forgotPassword() {
    let email = prompt("Enter your registered email address to retrieve your password:");
    if (!email) return;

    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email.trim()) {
        alert("Your password is: " + user.password);
    } else {
        alert("No registered account found with that email address.");
    }
}