function mygroupsController($rootScope, $scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, $ionicModal, groupService) {

  $scope.group = {};
  $scope.$parent.clearFabs();

  $ionicModal.fromTemplateUrl('templates/addGroupModal.html', {
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

  $scope.addGroup =function() {
    var user_id = $rootScope.user._id;
    console.log($rootScope.user);
    groupService.create($scope.group, user_id).then(function(res){
      console.log(res.data);
    });
  };

  // // Set Motion
  // $timeout(function() {
  //   ionicMaterialMotion.slideUp({
  //     selector: '.slide-up'
  //   });
  // }, 300);

  // $timeout(function() {
  //   ionicMaterialMotion.fadeSlideInRight({
  //     startVelocity: 3000
  //   });
  // }, 700);

  // // Set Ink
  // ionicMaterialInk.displayEffect();
}
