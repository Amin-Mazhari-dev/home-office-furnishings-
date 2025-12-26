document.addEventListener('DOMContentLoaded', function(){

    const userLogin = document.querySelectorAll('.myLogin')

    userLogin.forEach(function(icon){

        icon.addEventListener('click', function(event){

            const targSel = event.currentTarget.dataset.targ
            if(!targSel) return
            document.dispatchEvent(new CustomEvent('open-login', {detail: {targSel}}))
        })
    })
})

document.addEventListener('open-login', function(event){

    const targSel = event.detail.targSel
    const container = document.querySelector(targSel)
    if(!container) return 0;
    
    if(container.id === 'index-login'){

        container.classList.add('show-login-index')

    }else if(container.id === 'showProducts-login'){

        container.classList.add('show-login-products')

    }else if(container.id === 'index-login-aside'){

        container.classList.add('show-login-index-aside')
    }
    
})

document.addEventListener('DOMContentLoaded', function(){

    const closeIndexLogin = document.querySelector('.close-index-login')
    const indexLogin = document.getElementById('index-login')

    const closeProductsLogin = document.querySelector('.close-products-login')
    const showProductsLogin = document.getElementById('showProducts-login')
    
    if(closeIndexLogin){

        closeIndexLogin.addEventListener('click', function(){

            indexLogin.classList.remove('show-login-index')
        })

    } 
    if(closeProductsLogin){

        closeProductsLogin.addEventListener('click', function(){

            showProductsLogin.classList.remove('show-login-products')
        })
    }
})


// These codes are for validation and display password

const userName = document.getElementById('user')
const userNameMessage = document.querySelector('.userName-message')

const userPassword = document.getElementById('pass')
const passwordMessage = document.querySelector('.password-message')
const eyeSlash = document.querySelector('.fa-eye-slash')

const loginBtn = document.querySelector('.login-btn')


function userNamevalidation(){

    let len = userName.value.trim().length;

    if(len < 3 || len > 15){

        userNameMessage.textContent = 'نام کاربری باید حداقل 3 کراکتر و حداکثر 15 کراکتر باشد (فضای خالی یک کراکتر محسوب میشود)'
        userNameMessage.style.color = 'rgb(104, 4, 4)'
        
        // handlerEyeSlashPosition(eyeElem)

    }else{

        userNameMessage.textContent = 'نام کاربری شما مناسب است'
        userNameMessage.style.color = 'rgb(6, 82, 6)'
    }
}

function userPasswordvalidation(){

    let leng = userPassword.value.trim().length;

    if(leng < 8 || leng > 12){

        passwordMessage.textContent = 'رمز عبور باید حداقل 8 کراکتر و حداکثر 12 کراکتر باشد ( از ایجاد فضای خالی اجتناب کنید)'
        passwordMessage.style.color = 'rgb(104, 4, 4)'

    }else{

        passwordMessage.textContent = 'رمز عبور شما مناسب است'
        passwordMessage.style.color = 'rgb(6, 82, 6)'
    }
}

function showPassword(){

    let elementHasClass = eyeSlash.classList.contains('fa-eye-slash')

    if(elementHasClass){

        eyeSlash.classList.remove('fa-eye-slash')
        eyeSlash.classList.add('fa-eye')
        userPassword.setAttribute('type', 'text')

    }else{

        eyeSlash.classList.remove('fa-eye')
        eyeSlash.classList.add('fa-eye-slash')
        userPassword.setAttribute('type', 'password')
    }
    
}

// .... This function fix position of eye's icon

function handlerEyeSlashPosition(eyeElem){

    if(window.innerWidth >= 360 && window.innerWidth <= 460){
        
        eyeSlash.style.cssText = 'position: relative; top: -43px; right: 75%;'

    }else if(window.innerWidth >= 460 && window.innerWidth <= 576){

        eyeSlash.style.cssText = 'position: relative; top: -43px; right: 75%;'

    }else if(window.innerWidth >= 576 && window.innerWidth <= 768){

        eyeSlash.style.cssText = 'position: relative; top: -43px; right: 75%;'

    }else if(window.innerWidth >= 768 && window.innerWidth <= 992){

        eyeSlash.style.cssText = 'position: relative; top: -43px; right: 75%;'

    }else if(window.innerWidth >= 992 && window.innerWidth <= 1200){

        eyeSlash.style.cssText = 'position: relative; top: -30px; right: 62%;'

    }else{

        eyeSlash.style.cssText = 'position: relative; top: -30px; right: 42%;'
    }
}
handlerEyeSlashPosition(eyeSlash)

userName.addEventListener('input', userNamevalidation)
userPassword.addEventListener('input', userPasswordvalidation)
eyeSlash.addEventListener('click', showPassword)