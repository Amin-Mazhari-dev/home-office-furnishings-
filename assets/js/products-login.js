const showProductsLogin = document.getElementById('showProducts-login')

const productLogin = document.querySelector('.product-login')

const closeProductsLogin = document.querySelector('.close-products-login')

const userProduct = document.querySelector('.user-product')
const userNameMessageProduct = document.querySelector('.userName-message-product')
const passProduct = document.querySelector('.pass-product')
const passwordMessageProduct = document.querySelector('.password-message-product')
const eyeSlash = document.querySelector('.fa-eye-slash')

const loginBtnProduct = document.querySelector('.login-btn-product')


productLogin.addEventListener('click', function(){

    showProductsLogin.classList.add('show-login-products')
})

closeProductsLogin.addEventListener('click', function(){

    showProductsLogin.classList.remove('show-login-products')
})

function userNameProductvalidation(){

    let len = userProduct.value.trim().length;

    if(len < 3 || len > 15){

        userNameMessageProduct.textContent = 'نام کاربری باید حداقل 3 کراکتر و حداکثر 15 کراکتر باشد ';
        userNameMessageProduct.style.color = 'rgb(104, 4, 4)';

    }else{

        userNameMessageProduct.textContent = 'نام کاربری شما مناسب است';
        userNameMessageProduct.style.color = 'rgb(6, 82, 6)';
    }
}

function userPasswordProductvalidation(){

    let leng = passProduct.value.trim().length;

    if(leng < 8 || leng > 12){

        passwordMessageProduct.textContent = 'رمز عبور باید حداقل 8 کراکتر و حداکثر 12 کراکتر باشد ';
        passwordMessageProduct.style.color = 'rgb(104, 4, 4)';

    }else{

        passwordMessageProduct.textContent = 'رمز عبور شما مناسب است';
        passwordMessageProduct.style.color = 'rgb(6, 82, 6)';
    }
}

function showPasswordProduct(){

    let elementHasClass = eyeSlash.classList.contains('fa-eye-slash');

    if(elementHasClass){

        eyeSlash.classList.remove('fa-eye-slash');
        eyeSlash.classList.add('fa-eye');
        passProduct.setAttribute('type', 'text');

    }else{

        eyeSlash.classList.remove('fa-eye');
        eyeSlash.classList.add('fa-eye-slash');
        passProduct.setAttribute('type', 'password');
    }
    
}

const observer = new MutationObserver(function(mutationsList){

    for(const mutation of mutationsList){

        if(mutation.type === 'childList'){

            if(userNameMessageProduct.textContent.trim() !== '' && window.innerWidth >= 360 && window.innerWidth <= 460){

                eyeSlash.style.top = '128px';

            }

            if(userNameMessageProduct.textContent.trim() !== '' && window.innerWidth >= 460 && window.innerWidth <= 992){

                eyeSlash.style.top = '128px';

            }

            if(userNameMessageProduct.textContent.trim() !== '' && window.innerWidth > 992){

                eyeSlash.style.top = '170px';

            }
        }
    }
})
observer.observe(userNameMessageProduct, {childList: true, subtree: true});

userProduct.addEventListener('input', userNameProductvalidation)
passProduct.addEventListener('input', userPasswordProductvalidation)
eyeSlash.addEventListener('click', showPasswordProduct)