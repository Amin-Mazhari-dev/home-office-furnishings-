const basketHorizontalMenuHtmlIndex = document.querySelector('.basket-horizontalMenu-htmlIndex');
const basketCategoryProduct = document.querySelector('.basket-category-product');
const showProductBasket = document.querySelector('.show-product-basket');
const basketAsideMenu = document.querySelector('.basket-asideMenu'); 



function fixBasketPosition(element, myscroll){

    let getTop = getComputedStyle(element)

    getTop = parseFloat(getTop.top.replace(/px|rem|em|%/g, '')) || 0;

    let newTopIndex = getTop + myscroll;

    element.style.top = newTopIndex + "px"

}


window.addEventListener('scroll', function(event){

    let myScrollPage = document.documentElement.scrollTop

    if (basketHorizontalMenuHtmlIndex){

        if(window.innerWidth >= 360 && window.innerWidth <= 992){

            basketHorizontalMenuHtmlIndex.style.top = '-1100px';
            fixBasketPosition(basketHorizontalMenuHtmlIndex, myScrollPage)
    
        }else if(window.innerWidth > 992){
            
            basketHorizontalMenuHtmlIndex.style.top = '-627px';
            fixBasketPosition(basketHorizontalMenuHtmlIndex, myScrollPage)
            
        }

        if(myScrollPage < 670){

            basketHorizontalMenuHtmlIndex.classList.remove('showBasketCard')
        }
    }

    if(basketCategoryProduct){

        if(window.innerWidth >= 360 && window.innerWidth <= 992){

            basketCategoryProduct.style.top = '-520px';
            fixBasketPosition(basketCategoryProduct, myScrollPage)

        }else if(window.innerWidth > 992){

            basketCategoryProduct.style.top = '-30px';
            fixBasketPosition(basketCategoryProduct, myScrollPage)
        }
    }

    if(showProductBasket){

        if(window.innerWidth >= 360 && window.innerWidth < 500){

            showProductBasket.style.top = '-2780px';
            fixBasketPosition(showProductBasket, myScrollPage)

        }else if(window.innerWidth >= 500 && window.innerWidth <= 576){

            showProductBasket.style.top = '-2700px';
            fixBasketPosition(showProductBasket, myScrollPage)

        }else if(window.innerWidth >= 576 && window.innerWidth <= 768){

            showProductBasket.style.top = '-2840px';
            fixBasketPosition(showProductBasket, myScrollPage)

        }else if(window.innerWidth >= 768 && window.innerWidth <= 992){

            showProductBasket.style.top = '-2050px';
            fixBasketPosition(showProductBasket, myScrollPage)

        }else if(window.innerWidth >= 992 && window.innerWidth <= 1200){

            showProductBasket.style.top = '-1550px';
            fixBasketPosition(showProductBasket, myScrollPage)

        }else if(window.innerWidth > 1200){

            showProductBasket.style.top = '-1650px';
            fixBasketPosition(showProductBasket, myScrollPage)
        }

    }

    if(basketAsideMenu){

        let basketAsideScroll = document.documentElement.scrollTop;

        if(basketAsideScroll > 380){

            basketAsideMenu.classList.remove('showBasketCard')
        }
    }

})

