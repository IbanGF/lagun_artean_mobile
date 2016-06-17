function travelsService($http) {
  return {
    getAll: function() {
      return $http.get('http://localhost:8000/api/trips');
    },
    create: function(travel) {
      return $http.post('http://localhost:8000/api/trip', travel);
    },
    delete: function(id) {
      return $http.delete('http://localhost:8000/api/trip/' + id);
    },
  };
}
