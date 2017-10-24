app.controller('profileCtrl', function($scope, $stateParams, characterFactory){
  if (!$stateParams.profileParam) {
    characterFactory.getProfile($stateParams.id)
      .then(function (profile) {
        $scope.profile = profile;
      })
  } else {
    $scope.profile = $stateParams.profileParam;
  }
  // $scope.getProfile()
})