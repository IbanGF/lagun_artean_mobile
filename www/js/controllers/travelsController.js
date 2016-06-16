function travelsController ($scope, $state, $stateParams, $http) {
	console.log('ta mere!');
$scope.tests = [1,2,3,4,5,6];
$scope.travels=
[{
	id: "001",
	creation: "0001",
	start_date: "12/12/15",
	end_date: "31/12/15",
	budgets: {
        budget: "500",
        user: "001",
      },
    budget_retenu: "1500",
    chosen_destination: "London",
    destinations: [{
        destination: "London",
        note: {
        	value:"100",
        	userID: "001",
    		}
      	},
      	{
        destination: "Madrid",
        note: {
        	value:"20",
        	userID: "002",
    		}
      	},
      	{
        destination: "Miami",
        note: {
        	value:"20",
        	userID: "003",
    		}
      	}],
	},

{
	id: "002",
	creation: "0001start_date",
	start_date: "31/12/15",
	end_date: "01/01/2016",
	budgets: {
        budget: "900",
        user: "002",
      },
    budget_retenu: "3200",
    chosen_destination: "Montreal",
    destinations: [{
        destination: "Montreal",
        note: {
        	value:"100",
        	userID: "001",
    		}
      	},
      {
        destination: "Bayonne",
        note: {
        	value:"25",
        	userID: "002",
    		}
      	},
      {
        destination: "Montpellier",
        note: {
        	value:"1",
        	userID: "003",
    		}
      	}],

}
];

$scope.goToTabTravel = function(travel){
$state.go('tab.travel', {aId: travel.name})
}



$scope.TravelFilter = $stateParams.aId;

}