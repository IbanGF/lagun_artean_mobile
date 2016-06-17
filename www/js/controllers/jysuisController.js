function jysuisController($scope, $state, $stateParams, $http, $ionicModal) {
console.log('a');

  var myLatlng = new google.maps.LatLng(43.4833, -1.5667);

  var mapOptions = {
    center: {
      lat: 43.4833,
      lng: -1.5667
    },
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  $scope.map = new google.maps.Map(document.getElementById("map"),
    mapOptions);

  new google.maps.Marker({
    map: $scope.map,
    animation: google.maps.Animation.DROP,
    position: {
      lat: 43.4833,
      lng: -1.5667
    }
  });


  $ionicModal.fromTemplateUrl('templates/activityModal.html', {
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

}


// var marker = new google.maps.Marker({
//     map: $scope.map,
//     animation: google.maps.Animation.DROP,
//     position: latLng
// });
