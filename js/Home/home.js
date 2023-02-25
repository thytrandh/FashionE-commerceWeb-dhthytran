//SLIDER TOP BANNER
$(".slider-top-banner.owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    nav: true,
    navText: [
        '<i style = "margin-left: 4.5rem;" class="owl-nav-left bi bi-arrow-left"></i>',
        '<i style = "margin-right: 4.5rem;" class="owl-nav-right bi bi-arrow-right"></i>'
    ],
    dots: false,
},4000);

$(".slider-collection-banner.owl-carousel").owlCarousel({
    loop:false,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
        },
        576:{
            items:2,
            nav:false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
        },
        768:{
            items:3,
            nav:false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
        },
        992:{
            items:4,
            nav:false,
            dots: false
        }
    }
},4000);

//**SLIDER COLLECTION
$(".slider-collection.owl-carousel").owlCarousel({
    loop:true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: false,
        },
        576:{
            items:1,
            nav:false,
            dots: false
        },
        768:{
            items:2,
            nav:false,
            dots: false
        },
        1050:{
            items:3,
            nav:false,
            dots: false
        }
    }
});

//SLIDER TRADEMASK 
$(".slider-trademark-list.owl-carousel").owlCarousel({
    items: 6,
    //margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: false,
});

//FADEIN TOTOP
$(window).scroll(function () { 
    const position = $(window).scrollTop();
    /* console.log(position) */
    if(position > 1000){
        $(".to-top").slideDown().css({
            display:"block",
        });
    } else{
        $(".to-top").slideUp();
    }
});
//To top - Animate
$(".to-top").click(function (e) { 
    e.preventDefault();
    $("html, body").animate({
        scrollTop:0,
    },
    2000,
    "easeOutCirc"
    );
});


//RENDER & CUSTOM SLIDER PRODUCT LIST
//1. Best Seller
//1.1. Render best seller
/* <a href=""><img class="view-product-details img-01" src="${item.image[0]}" alt=""></a>
    <a href=""><img class="view-product-details img-02" src="${item.image[1]}" alt=""></a> */
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Best Sellers"){
            $(".slider-best-sellers").append(`
                <div data-id=${item.id} class="product product-id">
                    <div class="product-img flex-column">
                        <img class="view-product-details img-01" src="${item.image[0]}" alt="">
                        <img class="view-product-details img-02" src="${item.image[1]}" alt="">
                        <div class="img-content">
                            <span class="promotion">${item.promotion}</span>
                            <ul>
                            <li>
                                <i class="fal fa-heart"></i>
                            </li>
                            <li class="render-quick-view quick-view">
                                <i class="fal fa-search"></i>
                            </li>
                            </ul>
                        </div>
                        <button class="btn-add-cart">
                            <p>ADD TO CART</p>
                        </button>
                    </div>
                    <div class="content">
                        <p class="name-category">${item.category[0]}</p>
                        <p class="name-product-render">
                            <a href="">${item.name}</a>
                        </p>
                        <span class="price">${item["range-price"]}</span>
                        <div class="review">
                        <div class="star-rating">
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="rating">( 3 Reviews )</span>
                        </div>
                    </div>
                </div>
            
            `);
        }
    });
})
//1.2. Slider
$(".slider-best-sellers.owl-carousel").owlCarousel({
    nav:false,
    dots:false,
    loop:false,
    autoplay: false,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            dots: false,
        },
        900:{
            items:3,
            margin: 10,
            nav:false,
            dots: false
        },
        1030:{
            items:4,
            margin: 10,
            nav:false,
            dots: false
        },
        1200:{
            items:5,
            margin:6,
            nav:false,
            dots: false
        }
    }
});

//2. Our Featured
//2.1. Render Our Featured - PAGE SHOP 
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Our Featured"){
            $(".slider-our-featured").append(`
            <div data-id=${item.id} class="product product-id">
                <div class="product-img flex-column">
                    <img class="view-product-details img-01" src="${item.image[0]}" alt="">
                    <img class="view-product-details img-02" src="${item.image[1]}" alt="">
                    <div class="img-content">
                        <span class="promotion">${item.promotion}</span>
                        <ul>
                        <li>
                            <i class="fal fa-heart"></i>
                        </li>
                        <li class="render-quick-view quick-view">
                            <i class="fal fa-search"></i>
                        </li>
                        </ul>
                    </div>
                    <button class="btn-add-cart">
                        <p>ADD TO CART</p>
                    </button>
                </div>
                <div class="content">
                    <p class="name-category">${item.category[0]}</p>
                    <p class="name-product-render">
                        <a href="">${item.name}</a>
                    </p>
                    <span class="price">${item["range-price"]}</span>
                    <div class="review">
                    <div class="star-rating">
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="rating">( 3 Reviews )</span>
                    </div>
                </div>
            </div>
            `);
        }
    });
})
//2.2. Slider
$(".slider-our-featured.owl-carousel").owlCarousel({
    nav:false,
    dots:false,
    loop:false,
    autoplay: false,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            dots: false,
        },
        900:{
            items:3,
            margin: 10,
            nav:false,
            dots: false
        },
        1030:{
            items:4,
            margin: 10,
            nav:false,
            dots: false
        },
        1200:{
            items:5,
            margin:6,
            nav:false,
            dots: false
        }
    }
});

//3. New Arrivals
//3.1. Render New Arrivals - PAGE SHOP 
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "New Arrivals"){
            $(".slider-new-arrivals").append(`
            <div data-id=${item.id} class="product product-id">
                <div class="product-img  flex-column">
                        <img class="view-product-details img-01" src="${item.image[0]}" alt="">
                        <img class="view-product-details img-02" src="${item.image[1]}" alt="">
                    <div class="img-content">
                        <span class="promotion">${item.promotion}</span>
                        <ul>
                        <li>
                            <i class="fal fa-heart"></i>
                        </li>
                        <li class="render-quick-view quick-view">
                            <i class="fal fa-search"></i>
                        </li>
                        </ul>
                    </div>
                    <button class="btn-add-cart">
                        <p>ADD TO CART</p>
                    </button>
                </div>
                <div class="content">
                    <p class="name-category">${item.category[0]}</p>
                    <p class="name-product-render">
                        <a href="">${item.name}</a>
                    </p>
                    <span class="price">${item["range-price"]}</span>
                    <div class="review">
                    <div class="star-rating">
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="rating">( 3 Reviews )</span>
                    </div>
                </div>
             </div>
            `);
        }
    });
})
//3.2. Slider
$(".slider-new-arrivals.owl-carousel").owlCarousel({
    nav:false,
    dots:false,
    loop:false,
    autoplay: false,
    autoplayTimeout: 5000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            dots: false,
        },
        900:{
            items:3,
            margin: 10,
            nav:false,
            dots: false
        },
        1030:{
            items:4,
            margin: 10,
            nav:false,
            dots: false
        },
        1200:{
            items:5,
            margin:6,
            nav:false,
            dots: false
        }
    }
});
//4. Suggest Product
//4.1. Render Suggest Sale Products
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Sale Products"){
            $(".suggest-sale-products").append(`
                <div data-id=${item.id} class="item flex a-center product-id">
                <div class="item-img view-product-details">
                    <a class="img-01">
                        <img src="${item.image[0]}" alt="" >
                    </a>
                    <a class="img-02">
                        <img src="${item.image[1]}" alt="" >
                    </a>
                </div>
                <div class="content">
                    <p class="view-product-details name-product"><a>${item.name}</a></p>
                    <span class="price">${item["range-price"]}</span>
                    <div class="star-rating">
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star checked"></i>
                        <i class="fas fa-star "></i>
                        <i class="fas fa-star "></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
            `);
        }
    });
});
//4.2. Render Suggest latest Products
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Latest Products"){
            $(".suggest-latest-products").append(`
                <div class="item flex a-center">
                <div class="item-img">
                <a class="img-01" href="">
                    <img src="${item.image[0]}" alt="" >
                </a>
                <a class="img-02" href="">
                    <img src="${item.image[1]}" alt="" >
                </a>
                </div>
                <div class="content">
                <p class="view-product-details name-product"><a href="">${item.name}</a></p>
                <span class="price">${item["range-price"]}</span>
                <div class="star-rating">
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star"></i>
                </div>
                </div>
            </div>
            `);
        }
    });
});
//4.3. Render Best of the Week
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Best of the Week"){
            $(".suggest-best-of-the-week").append(`
                <div class="item flex a-center">
                <div class="item-img">
                <a class="img-01" href="">
                    <img src="${item.image[0]}" alt="" >
                </a>
                <a class="img-02" href="">
                    <img src="${item.image[1]}" alt="" >
                </a>
                </div>
                <div class="content">
                <p class="view-product-details name-product"><a href="">${item.name}</a></p>
                <span class="price">${item["range-price"]}</span>
                <div class="star-rating">
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star"></i>
                </div>
                </div>
            </div>
            `);
        }
    });
});
//4.4. Render Popular
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Popular"){
            $(".suggest-popular").append(`
                <div class="item flex a-center">
                <div class="item-img">
                <a class="img-01" href="">
                    <img src="${item.image[0]}" alt="" >
                </a>
                <a class="img-02" href="">
                    <img src="${item.image[1]}" alt="" >
                </a>
                </div>
                <div class="content">
                <p class="view-product-details name-product"><a href="">${item.name}</a></p>
                <span class="price">${item["range-price"]}</span>
                <div class="star-rating">
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star "></i>
                    <i class="fas fa-star"></i>
                </div>
                </div>
            </div>
            `);
        }
    });
});

//Slider Element Banner 03
$(".slider-el-content-02-banner-03.owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    autoplay: false,
    autoplayTimeout: 8000,
    nav: true,
    navText: [
        '<i class="fal fa-chevron-left"></i>',
        '<i class="fal fa-chevron-right"></i>'
    ],
    dots: false,
},4000);







