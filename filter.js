angular.module('myApp')   
   .filter('labelCase', function () {
       return function (input) {
           if (input == 'first_name')
           		return 'First Name';
           	else if (input == 'last_name')
           		return 'Last Name';
           input = input.replace(/([A-Z])/g, ' $1'); // Replaces A-Z with second parameter
           return input[0].toUpperCase() + input.slice(1); // Capitalize first letter and concatenate to the string except the first letter
       };
   })