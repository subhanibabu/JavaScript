angular.module('catClick', [])
    .controller('catCickController', function($scope) {
        var vm = this;
        vm.votes = 0;

        vm.cats = [{
            name: 'India',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
            catViewed: false

        }, {
            name: 'Australia',
            url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
            catViewed: false

        }, {
            name: 'South Africa',
            url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg',
            catViewed: false

        }, {
            name: 'New Zealand',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
            catViewed: false

        }, {
            name: 'England',
            url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
            catViewed: false

        }];

        vm.Allcats = [];
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
        vm.search = function() {
            if (vm.searchText == '') {
                vm.Allcats = vm.cats;
            } else {
                vm.Allcats = vm.cats.filter(function(cat) {
                    return vm.searchText == cat.name;
                });
                vm.Allcats[0].catViewed = true;
            }
        }
        vm.addCat = function() {
            vm.Allcats.push({
                name: vm.name,
                url: vm.url
            });
        }
        vm.resetAll = function() {
            vm.Allcats.pop({
                name: vm.name,
                url: vm.url
            });
            vm.name = '';
            vm.url = '';
            vm.searchText = '';
        }
    });
