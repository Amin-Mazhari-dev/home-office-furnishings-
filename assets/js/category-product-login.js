const categoryLogin = document.querySelector('.category-login')

const categoryProductLogin = document.getElementById('category-product-login')

const closeCategoryProductLogin = document.querySelector('.close-category-product-login')

const userCategory = document.querySelector('.user-category')
const userNameMessageCategory = document.querySelector('.userName-message-category')
const passCategory = document.querySelector('.pass-category')
const passwordMessageCategory = document.querySelector('.password-message-category')
const eyeSlash = document.querySelector('.fa-eye-slash')

const loginBtnCategory = document.querySelector('.login-btn-category')

categoryLogin.addEventListener('click', function(){

    categoryProductLogin.classList.add('show-category-product-login')
})

closeCategoryProductLogin.addEventListener('click', function(){

    categoryProductLogin.classList.remove('show-category-product-login')
})

function userNamevalidation(){

    let len = userCategory.value.trim().length;

    if(len < 3 || len > 15){

        userNameMessageCategory.textContent = 'نام کاربری باید حداقل 3 کراکتر و حداکثر 15 کراکتر باشد ';
        userNameMessageCategory.style.color = 'rgb(104, 4, 4)';

    }else{

        userNameMessageCategory.textContent = 'نام کاربری شما مناسب است';
        userNameMessageCategory.style.color = 'rgb(6, 82, 6)';
    }
}

function userPasswordvalidation(){

    let leng = passCategory.value.trim().length;

    if(leng < 8 || leng > 12){

        passwordMessageCategory.textContent = 'رمز عبور باید حداقل 8 کراکتر و حداکثر 12 کراکتر باشد ';
        passwordMessageCategory.style.color = 'rgb(104, 4, 4)';

    }else{

        passwordMessageCategory.textContent = 'رمز عبور شما مناسب است';
        passwordMessageCategory.style.color = 'rgb(6, 82, 6)';
    }
}

function showPassword(){

    let elementHasClass = eyeSlash.classList.contains('fa-eye-slash');

    if(elementHasClass){

        eyeSlash.classList.remove('fa-eye-slash');
        eyeSlash.classList.add('fa-eye');
        passCategory.setAttribute('type', 'text');

    }else{

        eyeSlash.classList.remove('fa-eye');
        eyeSlash.classList.add('fa-eye-slash');
        passCategory.setAttribute('type', 'password');
    }
    
}

const observer = new MutationObserver(function(mutationsList){

    for(const mutation of mutationsList){

        if(mutation.type === 'childList'){

            if(userNameMessageCategory.textContent.trim() !== '' && window.innerWidth >= 360 && window.innerWidth <= 460){

                eyeSlash.style.top = '128px';

            }

            if(userNameMessageCategory.textContent.trim() !== '' && window.innerWidth >= 460 && window.innerWidth <= 992){

                eyeSlash.style.top = '128px';

            }

            if(userNameMessageCategory.textContent.trim() !== '' && window.innerWidth > 992){

                eyeSlash.style.top = '170px';

            }
        }
    }
})
observer.observe(userNameMessageCategory, {childList: true, subtree: true});


userCategory.addEventListener('input', userNamevalidation);
passCategory.addEventListener('input', userPasswordvalidation);
eyeSlash.addEventListener('click', showPassword);