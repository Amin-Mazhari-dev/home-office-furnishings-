import {productsArray} from './products-data.js';

const searchProduct = document.getElementById('search-product')
const searchIcon = document.querySelector('.search-icon')

const searchWrapper = document.querySelector('.search-wrapper')
const searchClose = document.querySelector('.search-close')
const nameSearch = document.querySelector('.name-search')
const statusSearch = document.querySelector('.status-search')
const priceSearch = document.querySelector('.price-search')
const searchMessage = document.querySelector('.search-message')
const imgSearch = document.querySelector('.img-search')

function handlerSearchProduct(){

    let getProductName = searchProduct.value

    if (getProductName === "") {
        searchMessage.textContent = 'شما نام هیچ محصولی را وارد نکرده‌اید!!!';
        searchWrapper.style.display = 'block';
        return; 
    }
    
    let findProduct = productsArray.find(function(products){

        return products.productName === getProductName
    })
    
    if(findProduct){

        nameSearch.textContent = findProduct.productName
        statusSearch.textContent = findProduct.productStatus
        priceSearch.textContent = findProduct.productPrice
        imgSearch.setAttribute('src', `${findProduct.productImg[0]}`)

        searchWrapper.style.display = 'block'

    }else if(findProduct === undefined){

        searchMessage.textContent = 'محصول مورد نظر شما موجود نیست'
        searchWrapper.style.display = 'block'

    }

}

function handlerSearchClose(){

    searchWrapper.style.display = 'none'
    searchProduct.value = ''
    nameSearch.innerHTML = ''
    statusSearch.innerHTML = ''
    priceSearch.innerHTML = ''
    searchMessage.innerHTML = ''
    imgSearch.setAttribute('src', '')
}

searchProduct.addEventListener('keydown', function(event){

    searchMessage.innerHTML = ''

    if(event.code === 'Enter'){

        handlerSearchProduct()

    }else if(event.code === 'Backspace'){

        handlerSearchClose()

    }else if(event.code === 'Delete'){

        handlerSearchClose()
    }
    
})


searchIcon.addEventListener('click', handlerSearchProduct)
searchClose.addEventListener('click', handlerSearchClose)