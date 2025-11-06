// ............ This part is for products menu

const titleOurProductsAside = document.querySelector('.title-our-products-aside')
const productSubmenuAside = document.querySelector('.product-submenu-aside')
const arrowProductsAside = document.querySelector('.arrow-products-aside')
const productAside = document.querySelectorAll('.product-aside')

function handleShowProductItems(){

    removeClassesAgencySection()
    removeClassesSocialMediaSection()
    removeClassesAbutUsSection()

    productSubmenuAside.classList.toggle('showAsideMenu')
    arrowProductsAside.classList.toggle('animAsideMenuArrow')
    productAside.forEach(function(items){

        items.classList.toggle('showAsideMenuItems')
    })
    

}

titleOurProductsAside.addEventListener('click', handleShowProductItems)


// ............ This part is for agency menu

const titleOurAgencyAside = document.querySelector('.title-our-agency-aside')
const agencySubmenuAside = document.querySelector('.agency-submenu-aside')
const arrowAgencyAside = document.querySelector('.arrow-agency-aside')
const agencyAside = document.querySelectorAll('.agency-aside')

function handleShowAgencyItems(){

    removeClassesProductSection()
    removeClassesSocialMediaSection()
    removeClassesAbutUsSection()

    agencySubmenuAside.classList.toggle('showAsideMenu')
    arrowAgencyAside.classList.toggle('animAsideMenuArrow')
    agencyAside.forEach(function(items){

        items.classList.toggle('showAsideMenuItems')
    })
}

titleOurAgencyAside.addEventListener('click', handleShowAgencyItems)


// ............ This part is for social media menu

const titleSocialMediaAside = document.querySelector('.title-social-media-aside')
const arrowSocialMediaAside = document.querySelector('.arrow-social-media-aside')
const socialMediaSubmenuAside = document.querySelector('.social-media-submenu-aside')
const mediaAside = document.querySelectorAll('.media-aside')

function handleShowMediaItems(){

    removeClassesProductSection()
    removeClassesAgencySection()
    removeClassesAbutUsSection()

    socialMediaSubmenuAside.classList.toggle('showAsideMenu')
    arrowSocialMediaAside.classList.toggle('animAsideMenuArrow')
    mediaAside.forEach(function(items){

        items.classList.toggle('showAsideMenuItems')
    })
}

titleSocialMediaAside.addEventListener('click', handleShowMediaItems)


// ............ This part is for abut-us menu

const titleAbutUsAside = document.querySelector('.title-abut-us-aside')
const abutUsSubmenuAside = document.querySelector('.abut-us-submenu-aside')
const arrowAbutUsAside = document.querySelector('.arrow-abut-us-aside')
const abutUsAside = document.querySelectorAll('.abutUs-aside')

function handleShowAbutUsItems(){

    removeClassesProductSection()
    removeClassesAgencySection()
    removeClassesSocialMediaSection()

    abutUsSubmenuAside.classList.toggle('showAsideMenu')
    arrowAbutUsAside.classList.toggle('animAsideMenuArrow')
    abutUsAside.forEach(function(items){

        items.classList.toggle('showAsideMenuItems')
    })
}

titleAbutUsAside.addEventListener('click', handleShowAbutUsItems)

// This function removes the CSS classes that we added to the elements of the "products-aside" section with JavaScript.

function removeClassesProductSection(){

    let productSubmenuAsideHasClass = productSubmenuAside.classList.contains('showAsideMenu')
    
    if(productSubmenuAsideHasClass){

        productSubmenuAside.classList.remove('showAsideMenu')

        productAside.forEach(function(items){

            items.classList.remove('showAsideMenuItems')
       })
       arrowProductsAside.classList.remove('animAsideMenuArrow')
    }
}

// This function removes the CSS classes that we added to the elements of the "agency-aside" section with JavaScript.

function removeClassesAgencySection(){

    let agencySubmenuAsideHasClass = agencySubmenuAside.classList.contains('showAsideMenu')

    if(agencySubmenuAsideHasClass){

        agencySubmenuAside.classList.remove('showAsideMenu')

        agencyAside.forEach(function(items){

            items.classList.remove('showAsideMenuItems')
        })

        arrowAgencyAside.classList.remove('animAsideMenuArrow')
    }
}

// This function removes the CSS classes that we added to the elements of the "social-media-aside" section with JavaScript.

function removeClassesSocialMediaSection(){

    let socialMediaSubmenuAsideHasClass = socialMediaSubmenuAside.classList.contains('showAsideMenu')

    if(socialMediaSubmenuAsideHasClass){

        socialMediaSubmenuAside.classList.remove('showAsideMenu')

        mediaAside.forEach(function(items){

            items.classList.remove('showAsideMenuItems')
        })

        arrowSocialMediaAside.classList.remove('animAsideMenuArrow')
    }
}

// This function removes the CSS classes that we added to the elements of the "abut-us-aside" section with JavaScript.

function removeClassesAbutUsSection(){

    let abutUsSubmenuAsideHasClass = abutUsSubmenuAside.classList.contains('showAsideMenu')

    if(abutUsSubmenuAsideHasClass){

        abutUsSubmenuAside.classList.remove('showAsideMenu')

        abutUsAside.forEach(function(items){

            items.classList.remove('showAsideMenuItems')
        })

        arrowAbutUsAside.classList.remove('animAsideMenuArrow')
    }
}
