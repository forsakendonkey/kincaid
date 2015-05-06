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