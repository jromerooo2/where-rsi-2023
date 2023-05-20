var map = L.map('map').setView([13.7942, -88.8965], 13);



var osm =  L.tileLayer('https://api.mapbox.com/styles/v1/jromerooo2/cku5okz0z2sie17quh8e698ff/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianJvbWVyb29vMiIsImEiOiJja3U0bjZhdXcxem9kMnBvN3FtNGIwZHNyIn0.7kMOLmyCFYDK9wlDLusOpw', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addParticipant(name,desc, lat, lng){
    //create a markert with a popup and add to map
    var marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${name}</b><br>${desc}`).openPopup();
}

function askData(){
    var name = prompt("What is your name?");
    var desc = prompt("What is your description?");
    var lat = prompt("What is your latitude?");
    var lng = prompt("What is your longitude?");
    addParticipant(name, desc, lat, lng);
}

askData();