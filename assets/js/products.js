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


// ................ Manage product clicks in (index.html) ......................

document.addEventListener('DOMContentLoaded', function(){

    const productLinks = document.querySelectorAll('[data-code]')

    productLinks.forEach(function(link){

        link.addEventListener('click', function(event){

            event.preventDefault()

            let code = Number(link.dataset.code)

            window.location.href = `showProducts.html?id=${code}`
        })
    })
})



// ..................... Show product details in (showProducts.html) ..............

let locationSearchParams = new URLSearchParams(location.search)
let productIdParams = locationSearchParams.get('id')
let showProduct = productsArray.find(function(products){

    return products.codeProduct === Number(productIdParams)
})

if(showProduct){

    if(cardOneImg){ cardOneImg.setAttribute('src', showProduct.productImg[0])}
    if(cardTwoImg){cardTwoImg.setAttribute('src', showProduct.productImg[1])}
    if(cardThreeImg){cardThreeImg.setAttribute('src', showProduct.productImg[2])}

    if(showProductName){showProductName.textContent = showProduct.productName}
    if(showProductId){showProductId.textContent = showProduct.codeProduct}
    if(showProductStatus){showProductStatus.textContent = showProduct.productStatus}
    if(showProductPrice){showProductPrice.textContent = showProduct.productPrice}
    if(aboutProductName){aboutProductName.textContent = showProduct.productName}
    if(aboutProductDescription){ aboutProductDescription.textContent = showProduct.productDescription}
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


if(addProductBtn) {
    addProductBtn.addEventListener('click', handelUserBasket)
}