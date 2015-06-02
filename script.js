var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination', 'ngRoute', 'ngResource']);

function MyController($scope, $http) {

  $scope.currentPage = 1;
  $scope.pageSize = 10;
  //$scope.fields = [ 'address', 'city', 'email', 'first_name', 'join_date',  'last_name', 'phone', 'state', 'zip'];
  $scope.fields = [ 'first_name', 'last_name', 'state'];

  $http.get('data.json')
       .then(function(res){
          $scope.contacts = res.data;
        });

    $scope.searchFilter = function (obj) {
        if ($scope.stateFilter == 'state') { // State filter
          var re = new RegExp($scope.q, 'i');
        return !$scope.q || re.test(obj.state);  
        }
        else if($scope.stateFilter == 'firstOrlast'){ // Full name filter
        var re = new RegExp($scope.q, 'i');
        return !$scope.q || re.test(obj.first_name) || re.test(obj.last_name);
        }
        else {var re = new RegExp($scope.q, 'i'); // Full text filter
        return !$scope.q || re.test(obj.address) || re.test(obj.city) || re.test(obj.email) || re.test(obj.first_name) || re.test(obj.join_date) || re.test(obj.last_name) || re.test(obj.phone) || re.test(obj.state) || re.test(obj.zip);}
    };

    $scope.showDetails = function(contact){
        $scope.selectedContact = contact;
    }
    $scope.showContactDetails = function(){
        document.getElementById('contact-details').style.display = 'block';
    }

}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
