

function getValueYears () {

    let selectedMinYears = document.querySelector('#min-year').value
    let selectedMaxYears = document.querySelector('#max-year').value
    console.log(selectedMinYears)
    console.log(selectedMaxYears)
    return selectedMinYears
    
}

function getValueRoomType () {

    let roomTypeElements=document.getElementsByName('room-type')
    let selectedRoomType =[]

    for (i=0; i<roomTypeElements.length;i++) {

        if(roomTypeElements[i].checked)
        selectedRoomType.push(roomTypeElements[i].value)
    }

    return selectedRoomType
}

function getValueStoreyRange () {

    let storeyRangeElements=document.getElementsByName('storey-range')
    let selectedStoreyRange=[]

    for (i=0; i<storeyRangeElements.length;i++) {

        if(storeyRangeElements[i].checked)
        selectedStoreyRange.push(storeyRangeElements[i].value)
    }
    
    return selectedStoreyRange
}

function getValueFloorArea () {

    let selectedMinFloorArea=document.querySelector('#min-floor-area').value
    let selectedMaxFloorArea=document.querySelector('#max-floor-area').value
    
    return selectedMinFloorArea, selectedMaxFloorArea
    
}

function getValueFlatModel () {

    let flatModelElements=document.getElementsByName('flat-model')
    let selectedFlatModel =[]

    for (i=0;i<flatModelElements.length;i++) {
        if(flatModelElements[i].checked) {
            selectedFlatModel.push(flatModelElements[i].value)
        }

    }
    return selectedFlatModel
}

function getValueRemainingLease () {

    let selectedMinRemainingLease = document.querySelector('#min-remaining-lease').value
    let selectedMaxRemainingLease = document.querySelector('#max-remaining-lease').value

    console.log(selectedMinRemainingLease)
    console.log(selectedMaxRemainingLease)

    return selectedMinRemainingLease, selectedMaxRemainingLease

}

function getValueResalePrice () {

    let selectedMinResalePrice=document.querySelector('#min-resale-price').value
    let selectedMaxResalePrice=document.querySelector('#max-resale-price').value

    console.log(selectedMinResalePrice)
    console.log(selectedMaxResalePrice)

    return selectedMinResalePrice, selectedMaxResalePrice
}



