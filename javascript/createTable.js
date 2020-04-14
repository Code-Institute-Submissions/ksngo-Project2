
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

        if (i==11) {
            /******************************************PENDING TROUBLESHOOTING***************************************** */
            let headElement = document.createElement('th')
            headElement.innerHTML = ` <div> ${headerStarter[i]} </div>
                                    <div>&nbsp; (plot all) </div> `
            document.getElementById('tr-header').appendChild(headElement)
            
            let checkbox = document.createElement('input')
            checkbox.type='checkbox'
            checkbox.addEventListener('change' , plotAll)  //eventlistener for selecting all 50 checkboxes
            document.getElementById('tr-header').lastElementChild.lastElementChild.appendChild(checkbox)
            /******************************************PENDING TROUBLESHOOTING***************************************** */
        } else {
        let headElement = document.createElement('th')
        headElement.innerHTML =`<p>${headerStarter[i]}</p>`
        document.getElementById('tr-header').appendChild(headElement)
        }

        

    }

    
    
}

let checkboxIdArray =[]

//******************function to create 50 data table onto HTML **************************/
function data50ToTable (x,y) {

    checkboxIdArray=[]

    

        for (i=(0+x*50);i<(50+x*50);i++) {

            console.log(i)
            
            //**************Break Loop if no more data *************/
            if (y=='Top') {
                if (typeof resultsTopPriceArray[i] == 'undefined') {
                    console.log(i,' is undefined')
                    document.querySelector('#buttonTopPrice').disabled=true
                    document.querySelector('#buttonTopPrice').style.cursor='default'
                    document.querySelector('#buttonTopPrice').style.backgroundColor='#6a8494'
                    break
                }
            }
            
            if (y=='Bottom') {  
                if (typeof resultsLowPriceArray[i] == 'undefined') {
                    console.log(i,' is undefined')
                    document.querySelector('#buttonBottomPrice').disabled=true
                    document.querySelector('#buttonBottomPrice').style.cursor='default'
                    document.querySelector('#buttonBottomPrice').style.backgroundColor='#6a8494'
                    break
                }
            } 

            //**************Create <tr> element for each i iteration ******/
            let rowElement = document.createElement('tr')
            document.querySelector('#table-results').appendChild(rowElement)

            //***************Insert index number in table*****************/
            let dataElement = document.createElement('td')
            dataElement.innerHTML = `<p> ${i}</p>`
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)   

            //***************Insert month in table***********************/
            dataElement = document.createElement('td')

                if (y=='Top') { 
                    dataElement.innerHTML=`<p> ${resultsTopPriceArray[i].month} </p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML=`<p> ${resultsLowPriceArray[i].month} </p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert town in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p> ${resultsTopPriceArray[i].town}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p> ${resultsLowPriceArray[i].town}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert flat-type in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML=`<p> ${resultsTopPriceArray[i].flat_type} </p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p> ${resultsLowPriceArray[i].flat_type} </p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert block number in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p>${resultsTopPriceArray[i].block}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p>${resultsLowPriceArray[i].block}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert street name in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p> ${resultsTopPriceArray[i].street_name}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p> ${resultsLowPriceArray[i].street_name}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert storey range in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p>${resultsTopPriceArray[i].storey_range}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p>${resultsLowPriceArray[i].storey_range}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert floor area in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p>${resultsTopPriceArray[i].floor_area_sqm}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p>${resultsLowPriceArray[i].floor_area_sqm}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert flat model in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p> ${resultsTopPriceArray[i].flat_model}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p> ${resultsLowPriceArray[i].flat_model}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)
            
            //***************Insert remaining lease in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p> ${resultsTopPriceArray[i].remaining_lease}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p> ${resultsLowPriceArray[i].remaining_lease}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert resale price in table***********************/
            dataElement = document.createElement('td')
                if (y=='Top') {
                    dataElement.innerHTML= `<p> ${resultsTopPriceArray[i].resale_price}</p>`
                } else if (y=='Bottom') {
                    dataElement.innerHTML= `<p> ${resultsLowPriceArray[i].resale_price}</p>`
                }
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)

            //***************Insert checkbox in table***********************/
            dataElement = document.createElement('td')
            let checkbox = document.createElement('input')
            checkbox.type='checkbox'
            checkbox.id= "checkboxId"+i
            checkboxIdArray.push(checkbox.id)
            checkbox.addEventListener('change' , plotToMap)  //eventlistener for checkbox to plot markers to map
            document.querySelector('#table-results').lastElementChild.appendChild(dataElement)
            document.querySelector('#table-results').lastElementChild.lastElementChild.appendChild(checkbox)
            
        }
    
} 


//********************function to remove table and initiate an empty table again**********************/

function resetTable() {

    document.querySelector('#table-results').remove()
    let tableElement =document.createElement('table')
    tableElement.id='table-results'
    let headerElement = document.createElement('tr')
    headerElement.id ='tr-header'
    
    document.querySelector('#div-table').appendChild(tableElement)
    document.querySelector('#table-results').appendChild(headerElement)
    
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
    document.querySelector('#buttonBottomPrice').style.cursor='pointer'
    document.querySelector('#buttonTopPrice').style.cursor='pointer'
    document.getElementById('buttonTopPrice').innerHTML =`<h3> descending 
                                                            <i class="fa fa-usd" aria-hidden="true"></i>&emsp;
                                                            <i class="fa fa-table" aria-hidden="true" ></i></h3>`
    
    document.getElementById('buttonBottomPrice').innerHTML =`<h3> ascending
                                                            <i class="fa fa-usd" aria-hidden="true"></i>&emsp;
                                                            <i class="fa fa-table" aria-hidden="true"></i></h3>`
    
    // document.getElementById('reset').style.display='none'
    document.querySelector('#button-show-filters').innerHTML = `<h3> Begin filtering </h3>`

    $('#map-tier').css('height', '80vh')

    //****************************for situation for small device when left-navigation tier is set to display none******************** */
    if ($('#left-navigation-tier').css('display') != 'none') {
        document.querySelector('#filters-tier').style.display='none'
        document.querySelector('#town').style.display='none'
        document.getElementById('buttonTopPrice').style.display='none'
        document.getElementById('buttonBottomPrice').style.display='none'
    }

    
    // document.querySelector('#input-street').style.display='flex'



    document.getElementById('resultsSize').innerHTML =""
    $('#resultsSize').css('display','none')
    $('#left-btm').css('display','block')
    $('#right-layout').css('display','block')


    mymap.setView([1.37, 103.82], 12)
    

}
