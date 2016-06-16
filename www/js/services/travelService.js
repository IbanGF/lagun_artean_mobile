function travelService($http){
	return {
		create: function(travel, chosen_destination){
			return $http.post('http://localhost:8000/api/travel/' + chosen_destination, travel);
		}
	};
}
