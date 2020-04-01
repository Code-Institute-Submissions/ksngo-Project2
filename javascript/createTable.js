

function createTable (x) {

        resetTable()
        createHeader()
        data50ToTable(x)
    
}

function createHeader () {

    let headerStarter = ['Index','Year-month','Town','Flat Type','Block','Street Name','Storey','Floor area','Flat Model','Remaining Lease','Resale Price','Show on Map' ]
    
    for (i=0;i<12;i++) {

        let headElement = document.createElement('th')
        headElement.innerHTML = headerStarter[i]
        document.getElementById('tr-header').appendChild(headElement)

    }
}



function data50ToTable (x) {

    

    for (i=(0+x*50);i<(50+x*50);i++) {

        let rowElement = document.createElement('tr')
        document.querySelector('table').appendChild(rowElement)

        let dataElement = document.createElement('td')
        dataElement.innerHTML = i
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].month
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].town
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].flat_type
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].block
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].street_name
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].storey_range
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].floor_area_sqm
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].flat_model
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].remaining_lease
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        dataElement.innerHTML= resultsTopPriceArray[i].resale_price
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        dataElement = document.createElement('td')
        let checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.id= "checkboxId"+i
        document.querySelector('table').lastElementChild.appendChild(dataElement)
        document.querySelector('table').lastElementChild.lastElementChild.appendChild(checkbox)

    




    }



} 


function resetTable() {

    document.querySelector('table').remove()
    let tableElement =document.createElement('table')
    let headerElement = document.createElement('tr')
    headerElement.id ='tr-header'
    
    document.querySelector('#div-table').appendChild(tableElement)
    document.querySelector('table').appendChild(headerElement)


}

function reset() {

    resetTable()
    countclicks=0

}