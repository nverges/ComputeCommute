$(document).ready(function() {

	let map;
	function initMap() {
	    map = new google.maps.Map(document.getElementById('map'), {
	      center: {lat: -34.397, lng: 150.644},
	      zoom: 15
	    });
	}  

	initMap(); 

	// Get Geolocation
	let geocoder = new google.maps.Geocoder();
	let homeLatLng;
	let service;

	getDetails();

	// 
	function getDetails() {
		let address = '555 S Galleria Way, Chandler, AZ';

		// Get geolocation for address
		geocoder.geocode({address: address}, geoCallBack);
	}
	
	function geoCallBack(results, status) {
		if (status == 'OK') {
			homeLatLng = results[0].geometry.location;
			console.log('homeLatLng: ' + homeLatLng);

			// request object used to search for gas stations withi a 500 meter radius
			let request = {
				location: homeLatLng,
				radius: '2500',
				type: 'gas_station'
			}
			console.log(request);

			// Do a Places nearby search using request info
			service = new google.maps.places.PlacesService(document.createElement('div'));
			service.nearbySearch(request, searchCallBack);

		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	}

	function searchCallBack(results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			console.log(results);
		} else {
			alert('Something went wrong: ' + status);
		}
	}
});


