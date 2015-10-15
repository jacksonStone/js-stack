//myApp is found in public/javascripts/app.js

myApp.controller('years', ['$scope', '$sce', '$http', function($scope, $sce, $http){
    $scope.name = 'Jackson';
    $http.get('/data').then(function(result){

        $scope.coolThings= result.data;
        console.log("cool Things: " + $scope.coolThings.toString());

    });

    $scope.sanitize = function(dummyString){return $sce.trustAsHtml(dummyString)};

}]);