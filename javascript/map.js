
let mymap = L.map('map').setView([1.35, 103.85], 11)

$(function () {



    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia3NuZ28iLCJhIjoiY2s4OW1hN2VmMDF5eTNpbTFtMnc3bHU4cyJ9.LvZap-kPuG2evKJHeCHsRA'
    }).addTo(mymap);


    // OpenStreetMap geocoder

    // var cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
    //     cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', { attribution: cloudmadeAttribution });

    // var map = new L.Map('map').addLayer(cloudmade).setView(new L.LatLng(48.5, 2.5), 15);

    var osmGeocoder = new L.Control.OSMGeocoder();

    mymap.addControl(osmGeocoder);


})


