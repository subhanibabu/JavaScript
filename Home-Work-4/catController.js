angular.module('catClick', [])
  .controller('catCickController', ['$scope', function($scope) {
    var vm = this;
    vm.count = 0;      
    vm.myFunc = function() {
      vm.count++;
    };
  }]);