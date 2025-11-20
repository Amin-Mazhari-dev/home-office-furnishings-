import {productsArray} from './products-data.js';

const cardOneImg = document.querySelector('.card-one-img')
const cardTwoImg = document.querySelector('.card-two-img')
const cardThreeImg = document.querySelector('.card-three-img')
const showProductName = document.getElementById('show-product-name')
const showProductId = document.getElementById('show-product-id')
const showProductStatus = document.getElementById('show-product-status')
const showProductPrice = document.getElementById('show-product-price')
const aboutProductName = document.getElementById('about-product-name')
const aboutProductDescription = document.getElementById('about-product-description')


let locationSearchParams = new URLSearchParams(location.search)
let productIdParams = locationSearchParams.get('id')
let sliderProducts = productsArray.find(function(products){

    return products.codeProduct === Number(productIdParams)
})

if(sliderProducts){

    cardOneImg.setAttribute('src', sliderProducts.productImg[0])
    cardTwoImg.setAttribute('src', sliderProducts.productImg[1])
    cardThreeImg.setAttribute('src', sliderProducts.productImg[2])
    showProductName.textContent = sliderProducts.productName
    showProductId.textContent = sliderProducts.codeProduct
    showProductStatus.textContent = sliderProducts.productStatus
    showProductPrice.textContent = sliderProducts.productPrice
    aboutProductName.textContent = sliderProducts.productName
    aboutProductDescription.textContent = sliderProducts.productDescription

}
