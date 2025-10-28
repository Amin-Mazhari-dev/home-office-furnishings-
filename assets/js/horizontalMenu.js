// ....... JS codes for accordion menu .............

const homeIconn = document.querySelector('.home')
const ourProducts = document.getElementById('our-products')
const ourAgency = document.getElementById('our-agency')
const socialMedia = document.getElementById('social-media')
const abutUs = document.getElementById('abut-us')

// This part is for products menu
const titleOurProducts = document.querySelector('.title-our-products')
const arrowProducts = document.querySelector('.arrow-products')
const productSubmenu = document.querySelector('.product-submenu')
const showProduct = document.querySelectorAll('.product')

titleOurProducts.addEventListener('click', function(){

    arrowProducts.classList.toggle('animArrow')
    productSubmenu.classList.toggle('showCuntries')

    showProduct.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIconn.classList.toggle('homeIcon')
    ourProducts.classList.toggle('fixProductsMenu-firstTop')
    ourAgency.classList.toggle('fixAgencyMenu-firstTop')
    socialMedia.classList.toggle('fixSocialMedia-firstTop')
    abutUs.classList.toggle('fixAbutUs')
})

// This part is for agency menu
const titleOurAgency = document.querySelector('.title-our-agency')
const arrowAgency = document.querySelector('.arrow-agency')
const agencySubmenu = document.querySelector('.agency-submenu')
const showAgency = document.querySelectorAll('.agency')

titleOurAgency.addEventListener('click', function(){

    arrowAgency.classList.toggle('animArrow')
    agencySubmenu.classList.toggle('showCuntries')

    showAgency.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIconn.classList.toggle('homeIcon')
    ourProducts.classList.toggle('fixProductsMenu-secondTop')
    ourAgency.classList.toggle('fixAgencyMenu-secondtTop')
    socialMedia.classList.toggle('fixSocialMedia-firstTop')
    abutUs.classList.toggle('fixAbutUs')
})

// This part is for social media menu
const titleSocialMedia = document.querySelector('.title-social-media')
const arrowSocialMedia = document.querySelector('.arrow-social-media')
const socialMediaSubmenu = document.querySelector('.social-media-submenu')
const showMedia = document.querySelectorAll('.media')

titleSocialMedia.addEventListener('click', function(){

    arrowSocialMedia.classList.toggle('animArrow')
    socialMediaSubmenu.classList.toggle('showCuntries')

    showMedia.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIconn.classList.toggle('homeIcon')
    ourProducts.classList.toggle('fixProductsMenu-thirdTop')
    ourAgency.classList.toggle('fixAgencyMenu-firstTop')
    socialMedia.classList.toggle('fixSocialMedia-secondTop')
    abutUs.classList.toggle('fixAbutUs-seconddTop')
})

// This part is for abut-us menu
const titleAbutUs = document.querySelector('.title-abut-us')
const arrowAbutUs = document.querySelector('.arrow-abut-us')
const abutUsSubmenu = document.querySelector('.abut-us-submenu')
const showAbutUs = document.querySelectorAll('.abutUs')

titleAbutUs.addEventListener('click', function(){

    arrowAbutUs.classList.toggle('animArrow')
    abutUsSubmenu.classList.toggle('showCuntries')

    showAbutUs.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIconn.classList.toggle('homeIcon-scondTop')
    ourProducts.classList.toggle('fixProductsMenu-fourthTop')
    ourAgency.classList.toggle('fixAgencyMenu-thirdTop')
    socialMedia.classList.toggle('fixSocialMedia-thirdTop')
    abutUs.classList.toggle('fixAbutUs-thirdTop')
})