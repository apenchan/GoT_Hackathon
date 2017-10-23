app.controller('characterCtrl', function($scope, $stateParams, characterFactory){

  $scope.characterImg = []

  if(!$stateParams.characterParam){
    characterFactory.getCharacter($stateParams.id)
    .then(function(character){
      $scope.character = character
    })
  } else {
    $scope.character = $stateParams.characterParam
  }
  $scope.getCharacterImg = function(){
    characterFactory.getCharacterImg($stateParams.name)
    .then(function(response){
      console.log("Im here")
      console.log(response.data)
      $scope.characterImg = response.data;
      // $scope.images.push.
    })
    $scope.quanity=10;
  }

  $scope.getCharacterImg ();
})