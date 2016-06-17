function groupService($http){
	return {
		get: function(){
			return $http.get('http://localhost:8000/api/groupes/');
		},
		create: function(group, user_id){
			return $http.post('http://localhost:8000/api/groupe/' + user_id, group);
		},
		delete: function(group_id){
			return $http.delete('http://localhost:8000/api/groupe/' + group_id);
		},
		addUserToGroup: function(group_id, user_id){
			return $http.put('http://localhost:8000/api/groupe/' + group_id + '/' + user_id);
		},
		removeUserFromGroup: function(group_id, user_id){
			return $http.delete('http://localhost:8000/api/groupe/' + group_id + '/' + user_id);
		}
	};
}
