let startLayer = L.tileLayer.provider("OpenTopoMap");

let map = L.map("map", {
    center: [0, 0],
    zoom: 2,
    layers: [
        startLayer
    ]
});

let circleGroup = L.featureGroup().addTo(map);

L.control.layers({
    "OpenTopoMap": startLayer,
    "OpenStreetMap.Mapnik": L.tileLayer.provider("OpenStreetMap.Mapnik"),
    "CyclOSM": L.tileLayer.provider("CyclOSM"),
    "Stamen.Watercolor": L.tileLayer.provider("Stamen.Watercolor"),
    "Stamen.TerrainBackground": L.tileLayer.provider("Stamen.TerrainBackground"),
    "Esri.WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
}, {
    "Thematische Darstellung": circleGroup
}).addTo(map)

L.marker([0, 0]).addTo(map);

console.log(CONFIRMED);

let drawCircles = function(data){}
// for-Schleife über alle Arrays der CONFIRMED Einträge:

for (let i = 1; i < CONFIRMED.length; i++) {
    let row = CONFIRMED[i];
    // console.log(row[2],row[3]);
    let reg = `${row[0]} ${row[1]}`;
    let lat = row[2];
    let lng = row[3];
    let val = row[row.length - 1];
    // let mrk = L.marker([row[2],row[3]]).addTo(map);
    // mrk.bindPopup(`${row[0]} ${row[1]}: ${val}`);
    let s = 0.5;
    let r = Math.sqrt(val * s / Math.PI);
    let circle = L.circleMarker([lat, lng], {
        radius: r
    }).addTo(circleGroup);
    circle.bindPopup(`${reg}: ${val}`);
}