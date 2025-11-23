const homeIconn = document.querySelector('.home')
const ourProducts = document.getElementById('our-products')
const ourAgency = document.getElementById('our-agency')
const socialMedia = document.getElementById('social-media')
const abutUs = document.getElementById('abut-us')

const myLogo = document.querySelector('.logo')
const myShopping = document.getElementById('shopping')
const userLogin = document.getElementById('login')
const menuWrapper = document.querySelector('.menu-wrapper')
const myHorizontalBars = document.getElementById('horizontalBars')

const basketCardSection = document.querySelector('.basket-card-section')

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


//......... This codes are for responsive Menu (min-width:992px and max-width:1329px) ............

function handleCustomRangeDesktop(){

    titleAbutUs.addEventListener('click', function(){

        if(window.innerWidth >= 992 && window.innerWidth <= 1154){

          socialMedia.classList.toggle('responsiveTop')
          ourAgency.classList.toggle('responsiveTop')
          ourProducts.classList.toggle('responsiveTop')
          homeIconn.classList.toggle('responsiveHomeIconTop')
            
          abutUs.classList.remove('responsiveTopTwo')
          socialMedia.classList.remove('responsiveTopTwo')
          ourAgency.classList.remove('responsiveTopTwo')

        }
    })

    titleSocialMedia.addEventListener('click', function(){

        if(window.innerWidth >= 992 && window.innerWidth <= 1329){

            socialMedia.classList.remove('responsiveTop')
            ourProducts.classList.remove('responsiveTop')
            ourAgency.classList.remove('responsiveTop')
            homeIconn.classList.remove('responsiveHomeIconTop')

            socialMedia.classList.remove('responsiveTopTwo')
            ourAgency.classList.remove('responsiveTopTwo')
            abutUs.classList.remove('responsiveTopTwo')

        }
    })

    titleOurAgency.addEventListener('click', function(){

        if(window.innerWidth >= 992 && window.innerWidth <= 1329){

            ourAgency.classList.remove('responsiveTop')
            socialMedia.classList.remove('responsiveTop')
            ourProducts.classList.remove('responsiveTop')
            homeIconn.classList.remove('responsiveHomeIconTop')

            ourAgency.classList.remove('responsiveTopTwo')
            socialMedia.classList.remove('responsiveTopTwo')
            abutUs.classList.remove('responsiveTopTwo')

        }
    })

    titleOurProducts.addEventListener('click', function(){

        if(window.innerWidth >= 992 && window.innerWidth <= 1329){

            ourProducts.classList.remove('responsiveTop')
            socialMedia.classList.remove('responsiveTop')
            ourAgency.classList.remove('responsiveTop')
            homeIconn.classList.remove('responsiveHomeIconTop')

            socialMedia.classList.remove('responsiveTopTwo')
            ourAgency.classList.remove('responsiveTopTwo')
            abutUs.classList.remove('responsiveTopTwo')

        }
    })
}
handleCustomRangeDesktop()

window.addEventListener('resize', handleCustomRangeDesktop);


function handleCustomRangeDesktopTwo(){

    titleAbutUs.addEventListener('click', function(){

        if(window.innerWidth >= 1155 && window.innerWidth <= 1274){
            
            socialMedia.classList.toggle('responsiveTopThree')
            ourAgency.classList.toggle('responsiveTopThree')
            ourProducts.classList.toggle('responsiveTopThree')
            homeIconn.classList.toggle('responsiveHomeIconTopTwo')
            
            abutUs.classList.remove('responsiveTopTwo')
            socialMedia.classList.remove('responsiveTopTwo')
            ourAgency.classList.remove('responsiveTopTwo')
        }
    })

    titleSocialMedia.addEventListener('click', function(){

        if(window.innerWidth >= 1155 && window.innerWidth <= 1274){
            
            ourProducts.classList.remove('responsiveTopThree')
            socialMedia.classList.remove('responsiveTopThree')
            ourAgency.classList.remove('responsiveTopThree')
            abutUs.classList.remove('responsiveTopThree')
            homeIconn.classList.remove('responsiveHomeIconTopTwo')

        }
    })

    titleOurAgency.addEventListener('click', function(){

        if(window.innerWidth >= 1155 && window.innerWidth <= 1274){

            ourProducts.classList.remove('responsiveTopThree')
            ourAgency.classList.remove('responsiveTopThree')
            socialMedia.classList.remove('responsiveTopThree')
            abutUs.classList.remove('responsiveTopThree')
            homeIconn.classList.remove('responsiveHomeIconTopTwo')

        }
    })

    titleOurProducts.addEventListener('click', function(){

        if(window.innerWidth >= 1155 && window.innerWidth <= 1274){

            ourProducts.classList.remove('responsiveTopThree')
            socialMedia.classList.remove('responsiveTopThree')
            ourAgency.classList.remove('responsiveTopThree')
            abutUs.classList.remove('responsiveTopThree')
            homeIconn.classList.remove('responsiveHomeIconTopTwo')

        }
     })

}
handleCustomRangeDesktopTwo()

window.addEventListener('resize', handleCustomRangeDesktopTwo);


function handleCustomRangeDesktopThree(){

    titleAbutUs.addEventListener('click', function(){

        if(window.innerWidth >= 1275 && window.innerWidth <= 1329){
           
           socialMedia.classList.toggle('responsiveTopFour')
           ourAgency.classList.toggle('responsiveTopFour')
           ourProducts.classList.toggle('responsiveTopFour')
           homeIconn.classList.toggle('responsiveHomeIconTopThree')
            
            abutUs.classList.remove('responsiveTopTwo')
            socialMedia.classList.remove('responsiveTopTwo')
            ourAgency.classList.remove('responsiveTopTwo')
        }
    })

    titleSocialMedia.addEventListener('click', function(){

        if(window.innerWidth >= 1275 && window.innerWidth <= 1329){

            ourProducts.classList.remove('responsiveTopFour')
            socialMedia.classList.remove('responsiveTopFour')
            ourAgency.classList.remove('responsiveTopFour')
            abutUs.classList.remove('responsiveTopFour')
            homeIconn.classList.remove('responsiveHomeIconTopThree')

        }
    })

    titleOurAgency.addEventListener('click', function(){

        if(window.innerWidth >= 1275 && window.innerWidth <= 1329){

            ourProducts.classList.remove('responsiveTopFour')
            ourAgency.classList.remove('responsiveTopFour')
            socialMedia.classList.remove('responsiveTopFour')
            abutUs.classList.remove('responsiveTopFour')
            homeIconn.classList.remove('responsiveHomeIconTopThree')

        }
    })

    titleOurProducts.addEventListener('click', function(){

        if(window.innerWidth >= 1275 && window.innerWidth <= 1329){

            ourProducts.classList.remove('responsiveTopFour')
            socialMedia.classList.remove('responsiveTopFour')
            ourAgency.classList.remove('responsiveTopFour')
            abutUs.classList.remove('responsiveTopFour')
            homeIconn.classList.remove('responsiveHomeIconTopThree')

        }
    })


}
handleCustomRangeDesktopThree()

window.addEventListener('resize', handleCustomRangeDesktopThree);

//......... This codes are for responsive Menu in Mobile & Tablet ............

function handleResponsiveClick(){

    //basketCardSection.classList.remove('showBasketCard')

    let width = window.innerWidth
    
    //This codes are for responsive Menu (min-width: 576px) and (max-width: 768px)
    if(width >= 576 && width <= 768){

        handleCustomRangeMobile()

     //This codes are for responsive Menu (min-width: 768px) and (max-width: 992px)
    }else if(width > 768 && width <= 992){

        handleCustomRangeTablet()
    }


}
  
myHorizontalBars.addEventListener('click', handleResponsiveClick)


function fixElementsMenu(){

    titleOurProducts.addEventListener('click', function(){

        if(window.innerWidth >= 576 && window.innerWidth <= 768){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }else if(window.innerWidth >= 768 && window.innerWidth <= 992){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }
    })

    titleOurAgency.addEventListener('click', function(){
        
        if(window.innerWidth >= 576 && window.innerWidth <= 768){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass() 
        }else if(window.innerWidth >= 768 && window.innerWidth <= 992){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }
    })

    titleSocialMedia.addEventListener('click', function(){

        if(window.innerWidth >= 576 && window.innerWidth <= 768){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }else if(window.innerWidth >= 768 && window.innerWidth <= 992){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }
    })

    titleAbutUs.addEventListener('click', function(){

        if(window.innerWidth >= 576 && window.innerWidth <= 768){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }else if(window.innerWidth >= 768 && window.innerWidth <= 992){

            if(noSubmenuOpen()) {
                clearFixClasses()
                return
            }
          
            addResponsiveClass()
        }
    })
    
}
fixElementsMenu()

window.addEventListener('resize', fixElementsMenu)

function addResponsiveClass(){

    ourProducts.classList.add('fixTopProductMenu')
    ourAgency.classList.add('fixTopAgencyMenu')
    socialMedia.classList.add('fixTopSocialMediaMenu')
    abutUs.classList.add('fixTopAbutUsMenu')

    myLogo.classList.add('fixTopLogoImg')
    homeIconn.classList.add('fixTopHomeIcon')
    myShopping.classList.add('fixTopShopping')
    userLogin.classList.add('fixTopLogin')
    myHorizontalBars.classList.add('fixTopHorizontalBars')
}

function clearFixClasses() {
    ourProducts.classList.remove('fixTopProductMenu')
    ourAgency.classList.remove('fixTopAgencyMenu')
    socialMedia.classList.remove('fixTopSocialMediaMenu')
    abutUs.classList.remove('fixTopAbutUsMenu')
  
    myLogo.classList.remove('fixTopLogoImg')
    homeIconn.classList.remove('fixTopHomeIcon')
    myShopping.classList.remove('fixTopShopping')
    userLogin.classList.remove('fixTopLogin')
    myHorizontalBars.classList.remove('fixTopHorizontalBars')
}

function noSubmenuOpen() {
    return !(
      productSubmenu.classList.contains('showCuntries') ||
      agencySubmenu.classList.contains('showCuntries') ||
      socialMediaSubmenu.classList.contains('showCuntries') ||
      abutUsSubmenu.classList.contains('showCuntries')
    )
}


//.........  ............

function handleCustomRangeMobile(){

    homeIconn.classList.toggle('responsiveHome')
    myLogo.classList.toggle('responsiveLogo')
    myShopping.classList.toggle('responsiveShopping')
    userLogin.classList.toggle('responsiveLogin')
    ourProducts.classList.toggle('responsiveAccordionMenu')
    ourProducts.classList.toggle('responsiveOurProducts')
    socialMedia.classList.toggle('responsiveAccordionMenu')
    ourAgency.classList.toggle('responsiveAccordionMenu')
    abutUs.classList.toggle('responsiveAccordionMenu')
    menuWrapper.classList.toggle('responsiveMenu')
    myHorizontalBars.classList.toggle('responsiveBars')

    if(
        productSubmenu.classList.contains('showCuntries') ||
        agencySubmenu.classList.contains('showCuntries') ||
        socialMediaSubmenu.classList.contains('showCuntries') ||
        abutUsSubmenu.classList.contains('showCuntries')

    ){
        location.reload()
    }
}


function handleCustomRangeTablet(){

    homeIconn.classList.toggle('responsiveHomeTablet')
    myLogo.classList.toggle('responsiveLogoTablet')
    myShopping.classList.toggle('responsiveShoppingTablet')
    userLogin.classList.toggle('responsiveLoginTablet')
    ourProducts.classList.toggle('responsiveAccordionMenuTablet')
    ourProducts.classList.toggle('responsiveOurProducts')
    socialMedia.classList.toggle('responsiveAccordionMenuTablet')
    ourAgency.classList.toggle('responsiveAccordionMenuTablet')
    abutUs.classList.toggle('responsiveAccordionMenuTablet')
    menuWrapper.classList.toggle('responsiveMenu')
    myHorizontalBars.classList.toggle('responsiveHorizontalBarsTablet')
    
    if(
        productSubmenu.classList.contains('showCuntries') ||
        agencySubmenu.classList.contains('showCuntries') ||
        socialMediaSubmenu.classList.contains('showCuntries') ||
        abutUsSubmenu.classList.contains('showCuntries')
    
    ){
        location.reload()
    }
    
}

myShopping.addEventListener('click', function(){

    basketCardSection.classList.toggle('showBasketCard')
})


window.addEventListener('resize', function(){

    location.reload()
})