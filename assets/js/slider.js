import {productsArray} from './products-data.js';


const nextImg = document.querySelector('.next')
const prevImg = document.querySelector('.prev')
const containerSlider = document.querySelector('.container-slider')
const imgSlid = document.querySelector('.img-slid')
const sliderItem = document.querySelector('.slider-item')
const moreSeebtn = document.getElementById('more-see')

let imgArray = ['assets/img/Slide--Image--1.jpg','assets/img/Slide--Image--2.jpg','assets/img/Slide--Image--3.jpg','assets/img/Slide--Image--4.jpg','assets/img/Slide--Image--5.jpg']
let imgIndex = 0

let btnFragment = document.createDocumentFragment()
let allButtons = []

imgArray.forEach(function(items, index){

    const newBtn = document.createElement('button')
    newBtn.setAttribute('type','button')
    newBtn.classList.add('btn-slider')
    
    newBtn.dataset.index = index

    allButtons.push(newBtn)
    btnFragment.append(newBtn)

    newBtn.addEventListener('click', function(event){

        allButtons.forEach(function(btnItems){

            btnItems.classList.remove('active')
        })

        newBtn.classList.add('active')

        let imageIndex = parseInt(event.target.dataset.index)
        imgSlid.setAttribute('src', imgArray[imageIndex])
    })
    
})
containerSlider.append(btnFragment)

allButtons[0].classList.add('active')
imgSlid.setAttribute('src', imgArray[0])
updateActiveButton()

nextImg.addEventListener('click', function(){

    imgIndex ++

    if(imgIndex > imgArray.length - 1){

        imgIndex = 0
    }
    imgSlid.setAttribute('src', imgArray[imgIndex])
    updateActiveButton()

})

prevImg.addEventListener('click', function(){

    imgIndex --

    if(imgIndex < 0){

        imgIndex = imgArray.length - 1
    }
    imgSlid.setAttribute('src', imgArray[imgIndex])
    updateActiveButton()

})

//........... This Functions update Active Button

function updateActiveButton(){

    allButtons.forEach(function(btn){

        btn.classList.remove('active')

        if(parseInt(btn.dataset.index) === imgIndex){

            btn.classList.add('active')
        }
    })

    moreSeebtn.setAttribute('href', `showProducts.html?${productsArray[imgIndex].urlParams}`)

}

setInterval( function(){
    
    imgIndex ++

    if(imgIndex > imgArray.length - 1){

        imgIndex = 0
    }
    imgSlid.setAttribute('src', imgArray[imgIndex])
    updateActiveButton()

}, 7000);
