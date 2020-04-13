let resultsTopPriceArray =[]
let countclicks =0
let topOrBottomRange


//***************************Initiate this function when Button for 'Results in descending price' is clicked. *********************/
function resultsForTopPrice() {

    
    /*******************disable button for ascending price ********************/
    document.querySelector('#buttonBottomPrice').disabled=true
    document.querySelector('#buttonBottomPrice').style.cursor='default'
    
    /*******************note down that descending price button is clicked**********/
    topOrBottomRange = 'Top'

    
    if (countclicks==0) {
    filterDataByInput ()
    resultsTopPriceArray = priceDimension.top(Number.POSITIVE_INFINITY)
    console.table(resultsTopPriceArray)
    document.getElementById('buttonTopPrice').innerHTML =`<h3> Next 50 results </h3>`
    }
    
    let resultsSize = priceDimension.top(Number.POSITIVE_INFINITY).length

    $('#resultsSize').css('display','block')

    if (resultsSize!==0) {
        document.getElementById('resultsSize').innerHTML = `<h3>Number of Results: ${resultsSize}</h3>`
    } else {
        document.getElementById('resultsSize').innerHTML = `<h3>Number of Results: 0 </h3>`
    }

    createTable(countclicks , topOrBottomRange)
    countclicks++

    
    
}

//***************************Initiate this function when Button for 'Results in ascending price' is clicked. *********************/
function resultsForBottomPrice() {

    topOrBottomRange = 'Bottom'

    document.querySelector('#buttonTopPrice').disabled=true
    document.querySelector('#buttonTopPrice').style.cursor='default'
    

    if (countclicks==0) {
        /**************get results*******************/
        filterDataByInput()
        /**************measure data sizes returned*************/
        resultsLowPriceArray = priceDimension.bottom(Number.POSITIVE_INFINITY)
        console.table(resultsLowPriceArray)
        document.getElementById('buttonBottomPrice').innerHTML =`<h3> Next 50 results </h3>`
    }
    
    let resultsSize = priceDimension.bottom(Number.POSITIVE_INFINITY).length

    $('#resultsSize').css('display','block')

    if (resultsSize!==0) {
        document.getElementById('resultsSize').innerHTML = `<h3>Number of Results: ${resultsSize}</h3>`
    } else {
        document.getElementById('resultsSize').innerHTML = `<h3>Number of Results: 0 </h3>`
    }

    /*******************display results in table on html **********/
    createTable(countclicks, topOrBottomRange)
    countclicks++

}


//*****************************function to return 'crossfilter dimension filters' results according to user's filters **************************************************/
function filterDataByInput ()  {

    //******(A)revert back to orignal data size with filterAll*****
    townDimension.filterAll()
    streetNameDimension.filterAll()
    priceDimension.filterAll()
    monthDimension.filterAll()
    flatTypeDimension.filterAll()
    storeyRangeDimension.filterAll()
    floorAreaSqmDimension.filterAll()
    flatModelDimension.filterAll()
    
    //*****(B)get users input *****
    let selectedTown = getValueTown()
    let selectedStreet = getValueStreet()
    let selectedMonth = getValueYears()
    let selectedRoom = getValueRoomType()
    let selectedStorey = getValueStoreyRange()
    let selectedArea = getValueFloorArea()
    let selectedModel = getValueFlatModel()

    //*****(C)Begin filtering data *****

    //***** (C1)filter data by town or streetname**********
    if (selectedTown.length > 0) {
        // console.log('User has selected filtering by town.')
        //Credit to prtksxna's solution in stackoverflow for filtering multiple discrete values in crossfilter.
        //Link is https://stackoverflow.com/questions/11060604/filter-for-multiple-discrete-values-in-crossfilter

        townDimension.filter(function (town) {
            return selectedTown.indexOf(town) > -1

        })

    } else {
        // console.log('User has selected single street name.')
        streetNameDimension.filter(d => d == selectedStreet)
    }
    // let date = new Date("2017-01")
    // console.log(date)
    // console.log(date.getFullYear())

    //********(C2)filter data by year/month***********
    if (selectedMonth.length > 0) {
        monthDimension.filter(d => selectedMonth.indexOf(d) > -1)
    }

    //**********(C3)filter data by room type********** 
    if (selectedRoom.length > 0) {
        flatTypeDimension.filter(d => selectedRoom.indexOf(d) > -1)
    }

    //**********(C4)filter by storey range ***********
    if (selectedStorey.length > 0) {
        storeyRangeDimension.filter(d => selectedStorey.indexOf(d) > -1)
    }

    //*************(C5)filter by floor area ************
    if (selectedArea.length > 0) {
        floorAreaSqmDimension.filter(d => selectedArea.indexOf(d) > -1)
    }

    //*************(C6)filter by flat model ************
    if (selectedModel.length > 0) {
        flatModelDimension.filter(d => selectedModel.indexOf(d) > -1)
    }

}

