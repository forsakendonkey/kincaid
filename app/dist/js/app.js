angular.module('hangApp',[
    'ui.router',
    'ui.hex'
]);;
angular.module('hangApp').config(function($stateProvider, $urlRouterProvider, $locationProvider){
    'use strict';

    // Enable HTML5 mode
    $locationProvider.html5Mode(true);

    // Unmatched urls redirect to /
    $urlRouterProvider.otherwise('/');
    //
    // State definitions
    $stateProvider
        .state('home',{
            url: "/",
            templateUrl:'features/example/templates/template.html',
            controller:'ExampleController as ec'
        })
        .state('wedding',{
            url: "/wedding",
            templateUrl:'features/wedding/templates/template.html',
            controller:'WeddingController as wc'
        });
});
;
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
;
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
;
angular.module('hangApp').controller('ExampleController',function($scope,ExampleService){
    'use strict';

    var vt = this;

    angular.extend(vt,{
        setCount:function(cV){
            $scope.count = ExampleService.getValue(cV);
        },
        setIP:function(){
            ExampleService.getIP().then(function(data){
                $scope.ip = data.ip;
            });
        }
    });
    angular.extend($scope,{
        header:'Dynamic Header',
        arrayOfNumber:[1,2,3,4,5,6],
        ip:'unknown',
        count:1,
        getCount:function(){
            vt.setCount($scope.count);
        },
        getIP:function(){
            vt.setIP();
        }
    });
});;
angular.module('hangApp').controller('WeddingController',function($scope,ExampleService){
    'use strict';

    var vt = this;

    angular.extend(vt,{
        setCount:function(cV){
            $scope.count = ExampleService.getValue(cV);
        },
        setIP:function(){
            ExampleService.getIP().then(function(data){
                $scope.ip = data.ip;
            });
        }
    });
    angular.extend($scope,{
        header:'Wedding',
        arrayOfNumber:[1,2,3,4,5,6],
        ip:'unknown',
        count:1,
        getCount:function(){
            vt.setCount($scope.count);
        },
        getIP:function(){
            vt.setIP();
        }
    });
});