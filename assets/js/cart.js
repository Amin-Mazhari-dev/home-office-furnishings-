document.addEventListener('DOMContentLoaded', function(){

    const shoppingCart = document.querySelectorAll('.shopping-cart')

    shoppingCart.forEach(function(icon){

        icon.addEventListener('click', function(event){

            const targetSel = event.currentTarget.dataset.target;

            if(!targetSel) return;
            document.dispatchEvent(new CustomEvent('open-cart', { detail: { targetSel } }));
        })
    })
})

document.addEventListener('open-cart', function(event) {

    const targetSel = event.detail.targetSel;              
    const container = document.querySelector(targetSel);
    if (!container) return;
  
    const basket = JSON.parse(localStorage.getItem('userBasket')) || [];
  
    basketCartGenerator(basket, container);
  
    container.classList.toggle('showBasketCard');
})

function basketCartGenerator(basketCart, container){

    container.innerHTML = '';

    basketCart.forEach(function(items){

        container.insertAdjacentHTML('beforeend', `<div class="basket-wrapper"><div class="basket-information-wrapper"><span class="material-icons delete-product">cancel</span><div class="basket-information-one"><div class="basket-info-one"><span class="title-product">نــام محصــول:</span><span class="name-product">${items.productName}</span></div><div class="basket-info-two"><span class="title-code-product">کــد محصـول :</span><span class="code-product">${items.codeProduct}</span></div></div><div class="basket-information-two"><div class="basket-info-three"><input class="cart-quantity-input" type="number" value="${items.counter}"> </div><div class="basket-info-four"><span class="title-price">قیمت :</span> <span class="product-price">${items.productPrice}</span></div> </div></div><div class="basket-img-wrapper"><img class="basket-img" src="${items.productImg[0]}" alt=""></div></div>`)
        
    })

    
    attachCartEvents(container, basketCart)

    let totalPrice = calcTotalPrice(basketCart)

    container.insertAdjacentHTML('beforeend', `<div class="total-price"><span class="titel-price">جمع کل :</span><span class="sum-price">${totalPrice}</span><a href="" class="pay">پــــرداخـــت</a></div>`)
}

function attachCartEvents(container, basket){

    const quantityInput = container.querySelectorAll('.cart-quantity-input'); 
    const deleteProduct = container.querySelectorAll('.delete-product');

    quantityInput.forEach(function(input, index){

        input.addEventListener('change', function(){

            basket[index].counter = Number(input.value)
            localStorage.setItem('userBasket', JSON.stringify(basket));

           const updatedTotal = calcTotalPrice(basket);
           container.querySelector('.sum-price').textContent = updatedTotal;
        })
    })

    deleteProduct.forEach(function(btn, index){

        btn.addEventListener('click', function(){

            basket.splice(index, 1)
            localStorage.setItem('userBasket', JSON.stringify(basket))

            basketCartGenerator(basket, container)
        })
    })
}

function calcTotalPrice(basket){

    let total = 0

    basket.forEach(function(items){

        total += items.productPrice * items.counter
    })

    return total
}


// These codes hide horizontal Basket & aside Basket

const indexBasket = document.getElementById('index-basket')
const indexBasketAside = document.getElementById('index-basket-aside')
window.addEventListener('scroll', function(){

    let scrollPageTop = document.documentElement.scrollTop
    let hasClass = indexBasket.classList.contains('showBasketCard')
    let hasClassAsidBasket = indexBasketAside.classList.contains('showBasketCard')

    if(scrollPageTop < 680 && hasClass){

        indexBasket.classList.remove('showBasketCard')
    }

    if(scrollPageTop > 400 && hasClassAsidBasket){

        indexBasketAside.classList.remove('showBasketCard')
    }
})

