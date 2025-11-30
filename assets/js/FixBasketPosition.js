const newbasketCardSection = document.querySelector('.basket-card-section')
const basketHorizontalMenuHtmlIndex = document.querySelector('.basket-horizontalMenu-htmlIndex')

 function getElementTop(element) {

    const style = getComputedStyle(element);
    const topValue = style.top; 
    
    if (!topValue || topValue === "auto") return 0;
    
    return parseFloat(topValue.replace(/px|rem|em|%/g, '')) || 0;
}
let currentTop = getElementTop(newbasketCardSection);

window.addEventListener('scroll', function(event){

    let myscroll = document.documentElement.scrollTop

    let newTop = currentTop + myscroll
    newbasketCardSection.style.top = newTop + "px";
    basketHorizontalMenuHtmlIndex.style.top = newTop + "px";
})

