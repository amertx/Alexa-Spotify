var SpotifyWebApi = require('spotify-web-api-node');


var clientId = 'f4c03ff11fe8453b8654e0ed3bbd06d2',
  clientSecret = '882213cd34b24c99b9c0a10da2128294';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
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

//retrieve new releases
spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'USA' })
  .then(function(data) {
    console.log(data.body);
      done();
    }, function(err) {
       console.log("Something went wrong!", err);
    });
  });


//.ajax command
$.ajax("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5",{
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer BQDha8GGRZTQxUgSbxQHrew5ekOysffEQ0Y_OXtnc27ibTQS7lyQWuQFHjDlROhLvnWC5Y29moXonFd6C1yGKnZSnGBEDYHiwJY_joKZDtrZti95Y6IF0zUutFuXgbi6wVnNxqR5rXLR2m6e6qLjDyBN"
  }

},
  success: function (data) {
         console.log(data);
   }
)
