function groupService($http){
	return {
		create: function(group, user_id){
			return $http.post('http://localhost:8000/api/groupe/' + user_id, group);
		}
	};
}
