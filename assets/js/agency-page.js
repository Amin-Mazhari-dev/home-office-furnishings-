import {agencyArray} from './agency-data.js';

document.addEventListener('DOMContentLoaded', function(){

    let params = new URLSearchParams(location.search)
    let targetAgency = params.get('targetAgency')

    if(!targetAgency) return;


    let agency = agencyArray.find(function(items){

        return items.agencyCode === Number(targetAgency)
    })
    
    showAgencyInformation(agency)
    showStyleTable(agency)
 
})

function showAgencyInformation(showAgency){

    const imgBannerAgency = document.querySelector('.img-banner-agency')
    const nameAgency = document.querySelector('.name-agency')
    const codeAgency = document.querySelector('.code-agency')
    const manageAgency = document.querySelector('.manage-agency')
    const telAgency = document.querySelector('.tel-agency')
    const addressAgency = document.querySelector('.address-agency')

    imgBannerAgency.setAttribute('src', `${showAgency.agencyImg}`)
    nameAgency.textContent = `${showAgency.agencyName}`
    codeAgency.textContent = `${showAgency.agencyCode}`
    manageAgency.textContent = `${showAgency.agencyManage}`
    telAgency.textContent = `${showAgency.agencyTel}`
    addressAgency.textContent = `${showAgency.agencyAddress}`
}

function showStyleTable(agencyTable){

    const trOne = document.querySelector('.one')
    const trTwo = document.querySelector('.two')
    const trThree = document.querySelector('.three')
    const trFour = document.querySelector('.four')
    const trFive = document.querySelector('.five')
    const trSix = document.querySelector('.six')

    if(agencyTable.agencyCode === 101){

        trOne.style.cssText = 'background-color: blue;'
        trThree.style.cssText = 'background-color: blue;'
        trFive.style.cssText = 'background-color: blue;'

        trTwo.style.cssText = 'background-color: rgb(2, 2, 110);'
        trFour.style.cssText = 'background-color: rgb(2, 2, 110);'
        trSix.style.cssText = 'background-color: rgb(2, 2, 110);'

    }else if(agencyTable.agencyCode === 100){

        trOne.style.cssText = 'background-color: blue;'
        trThree.style.cssText = 'background-color: blue;'
        trFive.style.cssText = 'background-color: blue;'

        trTwo.style.cssText = 'background-color: rgb(2, 2, 110);'
        trFour.style.cssText = 'background-color: rgb(2, 2, 110);'
        trSix.style.cssText = 'background-color: rgb(2, 2, 110);'

    }else if(agencyTable.agencyCode === 102){

        trOne.style.cssText = 'background-color: #da8000;'
        trThree.style.cssText = 'background-color: #da8000;'
        trFive.style.cssText = 'background-color: #da8000;'

        trTwo.style.cssText = 'background-color: #49240f;'
        trFour.style.cssText = 'background-color: #49240f;'
        trSix.style.cssText = 'background-color: #49240f;'

    }else if(agencyTable.agencyCode === 103){

        trOne.style.cssText = 'background-color: #5107c7'
        trThree.style.cssText = 'background-color: #5107c7'
        trFive.style.cssText = 'background-color: #5107c7'

        trTwo.style.cssText = 'background-color: #730991;'
        trFour.style.cssText = 'background-color: #730991;'
        trSix.style.cssText = 'background-color: #730991;'

    }else if(agencyTable.agencyCode === 104){

        trOne.style.cssText = 'background-color: #da8000;'
        trThree.style.cssText = 'background-color: #da8000;'
        trFive.style.cssText = 'background-color: #da8000;'

        trTwo.style.cssText = 'background-color: #49240f;'
        trFour.style.cssText = 'background-color: #49240f;'
        trSix.style.cssText = 'background-color: #49240f;'

    }else if(agencyTable.agencyCode === 105){

        trOne.style.cssText = '  background-color: #779ac8;'
        trThree.style.cssText = '  background-color: #779ac8;'
        trFive.style.cssText = '  background-color: #779ac8;'

        trTwo.style.cssText = 'background-color: #b6b0a8;'
        trFour.style.cssText = 'background-color: #b6b0a8;'
        trSix.style.cssText = 'background-color: #b6b0a8;'
    }
}