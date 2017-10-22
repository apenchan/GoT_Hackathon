app.controller('characterCtrl', function($scope, $stateParams, characterFactory){
  if(!$stateParams.characterParam){
    characterFactory.getCharacter($stateParams.id)
    .then(function(character){
      $scope.character = character
    })
  } else {
    $scope.character = $stateParams.characterParam
  }
})