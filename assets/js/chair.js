// ............. Chair section one .................

const showDescriptionLabel = document.querySelector('.show-description-label')
const descriptionText = document.querySelector('.description-text')

const showDescriptionLabelTwo = document.querySelector('.show-description-label-two')
const descriptionTextTwo = document.querySelector('.description-text-two')

const slaideOne = document.getElementById('slaide-one')
const slaideTwo = document.getElementById('slaide-two')

const chairOneBtnOne = document.getElementById('chair-one-btn-one')
const chairOneBtnTwo = document.getElementById('chair-one-btn-two')

showDescriptionLabel.addEventListener('click', function(){
    
    descriptionText.classList.toggle('showDescriptionn')
})

showDescriptionLabelTwo.addEventListener('click', function(){

    descriptionTextTwo.classList.toggle('showDescriptionn')
})

chairOneBtnTwo.addEventListener('click', function(){
    
    const isVeryExtraSmalScreen = window.matchMedia("(min-width: 360px) and (max-width: 460px)").matches
    const isExtraSmalScreen = window.matchMedia("(min-width: 460px) and (max-width: 576px)").matches
    const isSmalScreenOne = window.matchMedia("(min-width: 576px) and (max-width: 676px)").matches
    const isSmalScreenTwo = window.matchMedia("(min-width: 676px) and (max-width: 768px)").matches
    const isMediumOne = window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches
    const isMediumTwo = window.matchMedia("(min-width: 868px) and (max-width: 992px)").matches
    const isLargeOne = window.matchMedia("(min-width: 992px) and (max-width: 1100px)").matches
    const isLargeTwo = window.matchMedia("(min-width: 1100px) and (max-width: 1200px)").matches
    const isXlargeScreen = window.matchMedia("(min-width: 1200px)").matches

    chairOneBtnOne.classList.remove('active')
    chairOneBtnTwo.classList.add('active')
    slaideOne.style.cssText = 'right: -500px'

    if(isVeryExtraSmalScreen){slaideTwo.style.cssText = 'right: -255px;'}
    if(isExtraSmalScreen){slaideTwo.style.cssText = 'right: -277px;'}
    if(isSmalScreenOne){slaideTwo.style.cssText = 'right: -265px;'}
    if(isSmalScreenTwo){slaideTwo.style.cssText = 'right: -295px;'}
    if(isMediumOne){slaideTwo.style.cssText = 'right: -315px;'}
    if(isMediumTwo){slaideTwo.style.cssText = 'right: -345px;'}
    if(isLargeOne){slaideTwo.style.cssText = 'right: -315px;'}
    if(isLargeTwo){slaideTwo.style.cssText = 'right: -330px;'}
    if(isXlargeScreen){slaideTwo.style.cssText = 'right: -265px;'}

    // slaideTwo.style.cssText = 'right: -265px;'
})
chairOneBtnOne.addEventListener('click', function(){

    chairOneBtnTwo.classList.remove('active')
    chairOneBtnOne.classList.add('active')
    slaideTwo.style.cssText = 'right: 500px;'
    slaideOne.style.cssText = 'right: 0'
})

// ............. Chair section two .................

const showDescriptionLabelThree = document.querySelector('.show-description-label-three')
const descriptionTextThree = document.querySelector('.description-text-three')

showDescriptionLabelThree.addEventListener('click', function(){

    descriptionTextThree.classList.toggle('showDescriptionn')
})

// ............. Chair section three .................

const showDescriptionLabelFour = document.querySelector('.show-description-label-four')
const descriptionTextFour = document.querySelector('.description-text-four')

const showDescriptionLabelFive = document.querySelector('.show-description-label-five')
const descriptionTextFive = document.querySelector('.description-text-five')

const showDescriptionLabelSix = document.querySelector('.show-description-label-six')
const descriptionTextSix = document.querySelector('.description-text-six')

const slaideFour = document.getElementById('slaide-four')
const slaideFive = document.getElementById('slaide-five')
const slaideSix = document.getElementById('slaide-six')

const chairThreeBtnFour = document.getElementById('chair-three-btn-four')
const chairThreeBtnFive = document.getElementById('chair-three-btn-five')
const chairThreeBtnSix = document.getElementById('chair-three-btn-six')

showDescriptionLabelFour.addEventListener('click', function(){

    descriptionTextFour.classList.toggle('showDescriptionn')
})
showDescriptionLabelFive.addEventListener('click', function(){

    descriptionTextFive.classList.toggle('showDescriptionn')
})
showDescriptionLabelSix.addEventListener('click', function(){

    descriptionTextSix.classList.toggle('showDescriptionn')
})


chairThreeBtnFive.addEventListener('click', function(){

    const isVeryExtraSmalScreen = window.matchMedia("(min-width: 360px) and (max-width: 460px)").matches
    const isExtraSmalScreen = window.matchMedia("(min-width: 460px) and (max-width: 576px)").matches
    const isSmalScreenOne = window.matchMedia("(min-width: 576px) and (max-width: 676px)").matches
    const isSmalScreenTwo = window.matchMedia("(min-width: 676px) and (max-width: 768px)").matches
    const isMediumOne = window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches
    const isMediumTwo = window.matchMedia("(min-width: 868px) and (max-width: 992px)").matches
    const isLargeOne = window.matchMedia("(min-width: 992px) and (max-width: 1100px)").matches
    const isLargeTwo = window.matchMedia("(min-width: 1100px) and (max-width: 1200px)").matches
    const isXlargeScreen = window.matchMedia("(min-width: 1200px)").matches

    let hasChairThreeBtnFourClass = chairThreeBtnFour.classList.contains('active')
    let hasChairThreeBtnSixClass = chairThreeBtnSix.classList.contains('active')

    if(hasChairThreeBtnFourClass){

        chairThreeBtnFour.classList.remove('active')
        chairThreeBtnFive.classList.add('active')
        slaideFour.style.cssText = 'right: -264px;'

        if(isVeryExtraSmalScreen){slaideFive.style.cssText = 'right: -255px;'}
        if(isExtraSmalScreen){slaideFive.style.cssText = 'right: -290px;'}
        if(isSmalScreenOne){

            slaideFive.style.cssText = 'right: -270px;'
            slaideFour.style.cssText = 'right: -550px;'
        }
        if(isSmalScreenTwo){slaideFive.style.cssText = 'right: -290px;'}
        if(isMediumOne){slaideFive.style.cssText = 'right: -290px;'}
        if(isMediumTwo){

            slaideFour.style.cssText = 'right: -600px;'
            slaideFive.style.cssText = 'right: -300px;'
        }
        if(isLargeOne){slaideFive.style.cssText = 'right: -300px;'}
        if(isLargeTwo){

            slaideFour.style.cssText = 'right: -700px;'
            slaideFive.style.cssText = 'right: -315px;'
        }
        if(isXlargeScreen){slaideFive.style.cssText = 'right: -265px;'}

    }else if(hasChairThreeBtnSixClass){

        chairThreeBtnSix.classList.remove('active')
        chairThreeBtnFive.classList.add('active')
        slaideSix.style.cssText = 'right: 750px'
        slaideFive.style.cssText = 'right: -264px'

        if(isVeryExtraSmalScreen){slaideFive.style.cssText = 'right: -255px;'}
        if(isExtraSmalScreen){slaideFive.style.cssText = 'right: -290px;'}
        if(isSmalScreenOne){slaideFive.style.cssText = 'right: -270px;'}
        if(isSmalScreenTwo){slaideFive.style.cssText = 'right: -290px;'}
        if(isMediumOne){slaideFive.style.cssText = 'right: -290px;'}
        if(isMediumTwo){slaideFive.style.cssText = 'right: -300px;'}
        if(isLargeOne){slaideFive.style.cssText = 'right: -300px;'}
        if(isLargeTwo){slaideFive.style.cssText = 'right: -315px;'}
        if(isXlargeScreen){slaideFive.style.cssText = 'right: -265px;'}
        
    }
})

chairThreeBtnSix.addEventListener('click', function(){

    const isVeryExtraSmalScreen = window.matchMedia("(min-width: 360px) and (max-width: 460px)").matches
    const isExtraSmalScreen = window.matchMedia("(min-width: 460px) and (max-width: 576px)").matches
    const isSmalScreenOne = window.matchMedia("(min-width: 576px) and (max-width: 676px)").matches
    const isSmalScreenTwo = window.matchMedia("(min-width: 676px) and (max-width: 768px)").matches
    const isMediumOne = window.matchMedia("(min-width: 768px) and (max-width: 868px)").matches
    const isMediumTwo = window.matchMedia("(min-width: 868px) and (max-width: 992px)").matches
    const isLargeOne = window.matchMedia("(min-width: 992px) and (max-width: 1100px)").matches
    const isLargeTwo = window.matchMedia("(min-width: 1100px) and (max-width: 1200px)").matches
    const isXlargeScreen = window.matchMedia("(min-width: 1200px)").matches

    let hasChairThreeBtnFourClass = chairThreeBtnFour.classList.contains('active')
    let hasChairThreeBtnFiveClass = chairThreeBtnFive.classList.contains('active')

    if(hasChairThreeBtnFourClass){

        chairThreeBtnFour.classList.remove('active')
        chairThreeBtnSix.classList.add('active')
        slaideFour.style.cssText = 'right: -264px;'

        if(isVeryExtraSmalScreen){slaideSix.style.cssText = 'right: -506px;'}
        if(isExtraSmalScreen){slaideSix.style.cssText = 'right: -565px;'}
        if(isSmalScreenOne){

            slaideFour.style.cssText = 'right: -550px;'
            slaideSix.style.cssText = 'right: -515px;'
        }
        if(isSmalScreenTwo){slaideSix.style.cssText = 'right: -595px;'}
        if(isMediumOne){slaideSix.style.cssText = 'right: -575px;'}
        if(isMediumTwo){
            
            slaideFour.style.cssText = 'right: -650px;'
            slaideSix.style.cssText = 'right: -665px;'
        }
        if(isLargeOne){slaideSix.style.cssText = 'right: -590px;'}
        if(isLargeTwo){

            slaideFour.style.cssText = 'right: -700px;'
            slaideSix.style.cssText = 'right: -640px;'
        }
        if(isXlargeScreen){slaideSix.style.cssText = 'right: -525px;'}

    }else if(hasChairThreeBtnFiveClass){

        chairThreeBtnFive.classList.remove('active')
        chairThreeBtnSix.classList.add('active')
        slaideFive.style.cssText = 'right: -528px'

        if(isVeryExtraSmalScreen){slaideSix.style.cssText = 'right: -506px;'}
        if(isExtraSmalScreen){

            slaideSix.style.cssText = 'right: -575px;'
            slaideFive.style.cssText = 'right: -580px;'
        }
        if(isSmalScreenOne){

            slaideFive.style.cssText = 'right: -750px;'
            slaideSix.style.cssText = 'right: -520px;'
        }
        if(isSmalScreenTwo){

            slaideFive.style.cssText = 'right: -800px;'
            slaideSix.style.cssText = 'right: -605px;'
        }
        if(isMediumOne){
            
            slaideFive.style.cssText = 'right: -800px;'
            slaideSix.style.cssText = 'right: -575px;'
        }
        if(isMediumTwo){

            slaideFive.style.cssText = 'right: -800px;'
            slaideSix.style.cssText = 'right: -655px;'
        }
        if(isLargeOne){

            slaideFive.style.cssText = 'right: -800px;'
            slaideSix.style.cssText = 'right: -590px;'
        }
        if(isLargeTwo){

            slaideFive.style.cssText = 'right: -800px;'
            slaideSix.style.cssText = 'right: -640px;'
        }
        if(isXlargeScreen){slaideSix.style.cssText = 'right: -525px;'}
    }
})

chairThreeBtnFour.addEventListener('click', function(){

    let hasChairThreeBtnFiveClass = chairThreeBtnFive.classList.contains('active')
    let hasChairThreeBtnSixClass = chairThreeBtnSix.classList.contains('active')

    if(hasChairThreeBtnFiveClass){

        chairThreeBtnFive.classList.remove('active')
        chairThreeBtnFour.classList.add('active')
        slaideFive.style.cssText = 'right: 500px;'
        slaideFour.style.cssText = 'right: 0;'

    }else if(hasChairThreeBtnSixClass){

        chairThreeBtnSix.classList.remove('active')
        chairThreeBtnFour.classList.add('active')
        slaideSix.style.cssText = 'right: 750px;'
        slaideFour.style.cssText = 'right: 0;'
    }
})

// ............. Chair section two .................

const showDescriptionLabelSeven = document.querySelector('.show-description-label-seven')
const descriptionTextSeven = document.querySelector('.description-text-seven')

showDescriptionLabelSeven.addEventListener('click', function(){

    descriptionTextSeven.classList.toggle('showDescriptionn')
})