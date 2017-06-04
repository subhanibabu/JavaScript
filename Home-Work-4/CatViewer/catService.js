var catViewerService = angular.module('catViewerService', [])
.service('catService',function($http){       
        var data = [];
        this.GetCats = function() {
                alert("subbu");
            
                $http.get('./result.json').then(function(res) {
                        data = res.data;                    
                    console.log(data);
                    }, function(err) {
                        alert("Subu error" + err.status)
                    });
        }
        
        this.AddCat = function(reqName,reqUrl) {
            cats.push({ name: reqName, url: reqUrl });           
        }

    });