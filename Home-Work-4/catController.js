angular.module('catClick', [])
    .controller('catCickController', function($scope) {
        var vm = this;
        vm.count = 0;
        vm.clickCount1 = 0;
        vm.clickCount2 = 0;

        vm.myFunc = function() {
            vm.count++;
        };

        vm.catmyFunc1 = function() {
            vm.clickCount1++;
        };

        vm.catmyFunc2 = function() {
            vm.clickCount2++;
        };

    });
