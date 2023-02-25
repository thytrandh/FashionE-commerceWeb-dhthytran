
//RENDER PRODUCT - PAGE SHOP
products.forEach(item => {
    $(".slider-product-list").append(`
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
});











