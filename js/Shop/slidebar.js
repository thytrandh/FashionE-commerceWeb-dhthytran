//Show product siderbar

$(".first").click(function (e) { 
    e.preventDefault();
    $(".first-show").toggleClass("show");
    $(".first").toggleClass("active");
});
$(".second").click(function (e) { 
    e.preventDefault();
    $(".second-show").toggleClass("show1")
    $(".second").toggleClass("active");
});
$(".third").click(function (e) { 
    e.preventDefault();
    $(".third-show").toggleClass("show2");
    $(".third").toggleClass("active");
});
$(".fourth").click(function (e) { 
    e.preventDefault();
    $(".fourth-show").toggleClass("show3");
    $(".fourth").toggleClass("active");
});

const inputRange = document.querySelector(".input-range")
const priceFilter = document.querySelector(".price-filter")
inputRange.oninput = (()=>{
    let value = inputRange.value;
    priceFilter.textContent = value;
});

//RENDER OUR FEATURED SUGGEST 
//Slider our-featured
//Our Featured Page02
$(".slider-our-featured-sugges").owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    autoplayTimeout: 8000,
    nav: true,
    navText: [
        '<i class="owl-nav-left fal fa-chevron-left"></i>',
        '<i class="owl-nav-right fal fa-chevron-right"></i>'
    ],
    dots: false,
},4000);
//1. RENDER OUR FEATURED SUGGEST 01
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Our Featured Page01"){
            $(".slider-our-featured-sugges-01").append(`
                <div class="item flex a-center j-between">
                    <div class="item-img">
                        <a class="img-01" href="">
                            <img src="${item.image[4]}" alt="" >
                        </a>
                    </div>
                    <div class="content">
                        <p class="name-product"><a href="">${item.name}</a></p>
                        <span class="price">${item["range-price"]}</span>
                        <div class="star-rating">
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            `);
        }
    });
});
//2. RENDER OUR FEATURED SUGGEST 02
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Our Featured Page02"){
            $(".slider-our-featured-sugges-02").append(`
                <div class="item flex a-center j-between">
                    <div class="item-img">
                        <a class="img-01" href="">
                            <img src="${item.image[4]}" alt="" >
                        </a>
                    </div>
                    <div class="content">
                        <p class="name-product"><a href="">${item.name}</a></p>
                        <span class="price">${item["range-price"]}</span>
                        <div class="star-rating">
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            `);
        }
    });
});