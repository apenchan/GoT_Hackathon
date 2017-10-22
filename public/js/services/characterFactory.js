app.factory('characterFactory', function($http){

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

  return {
    allCharacters: allCharacters,
    getCharacter: getCharacter
  }

})