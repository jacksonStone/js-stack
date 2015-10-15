/**
 * Created by jacksonstone1 on 6/11/15.
 */

myApp.directive('year', function(){

        return {
            restrict: 'E',
            templateUrl:'/javascripts/views/year.html',
            controller : 'years',
        };

    });