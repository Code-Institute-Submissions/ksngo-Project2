
function markTopResalesPrice() {

    townDimension.filterAll()
    streetNameDimension.filterAll()
    priceDimension.filterAll()

    let selectedTown = getValueTown()
    let selectedStreet = getValueStreet()
    console.log(selectedTown.length)

    if (selectedTown.length>0) {
        console.log('hi iam in one')
        //Credit to prtksxna's solution in stackoverflow for filtering multiple discrete values in crossfilter.
        //Link is https://stackoverflow.com/questions/11060604/filter-for-multiple-discrete-values-in-crossfilter

        townDimension.filter(function (town) {
            return selectedTown.indexOf(town) > -1
            
        })

        console.table(priceDimension.top(10))

    } else {

        console.log('hi iam in two')
        streetNameDimension.filter(d => d == selectedStreet)
        console.table(priceDimension.top(10))

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