function travelsController ($scope, $rootScope, $state, $stateParams, $http, ionicMaterialInk, ionicMaterialMotion, $ionicModal) {

$scope.group = {};
  $scope.$parent.clearFabs();

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

    $scope.addTravel =function() {
    // var chosen_destination = $rootScope.trip._id;
    // console.log($rootScope.trip);
    // travelService.create($scope.trip, trip_id).then(function(res){
    //   console.log(res.data);
    // });
  };





// $scope.travels=
// [{
// 	id: "001",
// 	creation: "0001",
// 	start_date: "12/12/15",
// 	end_date: "31/12/15",
// 	budgets: {
//         budget: "500",
//         user: "001",
//       },
//     budget_retenu: "1500",
//     chosen_destination: "London",
//     destinations: [{
//         destination: "London",
//         note: {
//         	value:"100",
//         	userID: "001",
//     		}
//       	},
//       	{
//         destination: "Madrid",
//         note: {
//         	value:"20",
//         	userID: "002",
//     		}
//       	},
//       	{
//         destination: "Miami",
//         note: {
//         	value:"20",
//         	userID: "003",
//     		}
//       	}],
// 	},

// {
// 	id: "002",
// 	creation: "0001start_date",
// 	start_date: "31/12/15",
// 	end_date: "01/01/2016",
// 	budgets: {
//         budget: "900",
//         user: "002",
//       },
//     budget_retenu: "3200",
//     chosen_destination: "Montreal",
//     destinations: [{
//         destination: "Montreal",
//         note: {
//         	value:"100",
//         	userID: "001",
//     		}
//       	},
//       {
//         destination: "Bayonne",
//         note: {
//         	value:"25",
//         	userID: "002",
//     		}
//       	},
//       {
//         destination: "Montpellier",
//         note: {
//         	value:"1",
//         	userID: "003",
//     		}
//       	}],

// }
// ];

$scope.goToTabTravel = function(travel){
$state.go('tab.travel', {aId: travel.name})
}



$scope.TravelFilter = $stateParams.aId;

}