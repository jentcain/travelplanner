const mapboxgl = require('mapbox-gl');

module.exports = (type, coord) => {
    let marker = document.createElement("img");

    if (type === 'activity') {
        marker.src = 'http://i.imgur.com/WbMOfMl.png';
    } else if (type === 'hotel') {
        marker.src = 'http://i.imgur.com/D9574Cu.png';
    } else if (type === 'restaurant') {
        marker.src = 'http://i.imgur.com/cqR6pUI.png';
    } else {
        marker.src = "http://ninjabetic.squarespace.com/storage/post-images/tack.jpg?__SQUARESPACE_CACHEVERSION=1372863871597";
    }
    marker.style.width = '20px';

    return new mapboxgl.Marker(marker).setLngLat(coord);
}
