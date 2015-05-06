angular.module('hangApp').service('ExampleService',function($http,$q,$log){
    'use strict';
    return{
        getIP:function(){
            var defer = $q.defer();
            $http({
                url:'http://ip.jsontest.com',
                method:'GET',
                params:{},
                responseType:'JSON'
            }).success(function(data){
                defer.resolve(data);
                $log.info('Successful retrieval of IP: ' +data.ip);
            }).error(function(err){
                $log.error('ERROR: ' +err);
            });
            return defer.promise;
        },
        getValue:function(val){
            return val+1;
        }
    };

});
