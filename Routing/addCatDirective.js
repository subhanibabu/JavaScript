var catViewer = angular.module('catDirective', []);

    catViewer.directive("addCatDirective", function() {
       return {
        restrict : "A",
        template : '<form name="addCatForm" ng-enter="vm.addCat()" class="form-horizontal" novalidate><fieldset><div class="form-group"><div class="col-lg-1"><label for="inputname">Name</label></div> <div class="col-lg-8"><input focus-me="true" type="text" name="catName" ng-model="vm.name" class="form-control" id="inputname" placeholder="Name" required><span class="text-error" ng-show="addCatForm.catName.$touched && addCatForm.catName.$invalid">The name is required.</span></div></div><div class="form-group"><div class="col-lg-1"><label for="inputurl">URL</label></div><div class="col-lg-8"><input name="catUrl" type="url" ng-model="vm.url" class="form-control" id="inputurl" placeholder="url" required><span class="text-error" ng-show="addCatForm.catUrl.$touched && addCatForm.catUrl.$invalid">Plese provide valid url.</span></div></div><button ng-disabled="addCatForm.$invalid" type="button" class="btn btn-success">Save</button><button ng-click="vm.resetAll()" type="button" class="btn btn-default">cancel</button></fieldset></form>'
    };
    });
    
    catViewer.directive("voteSpinnerDirective", function() {
       return {
        restrict : "A",
        template : '<div class="row"><div class="col-md-2 col-md-offset-1"><select ng-model="selectedName" ng-click="vm.selectedCat(selectedName);" ng-options="x.name for x in vm.Allcats"></select></div><div class="col-md-6"><img ng-src="{{selectedName.url}}" height="100px;"><div class="input-group col-md-6 col-md-offset-3"><i title="Up Votes" ng-click="vm.changeUpVote()" class="fa fa-arrow-circle-up fa-2x"></i><br><i title="Down Votes" ng-click="vm.changeDownVote()" class="fa fa-arrow-circle-down fa-2x"></i></div><div>Name :{{selectedName.name}}<br/>Selected Cat clicks:{{vm.votes}}</div><div ng-show="vm.votes > 0"><i class="fa fa-smile-o fa-5x" aria-hidden="true"></i></div><div ng-show="vm.votes == 0"><i class="fa fa-meh-o fa-5x" aria-hidden="true"></i></div><div ng-show="vm.votes < 0"><i class="fa fa-frown-o fa-5x" aria-hidden="true"></i></div></div></div>'
    };
    });

    catViewer.directive("ngEnter", function() {
       return function(scope, element, attrs){
           element.bind("keypress", function(event){
               if(event.which === 13){
                   scope.$apply(function(){
                      scope.$eval(attrs.ngEnter);
                   });
               }
           })
       };
    });

    catViewer.directive('focusMe', function($timeout, $parse) {
      return {
        link: function(scope, element, attrs) {
          var model = $parse(attrs.focusMe);
          scope.$watch(model, function(value) {
            if(value === true) { 
              $timeout(function() {
                element[0].focus(); 
              });
            }
          });
        }
      };
    });