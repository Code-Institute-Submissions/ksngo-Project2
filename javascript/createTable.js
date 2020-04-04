
let selectedAddress = ""
let markersGroup=L.layerGroup()

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
        checkbox.addEventListener('change' , plotToMap)
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
    

}

//********************fucntion to plot marker to map when user click on checkbox *******************************/
function plotToMap () {


    let tableIndex = this.id.replace('checkboxId','')
    selectedAddress = resultsTopPriceArray[tableIndex].block + " " + resultsTopPriceArray[tableIndex].street_name

    let popupContent = `<section>index: ${tableIndex}</section>
                        <section>sold on: ${resultsTopPriceArray[tableIndex].month}</section>
                        <section>address: ${selectedAddress}</section>
                        <section>type: ${resultsTopPriceArray[tableIndex].flat_type}</section>
                        <section>storey: ${resultsTopPriceArray[tableIndex].storey_range}</section>
                        <section>area: ${resultsTopPriceArray[tableIndex].floor_area_sqm}</section>
                        <section>model: ${resultsTopPriceArray[tableIndex].flat_model}</section>
                        <section>lease: ${resultsTopPriceArray[tableIndex].remaining_lease}</section>
                        <section>resale price: ${resultsTopPriceArray[tableIndex].resale_price}</section> `
                         

    axios.get("https://nominatim.openstreetmap.org/search",{
        params:{
            format:'json',
            q: selectedAddress+" singapore" 
        }
    }).then(function(response){
        console.log(response.data)
        console.log(response.data[0].lat)
        console.log(response.data[0].lon)
        
        let marker=L.marker([response.data[0].lat,response.data[0].lon]).addTo(mymap).bindPopup(popupContent)
        markersGroup.addLayer(marker)
        
        mymap.addLayer(markersGroup)
        
    })


}