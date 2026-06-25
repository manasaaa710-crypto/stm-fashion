const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(() => {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);

}, 4000);
function togglePassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}
const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

setInterval(() => {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);

}, 4000);


function togglePassword() {

    let password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}