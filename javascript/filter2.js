

function getValueYears () {

    let selectedMinYears = document.querySelector('#min-year').value
    let selectedMaxYears = document.querySelector('#max-year').value
    console.log(selectedMinYears)
    console.log(selectedMaxYears)

    let year2017 = ['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11','2017-12']
    let year2018 = ['2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-08','2018-09','2018-10','2018-11','2018-12']
    let year2019 = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12']
    let year2020 = ['2020-01','2020-02']

    let selectedMonthArray =[]
    let selectedYearsArray = []

    for (i=0; i< (selectedMaxYears-selectedMinYears+1);i++) {
        selectedYearsArray.push(parseInt(selectedMinYears)+i)
    }

    console.log(selectedYearsArray.length)
   if (selectedYearsArray.length == 4 ) {
    selectedMonthArray=((year2017.concat(year2018)).concat(year2019)).concat(year2020)
   } else if ( selectedYearsArray.length == 3 & selectedMinYears == '2017') {
    selectedMonthArray=(year2017.concat(year2018)).concat(year2019)
   } else if ( selectedYearsArray.length == 3 & selectedMinYears == '2018') {
    selectedMonthArray=(year2018.concat(year2019)).concat(year2020)
   } else if ( selectedYearsArray.length == 2 & selectedMinYears == '2017') {
    selectedMonthArray=year2017.concat(year2018)
   } else if ( selectedYearsArray.length == 2 & selectedMinYears == '2018') {
    selectedMonthArray=year2018.concat(year2019)
   } else if ( selectedYearsArray.length == 2 & selectedMinYears == '2019') {
    selectedMonthArray=year2019.concat(year2020)
   } else if ( selectedYearsArray.length == 1 & selectedMinYears == '2017') {
    selectedMonthArray=year2017
   } else if ( selectedYearsArray.length == 1 & selectedMinYears == '2018') {
    selectedMonthArray=year2018
   } else if ( selectedYearsArray.length == 1 & selectedMinYears == '2019') {
        selectedMonthArray=year2019
   } else if ( selectedYearsArray.length == 1 & selectedMinYears == '2020') {
    selectedMonthArray=year2020
   } 

    // console.log(selectedMonthArray)


    return selectedMonthArray
    
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



