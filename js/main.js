// initialize the configuration of map
function initMap() {
   
    // create a new instance of a map
    // configure map with options object
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 40.8054491, lng: -73.9654415},
    	zoom: 12,
    	scrollwheel: false
 	});


    
}

initMap();

