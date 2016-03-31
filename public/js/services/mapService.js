// TODO SERVICE
    function mapService($http) {
        return {
            get : function() {
                return $http.get('/hike');
            },
            update : function(id, data){
                return $http.put('/hike/' + id, data);
            },
            create : function(data) {
                return $http.post('/hike', data);
            },
            delete : function(id) {
                return $http.delete('/hike/' + id);
            }
        }
    };
