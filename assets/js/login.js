const LoginIndex = document.querySelector('.Login-index')
const closeIndexLogin = document.querySelector('.close-index-login')
const indexLogin = document.getElementById('index-login')

const userName = document.getElementById('user')
const userNameMessage = document.querySelector('.userName-message')

const userPassword = document.getElementById('pass')
const passwordMessage = document.querySelector('.password-message')
const eyeSlash = document.querySelector('.fa-eye-slash')

const loginBtn = document.querySelector('.login-btn')


function showLoinIndex(){

    indexLogin.classList.add('show-login-index')
}

function closeLoginIndex(){

    indexLogin.classList.remove('show-login-index')
}

function userNamevalidation(){

    let len = userName.value.trim().length;

    if(len < 3 || len > 15){

        userNameMessage.textContent = 'نام کاربری باید حداقل 3 کراکتر و حداکثر 15 کراکتر باشد ';
        userNameMessage.style.color = 'rgb(104, 4, 4)';

    }else{

        userNameMessage.textContent = 'نام کاربری شما مناسب است';
        userNameMessage.style.color = 'rgb(6, 82, 6)';
    }
}

function userPasswordvalidation(){

    let leng = userPassword.value.trim().length;

    if(leng < 8 || leng > 12){

        passwordMessage.textContent = 'رمز عبور باید حداقل 8 کراکتر و حداکثر 12 کراکتر باشد ';
        passwordMessage.style.color = 'rgb(104, 4, 4)';

    }else{

        passwordMessage.textContent = 'رمز عبور شما مناسب است';
        passwordMessage.style.color = 'rgb(6, 82, 6)';
    }
}

function showPassword(){

    let elementHasClass = eyeSlash.classList.contains('fa-eye-slash');

    if(elementHasClass){

        eyeSlash.classList.remove('fa-eye-slash');
        eyeSlash.classList.add('fa-eye');
        userPassword.setAttribute('type', 'text');

    }else{

        eyeSlash.classList.remove('fa-eye');
        eyeSlash.classList.add('fa-eye-slash');
        userPassword.setAttribute('type', 'password');
    }
    
}

const observer = new MutationObserver(function(mutationsList){

    for(const mutation of mutationsList){

        if(mutation.type === 'childList'){

            if(userNameMessage.textContent.trim() !== '' && window.innerWidth >= 360 && window.innerWidth <= 460){

                eyeSlash.style.top = '128px';

            }

            if(userNameMessage.textContent.trim() !== '' && window.innerWidth >= 460 && window.innerWidth <= 992){

                eyeSlash.style.top = '128px';

            }

            if(userNameMessage.textContent.trim() !== '' && window.innerWidth > 992){

                eyeSlash.style.top = '170px';

            }
        }
    }
})
observer.observe(userNameMessage, {childList: true, subtree: true});


LoginIndex.addEventListener('click', showLoinIndex);
closeIndexLogin.addEventListener('click', closeLoginIndex);

userName.addEventListener('input', userNamevalidation);
userPassword.addEventListener('input', userPasswordvalidation);
eyeSlash.addEventListener('click', showPassword);