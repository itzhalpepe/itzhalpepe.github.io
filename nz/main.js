//{var mymap = L.map('map').setView([-41.327222, 174.805278], 13);

//L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//maxZoom: 18,
//id: 'mapbox/streets-v11',
//tileSize: 512,
//zoomOffset: -1,
//accessToken: 'pk.eyJ1IjoiY2d1dGgiLCJhIjoiY2syZGVpbzFkMDJpeDNibGtuNnhucDJnMiJ9.YbgYZkJ7Wcb_6wp6GvupHA'
//}).addTo(mymap);

//marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");

//var popup = L.popup()
//  .setLatLng([-41.327222, 174.805278])
//  .setContent("Hier befindet sich der Flughafen von Wellington.")
//  .openOn(mymap);

//var popup = L.popup();

//function onMapClick(e) { 
//  popup
//  .setLatLng(e.latlng)
//  .setContent("You clicked the map at " + e.latlng.toString())
//  .openOn(mymap);
//}

//mymap.on('click', onMapClick);


let map = document.querySelector("#map")
var mymap = L.map('map').setView([-41.327222, 174.805278], 13);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>tributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https:/ntopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);


var popup = L.marker([-41.327222, 174.805278]).addTo(mymap);

marker.bindPopup("<b>Flughafen von Wellington</b><br>Hauptstadt Neuseelands").openPopup();