// var config = require("../../../config.js");

app.factory('characterFactory', function($http, $stateParams){

  var characterFactory = {}

  var allCharacters = function(){
    return $http.get('/characters')
    .then(function(response){
      return response.data
    }, function(err){
      console.log(err)
    })
  };

  var getCharacter = function(id){
    return $http.get('/characters/' + id)
    .then(function(response){
      console.log(response.data)
      return response.data;
    })
  }
  var clientID = 'Client-ID ' + '2c5db418e949842'

  var getCharacterImg = function(){
    console.log('clicked name below')
    console.log($stateParams.characterParam.name)
    return $http.get("https://api.imgur.com/3/gallery/search/?q_exactly="+$stateParams.characterParam.name,
      {headers: {
        'Authorization': clientID
      }
    })
    .then(function(response){
      console.log(response.data)
      return response.data;
    })
  }

  var getProfile = function(){
    console.log($stateParams)
    // var id = user._id
    console.log("creating user profile")
    return $http.get('/profile/')
    .then(function(response){
      return response.data
    })
  }

  return {
    allCharacters: allCharacters,
    getCharacter: getCharacter,
    clientID: clientID,
    getCharacterImg: getCharacterImg,
    getProfile: getProfile
  }

})