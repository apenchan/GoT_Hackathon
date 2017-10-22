app.controller("mainCtrl", function($scope, characterFactory){
  
  characterFactory.allCharacters()
    .then(function(response){
      $scope.characters = response;
    })

    
})