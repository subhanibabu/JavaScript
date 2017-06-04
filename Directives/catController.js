var catViewer = angular.module('catViewer', ['catViewerService','catDirective']);
    catViewer.controller('catCickController', function($scope, catService) {
        var vm = this;
        vm.votes = 0;
        
        vm.cats = catService.GetCats();
    
        vm.Allcats = [];
        vm.Allcats = vm.cats;

        vm.selectedCat = function() {
            vm.votes = 0;            
        }
        vm.changeUpVote = function() {
            vm.votes++;
        }
        vm.changeDownVote = function() {
            vm.votes--;
        }
        vm.search = function() {
            if (vm.searchText == '') {
                vm.Allcats = vm.cats;
            } else {
                vm.Allcats = vm.cats.filter(function(cat) {
                    return vm.searchText == cat.name;
                });
                vm.Allcats[0].catViewed=true;
            }
        }
        vm.addCat = function(){
            catService.AddCat(vm.name, vm.url);
        }
        vm.resetAll = function() {
            vm.Allcats.pop({ name: vm.name, url: vm.url });
            vm.name = '';
            vm.url = '';
            vm.searchText = '';
        }
    
    });