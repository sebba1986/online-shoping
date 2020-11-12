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
    const overlay = $(".overlay")
    coatsWrapper.delegate(".single-coat-wrapper", "click", function(){
        let coatID = $(this).data("id")
        console.log(coatID); 
        for(let i=0; i < coatItem.length; i++){
            let singleCoatObj = coatItem[i]
            if(singleCoatObj.id == coatID){
                console.log(singleCoatObj);
                $(".item-image-wrapper").css("backgroundImage", `url(assets/coats/${singleCoatObj.imgUrl})`);
                $(".item-name-wrapper").text(`${singleCoatObj.name}`);
                $(".item-price-wrapper").text(`${singleCoatObj.currency}${singleCoatObj.price}`);
                $(".composition-detail-wrapper").text(`${singleCoatObj.composition}`);
                $(".country-detail-wrapper").text(`${singleCoatObj.country}`);
                $(".care-detail-wrapper").text(`${singleCoatObj.care}`);
           }
        }
        overlay.fadeIn();
    })
    const overlayExit = $(".overlay-exit")
    overlayExit.on("click", function(){
        overlay.fadeOut();
    })
})