
 function markTopResalesPrice() {

    console.log('hihihihi')
    let selectedTown = getValueTown()
    
    //Credit to prtksxna's solution in stackoverflow for filtering multiple discrete values in crossfilter.
    //Link is https://stackoverflow.com/questions/11060604/filter-for-multiple-discrete-values-in-crossfilter

    // let f = selectedTown
    
    // Assuming "dim" is our dimension
    townDimension.filter(function (town) {
        return selectedTown.indexOf(town) > -1;
    });

    console.table(townDimension.top(50))
    console.table(townDimension.bottom(50))
    console.table(priceDimension.top(50))
    console.table(priceDimension.bottom(50))
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