const fixPositionProduct = document.querySelector('.fix-position-product')
const fixPositionLoginIndex = document.querySelector('.fix-position-login-index')

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

window.addEventListener('scroll', function(event){

    let myScroll = document.documentElement.scrollTop;
    
    if(fixPositionProduct){

        let newTop = currentTopValue + myScroll;
        fixPositionProduct.style.top = newTop + "px";
    }
    if(fixPositionLoginIndex){

        let newTopLogin = currentTopValueLogin + myScroll; 
        fixPositionLoginIndex.style.top = newTopLogin + "px";
    }
    
})