
let townDimension={}
let priceDimension={}
let streetNameDimension={}
let monthDimension={}
let flatTypeDimension={}
let storeyRangeDimension={}
let floorAreaSqmDimension={}



$(function () {

    axios.get('data/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv').then(function (response) {


        csv().fromString(response.data).then(function (jsonData) {

            // console.table(jsonData)

            let cf = crossfilter(jsonData)  //apply crossfilter to jsonData

            townDimension = cf.dimension(jsonData => jsonData.town) //select town as dimension
            // month pending 2017-01
            monthDimension=cf.dimension(jsonData => jsonData.month)
            flatTypeDimension = cf.dimension(jsonData => jsonData.flat_type)
            streetNameDimension = cf.dimension(jsonData => jsonData.street_name)
            storeyRangeDimension = cf.dimension(jsonData => jsonData.storey_range)
            floorAreaSqmDimension = cf.dimension(jsonData => jsonData.floor_area_sqm)
            let flatModelDimension = cf.dimension(jsonData => jsonData.flat_model)
            // remaining lease pending 61 years 04 months
            priceDimension = cf.dimension(jsonData => jsonData.resale_price) // select town as price

            

            //CREATE HTML PAGE
            // Create html content for Street Name via select option type
            let streetNameGroup = streetNameDimension.group()
            // console.table(streetNameGroup.all())
            // console.log(streetNameGroup.all()[0])
            // console.log(streetNameGroup.all()[0].key)

            let labelStreet = document.createElement('label')
            labelStreet.innerText = 'Input Street Name: '
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



            $('#buttonTopPrice').click(markTopResalesPrice)

            
            
           

            // $('#buttonTopPrice').click(topPriceFn)

            function topPriceFn() {

                let userInputTown = $('#inputTown').val()


                townDimension.filter(function (town) { //filter town dimension 
                    return town == userInputTown
                })

                // console.log('bugging')
                // console.table(townDimension.top(50))
                // console.table(priceDimension.top(50))
                console.table(floorAreaSqmDimension.top(50))



                if (userInputTown = 'ANG MO KIO') {



                    L.marker([1.369115, 103.845436]).addTo(mymap).bindPopup('<p>AMK</p>')

                } else {
                    alert('Marker except for ANG MO KIO is not ready')
                }

            }




        })// end csvtoJson





    }) // end axios.get


}) //end generic function

