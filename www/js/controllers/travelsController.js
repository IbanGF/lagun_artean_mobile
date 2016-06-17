function travelsController($scope, $rootScope, $state, $stateParams, $http, ionicMaterialInk, ionicMaterialMotion, $ionicModal, travelsService) {


  $scope.trip = {};
  $scope.trip.destinations = [];
  $scope.trip.destinations.push({
    ratings: []
  });
  $scope.trip.destinations.push({
    ratings: []
  });
  $scope.trip.destinations.push({
    ratings: []
  });
  $scope.$parent.clearFabs();

  function load() {
    travelsService.getAll().then(function(res) {
      $scope.travels = res.data;
    });
  }

  load();

  $ionicModal.fromTemplateUrl('templates/addTravelModal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.addTravel = function() {
    $scope.closeModal();
    $scope.trip.destinations[0]['ratings'].push({
      rating: 5,
      user_id: $rootScope.user._id
    });
    $scope.trip.destinations[1]['ratings'].push({
      rating: 3,
      user_id: $rootScope.user._id
    });
    $scope.trip.destinations[2]['ratings'].push({
      rating: 1,
      user_id: $rootScope.user._id
    });
    $scope.trip.budgets[0].user_id = $rootScope.user._id;
    console.log($scope.trip);
    travelsService.create($scope.trip).then(function(res) {
      $scope.trip = {};
      load();
      console.log(res.data);
    });
  };

  $scope.deleteTrip = function(travel) {
    travelsService.delete(travel._id).then(function(res) {
      load();
    });
  };

}
