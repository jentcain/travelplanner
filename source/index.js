const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FlY3VsYSIsImEiOiJjam9nOW05a2cwMnZyM3BsYnU5cmdiYnk4In0.zO6JMzr3LfX6jw3n03_pXQ';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10" 
});

buildMarker('hotel', [-74.009, 40.705]).addTo(map);
buildMarker('activity', [-74.008, 40.704]).addTo(map);
buildMarker('restaurant', [-74.003, 41.000]).addTo(map);
