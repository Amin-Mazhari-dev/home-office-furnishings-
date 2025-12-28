const fixPositionProduct = document.querySelector('.fix-position-product')
const fixPositionLoginIndex = document.querySelector('.fix-position-login-index')
const fixPositionCategoryProductLogin = document.querySelector('.fix-position-category-product-login')

function getElementTopValue(elemProduct){

    if(fixPositionProduct){
        const styleElement = getComputedStyle(elemProduct);
        const elementTopValue = styleElement.top;
    
        if(!elementTopValue || elementTopValue === 'auto') return 0;
    
        return parseFloat(elementTopValue.replace(/px|rem|em|%/g, '')) || 0;
    }

}
let currentTopValue = getElementTopValue(fixPositionProduct);


function getElementTopValueLogin(elemIndex){

    if(fixPositionLoginIndex){
        const styleElementLogin = getComputedStyle(elemIndex);
        const elementLoginTopValue = styleElementLogin.top;
    
        if(!elementLoginTopValue || elementLoginTopValue === 'auto') return 0;
    
        return parseFloat(elementLoginTopValue.replace(/px|rem|em|%/g, '')) || 0;
    }
}
let currentTopValueLogin = getElementTopValueLogin(fixPositionLoginIndex)

function getElementTopValueCategoryProductLogin(elemCategoryProduct){

    if(fixPositionCategoryProductLogin){

        const styleElementCategoryProduct = getComputedStyle(elemCategoryProduct)
        const elementCategoryProductTopValue = styleElementCategoryProduct.top;
        
        if(!elementCategoryProductTopValue || elementCategoryProductTopValue === 'auto') return 0;

        return parseFloat(elementCategoryProductTopValue.replace(/px|rem|em|%/g, '')) || 0;
    }
}
let currentTopValueCategoryProductLogin = getElementTopValueCategoryProductLogin(fixPositionCategoryProductLogin)

window.addEventListener('scroll', function(event){

    let myScroll = document.documentElement.scrollTop;
    
    if(fixPositionProduct){

        let newTop = currentTopValue + myScroll;
        fixPositionProduct.style.top = newTop + "px";
    }
    if(fixPositionLoginIndex && window.innerWidth < 992){

        let newTopLogin = currentTopValueLogin + myScroll; 
        fixPositionLoginIndex.style.top = newTopLogin + "px";
        
    }else if(fixPositionLoginIndex && window.innerWidth > 992){

        let newTopLogin = (currentTopValueLogin - 70) + myScroll; 
        fixPositionLoginIndex.style.top = newTopLogin + "px";
    }
    if(fixPositionCategoryProductLogin){

        let newTopCategoryProductLogin = currentTopValueCategoryProductLogin + myScroll;
        fixPositionCategoryProductLogin.style.top = newTopCategoryProductLogin + "px";
    }
    
})

// These codes hide Login in (min-width: 992px)

window.addEventListener('scroll', function(){

    let widthScreen = window.innerWidth
    let userScroll = document.documentElement.scrollTop;

    if(!fixPositionLoginIndex) return 0;
    
    if(widthScreen > 992 && userScroll < 30){

        fixPositionLoginIndex.classList.remove('show-login-index')
    }
})