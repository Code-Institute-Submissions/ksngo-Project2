let resultsTopPriceArray =[]
let countclicks =0

function resultsForTopPrice() {

    if (countclicks==0) {

    filterDataByInput ()
    resultsTopPriceArray = priceDimension.top(1000)
    console.log(resultsTopPriceArray)

    }
    
    // console.log(priceDimension.top(50)[0])

    createTable(countclicks)
    countclicks++

}


function resultsForBottomPrice() {

    filterDataByInput()

    console.table(priceDimension.bottom(1000))
    // console.log(priceDimension.bottom(50)[0])
    // console.log(priceDimension.bottom(50)[1])

}



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
        console.log('hi iam in one')
        //Credit to prtksxna's solution in stackoverflow for filtering multiple discrete values in crossfilter.
        //Link is https://stackoverflow.com/questions/11060604/filter-for-multiple-discrete-values-in-crossfilter

        townDimension.filter(function (town) {
            return selectedTown.indexOf(town) > -1

        })

    } else {
        console.log('hi iam in two')
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




// $('#buttonBottomPrice').click()

// function markBottomResalesPrice () {
//     getValueTown ()
//     getValueStreet ()

//     getValueYears ()
//     getValueRoomType ()
//     getValueStoreyRange ()
//     getValueFloorArea ()
//     getValueFlatModel ()
//     getValueRemainingLease ()
//     getValueResalePrice ()
// }



// $('#numberOfTransactions').click()