/*
 Function to initialize a Google Map.

 More info at: 
 https://developers.google.com/maps/documentation/javascript/adding-a-google-map 
 */

function initMap() {
    // Your location
    const loc = { lat: 38.4404, lng: -122.7141 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
        icon: 'img/map.png'
    });
}