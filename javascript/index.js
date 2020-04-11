
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

            // let labelStreet = document.createElement('button')
            // labelStreet.innerText = 'Input Street Name'
            // labelStreet.id = 'button-filter-street'
            // document.querySelector('#input-street').appendChild(labelStreet)

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




            //***********************Jquery eventlistener for button for top resales price on clicking ******************/
            $('#buttonTopPrice').click(resultsForTopPrice)
            //***********************javascript eventlistener for button for top resales price on hover over************ */
            hoverOverBgColorChange('#buttonTopPrice')
            //***********************Jquery eventlistener for button for bottom resales price on clicking******************/
            $('#buttonBottomPrice').click(resultsForBottomPrice)
            //***********************javascript eventlistener for button for bottom resales price on hover over************ */
            hoverOverBgColorChange('#buttonBottomPrice')
            //***********************Jquery eventlistener for button for reset on clicking******************/
            $('#reset').click(reset)
            //***********************javascript eventlistener for button for reset on hover over************ */
            hoverOverBgColorChange('#reset')
            //***********************Javascript eventlistener for button for primary filters******************/
            document.querySelector('#button-show-filters').addEventListener('click', showFilters )
            //***********************javascript eventlistener for button for reset on hover over************ */
            hoverOverBgColorChange('#button-show-filters')
            //***********************Javascript eventlistener for button for extra filters******************/
            document.querySelector('#button-more-filters').addEventListener('click', showMoreFilters )
            //***********************Javascript eventlistener for button for street******************/
            document.querySelector('#button-filter-street').addEventListener('click', showFilterStreet )
            //***********************Javascript eventlistener for button for town******************/
            document.querySelector('#button-filter-town').addEventListener('click', showFilterTown )

            //**********************eventlistener to change color of show filter section*******************/
            document.getElementById('keesiang').addEventListener('click', function(){
                console.log('hello')
                if (document.getElementById('filters-tier').style.backgroundColor=='' || document.getElementById('filters-tier').style.backgroundColor=='skyblue') {
                    document.getElementById('filters-tier').style.backgroundColor='white'
                } else {
                    document.getElementById('filters-tier').style.backgroundColor='skyblue'
                }
            })
            

        })// end csvtoJson





    }) // end axios.get


}) //end generic function

