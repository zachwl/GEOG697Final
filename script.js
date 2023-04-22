mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaHdsIiwiYSI6ImNsZ29jeWswbDBvanozbm1yeHZ1bjl2b3kifQ.3PzLLd7Fvgsfy2WqYP96_Q';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/zachwl/clgsb1z5e003s01pa8dzudtqp', // style URL
    center: [-97.42, 39.61], // starting position [lng, lat]
    zoom: 4 // starting zoom
});


map.on('click', function(e) {
    
    var features = map.queryRenderedFeatures(e.point);
    if (features.length > 0) {
        var feature = features[0];
        var popupHTML = '<div>';
        for (var property in feature.properties) {
            if (feature.properties.hasOwnProperty(property)) {
            popupHTML += '<strong>' + property + ':</strong> ' + feature.properties[property] + '<br>';
            }
        }
        popupHTML += '</div>';
    }

    var popup = new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(popupHTML)
    .addTo(map);

});