const userCart = document.getElementById('shopping')
const basketCardSection = document.querySelector('.basket-card-section')

function handelBasketCart(){

    let basketCart = JSON.parse(localStorage.getItem('userBasket')) || [];
    
    basketCartGenerator(basketCart)
    calcTotalPrice(basketCart)
}

function basketCartGenerator(userBasketCart){

    basketCardSection.innerHTML = ''

    userBasketCart.forEach(function(items){

        basketCardSection.insertAdjacentHTML('beforeend', `<div class="basket-wrapper"><div class="basket-information-wrapper"><span class="material-icons delete-product">cancel</span><div class="basket-information-one"><div class="basket-info-one"><span class="title-product">نــام محصــول:</span><span class="name-product">${items.productName}</span></div><div class="basket-info-two"><span class="title-code-product">کــد محصـول :</span><span class="code-product">${items.codeProduct}</span></div></div><div class="basket-information-two"><div class="basket-info-three"><input class="cart-quantity-input" type="number" value="${items.counter}"> </div><div class="basket-info-four"><span class="title-price">قیمت :</span> <span class="product-price">${items.productPrice}</span></div> </div></div><div class="basket-img-wrapper"><img class="basket-img" src="${items.productImg[0]}" alt=""></div></div>`)

    })

    //These codes are for inputs(counter of products)

    const quantityInputs = document.querySelectorAll('.cart-quantity-input')

    quantityInputs.forEach(function(input, index){

        input.addEventListener('change', function(){

            let newValue = Number(this.value)

            let basket = JSON.parse(localStorage.getItem('userBasket')) || [];

            basket[index].counter = newValue;

            localStorage.setItem('userBasket', JSON.stringify(basket));

            let updatedTotal = calcTotalPrice(basket);
            document.querySelector('.sum-price').textContent = updatedTotal;
        })
    })

    //These codes are for Delete icon

    const deleteProduct = document.querySelectorAll('.delete-product')

    deleteProduct.forEach(function(span, index){

        span.addEventListener('click', function(){

            let basket = JSON.parse(localStorage.getItem('userBasket')) || [];

            basket.splice(index, 1);

            basketCartGenerator(basket);

            localStorage.setItem('userBasket', JSON.stringify(basket));

            let updatedTotal = calcTotalPrice(basket);
            document.querySelector('.sum-price').textContent = updatedTotal;
        })
    })

    

    let totalPrice = calcTotalPrice(userBasketCart)

    basketCardSection.insertAdjacentHTML('beforeend', `<div class="total-price"><span class="titel-price">جمع کل :</span><span class="sum-price">${totalPrice}</span><a href="" class="pay">پــــرداخـــت</a></div>`)
}

function calcTotalPrice(calcBasketCart){
    
    let sum = 0

    calcBasketCart.forEach(function(items){

        sum += items.counter * items.productPrice
    })
    return sum
}

userCart.addEventListener('click', handelBasketCart)
