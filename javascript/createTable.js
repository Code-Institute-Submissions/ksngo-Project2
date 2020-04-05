
//******************function to clear <table> in HTML, create header for table and add 50 data to table. ****************/
function createTable (x,y) {

        resetTable()
        createHeader()
        data50ToTable(x,y)
    
}

//*******************function to create header for table *******************/
function createHeader () {

    let headerStarter = ['Index','Year-month','Town','Flat Type','Block','Street Name','Storey','Floor area','Flat Model','Remaining Lease','Resale Price','Show on Map' ]
    
    for (i=0;i<12;i++) {

        let headElement = document.createElement('th')
        headElement.innerHTML = headerStarter[i]
        document.getElementById('tr-header').appendChild(headElement)

    }
}


//******************function to create 50 data table onto HTML **************************/
function data50ToTable (x,y) {

    

    for (i=(0+x*50);i<(50+x*50);i++) {

        
        //**************Break Loop if no more data *************/
        if (y=='Top') {
            if (typeof resultsTopPriceArray[i] == 'undefined') {
                break
            }
        }
        
        if (y=='Bottom') {
            if (typeof resultsLowPriceArray[i] == 'undefined') {
                break
            }
        } 

        //**************Create <tr> element for each i iteration ******/
        let rowElement = document.createElement('tr')
        document.querySelector('table').appendChild(rowElement)

        //***************Insert index number in table*****************/
        let dataElement = document.createElement('td')
        dataElement.innerHTML = i
        document.querySelector('table').lastElementChild.appendChild(dataElement)   

        //***************Insert month in table***********************/
        dataElement = document.createElement('td')

            if (y=='Top') { 
                dataElement.innerHTML= resultsTopPriceArray[i].month
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].month
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert town in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].town
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].town
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert flat-type in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].flat_type
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].flat_type
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert block number in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].block
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].block
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert street name in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].street_name
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].street_name
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert storey range in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].storey_range
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].storey_range
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert floor area in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].floor_area_sqm
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].floor_area_sqm
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert flat model in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].flat_model
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].flat_model
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)
        
        //***************Insert remaining lease in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].remaining_lease
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].remaining_lease
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert resale price in table***********************/
        dataElement = document.createElement('td')
            if (y=='Top') {
                dataElement.innerHTML= resultsTopPriceArray[i].resale_price
            } else if (y=='Bottom') {
                dataElement.innerHTML= resultsLowPriceArray[i].resale_price
            }
        document.querySelector('table').lastElementChild.appendChild(dataElement)

        //***************Insert checkbox in table***********************/
        dataElement = document.createElement('td')
        let checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.id= "checkboxId"+i
        checkbox.addEventListener('change' , plotToMap)  //eventlistener for checkbox to plot markers to map
        document.querySelector('table').lastElementChild.appendChild(dataElement)
        document.querySelector('table').lastElementChild.lastElementChild.appendChild(checkbox)
        
    }

} 


//********************function to remove table and initiate an empty table again**********************/

function resetTable() {

    document.querySelector('table').remove()
    let tableElement =document.createElement('table')
    let headerElement = document.createElement('tr')
    headerElement.id ='tr-header'
    
    document.querySelector('#div-table').appendChild(tableElement)
    document.querySelector('table').appendChild(headerElement)
    
    //***************clearLayers in markerGroup and removelayer from mymap********************** */
    if (isEmpty(markersGroup._layers)) {
        
    } else {
        markersGroup.clearLayers()
        mymap.removeLayer(markersGroup)
    }


}

//***********************function to will reset countclicks to 0 when user click on Reset Button  ****************************/
function reset() {

    resetTable()
    countclicks=0
    document.querySelector('#buttonBottomPrice').disabled=false
    document.querySelector('#buttonTopPrice').disabled=false
    document.getElementById('resultsSize').innerHTML =""
    mymap.setView([1.25, 103.85], 11)
    

}
