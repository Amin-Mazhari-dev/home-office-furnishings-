const fixPositionProduct = document.querySelector('.fix-position-product')
const fixPositionLoginIndex = document.querySelector('.fix-position-login-index')

function getElementTopValue(elemProduct, elemIndex){


    if(fixPositionProduct){
        const styleElement = getComputedStyle(elemProduct);
        const elementTopValue = styleElement.top;
    
        if(!elementTopValue || elementTopValue === 'auto') return 0;
    
        return parseFloat(elementTopValue.replace(/px|rem|em|%/g, '')) || 0;
    }
    if(fixPositionLoginIndex){
        const styleElement = getComputedStyle(elemIndex);
        const elementTopValue = styleElement.top;
    
        if(!elementTopValue || elementTopValue === 'auto') return 0;
    
        return parseFloat(elementTopValue.replace(/px|rem|em|%/g, '')) || 0;
    }
}

let currentTopValue = getElementTopValue(fixPositionProduct, fixPositionLoginIndex);

window.addEventListener('scroll', function(event){

    let myScroll = document.documentElement.scrollTop;

    let newTop = currentTopValue + myScroll;
    
    if(fixPositionProduct){

        fixPositionProduct.style.top = newTop + "px";
    }
    if(fixPositionLoginIndex){

        fixPositionLoginIndex.style.top = newTop + "px";
    }
    
})