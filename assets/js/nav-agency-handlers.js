document.addEventListener('DOMContentLoaded', function(){

    document.body.addEventListener('click', function(event){

        const target = event.target.closest('[data-agency]')
        if(!target) return;

        event.preventDefault()

        const targetAgency = target.dataset.agency

        window.location.href = `agencyPage.html?targetAgency=${encodeURIComponent(targetAgency)}`
    })
})