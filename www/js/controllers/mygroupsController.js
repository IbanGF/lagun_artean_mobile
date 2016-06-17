function mygroupsController($rootScope, $scope, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, $ionicModal, groupService, userService) {

  $scope.groupe = {};
  $scope.choice = false;

  function load() {
    groupService.get().then(function(res) {
      $scope.groupes = res.data;
    });
    userService.getAll().then(function(res) {
      $scope.users = res.data;
    });
  }

  load();

  $scope.$parent.clearFabs();

  // Modal 1
  $ionicModal.fromTemplateUrl('templates/addGroupModal.html', {
    id: '1', // We need to use and ID to identify the modal that is firing the event!
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oModal1 = modal;
  });

  // Modal 2
  $ionicModal.fromTemplateUrl('templates/addUserModal.html', {
    id: '2', // We need to use and ID to identify the modal that is firing the event!
    scope: $scope,
    backdropClickToClose: false,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.oModal2 = modal;
  });

  $scope.openModal = function(index) {
    if (index == 1) $scope.oModal1.show();
    else $scope.oModal2.show();
  };

  $scope.closeModal = function(index) {
    if (index == 1) $scope.oModal1.hide();
    else $scope.oModal2.hide();
  };

  /* Listen for broadcasted messages */

  $scope.$on('modal.shown', function(event, modal) {
    console.log('Modal ' + modal.id + ' is shown!');
  });

  $scope.$on('modal.hidden', function(event, modal) {
    console.log('Modal ' + modal.id + ' is hidden!');
  });

  // Cleanup the modals when we're done with them (i.e: state change)
  // Angular will broadcast a $destroy event just before tearing down a scope
  // and removing the scope from its parent.
  $scope.$on('$destroy', function() {
    console.log('Destroying modals...');
    $scope.oModal1.remove();
    $scope.oModal2.remove();
  });

  $scope.addGroup = function() {
    var user_id = $rootScope.user._id;
    console.log($scope.groupe);
    $scope.closeModal(1);
    groupService.create($scope.groupe, user_id).then(function(res) {
      load();
    });
  };

  $scope.deleteGroup = function(group) {
    groupService.delete(group._id).then(function(res) {
      load();
    });
  };

  function findUsersNotInGroup(){
    for (x = 0; x < $scope.selectedGroup.users.length; x++) {
      console.log($scope.selectedGroup.users[x]._id);
      var index = $scope.usersNotInGroup.map(function(e) { return e._id; }).indexOf($scope.selectedGroup.users[x]._id);
      console.log(index);
      if (index >= 0) {
        $scope.usersNotInGroup.splice(index, 1);
      }
    }
  }

  $scope.selectGroup = function(group) {
    $scope.selectedGroup = group;
    $scope.usersNotInGroup = _.clone($scope.users);
    findUsersNotInGroup();
    console.log($scope.usersNotInGroup);
  };

  $scope.addUserToGroup = function(user) {
    groupService.addUserToGroup($scope.selectedGroup._id, user._id).then(function(res) {
      console.log(res.data);
      findUsersNotInGroup();
      load();
    });
  };

  $scope.removeUserFromGroup = function(user) {
    groupService.removeUserFromGroup($scope.selectedGroup._id, user._id).then(function(res) {
      console.log(res.data);
      findUsersNotInGroup();
      load();
    });
  };

  // Set Motion
  $timeout(function() {
    ionicMaterialMotion.slideUp({
      selector: '.slide-up'
    });
  }, 300);

  $timeout(function() {
    ionicMaterialMotion.fadeSlideInRight({
      startVelocity: 3000
    });
  }, 700);

  // Set Ink
  ionicMaterialInk.displayEffect();
}
