
let mymap =L.map('map').setView([1.35,103.85],11)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3NuZ28iLCJhIjoiY2s4OW1hN2VmMDF5eTNpbTFtMnc3bHU4cyJ9.LvZap-kPuG2evKJHeCHsRA'
}).addTo(mymap);

