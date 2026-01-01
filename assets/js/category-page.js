import {productsArray} from './products-data.js';

document.addEventListener('DOMContentLoaded', function(){

    let params = new URLSearchParams(location.search)
    let targetCategory = params.get('targetCategory')

    if(!targetCategory) return;

    let items = productsArray.filter(function(p){

        return p.category === targetCategory
    })

    const wrapper = document.querySelector('.category-product-wrapper')
    if(!wrapper) return;

    wrapper.innerHTML = ''
    items.forEach(function(pro){

        createCategoryCard(pro)
    })

    wrapper.addEventListener('click', function(event){

        const showMore = event.target.closest('[data-code]')
        if (!showMore) return;

        event.preventDefault()

        let code = Number(showMore.dataset.code)

        window.location.href = `showProducts.html?id=${code}`;
    })
    
})

function createCategoryCard(product){

    const wrapper = document.querySelector('.category-product-wrapper')

    wrapper.insertAdjacentHTML('beforeend',`<div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ma-top-25 ma-bottom-25"><div class="category-product-inner-wrapper"><div class="category-product-header"><img class="img-responsive" src="${product.productImg[0]}" alt="${product.productName}"></div><div class="category-product-body"><div class="category-product-name"><h3>نـــام محصــول :</h3><h3 class="name-category-product">${product.productName}</h3></div><div class="category-product-price"><span>قیمت محصـول :</span><span class="price-category-product">${product.productPrice}</span></div><div class="category-product-more-detail"><a href="showProducts.html?id=${product.codeProduct}" data-code="${product.codeProduct}">مشـاهـده بیشتـر ...</a></div></div></div></div>`)
}