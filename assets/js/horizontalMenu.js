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

    removeClassesFromAgencySection()
    removeClassesFromSocialMedia()
    removeClassesFromAbutUs()

    arrowProducts.classList.toggle('animArrow')
    productSubmenu.classList.toggle('showCuntries')

    showProduct.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIcon(homeIconn)
    fixPositionOurProductsMenu(ourProducts)
    fixPositionOurAgencyMenu(ourAgency)
    fixPositionSocialMedia(socialMedia)
    fixPositionAbutUs(abutUs)

})

// This part is for agency menu
const titleOurAgency = document.querySelector('.title-our-agency')
const arrowAgency = document.querySelector('.arrow-agency')
const agencySubmenu = document.querySelector('.agency-submenu')
const showAgency = document.querySelectorAll('.agency')

titleOurAgency.addEventListener('click', function(){

    removeClassesFromProductSection()
    removeClassesFromSocialMedia()
    removeClassesFromAbutUs()

    arrowAgency.classList.toggle('animArrow')
    agencySubmenu.classList.toggle('showCuntries')

    showAgency.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIcon(homeIconn)
    fixPositionOurProductsMenu(ourProducts)
    fixPositionOurAgencyMenu(ourAgency)
    fixPositionSocialMedia(socialMedia)
    fixPositionAbutUs(abutUs)

})

// This part is for social media menu
const titleSocialMedia = document.querySelector('.title-social-media')
const arrowSocialMedia = document.querySelector('.arrow-social-media')
const socialMediaSubmenu = document.querySelector('.social-media-submenu')
const showMedia = document.querySelectorAll('.media')

titleSocialMedia.addEventListener('click', function(){

    removeClassesFromAgencySection()
    removeClassesFromProductSection()
    removeClassesFromAbutUs()

    arrowSocialMedia.classList.toggle('animArrow')
    socialMediaSubmenu.classList.toggle('showCuntries')

    showMedia.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIcon(homeIconn)
    fixPositionOurProductsMenu(ourProducts)
    fixPositionOurAgencyMenu(ourAgency)
    fixPositionSocialMedia(socialMedia)
    fixPositionAbutUs(abutUs)

})

// This part is for abut-us menu
const titleAbutUs = document.querySelector('.title-abut-us')
const arrowAbutUs = document.querySelector('.arrow-abut-us')
const abutUsSubmenu = document.querySelector('.abut-us-submenu')
const showAbutUs = document.querySelectorAll('.abutUs')

titleAbutUs.addEventListener('click', function(){

    removeClassesFromProductSection()
    removeClassesFromAgencySection()
    removeClassesFromSocialMedia()

    arrowAbutUs.classList.toggle('animArrow')
    abutUsSubmenu.classList.toggle('showCuntries')

    showAbutUs.forEach(function(items){

        items.classList.toggle('showItems')
    })

    homeIcon(homeIconn)
    fixPositionOurProductsMenu(ourProducts)
    fixPositionOurAgencyMenu(ourAgency)
    fixPositionSocialMedia(socialMedia)
    fixPositionAbutUs(abutUs)

})

//This function fix home icon

function homeIcon(homeIc){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection || hasClassAgencySubmenu || hasClassSocialMediaSubmenu){

        homeIc.style.cssText = 'top: -193px;'
    }else{

        homeIc.style.cssText = 'top: 17px;'
    }

    if(hasClassAbutUsSubmenu){

        homeIc.style.cssText = 'top: -134px;'
    }

}

// This function removes the CSS classes that we added to the elements of the "our-products" section with JavaScript.

function removeClassesFromProductSection(){

    let productSubmenuHasClass = productSubmenu.classList.contains('showCuntries')

    if(productSubmenuHasClass){

        productSubmenu.classList.remove('showCuntries')

        showProduct.forEach(function(items){

            items.classList.remove('showItems')
        })

        arrowProducts.classList.remove('animArrow')
    }
}

// This function removes the CSS classes that we added to the elements of the "our-agency" section with JavaScript.

function removeClassesFromAgencySection(){

    let AgencySubmenuHasClass = agencySubmenu.classList.contains('showCuntries')

    if (AgencySubmenuHasClass){

        agencySubmenu.classList.remove('showCuntries')

        showAgency.forEach(function(items){

            items.classList.remove('showItems')
        })

        arrowAgency.classList.remove('animArrow')
    }
}

// This function removes the CSS classes that we added to the elements of the "social-media" section with JavaScript.

function removeClassesFromSocialMedia(){

    let socialMediaSubmenuHasClass = socialMediaSubmenu.classList.contains('showCuntries')

    if(socialMediaSubmenuHasClass){

        socialMediaSubmenu.classList.remove('showCuntries')

        showMedia.forEach(function(items){

            items.classList.remove('showItems')
        })

        arrowSocialMedia.classList.remove('animArrow')
    }
}

// This function removes the CSS classes that we added to the elements of the "abut-us" section with JavaScript.

function removeClassesFromAbutUs(){

    let abutUsSubmenuHasClasses = abutUsSubmenu.classList.contains('showCuntries')

    if(abutUsSubmenuHasClasses){

        abutUsSubmenu.classList.remove('showCuntries')

        showAbutUs.forEach(function(items){

            items.classList.remove('showItems')
        })

        arrowAbutUs.classList.remove('animArrow')
    }
}

// This function fix position for "our-products" menu

function fixPositionOurProductsMenu(ourProdu){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassAgencySubmenu || hasClassSocialMediaSubmenu){

        ourProdu.style.cssText = 'top: -202px;'

    }else if(hasClassProductSection){

        ourProdu.style.cssText = 'top: 23px;'
    }else{
        ourProdu.style.cssText = 'top: 6px;'
    }

    if(hasClassAbutUsSubmenu){

        ourProdu.style.cssText = 'top: -142px;'
    }
}

// This function fix position for "our-agency" menu

function fixPositionOurAgencyMenu(ourAgen){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection || hasClassSocialMediaSubmenu){

        ourAgen.style.cssText = 'top: -201px;'

    }else if(hasClassAgencySubmenu){

        ourAgen.style.cssText = 'top: 23px;'
    }else{

        ourAgen.style.cssText = 'top: 6px;;'
    }

    if(hasClassAbutUsSubmenu){

        ourAgen.style.cssText = 'top: -142px;'
    }
}

// This function fix position for "social-media" menu

function fixPositionSocialMedia(socialMed){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection || hasClassAgencySubmenu){

        socialMed.style.cssText = 'top: -201px;'

    }else if(hasClassSocialMediaSubmenu){

        socialMed.style.cssText = 'top: 23px;'

    }else{

        socialMed.style.cssText = 'top: 6px;'
    }

    if(hasClassAbutUsSubmenu){

        socialMed.style.cssText = 'top: -142px;'
    }
}

// This function fix position for "abut-us" menu

function fixPositionAbutUs(abut){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection || hasClassAgencySubmenu || hasClassSocialMediaSubmenu){

        abut.style.cssText = 'top: -201px;'
    }else if(hasClassAbutUsSubmenu){

        abut.style.cssText = 'top: 16px;'

    }else{

        abut.style.cssText = 'top: 6px;'
    }
}