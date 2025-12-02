const fixPositionProduct = document.querySelector('.fix-position-product')

function getElementTopValue(elem){

    const styleElement = getComputedStyle(elem);
    const elementTopValue = styleElement.top;

    if(!elementTopValue || elementTopValue === 'auto') return 0;

    return parseFloat(elementTopValue.replace(/px|rem|em|%/g, '')) || 0;
}

let currentTopValue = getElementTopValue(fixPositionProduct);

window.addEventListener('scroll', function(event){

    let myScroll = document.documentElement.scrollTop;

    let newTop = currentTopValue + myScroll;
    
    fixPositionProduct.style.top = newTop + "px";
    
})