$(document).ready(function() {

	const placesApiKey = 'AIzaSyCgqz_-JkZ-48Qihj__Tl29ZddXQKXs9d4';
	let latitude = 33.299878;
	let longitude = -111.841754;
	// Radius in meters
	let radius = 1609.34;
	let queryUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.299878,-111.841754&radius=500&type=gas_station&key=AIzaSyCgqz_-JkZ-48Qihj__Tl29ZddXQKXs9d4`;
	console.log(queryUrl);

	$.ajax({
	url: queryUrl,
	type: 'GET',
	dataType: 'json',
	crossDomain: true
	})
	.done(function(response) {
		console.log("success");
		// console.log(response);
	})
	.fail(function(response) {
		console.log("error");
		console.log(response);
	})
	.always(function() {
		console.log("complete");
	});	
});

