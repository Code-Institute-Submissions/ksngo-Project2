
$('#buttonTopPrice').click()

function markTopResalesPrice () {

    
    if (getValueTown () != [] ) {
        let selectedTown = getValueTown()

        for (i=0;i<selectedTown.length;i++) {

            townDimension.filter(function(town){
                return town==selectedTown[i]
            })


        }


    }
    getValueStreet ()

    getValueYears ()
    getValueRoomType ()
    getValueStoreyRange ()
    getValueFloorArea ()
    getValueFlatModel ()
    getValueRemainingLease ()
    getValueResalePrice ()




}



$('#buttonBottomPrice').click()

function markBottomResalesPrice () {
    getValueTown ()
    getValueStreet ()

    getValueYears ()
    getValueRoomType ()
    getValueStoreyRange ()
    getValueFloorArea ()
    getValueFlatModel ()
    getValueRemainingLease ()
    getValueResalePrice ()
}



$('#numberOfTransactions').click()