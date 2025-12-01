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
    if(!container) return
    
    if(container.id === 'index-login'){

        container.classList.add('show-login-index')

    }else if(container.id === 'showProducts-login'){

        container.classList.add('show-login-products')
    }
    
})

document.addEventListener('DOMContentLoaded', function(){

    const closeIndexLogin = document.querySelector('.close-index-login')
    const indexLogin = document.getElementById('index-login')
    

    closeIndexLogin.addEventListener('click', function(){

        indexLogin.classList.remove('show-login-index')
    })

})
document.addEventListener('DOMContentLoaded', function(){

    const closeProductsLogin = document.querySelector('.close-products-login')
    const showProductsLogin = document.getElementById('showProducts-login')

    closeProductsLogin.addEventListener('click', function(){

        showProductsLogin.classList.remove('show-login-products')
    })
})