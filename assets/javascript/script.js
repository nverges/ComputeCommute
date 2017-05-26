$(document).ready(function() {

	const placesApiKey = 'AIzaSyCgqz_-JkZ-48Qihj__Tl29ZddXQKXs9d4';
	let latitude = 33.299878;
	let longitude = -111.841754;
	// Radius in meters
	let radius = 1609.34;
	let queryUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.299878,-111.841754&radius=500&type=gas_station&key=AIzaSyA3LZgFbGgX49E8jhWFSFFp_psnAt1ju_c`;



function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': placesApiKey,
    // Your API key will be automatically added to the Discovery Document URLs.
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    // clientId and scope are optional if auth is not required.
    // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    // 'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.people.people.get({
      'resourceName': 'people/me',
      'requestMask.includeField': 'person.names'
    });
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);

    
});

