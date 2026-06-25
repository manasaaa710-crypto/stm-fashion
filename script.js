// HERO SLIDER
(function() {
    const heroSlides = document.querySelectorAll(".slide, .hero-slide");
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        function showSlide(index) {
            heroSlides.forEach(slide => {
                slide.classList.remove("active");
            });
            heroSlides[index].classList.add("active");
        }
        setInterval(() => {
            currentSlide = (currentSlide + 1) % heroSlides.length;
            showSlide(currentSlide);
        }, 4000);
    }
})();
// Cart

let cartCount = JSON.parse(localStorage.getItem("cart"))?.length || 0;


function addCart(product, price, image){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.push({

        name: product,
        price: price,
        image: image

    });


    localStorage.setItem("cart", JSON.stringify(cart));


    cartCount++;

    document.querySelector(".cart-icon span").innerHTML = cartCount;


    alert(product + " added to cart");

}
// Wishlist

function addWishlist(product, price, image){


    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];


    wishlist.push({

        name: product,
        price: price,
        image: image

    });



    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


    alert(product + " added to wishlist");

}



// Navbar Counts

function updateCounts(){


    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];



    document.getElementById("cart-count").innerHTML =
    cart.length;



    document.getElementById("wish-count").innerHTML =
    wishlist.length;


}


updateCounts();
// Search Products

function searchProducts(){


let input = 
document.getElementById("search").value.toLowerCase();



let products =
document.querySelectorAll(".product-card");



products.forEach(product=>{


let name =
product.querySelector("h3").innerHTML.toLowerCase();



if(name.includes(input)){


product.style.display="";


}
else{


product.style.display="none";


}


});


}
// End of script