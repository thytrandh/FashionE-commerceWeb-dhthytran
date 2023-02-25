
//Turn on off video popup
$(".close-video-popup").click(function (e) { 
    e.preventDefault();
    $(".video-player-popup").fadeOut(600);
});

$(".btn-play-video").click(function (e) { 
    e.preventDefault();
    $(".video-player-popup").fadeIn(600);
});

//Fade in/ Fade out click tabs description
$("li.description").click(function (e) { 
    e.preventDefault();
    $(".detailed-description").fadeIn(500);

    $(".description").addClass("active");

    $(".additional-infomation").removeClass("active");
    $(".size-guide").removeClass("active");
    $(".review").removeClass("active");

    $(".detailed-additional-information").fadeOut(500);
    $(".detailed-size-guide").fadeOut(500);
    $(".detailed-review").fadeOut(500);
});

$("li.additional-infomation").click(function (e) { 
    e.preventDefault();
    $(".detailed-additional-information").fadeIn(500);

    $(".additional-infomation").addClass("active");

    $(".description").removeClass("active");
    $(".size-guide").removeClass("active");
    $(".review").removeClass("active");

    $(".detailed-description").fadeOut(500);
    $(".detailed-size-guide").fadeOut(500);
    $(".detailed-review").fadeOut(500);

});

$("li.size-guide").click(function (e) { 
    e.preventDefault();
    $(".detailed-size-guide").fadeIn(500);

    $(".size-guide").addClass("active");

    $(".description").removeClass("active");
    $(".additional-infomation").removeClass("active");
    $(".review").removeClass("active");

    $(".detailed-additional-information").fadeOut(500);
    $(".detailed-description").fadeOut(500);
    $(".detailed-review").fadeOut(500);
});

$("li.review").click(function (e) { 
    e.preventDefault();
    $(".detailed-review").fadeIn(500);

    $(".review").addClass("active");

    $(".description").removeClass("active");
    $(".additional-infomation").removeClass("active");
    $(".size-guide").removeClass("active");

    $(".detailed-additional-information").fadeOut(500);
    $(".detailed-size-guide").fadeOut(500);
    $(".detailed-description").fadeOut(500);
});

// Render Product - Related Products
products.forEach(item => {
    item.category.forEach(element => {
        if(element === "Our Featured"){
            $(".slider-related-products").append(`
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
});

//Slider
$(".slider-related-products.owl-carousel").owlCarousel({
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

//Render Infomation Page - local storage

const itemProduct = localStorage.getItem("itemViewProdcuts");
const itemObject = JSON.parse(itemProduct);
const renderItemViewProducts = (item) => {
    $(".img-widget-01").attr("src",item.image[0]);
    $(".img-widget-02").attr("src",item.image[1]);
    $(".img-widget-03").attr("src",item.image[2]);
    $(".img-widget-04").attr("src",item.image[3]);

    $(".ctgry").text(item.category[0]);
    $(".name-prod").text(item.name);

    $(".product-title").text(item.name);

    $(".sku").text(item.sku);
    $(".posted_in_text").text(item.category[0]);

    $(".range-price").text(item["range-price"]);

    $(".el-color").append(`
        <button style="background: ${item.color[0]};" class="color"></button>
        <button style="background: ${item.color[1]};" class="color"></button>
        <button style="background: ${item.color[2]};" class="color"></button>
    `);

    //Render size
    $(".el-size").append(`
        <button class="btn-size1 size">${item.size[0]}</button>
        <button class="btn-size2 size">${item.size[1]}</button>
        <button class="btn-size3 size">${item.size[2]}</button>
    `);
    const btnSize2 = $(".btn-size2").text();
    const btnSize3 = $(".btn-size3").text();
    if(btnSize2 === "undefined"){
        $(".btn-size2").css({
            opacity: "0"
        });
    };
    if(btnSize3 === "undefined"){
        $(".btn-size3").css({
            opacity: "0"
        });
    };

    $(".into-price").text(item.price);

    $(".product-id").attr("data-id",item.id);

    const renderQuanity = () => {
        $(".quanity-minus").on("click", function () {
            var prev = $(this).closest(".varication-add-to-cart").find("input").val();
            if(prev == 1){
                $(this).closest(".varication-add-to-cart").find("input").val("1");
            }else{
                var prevVal = prev - 1;
                $(this).closest(".varication-add-to-cart").find("input").val(prevVal)
            }
        });
        $(".quanity-plus").on("click", function () {
            var next = $(this).closest(".varication-add-to-cart").find("input").val();
            if(next == item.quantity){
                $(this).closest(".varication-add-to-cart").find("input").val(item.quantity);
            }else{
                var nextVal =  ++next;
                $(this).closest(".varication-add-to-cart").find("input").val(nextVal)
            }
        });
    
    };
    renderQuanity();

};
renderItemViewProducts(itemObject);