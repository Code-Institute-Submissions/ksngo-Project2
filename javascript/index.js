
let townDimension={}
let streetNameDimension={}
let monthDimension={}
let flatTypeDimension={}
let storeyRangeDimension={}
let floorAreaSqmDimension={}
let flatModelDimension={}
// let remainingLeaseDimension={}
let priceDimension={}



$(function () {
    
    axios.get('data/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv').then(function (response) {

        csv({

            colParser: {
                'resale_price':'number'
            }

        }).fromString(response.data).then(function (jsonData) {

            // console.table(jsonData)
            //******************apply crossfilter to jsonData ***********************/
            let cf = crossfilter(jsonData)  //

            townDimension = cf.dimension(jsonData => jsonData.town) //select town as dimension
            monthDimension=cf.dimension(jsonData => jsonData.month)
            flatTypeDimension = cf.dimension(jsonData => jsonData.flat_type)
            streetNameDimension = cf.dimension(jsonData => jsonData.street_name)
            storeyRangeDimension = cf.dimension(jsonData => jsonData.storey_range)
            floorAreaSqmDimension = cf.dimension(jsonData => jsonData.floor_area_sqm)
            flatModelDimension = cf.dimension(jsonData => jsonData.flat_model)
            // remainingLeaseDimension = cf.dimension(jsonData => jsonData.remaining_lease)
            priceDimension = cf.dimension(jsonData => jsonData.resale_price) // select town as price

            
            //**********************CREATE HTML PAGE******************************************/
            //**************Create html content for Street Name via select option type********/
            let streetNameGroup = streetNameDimension.group()
            // console.table(streetNameGroup.all())
            // console.log(streetNameGroup.all()[0])
            // console.log(streetNameGroup.all()[0].key)

            let labelStreet = document.createElement('button')
            labelStreet.innerText = 'Input Street Name'
            labelStreet.id = 'button-filter-street'
            document.querySelector('#input-street').appendChild(labelStreet)

            let selectStreet = document.createElement('select')
            document.querySelector('#input-street').appendChild(selectStreet)

            for (let i in streetNameGroup.all()) {
                let optionStreet = document.createElement('option')
                optionStreet.innerText = streetNameGroup.all()[i].key
                optionStreet.value = streetNameGroup.all()[i].key
                document.querySelector('#input-street select').appendChild(optionStreet)
            }


            // Create HTML content for Room Type via select option type
            // let flatTypeGroup = flatTypeDimension.group()

            // let labelRoomType= document.createElement('label')
            // labelRoomType.innerText='Input room type: '
            // document.querySelector('#roomType').appendChild(labelRoomType)

            // let selectRoomType=document.createElement('select')
            // selectRoomType.multiple='multiple'
            // document.querySelector('#roomType').appendChild(selectRoomType)

            // for( let i in flatTypeGroup.all()) {
            //     let optionRoomType=document.createElement('option')
            //     optionRoomType.innerText=flatTypeGroup.all()[i].key
            //     optionRoomType.value=flatTypeGroup.all()[i].key
            //     document.querySelector('#roomType select').appendChild(optionRoomType)
            // }


            //***********************Jquery eventlistener for button for top resales price******************/
            $('#buttonTopPrice').click(resultsForTopPrice)
            //***********************Jquery eventlistener for button for top resales price******************/
            $('#buttonBottomPrice').click(resultsForBottomPrice)
            //***********************Jquery eventlistener for button for reset******************/
            $('#reset').click(reset)
            //***********************Javascript eventlistener for button for filter1******************/
            document.querySelector('#button-filter1').addEventListener('click', showFilter1 )
            //***********************Javascript eventlistener for button for filter2******************/
            document.querySelector('#button-filter2').addEventListener('click', showFilter2 )

            

        })// end csvtoJson





    }) // end axios.get


}) //end generic function

