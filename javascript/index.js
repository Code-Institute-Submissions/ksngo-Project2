
$(function(){

    axios.get('data/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv').then(function(response){

        
        csv().fromString(response.data).then(function(jsonData){
            
            // console.table(jsonData)

            let cf=crossfilter(jsonData)  //apply crossfilter to jsonData

            let townDimension = cf.dimension(jsonData=>jsonData.town) //select town as dimension
            // month pending 2017-01
            let flatTypeDimension = cf.dimension(jsonData=>jsonData.flat_type)
            let streetNameDimension = cf.dimension(jsonData=>jsonData.street_name)
            let storeyRangeDimension = cf.dimension(jsonData=>jsonData.storey_range)
            let floorAreaSqmDimension = cf.dimension(jsonData=>jsonData.floor_area_sqm)
            let flatModelDimension = cf.dimension(jsonData=>jsonData.flat_model)
            // remaining lease pending 61 years 04 months
            let priceDimension = cf.dimension(jsonData=>jsonData.resale_price) // select town as price
        
            // console.table(townDimension.top(20))
            // console.log(townDimension.top(10)[0].resale_price)

            $('#buttonTopPrice').click(topPriceFn)

            function topPriceFn() {
                
                let userInputTown = $('#inputTown').val()
                
                
                townDimension.filter(function(town){ //filter town dimension 
                    return town==userInputTown
                })

                // console.log('bugging')
                // console.table(townDimension.top(50))
                // console.table(priceDimension.top(50))
                console.table(floorAreaSqmDimension.top(50))

                

                if (userInputTown ='ANG MO KIO') {
                    


                    L.marker([1.369115,103.845436]).addTo(mymap).bindPopup('<p>AMK</p>')

                } else {
                    alert ('Marker except for ANG MO KIO is not ready')
                }

            }

            


        })// end csvtoJson





    }) // end axios.get


}) //end generic function

