
let selectedAddress = ""
let markersGroup=L.layerGroup()

//********************function to plot marker to map when user click on checkbox *******************************/
function plotToMap () {

    if (this.checked) {
    let tableIndex = this.id.replace('checkboxId','')
    plot(tableIndex)
    }

}


//********************internal function to plot marker ********************************************************/
function plot(tableIndex) {

    
    let popupContent =''
    /*********************prepare address string from selected checkbox's address**************/
    if (topOrBottomRange=='Top') {
        selectedAddress = resultsTopPriceArray[tableIndex].block + " " + resultsTopPriceArray[tableIndex].street_name
    } else if (topOrBottomRange=='Bottom'){
        selectedAddress = resultsLowPriceArray[tableIndex].block + " " + resultsLowPriceArray[tableIndex].street_name
    }

    /*************************prepare content for popout *****************************************/
    if (topOrBottomRange=='Top') {
        popupContent = `<section>index: ${tableIndex}</section>
                        <section>sold on: ${resultsTopPriceArray[tableIndex].month}</section>
                        <section>address: ${selectedAddress}</section>
                        <section>type: ${resultsTopPriceArray[tableIndex].flat_type}</section>
                        <section>storey: ${resultsTopPriceArray[tableIndex].storey_range}</section>
                        <section>area: ${resultsTopPriceArray[tableIndex].floor_area_sqm}</section>
                        <section>model: ${resultsTopPriceArray[tableIndex].flat_model}</section>
                        <section>lease: ${resultsTopPriceArray[tableIndex].remaining_lease}</section>
                        <section>resale price: ${resultsTopPriceArray[tableIndex].resale_price}</section> `
    } else if (topOrBottomRange=='Bottom') {
        popupContent = `<section>index: ${tableIndex}</section>
                        <section>sold on: ${resultsLowPriceArray[tableIndex].month}</section>
                        <section>address: ${selectedAddress}</section>
                        <section>type: ${resultsLowPriceArray[tableIndex].flat_type}</section>
                        <section>storey: ${resultsLowPriceArray[tableIndex].storey_range}</section>
                        <section>area: ${resultsLowPriceArray[tableIndex].floor_area_sqm}</section>
                        <section>model: ${resultsLowPriceArray[tableIndex].flat_model}</section>
                        <section>lease: ${resultsLowPriceArray[tableIndex].remaining_lease}</section>
                        <section>resale price: ${resultsLowPriceArray[tableIndex].resale_price}</section> `
    }
                         

    /****************pass address string to nominatim to derive LatLong and add marker to map********************/
    axios.get("https://nominatim.openstreetmap.org/search",{
        params:{
            format:'json',
            q: selectedAddress+" singapore" 
        }
    }).then(function(response){
        console.log(response.data)
        console.log(response.data[0].lat)
        console.log(response.data[0].lon)
        
        let marker=L.marker([response.data[0].lat,response.data[0].lon]).addTo(mymap).bindPopup(popupContent)
        markersGroup.addLayer(marker)
        
        mymap.addLayer(markersGroup)
        
    })

    

}

