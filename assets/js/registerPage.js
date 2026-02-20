const userName = document.getElementById('user-name')
const trueIconUserName = document.getElementById('true-icon-userName')
const falsIconUserName = document.getElementById('fals-icon-userName')

const userPassOne = document.getElementById('user-pass-one')
const trueIconPassOne = document.getElementById('true-icon-pass-one')
const falsIconPassOne = document.getElementById('fals-icon-pass-one')
const showPassRegisterOne = document.getElementById('show-pass-register-one')

const userPassTwo = document.getElementById('user-pass-two')
const trueIconPassTwo = document.getElementById('true-icon-pass-two')
const falsIconPassTwo = document.getElementById('fals-icon-pass-two')
const showPassRegisterTwo = document.getElementById('show-pass-register-two')


userName.addEventListener('input', function(){

    let userNameLength = userName.value.trim().length;
    
    if(userNameLength >= 3){

        falsIconUserName.classList.add('hide-icon')
        trueIconUserName.classList.add('show-icon')

    }else if(userNameLength < 3){

        falsIconUserName.classList.remove('hide-icon')
        trueIconUserName.classList.remove('show-icon')

    }
})


userPassOne.addEventListener('input', function(){

    let userPassOneLength = userPassOne.value.trim().length;

    if(userPassOneLength >= 8){

        falsIconPassOne.classList.add('hide-icon')
        trueIconPassOne.classList.add('show-icon')

    }else if(userPassOneLength < 8){

        falsIconPassOne.classList.remove('hide-icon')
        trueIconPassOne.classList.remove('show-icon')
    }
})
showPassRegisterOne.addEventListener('click', function(){

    let elementHasClass = showPassRegisterOne.classList.contains('fa-eye-slash');

    if(elementHasClass){

        showPassRegisterOne.classList.remove('fa-eye-slash')
        showPassRegisterOne.classList.add('fa-eye')
        userPassOne.setAttribute('type', 'text')

    }else{

        showPassRegisterOne.classList.remove('fa-eye')
        showPassRegisterOne.classList.add('fa-eye-slash')
        userPassOne.setAttribute('type', 'password')
    }
})


userPassTwo.addEventListener('input', function(){

    let userPassTwoLength = userPassTwo.value.trim().length;

    if(userPassTwoLength >= 8){

        falsIconPassTwo.classList.add('hide-icon')
        trueIconPassTwo.classList.add('show-icon')

    }else if(userPassTwoLength < 8){

        falsIconPassTwo.classList.remove('hide-icon')
        trueIconPassTwo.classList.remove('show-icon')
    }
})
showPassRegisterTwo.addEventListener('click', function(){

    let elementHasClass = showPassRegisterTwo.classList.contains('fa-eye-slash');

    if(elementHasClass){

        showPassRegisterTwo.classList.remove('fa-eye-slash')
        showPassRegisterTwo.classList.add('fa-eye')
        userPassTwo.setAttribute('type', 'text')

    }else{

        showPassRegisterTwo.classList.remove('fa-eye')
        showPassRegisterTwo.classList.add('fa-eye-slash')
        userPassTwo.setAttribute('type', 'password')
    }
})