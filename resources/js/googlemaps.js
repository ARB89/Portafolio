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
        infoWindow: {
            content: '<div class="note">Ceremonia</div><h4 class="map-title script">Iglesia San Paulo</h4><div class="address"><span class="region">Direcci&oacute;n</span><br><span class="postal-code">C&oacute;digo postal</span><br><span class="city-name">Ciudad</span></div>'
        }
        
        
    });
    

    map.addMarker({
        lat: 50.969747,
        lng: -3.199985,
        title: 'Ubicación Recepción',      
        infoWindow: {
            content: '<div class="note">Recepción</div><h4 class="map-title script">La Casa Manor</h4><div class="address"><span class="region">Direcci&oacute;n</span><br><span class="postal-code">C&oacute;digo postal</span><br><span class="city-name">Ciudad</span></div>'
        } 
        
    });
    
    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');