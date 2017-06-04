var catViewerService = angular.module('catViewerService', []);
        catViewerService.service('catService',function(){  
        var cats = [];        
        cats = [{
            name: 'India',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
            catViewed:false

        }, {
            name: 'Australia',
            url: 'http://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
            catViewed:false

        }, {
            name: 'South Africa',
            url: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg',
            catViewed:false

        }, {
            name: 'New Zealand',
            url: 'http://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&amp;h=426',
            catViewed:false

        }, {
            name: 'England',
            url: 'http://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
            catViewed:false

        }];
    
        this.GetCats = function() {
            return cats;            
        }
        this.AddCat = function(reqName,reqUrl) {
            cats.push({ name: reqName, url: reqUrl });           
        }

    });