const descriptionBtn = document.querySelector('.description-btn')
const customersBtn = document.querySelector('.customers-btn')
const aboutProduct = document.querySelector('.about-product')
const customerReviews = document.querySelector('.customer-reviews')

descriptionBtn.addEventListener('click', function(){

    customerReviews.classList.remove('showTab')
    aboutProduct.classList.add('showTab')
})

customersBtn.addEventListener('click', function(){
    
    aboutProduct.classList.remove('showTab')
    customerReviews.classList.add('showTab')
})