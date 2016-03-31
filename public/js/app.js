
    function run($rootScope, $location){
        var path = function() { return $location.path(); };
        $rootScope.$watch(path, function(newVal, oldVal){
            $rootScope.activetab = newVal;
        });
    }
    angular.module('app', ['ngRoute','ngAnimate'])
        .config(routes)
        .controller('mainController', mainController)
        .service('todoService', todoService)
        .run(run);
    
