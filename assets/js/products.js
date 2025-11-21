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
let showProduct = productsArray.find(function(products){

    return products.codeProduct === Number(productIdParams)
})

if(showProduct){

    cardOneImg.setAttribute('src', showProduct.productImg[0])
    cardTwoImg.setAttribute('src', showProduct.productImg[1])
    cardThreeImg.setAttribute('src', showProduct.productImg[2])
    showProductName.textContent = showProduct.productName
    showProductId.textContent = showProduct.codeProduct
    showProductStatus.textContent = showProduct.productStatus
    showProductPrice.textContent = showProduct.productPrice
    aboutProductName.textContent = showProduct.productName
    aboutProductDescription.textContent = showProduct.productDescription

}


// ......... These codes are for (Add to besket cart Button) ................

const addProductBtn = document.getElementById('add-product-btn')

function handelUserBasket(){

    if(showProduct){

        let basket = JSON.parse(localStorage.getItem('userBasket')) || [];

        let existingProduct = basket.find(function(items){

            return items.codeProduct === showProduct.codeProduct
        })

        if(existingProduct){

            existingProduct.counter++
        }else{
            basket.push(showProduct);
        }

        localStorage.setItem('userBasket', JSON.stringify(basket));
    }
}


addProductBtn.addEventListener('click', handelUserBasket)