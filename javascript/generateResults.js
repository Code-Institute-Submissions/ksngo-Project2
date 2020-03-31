
function markTopResalesPrice() {

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
    console.log(selectedModel)

    //*****(C)Begin filtering data *****

    //***** (C1)filter data by town or streetname**********
    if (selectedTown.length > 0) {
        console.log('hi iam in one')
        //Credit to prtksxna's solution in stackoverflow for filtering multiple discrete values in crossfilter.
        //Link is https://stackoverflow.com/questions/11060604/filter-for-multiple-discrete-values-in-crossfilter

        townDimension.filter(function (town) {
            return selectedTown.indexOf(town) > -1

        })

        // console.table(priceDimension.top(10))

    } else {

        console.log('hi iam in two')
        streetNameDimension.filter(d => d == selectedStreet)
        // console.table(priceDimension.top(10))

    }
    // let date = new Date("2017-01")
    // console.log(date)
    // console.log(date.getFullYear())

    //********(C2)filter data by year/month***********
    if (selectedMonth.length > 0) {
        monthDimension.filter(d => selectedMonth.indexOf(d) > -1)

        // console.table(priceDimension.top(10))
        // console.table(priceDimension.bottom(50))
    }
    //**********(C3)filter data by room type********** 
    if (selectedRoom.length > 0) {
        flatTypeDimension.filter(d => selectedRoom.indexOf(d) > -1)

        // console.table(priceDimension.top(10))
        // console.table(priceDimension.bottom(50))
    }

    //**********(C4)filter by storey range ***********

    if (selectedStorey.length > 0) {

        storeyRangeDimension.filter(d => selectedStorey.indexOf(d) > -1)

        // console.table(priceDimension.top(10))
        // console.table(priceDimension.bottom(50))
    }

    //*************(C5)filter by floor area ************

    if (selectedArea.length > 0) {
        floorAreaSqmDimension.filter(d => selectedArea.indexOf(d) > -1)

        // console.table(priceDimension.top(10))
        // console.table(priceDimension.bottom(50))
    }

    //*************(C6)filter by flat model ************

    if (selectedModel.length > 0) {
        flatModelDimension.filter(d => selectedModel.indexOf(d) > -1)

        console.table(priceDimension.top(10))
        console.table(priceDimension.bottom(50))

    }













}


// $('#buttonTopPrice').click(markTopResalesPrice)

// function markTopResalesPrice () {

//     console.log(townDimension.top(20))

//     if (getValueTown () != [] ) {
//         let selectedTown = getValueTown()

//         for (i=0;i<selectedTown.length;i++) {

//             townDimension.filter(function(town){
//                 return town !== selectedTown[i] 
//             })


//         }

//         console.table(townDimension.all())

//     }
//     getValueStreet ()

//     getValueYears ()
//     getValueRoomType ()
//     getValueStoreyRange ()
//     getValueFloorArea ()
//     getValueFlatModel ()
//     getValueRemainingLease ()
//     getValueResalePrice ()




// }



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