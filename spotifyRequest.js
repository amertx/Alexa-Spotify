//Commands Run
//curl command info web url- https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/?type=artists&time_range=short_term&limit=10&offset=

//step 1: run node js command as node (fileaname) in command prompt
//step 2: get the curl command based on the link above
//step 3:

var SpotifyWebApi = require('spotify-web-api-node');



var clientId = 'f4c03ff11fe8453b8654e0ed3bbd06d2',
 

// // Create the api object with the credentials
// var spotifyApi = new SpotifyWebApi({
//   clientId: clientId,
//   clientSecret: clientSecret
// });

var spotifyApi = new SpotifyWebApi();

// //get an artists top tracks
// spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
//   .then(function(data) {
//     console.log(data.body);
//     }, function(err) {
//     console.log('Something went wrong!', err);
//   });

Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);

  },

  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

// get an artist id
spotifyApi.searchArtists('young the giant')
  .then(function(data) {
    console.log('Search artists by "young the giant"', data.body);
  }, function(err) {
    console.error(err);
  });
