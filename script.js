// HERO SLIDER

const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    setInterval(() => {

        currentSlide = (currentSlide + 1) % slides.length;

        showSlide(currentSlide);

    }, 4000);
}


// LOGIN PAGE PASSWORD TOGGLE

function togglePassword() {

    let password = document.getElementById("password");

    if (!password) return;

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

}