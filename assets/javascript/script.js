$(document).ready(function() {

	var map;
	function initMap() {
	    map = new google.maps.Map(document.getElementById('map'), {
	      center: {lat: -34.397, lng: 150.644},
	      zoom: 15
	    });
	}  

	initMap(); 

	// Get Geolocating
	let geocoder = new google.maps.Geocoder();
	let homeLatLng;

	// Get geolocation for address
	function codeAddress() {
		let address = '1600 Amphitheatre Parkway, Mountain View, CA';

		geocoder.geocode({address: address}, (results, status) => {
			if (status == 'OK') {
				homeLatLng = results[0].geometry.location;
				console.log(homeLatLng.lat(), homeLatLng.lng());
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}

	codeAddress();
});


