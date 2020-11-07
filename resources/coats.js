$(function() {
    const coatsWrapper = $(".coats-wrapper"),
        getcoatHTML = function(item) {
        return `<div class="single-coat-wrapper" data-id=${item.id}>
        <div class="coat-image-wrapper" style="background-image: url(assets/coats/${item.imgUrl})"></div>
        <div class="name-and-price-wrapper">
            <div class="name-wrapper">${item.name}</div>
            <div class="price-wrapper">${item.currency}${item.price}</div>
        </div>
    </div>`
    }
    let coatItem = products.coats
    console.log(coatItem);
    for(let i=0; i < coatItem.length; i++) {
        let coatObj = coatItem[i],
            coatHTML = getcoatHTML(coatObj);
        coatsWrapper.append(coatHTML);
    }
    const overlayContentWrapper = $(".overlay-content-wrapper"),
        itemWrapper = $(".item-wrapper")
        getitemcoatHTML = function(item) {
            return `<div class="item-wrapper" data-item=${item.id}>
            <div class="item-image-wrapper" style="background-image: url(assets/coats/${item.imgUrl}></div>
            <div class="item-details-wrapper">
                <div class="item-name-wrapper">${item.name}</div>
                <div class="item-price-wrapper">${item.currency}${item.price}</div>
                <div class="item-size-wrapper">
                    Your Size:<br>
                    <div>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    </div>
                </div>
                <div class="item-buttons-wrapper">
                    <button type="button">Details</button>
                    <button type="button">Order</button>
                    <button type="button">Payment</button>
                </div>
                <div class="item-composition-and-country-wrapper">
                    <div class="composition-wrapper">
                        Composition<br>
                        <span class="composition-detail-wrapper">${item.composition}</span>
                    </div>
                    <div class="country-wrapper">
                        Country<br>
                        <span class="country-detail-wrapper">${item.country}</span>
                    </div>
                </div>
                <div class="item-care-wrapper">
                    <div>Care</div>
                    <div class="care-detail-wrapper">${item.care}</div>
                </div>
                <div class="item-add-to-cart-wrapper">
                    <button type="button">Add to cart</button>
                </div>
            </div>
        </div>`
        }
})