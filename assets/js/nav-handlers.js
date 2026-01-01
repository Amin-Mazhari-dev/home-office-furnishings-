document.addEventListener('DOMContentLoaded', function(){

    document.body.addEventListener('click', function(event){

        const target = event.target.closest('[data-category]')
        if(!target) return;

        event.preventDefault()

        const targetCategory = target.dataset.category

        window.location.href = `categoryOfProductsPage.html?targetCategory=${encodeURIComponent(targetCategory)}`
    })
})