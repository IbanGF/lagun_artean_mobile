function loginCtrl($scope, $timeout, $stateParams, ionicMaterialInk, $rootScope, $location, connectService) {
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.$parent.clearFabs();
  ionicMaterialInk.displayEffect();

  $scope.connect = function() {
    console.log($scope.user);
    connectService.connect($scope.user).then(function(res) {
      console.log(res.data);
      $rootScope.token = res.data.token;
      $rootScope.user = res.data.user;
      $scope.user = {};
      $location.path('/app/home');
    }).catch(function() {
      console.log('error');
      $rootScope.loginMessage.title = "Connexion error";
      $rootScope.loginMessage.message = "Error login or password";
    });
  };
}
