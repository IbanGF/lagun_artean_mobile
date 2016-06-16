function voyageController($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    // $timeout(function() {
    //     ionicMaterialMotion.fadeSlideInRight({
    //         startVelocity: 3000
    //     });
    // }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
  }
