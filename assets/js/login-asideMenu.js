const asideLoginIcon = document.querySelector('.asideLogin');
const asideLogin = document.getElementById('aside-login');
const closeIndexaside = document.querySelector('.close-index-aside');

const userNameAside = document.getElementById('user-aside');
const userNameMessageAside = document.querySelector('.userName-message-aside');

const userPasswordAside = document.getElementById('pass-aside');
const passwordMessageAside = document.querySelector('.password-message-aside');
const eyeSlashAside = document.querySelector('.eye-slash-aside');

const loginBtnAside = document.querySelector('.login-btn-aside');


asideLoginIcon.addEventListener('click', function(){

    asideLogin.classList.add('show-login-aside');
});

closeIndexaside.addEventListener('click', function(){

    asideLogin.classList.remove('show-login-aside');
});

function userNameAsideValidation(){

    let leng = userNameAside.value.trim().length;

    if(leng < 3 || leng > 15){

        userNameMessageAside.textContent = 'نام کاربری باید حداقل 3 کراکتر و حداکثر 15 کراکتر باشد ';
        userNameMessageAside.style.color = 'rgb(104, 4, 4)';
        

    }else{

        userNameMessageAside.textContent = 'نام کاربری شما مناسب است';
        userNameMessageAside.style.color = 'rgb(6, 82, 6)';
    }
}

function userPasswordAsideValidation(){

    let lengh = userPasswordAside.value.trim().length;

    if(lengh < 8 || lengh > 12){

        passwordMessageAside.textContent = 'رمز عبور باید حداقل 8 کراکتر و حداکثر 12 کراکتر باشد ';
        passwordMessageAside.style.color = 'rgb(104, 4, 4)';

    }else{

        passwordMessageAside.textContent = 'رمز عبور شما مناسب است';
        passwordMessageAside.style.color = 'rgb(6, 82, 6)';
    }
}

function showPasswordAside(){

    let elementHasClass = eyeSlashAside.classList.contains('fa-eye-slash');

    if(elementHasClass){

        eyeSlashAside.classList.remove('fa-eye-slash');
        eyeSlashAside.classList.add('fa-eye');
        userPasswordAside.setAttribute('type', 'text');

    }else{

        eyeSlashAside.classList.remove('fa-eye');
        eyeSlashAside.classList.add('fa-eye-slash');
        userPasswordAside.setAttribute('type', 'password');
    }
}

const observer = new MutationObserver(function(mutationList){

    for(const mutation of mutationList){

        if(mutation.type === 'childList'){

            if(userNameMessageAside.textContent.trim() !== ''){

                eyeSlashAside.style.top = '170px';
            }else{

                eyeSlashAside.style.top = '150px';
            }
        }
    }
});
observer.observe(userNameMessageAside, {childList: true, subtree: true});


window.addEventListener('scroll', function(){

    let scrollPageTop = document.documentElement.scrollTop
    let hasClass = asideLogin.classList.contains('show-login-aside')

    if(scrollPageTop > 370 && hasClass){

        asideLogin.classList.remove('show-login-aside')
    }
})


userNameAside.addEventListener('input', userNameAsideValidation);
userPasswordAside.addEventListener('input', userPasswordAsideValidation);
eyeSlashAside.addEventListener('click', showPasswordAside);