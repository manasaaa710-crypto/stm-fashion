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

// CENTRALIZED PRODUCT DATABASE (50+ Products)
const defaultProducts = [
    // Men's Category (13 products)
    { id: 101, name: "Luxury Tailored Suit", brand: "Tommy Hilfiger", category: "Men", price: 14999, discount: 15, rating: 4.8, reviews: 45, image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=600", description: "Premium wool-blend luxury suit tailored for a modern, sleek profile. Perfect for gala nights and corporate summits.", sizes: ["M", "L", "XL"], colors: ["Black", "Navy Blue"], stock: "In Stock" },
    { id: 102, name: "Premium Leather Jacket", brand: "Calvin Klein", category: "Men", price: 8999, discount: 10, rating: 4.7, reviews: 32, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600", description: "100% genuine top-grain calfskin leather jacket with high-quality metal zippers and comfortable satin lining.", sizes: ["S", "M", "L"], colors: ["Black", "Brown"], stock: "Low Stock" },
    { id: 103, name: "Slim Fit Linen Shirt", brand: "US Polo", category: "Men", price: 2499, discount: 20, rating: 4.3, reviews: 110, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600", description: "Breathable and crisp pure linen shirt, styled with a sophisticated cutaway collar and rounded cuffs.", sizes: ["M", "L", "XL", "XXL"], colors: ["White", "Sky Blue", "Pink"], stock: "In Stock" },
    { id: 104, name: "Classic Blue Jeans", brand: "Levi's", category: "Men", price: 3299, discount: 5, rating: 4.6, reviews: 185, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600", description: "The original straight-fit denim jeans. Handcrafted with heavy duty cotton warp for lifetime durability.", sizes: ["30", "32", "34", "36"], colors: ["Dark Blue", "Light Blue"], stock: "In Stock" },
    { id: 105, name: "Activewear Training Hoodie", brand: "Nike", category: "Men", price: 3999, discount: 12, rating: 4.5, reviews: 67, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600", description: "Moisture-wicking knit training hoodie with dynamic thermal mapping and dynamic reflective seam tapes.", sizes: ["S", "M", "L", "XL"], colors: ["Heather Gray", "Black"], stock: "In Stock" },
    { id: 106, name: "Urban Street Bomber Jacket", brand: "Roadster", category: "Men", price: 2799, discount: 25, rating: 4.2, reviews: 41, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600", description: "Rugged and casual street bomber jacket featuring ribbed collar and military utility sleeve pocket.", sizes: ["M", "L", "XL"], colors: ["Olive Green", "Charcoal"], stock: "In Stock" },
    { id: 107, name: "Athletic Fleece Joggers", brand: "Adidas", category: "Men", price: 2999, discount: 10, rating: 4.4, reviews: 93, image: "https://images.unsplash.com/photo-1517438984742-1262db08379e?w=600", description: "Ultra-soft cotton fleece joggers styled with trademark triple-stripes and zippered side pockets.", sizes: ["S", "M", "L"], colors: ["Black", "Navy"], stock: "In Stock" },
    { id: 108, name: "Summer Casual Shorts", brand: "Puma", category: "Men", price: 1899, discount: 30, rating: 4.1, reviews: 29, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600", description: "Lightweight and stretchy summer casual shorts ideal for beach getaways and sports lounge vibes.", sizes: ["M", "L", "XL"], colors: ["Khaki", "Navy", "Beige"], stock: "In Stock" },
    { id: 109, name: "Traditional Ethnic Kurta", brand: "Roadster", category: "Men", price: 3499, discount: 15, rating: 4.5, reviews: 54, image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=600", description: "Exquisitely embroidered premium cotton kurta tailored with front placket and side slit pockets.", sizes: ["M", "L", "XL"], colors: ["Maroon", "Mustard Gold"], stock: "In Stock" },
    { id: 110, name: "Smart Workwear Chinos", brand: "Tommy Hilfiger", category: "Men", price: 4499, discount: 10, rating: 4.6, reviews: 88, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600", description: "Stretch-woven satin cotton chinos delivering absolute comfort and styling options from desk to dinner.", sizes: ["30", "32", "34", "36"], colors: ["Tan", "Navy Blue", "Olive"], stock: "In Stock" },
    { id: 111, name: "Retro Denim Overshirt", brand: "Levi's", category: "Men", price: 3799, discount: 18, rating: 4.3, reviews: 36, image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600", description: "Vintage wash denim overshirt constructed with double flap pockets and copper snap fasteners.", sizes: ["S", "M", "L", "XL"], colors: ["Light Indigo", "Mid Indigo"], stock: "In Stock" },
    { id: 112, name: "Pique Cotton Polo", brand: "US Polo", category: "Men", price: 1999, discount: 15, rating: 4.4, reviews: 142, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600", description: "The iconic pique cotton polo shirt featuring signature logo embroidery and ribbed sleeves.", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Royal Blue", "Crimson Red"], stock: "In Stock" },
    { id: 113, name: "Premium Cable-Knit Sweater", brand: "Calvin Klein", category: "Men", price: 5499, discount: 20, rating: 4.7, reviews: 25, image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600", description: "Elegant cable-knit wool sweater delivering ultimate warmth and a refined luxury winter presence.", sizes: ["M", "L", "XL"], colors: ["Off-White", "Charcoal Gray"], stock: "In Stock" },

    // Women's Category (13 products)
    { id: 201, name: "Designer Evening Gown", brand: "Calvin Klein", category: "Women", price: 9999, discount: 20, rating: 4.9, reviews: 42, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600", description: "Breathtaking floor-length silk evening gown featuring hand-draped waistline and dynamic slit.", sizes: ["XS", "S", "M", "L"], colors: ["Emerald Green", "Ruby Red"], stock: "In Stock" },
    { id: 202, name: "Boho Chic Summer Dress", brand: "Roadster", category: "Women", price: 2499, discount: 15, rating: 4.4, reviews: 76, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600", description: "Lightweight and flowy floral-patterned midi dress featuring a romantic sweetheart neckline.", sizes: ["S", "M", "L"], colors: ["Floral Yellow", "Floral Teal"], stock: "In Stock" },
    { id: 203, name: "Hand-Embroidered Anarkali", brand: "Tommy Hilfiger", category: "Women", price: 7999, discount: 12, rating: 4.8, reviews: 33, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600", description: "Luxurious georgette Anarkali dress featuring intricate zari thread embroidery on neckline.", sizes: ["S", "M", "L", "XL"], colors: ["Royal Blue", "Blush Pink"], stock: "In Stock" },
    { id: 204, name: "Elegant Satin Wrap Dress", brand: "Calvin Klein", category: "Women", price: 4999, discount: 10, rating: 4.6, reviews: 59, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600", description: "Premium satin silk wrap dress styled with adjustable side ribbon tie and long puff sleeves.", sizes: ["S", "M", "L"], colors: ["Champagne", "Burgundy"], stock: "Low Stock" },
    { id: 205, name: "Classic Cotton Trench Coat", brand: "Tommy Hilfiger", category: "Women", price: 8499, discount: 15, rating: 4.7, reviews: 28, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600", description: "Double-breasted trench coat styled with adjustable storm flaps, waist buckle belt and premium lining.", sizes: ["S", "M", "L", "XL"], colors: ["Classic Beige", "Midnight Black"], stock: "In Stock" },
    { id: 206, name: "Premium Leather Skirt", brand: "Calvin Klein", category: "Women", price: 3999, discount: 25, rating: 4.3, reviews: 19, image: "https://images.unsplash.com/photo-1582142306909-195724d33ab5?w=600", description: "Buttery soft high-rise leather pencil skirt with a back zipper closure and comfortable stretch fabric.", sizes: ["26", "28", "30"], colors: ["Tan Brown", "Matte Black"], stock: "In Stock" },
    { id: 207, name: "Active Compression Tights", brand: "Nike", category: "Women", price: 2799, discount: 8, rating: 4.5, reviews: 104, image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=600", description: "High-waisted compression tights utilizing Nike Dri-FIT technology and double waistband security.", sizes: ["XS", "S", "M", "L"], colors: ["Black", "Lavender"], stock: "In Stock" },
    { id: 208, name: "Cozy Cashmere Cardigan", brand: "Tommy Hilfiger", category: "Women", price: 5999, discount: 20, rating: 4.7, reviews: 31, image: "https://images.unsplash.com/photo-1584273187658-469fbc4469a4?w=600", description: "Knit cashmere cardigan styled with marbled horn button placket and ribbed patch pockets.", sizes: ["S", "M", "L"], colors: ["Oatmeal Beige", "Soft Gray"], stock: "In Stock" },
    { id: 209, name: "Oversized Utility Shirt", brand: "Levi's", category: "Women", price: 2199, discount: 15, rating: 4.2, reviews: 49, image: "https://images.unsplash.com/photo-1548624149-f7b2e654d5d9?w=600", description: "Relaxed utility cotton shirt displaying drop-shoulder silhouettes and flap chest details.", sizes: ["S", "M", "L", "XL"], colors: ["Sage Green", "Crisp White"], stock: "In Stock" },
    { id: 210, name: "Embroidered Festive Lehenga", brand: "Roadster", category: "Women", price: 12999, discount: 18, rating: 4.9, reviews: 17, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600", description: "Luxurious organza lehenga choli printed with traditional motifs and hand-cut mirrors borders.", sizes: ["S", "M", "L"], colors: ["Sunset Orange", "Rose Gold"], stock: "In Stock" },
    { id: 211, name: "Casual Knit Top", brand: "US Polo", category: "Women", price: 1699, discount: 22, rating: 4.1, reviews: 63, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600", description: "Comfortable rib-knit casual top with wide scoop neckline and comfortable stretch design.", sizes: ["S", "M", "L"], colors: ["Pastel Pink", "Mint Green"], stock: "In Stock" },
    { id: 212, name: "Tailored Office Blazer", brand: "Calvin Klein", category: "Women", price: 6999, discount: 10, rating: 4.6, reviews: 37, image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=600", description: "Modern notched lapel office blazer featuring structured shoulders and double flap pockets.", sizes: ["S", "M", "L", "XL"], colors: ["Classic Navy", "Soft White"], stock: "In Stock" },
    { id: 213, name: "Luxe Linen Trousers", brand: "Tommy Hilfiger", category: "Women", price: 3499, discount: 15, rating: 4.4, reviews: 41, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600", description: "Wide-leg pure linen trousers styled with drawstring waistband and deep scoop side pockets.", sizes: ["S", "M", "L"], colors: ["Natural Sand", "Pure Black"], stock: "In Stock" },

    // Shoes Category (10 products)
    { id: 301, name: "Air Zoom Running Shoes", brand: "Nike", category: "Shoes", price: 8999, discount: 10, rating: 4.8, reviews: 245, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", description: "Dynamic response foam running shoes engineered with responsive Zoom air bags and grip treads.", sizes: ["7", "8", "9", "10"], colors: ["Volt Neon", "Triple Black"], stock: "In Stock" },
    { id: 302, name: "Classic Leather Sneakers", brand: "Adidas", category: "Shoes", price: 5499, discount: 15, rating: 4.6, reviews: 312, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600", description: "Retro-style leather court sneakers. Features textured vulcanized rubber sole and soft lining.", sizes: ["7", "8", "9", "10", "11"], colors: ["White/Green", "White/Black"], stock: "In Stock" },
    { id: 303, name: "Premium Brogue Dress Shoes", brand: "US Polo", category: "Shoes", price: 4499, discount: 20, rating: 4.5, reviews: 89, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600", description: "Polished Italian leather brogues constructed with hand-punched wingtip perforations.", sizes: ["8", "9", "10"], colors: ["Tan Brown", "Chestnut Black"], stock: "In Stock" },
    { id: 304, name: "Modern Sports Trainers", brand: "Puma", category: "Shoes", price: 3999, discount: 25, rating: 4.3, reviews: 114, image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600", description: "Ultra-breathable mesh trainers with contoured ankle collar and high traction soles.", sizes: ["7", "8", "9", "10"], colors: ["Red Alert", "Stealth Black"], stock: "In Stock" },
    { id: 305, name: "Waterproof Hiking Boots", brand: "Adidas", category: "Shoes", price: 9999, discount: 12, rating: 4.7, reviews: 56, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600", description: "All-terrain hiking boots built with GORE-TEX waterproof membrane and thick rubber treads.", sizes: ["8", "9", "10", "11"], colors: ["Olive Green", "Charcoal Gray"], stock: "In Stock" },
    { id: 306, name: "Suede Chelsea Boots", brand: "Calvin Klein", category: "Shoes", price: 7999, discount: 15, rating: 4.6, reviews: 43, image: "https://images.unsplash.com/photo-1616156030939-f8819d9999b8?w=600", description: "Handcrafted fine suede Chelsea boots featuring elasticated side panels and pull tabs.", sizes: ["8", "9", "10"], colors: ["Sand Suede", "Chocolate Brown"], stock: "Low Stock" },
    { id: 307, name: "Athletic Gym Shoes", brand: "Nike", category: "Shoes", price: 6499, discount: 10, rating: 4.5, reviews: 78, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600", description: "Flat sole training shoes engineered to provide lateral stability during weightlifting.", sizes: ["7", "8", "9", "10"], colors: ["Crimson Red", "Cool Gray"], stock: "In Stock" },
    { id: 308, name: "Summer Slip-on Loafers", brand: "US Polo", category: "Shoes", price: 2999, discount: 18, rating: 4.2, reviews: 65, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600", description: "Lightweight canvas loafers with cork-lined insoles delivering ultimate summer lifestyle ease.", sizes: ["7", "8", "9", "10"], colors: ["Navy Canvas", "Beige Canvas"], stock: "In Stock" },
    { id: 309, name: "Retro High-Top Sneakers", brand: "Nike", category: "Shoes", price: 7499, discount: 10, rating: 4.7, reviews: 152, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600", description: "Classic retro basketball high-tops styled with synthetic leather overlays and padded ankle collar.", sizes: ["7", "8", "9", "10", "11"], colors: ["White/Varsity Red", "Black/Gold"], stock: "In Stock" },
    { id: 310, name: "Formal Monk Strap Shoes", brand: "Calvin Klein", category: "Shoes", price: 8999, discount: 15, rating: 4.8, reviews: 29, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600", description: "Double-monk strap dress shoes styled with hand-burnished details and brass hardware buckle.", sizes: ["8", "9", "10"], colors: ["Dark Cognac", "Polished Black"], stock: "In Stock" },

    // Watches Category (10 products)
    { id: 401, name: "Luxury Chronograph Gold", brand: "Fossil", category: "Watches", price: 14999, discount: 20, rating: 4.8, reviews: 142, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600", description: "Stunning 24k gold-plated chronograph watch featuring sub-dials and date window displays.", sizes: ["One Size"], colors: ["Gold"], stock: "In Stock" },
    { id: 402, name: "Minimalist Leather Watch", brand: "Titan", category: "Watches", price: 4999, discount: 10, rating: 4.4, reviews: 96, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600", description: "Clean and ultra-thin watch case mounted on premium genuine Horween leather strap.", sizes: ["One Size"], colors: ["Brown Leather/Silver Dial", "Black Leather/Dark Dial"], stock: "In Stock" },
    { id: 403, name: "Tough Outdoor Digital Watch", brand: "Casio", category: "Watches", price: 3499, discount: 15, rating: 4.7, reviews: 320, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600", description: "Legendary shock-resistant digital watch featuring 200m water resistance and step tracker.", sizes: ["One Size"], colors: ["Military Green", "Tactical Black"], stock: "In Stock" },
    { id: 404, name: "Automatic Open Heart", brand: "Titan", category: "Watches", price: 18999, discount: 12, rating: 4.9, reviews: 28, image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600", description: "Premium automatic watch displaying open heart window showcasing balance wheel assembly.", sizes: ["One Size"], colors: ["Satin Silver", "Satin Rose Gold"], stock: "Low Stock" },
    { id: 405, name: "Casual Sporty Chrono", brand: "Fastrack", category: "Watches", price: 2999, discount: 25, rating: 4.2, reviews: 182, image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600", description: "Youthful sporty chronograph watch featuring silicone straps and high visibility indices.", sizes: ["One Size"], colors: ["Navy/Orange", "Black/Red"], stock: "In Stock" },
    { id: 406, name: "Aviation Pilot Watch", brand: "Fossil", category: "Watches", price: 8999, discount: 15, rating: 4.5, reviews: 54, image: "https://images.unsplash.com/photo-1526045431048-f857369aba09?w=600", description: "Bold dial pilot watch engineered with slide-rule bezel calculations and high luminous hands.", sizes: ["One Size"], colors: ["Slate Gray/Dark Strap"], stock: "In Stock" },
    { id: 407, name: "Classic Silver Mesh Watch", brand: "Titan", category: "Watches", price: 5999, discount: 10, rating: 4.6, reviews: 67, image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600", description: "Elegant silver steel mesh band watch with a clean dark dial, delivering sleek formal presence.", sizes: ["One Size"], colors: ["Silver Dial/Mesh Band"], stock: "In Stock" },
    { id: 408, name: "Vintage Digital Gold", brand: "Casio", category: "Watches", price: 2499, discount: 5, rating: 4.7, reviews: 489, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600", description: "Retro nostalgic golden metal band digital watch featuring alarm, stopwatch and amber light.", sizes: ["One Size"], colors: ["Vintage Gold"], stock: "In Stock" },
    { id: 409, name: "Luxury Chrono Black", brand: "Fossil", category: "Watches", price: 11999, discount: 18, rating: 4.7, reviews: 81, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600", description: "All-black steel link bracelet watch featuring dual timezone indicators and matte bezel dials.", sizes: ["One Size"], colors: ["Stealth Black"], stock: "In Stock" },
    { id: 410, name: "Sleek Casual Analog", brand: "Fastrack", category: "Watches", price: 2199, discount: 20, rating: 4.1, reviews: 92, image: "https://images.unsplash.com/photo-1533139586852-647285494930?w=600", description: "Urban casual analog watch featuring a lightweight composite casing and fabric strap details.", sizes: ["One Size"], colors: ["Army Olive", "Urban Camo"], stock: "In Stock" },

    // Accessories Category (8 products)
    { id: 501, name: "Premium Leather Bag", brand: "Calvin Klein", category: "Accessories", price: 8999, discount: 20, rating: 4.8, reviews: 67, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600", description: "Premium genuine leather bag structured with double compartment handles and metal protection rivets.", sizes: ["One Size"], colors: ["Tan", "Burgundy"], stock: "In Stock" },
    { id: 502, name: "Polarized Sunglasses", brand: "Fossil", category: "Accessories", price: 2999, discount: 15, rating: 4.5, reviews: 120, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600", description: "100% UV polarized sunglasses featuring lightweight acetate tortoiseshell frames and metal accents.", sizes: ["One Size"], colors: ["Amber Brown", "Matte Black"], stock: "In Stock" },
    { id: 503, name: "Genuine Leather Belt", brand: "Levi's", category: "Accessories", price: 1499, discount: 10, rating: 4.4, reviews: 231, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600", description: "Premium oil-tanned thick genuine leather harness belt completed with heavy brass buckle closure.", sizes: ["32", "34", "36", "38"], colors: ["Black", "Cognac Brown"], stock: "In Stock" },
    { id: 504, name: "RFID Leather Wallet", brand: "Tommy Hilfiger", category: "Accessories", price: 2499, discount: 20, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600", description: "Bifold full-grain leather wallet equipped with RFID blocking mesh linings for digital card protection.", sizes: ["One Size"], colors: ["Midnight Blue", "Chestnut"], stock: "In Stock" },
    { id: 505, name: "Silk Scarf Floral", brand: "Calvin Klein", category: "Accessories", price: 1999, discount: 12, rating: 4.3, reviews: 45, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600", description: "Exquisite and featherlight pure silk scarf displaying hand-painted floral watercolor patterns.", sizes: ["One Size"], colors: ["Blush Multi"], stock: "In Stock" },
    { id: 506, name: "Retro Aviator Sunglasses", brand: "Fossil", category: "Accessories", price: 3499, discount: 10, rating: 4.6, reviews: 88, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600", description: "Classic retro teardrop aviator frame fitted with high-definition polarized dark green lenses.", sizes: ["One Size"], colors: ["Gold/Green", "Silver/Gray"], stock: "In Stock" },
    { id: 507, name: "Smart Travel Backpack", brand: "Nike", category: "Accessories", price: 4499, discount: 15, rating: 4.6, reviews: 109, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", description: "High-grade water-resistant nylon travel backpack including padded laptop compartment and USB outlet.", sizes: ["One Size"], colors: ["Carbon Gray", "Stealth Black"], stock: "In Stock" },
    { id: 508, name: "Luxe Wool Fedora", brand: "Calvin Klein", category: "Accessories", price: 2999, discount: 25, rating: 4.2, reviews: 27, image: "https://images.unsplash.com/photo-1514327605964-b552881535b7?w=600", description: "100% fine Australian wool felt fedora styled with structured crown ribbon band detail.", sizes: ["S", "M", "L"], colors: ["Dusty Charcoal", "Sable Brown"], stock: "In Stock" }
];

// Initialize database in localStorage if not present
if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(defaultProducts));
}

// CART & WISHLIST SYNCRONIZATION
function addCart(productName, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({
            name: productName,
            price: parseFloat(price),
            image: image,
            quantity: 1
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCounts();
    showToast(productName + " added to cart!");
}

function addWishlist(productName, price, image) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let existingItem = wishlist.find(item => item.name === productName);
    if (!existingItem) {
        wishlist.push({
            name: productName,
            price: parseFloat(price),
            image: image
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateCounts();
        showToast(productName + " added to wishlist!");
    } else {
        showToast(productName + " is already in your wishlist!");
    }
}

function updateCounts() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    
    let totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    
    const selectors = {
        cart: ["#cart-count", ".cart-icon span"],
        wishlist: ["#wish-count", ".wish-icon span"]
    };

    selectors.cart.forEach(sel => {
        let el = document.querySelector(sel);
        if (el) el.innerHTML = totalQty;
    });

    selectors.wishlist.forEach(sel => {
        let el = document.querySelector(sel);
        if (el) el.innerHTML = wishlist.length;
    });
}

// Run update on load
document.addEventListener("DOMContentLoaded", () => {
    updateCounts();
    initDarkMode();
    initScrollToTop();
    injectDetailsModalHTML();
});

// DARK MODE
function initDarkMode() {
    // Add theme toggle button to navigation bar right section if not already present
    let navRight = document.querySelector(".nav-right");
    if (navRight && !document.getElementById("theme-toggle")) {
        let themeBtn = document.createElement("a");
        themeBtn.href = "#";
        themeBtn.id = "theme-toggle";
        themeBtn.title = "Toggle Theme";
        themeBtn.style.cursor = "pointer";
        themeBtn.style.marginLeft = "15px";
        themeBtn.innerHTML = `<i class="fa-regular fa-moon" style="font-size: 22px;"></i>`;
        
        // Put it before user icon
        let userLink = navRight.querySelector("a[href*='profile'], a[href*='login']");
        if (userLink) {
            navRight.insertBefore(themeBtn, userLink);
        } else {
            navRight.appendChild(themeBtn);
        }

        themeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleTheme();
        });
    }

    let savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        let icon = document.querySelector("#theme-toggle i");
        if (icon) {
            icon.className = "fa-solid fa-sun";
        }
    }
}

function toggleTheme() {
    let icon = document.querySelector("#theme-toggle i");
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
        if (icon) icon.className = "fa-regular fa-moon";
        showToast("Switched to Light Mode");
    } else {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
        if (icon) icon.className = "fa-solid fa-sun";
        showToast("Switched to Dark Mode");
    }
}

// SCROLL TO TOP
function initScrollToTop() {
    let btn = document.getElementById("scroll-top-btn");
    if (!btn) {
        btn = document.createElement("button");
        btn.id = "scroll-top-btn";
        btn.title = "Go to Top";
        btn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
        
        // Basic scroll top btn styling directly injected
        btn.style.position = "fixed";
        btn.style.bottom = "30px";
        btn.style.right = "30px";
        btn.style.zIndex = "999";
        btn.style.border = "none";
        btn.style.outline = "none";
        btn.style.background = "#C9A227";
        btn.style.color = "white";
        btn.style.cursor = "pointer";
        btn.style.padding = "15px";
        btn.style.borderRadius = "50%";
        btn.style.fontSize = "18px";
        btn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
        btn.style.transition = "opacity 0.3s, transform 0.3s";
        btn.style.opacity = "0";
        btn.style.transform = "scale(0.8)";
        btn.style.display = "none";

        document.body.appendChild(btn);

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
            setTimeout(() => {
                btn.style.opacity = "1";
                btn.style.transform = "scale(1)";
            }, 10);
        } else {
            btn.style.opacity = "0";
            btn.style.transform = "scale(0.8)";
            setTimeout(() => {
                if (btn.style.opacity === "0") btn.style.display = "none";
            }, 300);
        }
    });
}

// TOAST NOTIFICATIONS
function showToast(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.style.position = "fixed";
        container.style.bottom = "30px";
        container.style.left = "30px";
        container.style.zIndex = "1001";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.gap = "10px";
        document.body.appendChild(container);
    }

    let toast = document.createElement("div");
    toast.className = "toast";
    toast.style.background = "#111";
    toast.style.color = "#fff";
    toast.style.padding = "14px 24px";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "14px";
    toast.style.fontWeight = "500";
    toast.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
    toast.style.borderLeft = "4px solid #C9A227";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    toast.innerText = message;

    container.appendChild(toast);

    // Fade-in
    setTimeout(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    }, 10);

    // Fade-out and Remove
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// GLOBAL DETAILS MODAL INJECTION & VIEWS
function injectDetailsModalHTML() {
    if (document.getElementById("globalDetailsModal")) return;

    let modal = document.createElement("div");
    modal.id = "globalDetailsModal";
    modal.className = "modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.6)";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px; width: 95%; display: flex; flex-wrap: wrap; gap: 30px; padding: 40px; border-radius: 16px; position: relative;">
            <span class="modal-close" onclick="closeDetailsModal()" style="position: absolute; right: 25px; top: 20px; font-size: 28px; cursor: pointer;">&times;</span>
            
            <!-- Gallery Section -->
            <div style="flex: 1 1 380px; display: flex; flex-direction: column; gap: 15px;">
                <div style="overflow: hidden; border-radius: 12px; height: 400px; width: 100%; border: 1px solid #eee; position: relative;" id="zoom-container">
                    <img id="modal-img" src="" alt="" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                </div>
            </div>

            <!-- Details Section -->
            <div style="flex: 1 1 380px; display: flex; flex-direction: column; gap: 15px; text-align: left;">
                <span id="modal-brand" style="text-transform: uppercase; font-size: 12px; letter-spacing: 2px; color: #C9A227; font-weight: 600;">BRAND</span>
                <h2 id="modal-title" style="font-size: 26px; font-weight: 600; color: #111;">Product Name</h2>
                
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="color: #C9A227; font-size: 14px;" id="modal-stars"></div>
                    <span id="modal-reviews" style="font-size: 13px; color: #666;">(0 Reviews)</span>
                </div>

                <div style="display: flex; align-items: baseline; gap: 15px; margin: 5px 0;">
                    <span id="modal-price" style="font-size: 24px; font-weight: 700; color: #111;">₹0</span>
                    <span id="modal-oldprice" style="font-size: 16px; text-decoration: line-through; color: #888;">₹0</span>
                    <span id="modal-discount" style="background: rgba(201, 162, 39, 0.1); color: #C9A227; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">0% OFF</span>
                </div>

                <p id="modal-desc" style="font-size: 14px; color: #555; line-height: 1.6;">Description text</p>

                <!-- Sizes & Colors -->
                <div id="modal-sizes-container">
                    <h4 style="font-size: 14px; margin-bottom: 8px;">Select Size:</h4>
                    <div id="modal-sizes" style="display: flex; gap: 10px;"></div>
                </div>

                <div id="modal-stock" style="font-weight: 600; font-size: 14px; margin: 5px 0;">Stock status</div>

                <!-- Actions -->
                <div style="display: flex; gap: 15px; margin-top: 15px;" id="modal-actions-box">
                    <button id="modal-add-cart" class="login-btn" style="flex: 1; margin-bottom: 0;">Add to Cart</button>
                    <button id="modal-buy-now" class="btn-primary" style="flex: 1; border-radius: 8px; font-weight:600; background:#C9A227; color:#fff; border:none; cursor:pointer;">Buy Now</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Zoom setup
    let zoomContainer = document.getElementById("zoom-container");
    let modalImg = document.getElementById("modal-img");
    if (zoomContainer && modalImg) {
        zoomContainer.addEventListener("mousemove", (e) => {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            modalImg.style.transformOrigin = `${x}px ${y}px`;
            modalImg.style.transform = "scale(1.8)";
        });
        zoomContainer.addEventListener("mouseleave", () => {
            modalImg.style.transformOrigin = "center";
            modalImg.style.transform = "scale(1)";
        });
    }

    // Modal click out closing
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeDetailsModal();
    });
}

function openDetailsModal(productId) {
    let list = JSON.parse(localStorage.getItem("products")) || defaultProducts;
    let item = list.find(p => p.id === parseInt(productId));

    if (!item) return;

    // Load elements
    document.getElementById("modal-img").src = item.image;
    document.getElementById("modal-brand").innerText = item.brand;
    document.getElementById("modal-title").innerText = item.name;
    document.getElementById("modal-desc").innerText = item.description;
    
    // Price calculations
    let discountedPrice = item.price - Math.round(item.price * (item.discount || 0) / 100);
    document.getElementById("modal-price").innerText = "₹" + discountedPrice;
    
    if (item.discount > 0) {
        document.getElementById("modal-oldprice").style.display = "inline";
        document.getElementById("modal-oldprice").innerText = "₹" + item.price;
        document.getElementById("modal-discount").style.display = "inline";
        document.getElementById("modal-discount").innerText = item.discount + "% OFF";
    } else {
        document.getElementById("modal-oldprice").style.display = "none";
        document.getElementById("modal-discount").style.display = "none";
    }

    // Stars
    let starsHtml = "";
    let wholeStars = Math.floor(item.rating);
    for (let i = 0; i < 5; i++) {
        if (i < wholeStars) {
            starsHtml += `<i class="fa-solid fa-star"></i>`;
        } else if (i === wholeStars && item.rating % 1 !== 0) {
            starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            starsHtml += `<i class="fa-regular fa-star"></i>`;
        }
    }
    document.getElementById("modal-stars").innerHTML = starsHtml;
    document.getElementById("modal-reviews").innerText = `(${item.reviews || 0} customer reviews)`;

    // Sizes
    let sizesBox = document.getElementById("modal-sizes");
    sizesBox.innerHTML = "";
    if (item.sizes && item.sizes.length > 0) {
        document.getElementById("modal-sizes-container").style.display = "block";
        item.sizes.forEach(size => {
            sizesBox.innerHTML += `
                <button onclick="selectModalSize(this)" style="padding: 8px 14px; border: 1px solid #ddd; background: #fff; cursor: pointer; border-radius: 4px; font-size: 13px; font-weight: 500;">
                    ${size}
                </button>
            `;
        });
    } else {
        document.getElementById("modal-sizes-container").style.display = "none";
    }

    // Stock Status
    let stockElem = document.getElementById("modal-stock");
    stockElem.innerText = item.stock;
    if (item.stock === "In Stock") {
        stockElem.style.color = "#2ecc71";
    } else if (item.stock === "Low Stock") {
        stockElem.style.color = "#f39c12";
    } else {
        stockElem.style.color = "#e74c3c";
    }

    // Action clicks
    document.getElementById("modal-add-cart").onclick = () => {
        addCart(item.name, discountedPrice, item.image);
    };

    document.getElementById("modal-buy-now").onclick = () => {
        // Clear previous cart structure, push this item directly, and checkout
        let cart = [{
            name: item.name,
            price: parseFloat(discountedPrice),
            image: item.image,
            quantity: 1
        }];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCounts();
        closeDetailsModal();
        
        // Find relative prefix
        let prefix = window.location.pathname.includes("/pages/") ? "" : "pages/";
        window.location.href = prefix + "checkout.html";
    };

    // Show modal
    document.getElementById("globalDetailsModal").style.display = "flex";
}

function selectModalSize(btn) {
    let buttons = document.querySelectorAll("#modal-sizes button");
    buttons.forEach(b => {
        b.style.borderColor = "#ddd";
        b.style.background = "#fff";
        b.style.color = "#111";
    });
    btn.style.borderColor = "#C9A227";
    btn.style.background = "#C9A227";
    btn.style.color = "#fff";
}

function closeDetailsModal() {
    let modal = document.getElementById("globalDetailsModal");
    if (modal) modal.style.display = "none";
}

// Show / Hide Password
function togglePassword() {
    let password = document.getElementById("password");
    let eyeIcon = document.querySelector(".input-box .eye");
    if (password) {
        if (password.type === "password") {
            password.type = "text";
            if (eyeIcon) {
                eyeIcon.classList.remove("fa-eye");
                eyeIcon.classList.add("fa-eye-slash");
            }
        } else {
            password.type = "password";
            if (eyeIcon) {
                eyeIcon.classList.remove("fa-eye-slash");
                eyeIcon.classList.add("fa-eye");
            }
        }
    }
}