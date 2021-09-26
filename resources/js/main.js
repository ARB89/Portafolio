


/* ======= Google Map ======= */

map = new GMaps({
    div: '#map',
    lat: 50.980187,
    lng: -3.179117,
    scrollwheel: false,
    zoom: 14,
});

map.addMarker({
    lat: 50.980187,
    lng: -3.179117,
    verticalAlign: 'top',
    title: 'Ubicación Ceremonia',



});


map.addMarker({
    lat: 50.969747,
    lng: -3.199985,
    title: 'Ubicación Recepción',
    

});

/*display marker 1 address on load */
google.maps.event.trigger(map.markers[0], 'click');
/*display marker 2 address on load */
google.maps.event.trigger(map.markers[1], 'click');
