const newbasketCardSection = document.querySelector('.basket-card-section')

function getElementTop(element) {

    if (!element) return 0;

    const style = getComputedStyle(element);
    const topValue = style.top; 
    
    if (!topValue || topValue === "auto") return 0;
    
    return parseFloat(topValue.replace(/px|rem|em|%/g, '')) || 0;
}
let currentTop = getElementTop(newbasketCardSection);

window.addEventListener('scroll', function(event){

    let myscroll = document.documentElement.scrollTop

    let newTop = currentTop + myscroll

    if(newbasketCardSection){

        newbasketCardSection.style.top = newTop + "px";
    }

})

// These codes are for Basket - Horizontal - Menu - Html - Index

const basketHorizontalMenuHtmlIndex = document.querySelector('.basket-horizontalMenu-htmlIndex')

function getElementTopHtmlIndex(elementHtmlIndex){

    const styleIndex = getComputedStyle(elementHtmlIndex);
    const topValueIndex = styleIndex.top; 
    
    if (!topValueIndex || topValueIndex === "auto") return 0;
    
    return parseFloat(topValueIndex.replace(/px|rem|em|%/g, '')) || 0;

}
let currentTopIndex = getElementTop(basketHorizontalMenuHtmlIndex);

window.addEventListener('scroll', function(event){

    let myscrollIndex = document.documentElement.scrollTop

    let newTopIndex = currentTopIndex + myscrollIndex

    if (!basketHorizontalMenuHtmlIndex) return 0;

    if(basketHorizontalMenuHtmlIndex){

        basketHorizontalMenuHtmlIndex.style.top = newTopIndex + "px";

    } 
    // if(myscrollIndex < 680){

    //     basketHorizontalMenuHtmlIndex.classList.remove('showBasketCard')
    // }

})

// .......... These codes hide Basket-aside in (min-height: 380px)

const basketAsideMenu = document.querySelector('.basket-asideMenu'); 

window.addEventListener('scroll', function(event){ 

    let basketAsideScroll = document.documentElement.scrollTop;
    
    if(!basketAsideMenu) return 0;
    
    if(basketAsideScroll > 380){

        basketAsideMenu.classList.remove('showBasketCard')
    }
})

// These codes are for Basket - category - product - page

const basketCategoryProduct = document.querySelector('.basket-category-product')

function getElementTopBasketCategoryProduct(elemBasketCategory){
    
    if(!elemBasketCategory) return;
    const styleBasketCategoryProduct = getComputedStyle(elemBasketCategory);
    const topValueBasketCategoryProduct = styleBasketCategoryProduct.top;

    if (!topValueBasketCategoryProduct || topValueBasketCategoryProduct === "auto") return 0;
    
    return parseFloat(topValueBasketCategoryProduct.replace(/px|rem|em|%/g, '')) || 0;
}
let currentTopValueBasketCategoryProduct = getElementTopBasketCategoryProduct(basketCategoryProduct);

window.addEventListener('scroll', function(event){

    let myScrollBasketCategoryProduct = document.documentElement.scrollTop

    let newTopBasketCategoryProduct = currentTopValueBasketCategoryProduct + myScrollBasketCategoryProduct

    if(basketCategoryProduct){

        basketCategoryProduct.style.top = newTopBasketCategoryProduct + "px";

    }
})