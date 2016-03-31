    function mapService($http) {
        return {
            get : function() {
                return $http.get('/map');
            },
            update : function(id, data){
                return $http.put('/map/' + id, data);
            },
            create : function(data) {
                return $http.post('/map', data);
            },
            delete : function(id) {
                return $http.delete('/map/' + id);
            }
        }
    };
