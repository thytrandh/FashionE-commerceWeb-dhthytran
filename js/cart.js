

//Click enter coupon
$(document).on("click", ".click-coupon-toggle", function () { 
    $(".coupon-toggle").toggle(600);
});

//Fade in/ Fade out click tabs 
$("li.shopping-cart").click(function (e) { 
    e.preventDefault();
    $(".shopping-cart-box").fadeIn(500);

    $(".shopping-cart").addClass("active");
    $(".check-out").removeClass("active");
    $(".order-complete").removeClass("active");

    $(".check-out-box").fadeOut(500);
    $(".order-complete-box").fadeOut(500);
});

$("li.check-out").click(function (e) { 
    e.preventDefault();
    $(".check-out-box").fadeIn(500);

    $(".check-out").addClass("active");
    $(".shopping-cart").removeClass("active");
    $(".order-complete").removeClass("active");

    $(".shopping-cart-box").fadeOut(500);
    $(".order-complete-box").fadeOut(500);
});

$("li.order-complete").click(function (e) { 
    e.preventDefault();
    $(".order-complete-box").fadeIn(500);

    $(".coupon").fadeOut(500);

    $(".order-complete").addClass("active");
    $(".check-out").removeClass("active");
    $(".shopping-cart").removeClass("active");

    $(".check-out-box").fadeOut(500);
    $(".shopping-cart-box").fadeOut(500);
});

//click btn
$(".btn-check-out").click(function (e) { 
    e.preventDefault();
    $(".check-out-box").fadeIn(500);

    $(".check-out").addClass("active");
    $(".shopping-cart").removeClass("active");
    $(".order-complete").removeClass("active");

    $(".shopping-cart-box").fadeOut(500);
    $(".order-complete-box").fadeOut(500);
});

$(".btn-place-order").click(function (e) { 
    e.preventDefault();
    $(".order-complete-box").fadeIn(500);

    $(".coupon").fadeOut(500);

    $(".order-complete").addClass("active");
    $(".check-out").removeClass("active");
    $(".shopping-cart").removeClass("active");

    $(".check-out-box").fadeOut(500);
    $(".shopping-cart-box").fadeOut(500);
});