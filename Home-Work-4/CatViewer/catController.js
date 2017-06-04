var catViewer = angular.module('routeApp', ['catViewerService']);
    catViewer.controller('catCickController', function($scope, catService) {
        var vm = this;
        vm.votes = 0;
        vm.Allcats = [];
        
        vm.cats = catService.GetCats();
        
        vm.Allcats = vm.cats;
       
        vm.selectedCat = function() {
            vm.votes = 0;            
        }
        vm.changeVote = function(flag) {
            if (flag == 'up') {
                vm.votes++;
            } else {
                vm.votes--;
            }
        }

        vm.addCat = function(){
            catService.AddCat(vm.name, vm.url);
        }
        
        vm.resetAll = function() {
            vm.Allcats.pop({ name: vm.name, url: vm.url });
        }
    
    });