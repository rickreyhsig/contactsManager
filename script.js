var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  //$scope.fields = [ 'address', 'city', 'email', 'first_name', 'join_date',  'last_name', 'phone', 'state', 'zip'];
  $scope.fields = [ 'first_name', 'last_name', 'state'];

  $http.get('data.json')
       .then(function(res){
          $scope.contacts = res.data;
        });


  $scope.getFilter = function(obj) {
    var filter = {};
    if ($scope.stateFilter == 'firstOrlast'){
        // Let fullNameFilter do the filtering
        //var re = new RegExp($scope.q, 'i');
        //return !$scope.q || re.test(obj.first_name) || re.test(obj.last_name);
        //searchFilter
        //console.log($scope.stateFilter);
        return;
    }
    else if ($scope.stateFilter == 'state'){
        //console.log($scope.stateFilter);
        filter[$scope.stateFilter] = $scope.q;
         }
    return filter;
    };   

    $scope.searchFilter = function (obj) {
        //var filter = {};
        //if ($scope.stateFilter == 'state'){
        // Let fullNameFilter do the filtering
        //var re = new RegExp($scope.q, 'i');
        //return !$scope.q || re.test(obj.first_name) || re.test(obj.last_name);
        //searchFilter
        console.log($scope.stateFilter);
        if ($scope.stateFilter == 'state') {
          var re = new RegExp($scope.q, 'i');
        return !$scope.q || re.test(obj.state);  
        }
       // }
        else if($scope.stateFilter == 'firstOrlast'){
        var re = new RegExp($scope.q, 'i');
        return !$scope.q || re.test(obj.first_name) || re.test(obj.last_name);
        }
        else {var re = new RegExp($scope.q, 'i');
        return !$scope.q || re.test(obj.first_name) || re.test(obj.last_name);}
    };

}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
