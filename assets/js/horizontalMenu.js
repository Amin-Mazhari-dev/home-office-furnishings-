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

const allBaskets = document.querySelectorAll('.basket-card-section')
const indexBasket = document.getElementById('.index-basket')

const indexLogin = document.getElementById('index-login')
const showProductsLogin = document.getElementById('showProducts-login')
const categoryProductLogin = document.getElementById('category-product-login')


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



//Each code block is responsible for ensuring that when any menu is clicked, that specific menu 
//maintains its correct position. Furthermore, when other menus are clicked afterward, the 
//previously selected menu must still preserve its proper and intended position.

//This function fix home icon

function homeIcon(homeIc){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection){

        if(window.innerWidth <= 1033){

            homeIc.style.top = '-190px'
        }
        else if(window.innerWidth > 1033 && window.innerWidth < 1050){

            homeIc.style.top = '-220px'
        }
  
    }else{

        homeIc.style.top = '15px'
    } 

    if(hasClassProductSection && window.innerWidth > 1050){

        homeIc.style.top = '-196px'

    }else if(hasClassAgencySubmenu){

        homeIc.style.top = '-196px'

    }else if(hasClassSocialMediaSubmenu){

        homeIc.style.top = '-195px'

    }

    if(hasClassAbutUsSubmenu){

        if(window.innerWidth > 992 && window.innerWidth <= 1153){

            homeIc.style.top = '-172px'

        }else if(window.innerWidth > 1153 && window.innerWidth < 1180){

            homeIc.style.top = '-151px'

        }else if(window.innerWidth >= 1180){

            homeIc.style.top = '-130px'
        }
    }

}

// This function fix position for "our-products" menu

function fixPositionOurProductsMenu(ourProdu){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(window.innerWidth > 992){

        if(hasClassProductSection){

            ourProdu.style.top = '20px';

        }else if(hasClassAgencySubmenu){

            ourProdu.style.top = '-204px';

        }else if(hasClassSocialMediaSubmenu){

            ourProdu.style.top = '-203px';
            
        }
        else{

            ourProdu.style.top = '7px'
        }
        
    }

    if(hasClassAbutUsSubmenu){

        if(window.innerWidth > 992 && window.innerWidth <= 1153){

            ourProdu.style.top = '-180px'

        }else if(window.innerWidth > 1153 && window.innerWidth < 1180){

            ourProdu.style.top = '-159px'

        }else if(window.innerWidth >= 1180){

            ourProdu.style.top = '-138px'
        }
    }

}

// This function fix position for "our-agency" menu

function fixPositionOurAgencyMenu(ourAgen){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection){

        if(window.innerWidth <= 1033){

            ourAgen.style.top = '-199px'
        }
        else if(window.innerWidth > 1033 && window.innerWidth < 1050){

            ourAgen.style.top = '-229px'
        }
  
    }else{

        ourAgen.style.top = '6px'
    } 

    if(hasClassProductSection && window.innerWidth > 1050){

        ourAgen.style.top = '-205px'

    }else if(hasClassAgencySubmenu){

        ourAgen.style.top = '19px'

    }else if(hasClassSocialMediaSubmenu){

        ourAgen.style.top = '-204px'

    }

    if(hasClassAbutUsSubmenu){

        if(window.innerWidth > 992 && window.innerWidth <= 1153){

            ourAgen.style.top = '-181px'

        }else if(window.innerWidth > 1153 && window.innerWidth < 1180){

            ourAgen.style.top = '-160px'

        }else if(window.innerWidth >= 1180){

            ourAgen.style.top = '-139px'
        }
    }


}

// This function fix position for "social-media" menu

function fixPositionSocialMedia(socialMed){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection){

        if(window.innerWidth <= 1033){

            socialMed.style.top = '-199px'
        }
        else if(window.innerWidth > 1033 && window.innerWidth < 1050){

            socialMed.style.top = '-229px'
        }

    }else{

        socialMed.style.top = '6px'
    }


    if(hasClassProductSection && window.innerWidth > 1050){

        socialMed.style.top = '-205px'
    }
    else if(hasClassAgencySubmenu){

        socialMed.style.top = '-205px'
    }
    else if(hasClassSocialMediaSubmenu){

        socialMed.style.top = '19px'

    }

    if(hasClassAbutUsSubmenu){

        if(window.innerWidth > 992 && window.innerWidth <= 1153){

            socialMed.style.top = '-181px'

        }else if(window.innerWidth > 1153 && window.innerWidth < 1180){

            socialMed.style.top = '-160px'

        }else if(window.innerWidth >= 1180){

            socialMed.style.top = '-139px'
        }
    }
}

// This function fix position for "abut-us" menu

function fixPositionAbutUs(abut){

    let hasClassProductSection = productSubmenu.classList.contains('showCuntries')
    let hasClassAgencySubmenu = agencySubmenu.classList.contains('showCuntries')
    let hasClassSocialMediaSubmenu = socialMediaSubmenu.classList.contains('showCuntries')
    let hasClassAbutUsSubmenu = abutUsSubmenu.classList.contains('showCuntries')

    if(hasClassProductSection){

        if(window.innerWidth <=1033){

            abut.style.top = '-199px'
        }
        else if(window.innerWidth > 1033 && window.innerWidth < 1050){

            abut.style.top = '-229px'
        }
        
    }else{

        abut.style.top = '6px'
    }

    if(hasClassProductSection && window.innerWidth > 1050){

        abut.style.top = '-205px'
    }
    else if(hasClassAgencySubmenu){

        abut.style.top = '-205px'
    }
    else if(hasClassSocialMediaSubmenu){

        abut.style.top = '-204px'
    }
    else if(hasClassAbutUsSubmenu){

        abut.style.top = '19px'
    }
    
}


//......... This codes are for responsive Menu in Mobile & Tablet ............

function handleResponsiveClick(){

    let width = window.innerWidth

    //This codes are for responsive Menu (min-width: 360px) and (max-width: 768px)
    if(width >= 360 && width <= 768){

        handelCloseBasketLogin()
        handleCustomRangeMobile()
    
    //This codes are for responsive Menu (min-width: 768px) and (max-width: 992px)
    }else if(width > 768 && width <= 992){

        handelCloseBasketLogin()
        handleCustomRangeTablet()
    }
    
}
  
myHorizontalBars.addEventListener('click', handleResponsiveClick)


function fixElementsMenu(){

    titleOurProducts.addEventListener('click', function(){

        if(window.innerWidth >= 360 && window.innerWidth <= 768){

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
        
        if(window.innerWidth >= 360 && window.innerWidth <= 768){

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

        if(window.innerWidth >= 360 && window.innerWidth <= 768){

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

        if(window.innerWidth >= 360 && window.innerWidth <= 768){

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
        
        homeIconn.classList.remove('responsiveHome', 'fixTopHomeIcon')
        homeIconn.removeAttribute('style')

        myShopping.classList.remove('responsiveShopping','fixTopShopping')

        userLogin.classList.remove('responsiveLogin', 'fixTopLogin')

        myLogo.classList.remove('responsiveLogo', 'fixTopLogoImg')

        myHorizontalBars.classList.remove('responsiveBars', 'fixTopHorizontalBars')

        ourProducts.classList.remove('responsiveAccordionMenu', 'responsiveOurProducts', 'fixTopProductMenu')
        arrowProducts.classList.remove('animArrow')
        productSubmenu.classList.remove('showCuntries')
        showProduct.forEach(productsItems => productsItems.classList.remove('showItems'))

        ourAgency.classList.remove('responsiveAccordionMenu', 'fixTopAgencyMenu')
        ourAgency.removeAttribute('style')
        arrowAgency.classList.remove('animArrow')
        agencySubmenu.classList.remove('showCuntries')
        showAgency.forEach(agencyItems => agencyItems.classList.remove('showItems'))
        
        socialMedia.classList.remove('responsiveAccordionMenu', 'fixTopSocialMediaMenu')
        socialMedia.removeAttribute('style')
        arrowSocialMedia.classList.remove('animArrow')
        socialMediaSubmenu.classList.remove('showCuntries')
        showMedia.forEach(mediaItems => mediaItems.classList.remove('showItems'))

        abutUs.classList.remove('responsiveAccordionMenu', 'fixTopAbutUsMenu')
        abutUs.removeAttribute('style')
        arrowAbutUs.classList.remove('animArrow')
        abutUsSubmenu.classList.remove('showCuntries')
        showAbutUs.forEach(abutUsItems => abutUsItems.classList.remove('showItems'))
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
        
        homeIconn.classList.remove('responsiveHomeTablet', 'fixTopHomeIcon')
        homeIconn.removeAttribute('style')

        myShopping.classList.remove('responsiveShoppingTablet', 'fixTopShopping')

        userLogin.classList.remove('responsiveLoginTablet', 'fixTopLogin')

        myLogo.classList.remove('responsiveLogoTablet', 'fixTopLogoImg')

        myHorizontalBars.classList.remove('responsiveHorizontalBarsTablet', 'fixTopHorizontalBars')

        ourProducts.classList.remove('responsiveAccordionMenuTablet', 'responsiveOurProducts', 'fixTopProductMenu')
        arrowProducts.classList.remove('animArrow')
        productSubmenu.classList.remove('showCuntries')
        showProduct.forEach(productsItems => productsItems.classList.remove('showItems'))

        ourAgency.classList.remove('responsiveAccordionMenuTablet','fixTopAgencyMenu')
        ourAgency.removeAttribute('style')
        arrowAgency.classList.remove('animArrow')
        agencySubmenu.classList.remove('showCuntries')
        showAgency.forEach(agencyItems => agencyItems.classList.remove('showItems'))
        
        socialMedia.classList.remove('responsiveAccordionMenuTablet','fixTopSocialMediaMenu')
        socialMedia.removeAttribute('style')
        arrowSocialMedia.classList.remove('animArrow')
        socialMediaSubmenu.classList.remove('showCuntries')
        showMedia.forEach(mediaItems => mediaItems.classList.remove('showItems'))

        abutUs.classList.remove('responsiveAccordionMenuTablet','fixTopAbutUsMenu')
        abutUs.removeAttribute('style')
        arrowAbutUs.classList.remove('animArrow')
        abutUsSubmenu.classList.remove('showCuntries')
        showAbutUs.forEach(abutUsItems => abutUsItems.classList.remove('showItems'))
    }
    
}

//The following function is written so that when you click on the hamburger menu,
//if the shopping cart and login are open, they will also be closed when the menu is closed.

function handelCloseBasketLogin() {
    
    allBaskets.forEach(function(basket) {
      basket.classList.remove('showBasketCard');
    });
  
    
    if (indexLogin) {
      indexLogin.classList.remove('show-login-index');
    }
  
    if (showProductsLogin) {
      showProductsLogin.classList.remove('show-login-products');
    }
  
    if (categoryProductLogin) {
      categoryProductLogin.classList.remove('show-category-product-login');
    }

  }
  
// ............ These codes show horizontalMenu in (min-width: 992px) .....................

window.addEventListener('scroll', function(event){

    let newScroll = document.documentElement.scrollTop;
    const ShowWrapperHorizontalMenu = document.getElementById('wrapperHorizontalMenu')
    
    if (!ShowWrapperHorizontalMenu) return 0;

    if(newScroll > 693){

        ShowWrapperHorizontalMenu.classList.add('showMenu')

    }else if(newScroll < 680){

        ShowWrapperHorizontalMenu.classList.remove('showMenu')
    }
})


