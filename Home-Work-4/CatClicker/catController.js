angular.module('catClick', [])
    .controller('catCickController', function($scope) {
       
        var vm = this;
        vm.count = 0;
        vm.clickCount1 = 0;
        vm.clickCount2 = 0;
        vm.selectedCatClicks=0;
        vm.totalclicks=0;
    
        vm.myFunc = function() {
            vm.count++;
        };

        vm.catmyFunc1 = function() {
            vm.clickCount1++;
        };

        vm.catmyFunc2 = function() {
            vm.clickCount2++;
        };             
        vm.cats = [{
            name: 'Abyssinian',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426'

        }, {
            name: 'American Curl',
            url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',

        }, {
            name: 'American Shorthair',
            url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg'

        }, {
            name: 'Asian',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',

        }, {
            name: 'Asian Semi-longhair',
            url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496'

        }];
        vm.selecteCatClick=function() {
            vm.selectedCatClicks++;
            vm.totalclicks++;
        }
        vm.selectedCat= function() {
            vm.selectedCatClicks = 0;
        }
       });