
// HEADER BAR - click Account -> Account Popup
const positionItemLogin = $(".nav-login");
const positionItemRegister = $(".nav-register");
positionItemLogin.click(function (e) { 
    e.preventDefault();
    $(".nav-login").addClass("nav-active");
    $(".nav-register").removeClass("nav-active");
    $(".login-box").slideDown(500);
    $(".register-box").slideUp(300);

});
positionItemRegister.click(function (e) { 
    e.preventDefault();
    $(".nav-register").addClass("nav-active");
    $(".nav-login").removeClass("nav-active");
    $(".register-box").slideDown(500);
    $(".login-box").slideUp(300);
});
$(".click-account").click(function (e) { 
    e.preventDefault();
    $(".account-popup").css({
        display:"block"
    });
    $(".close-popup").click(function (e) { 
        e.preventDefault();
        //console.log(e.target.closest(".modal-content"))
        if(!e.target.closest(".account-content")){
            $(".account-popup").css({
                display:"none"
            });
        }
    });
});
// HEADER BAR - click Cart -> Cart Popup
$(".cart-slide-left").click(function (e) { 
    e.preventDefault();
    $(".show-cart-popup").fadeIn(500);
    $(".show-cart").removeClass("not-active");
    $(".show-cart").addClass("active");
    
});
$(".btn-close-cart-popup").click(function (e) { 
    e.preventDefault();
    $(".show-cart").removeClass("active");
    $(".show-cart").addClass("not-active");
    $(".show-cart-popup").fadeOut(500);
    
});



//MODAL-POPUP
setTimeout(() => {
    $(".modal-popup").fadeIn();
},800)
$(".close-popup").click(function (e) { 
    e.preventDefault();
    $(".modal-popup").fadeOut(600);
});

/* $(document).click(function (e) { 
    e.preventDefault();
    //console.log(e.target.closest(".modal-content"))
    if(!e.target.closest(".modal-content")){
        $(".modal-popup").fadeOut(600);
    }
});  */


//choose color



//PIXED HEADER
$(document).ready(function(){
    $(window).scroll(function(){
        const position = $(window).scrollTop()
        if(position > 24){
            $('header').addClass('header-fixed');
        }
        else{
            $('header').removeClass('header-fixed');
        }
    });
});


//SLIDER CATEGORIES
$(".categories-list.owl-carousel").owlCarousel({
    loop:true,
    autoplay: false,
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
});


//SEARCH PRODUCT
//Render search product
const renderSearchProduct  = (array) =>{
    array.forEach(item => {
        $(".search-dropdown").append(`
        <li data-id=${item.id} class="item product-id view-product-details flex j-between">
            <div class="item-img view-product-details">
                <a class="img-01">
                <img src="${item.image[0]}" alt="">
                </a>
            </div>
            <div class="content">
                <p class="view-product-details name-product"><a>${item.name}</a></p>
                <span class="price">${item["range-price"]}</span>
            </div>
        </li>
        `);
    });
};

const resetSearchProduct = (listSearch) => {
    $(".search-dropdown").empty();
}

$(".input-search").keyup(function (e){ 
    const searchTerm = $(this).val();
    const listSearch = products.filter(val  => 
        val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        val.category[0].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    if(searchTerm === ""){
        resetSearchProduct();
        return;
    }
    resetSearchProduct();
    renderSearchProduct(listSearch);
});

