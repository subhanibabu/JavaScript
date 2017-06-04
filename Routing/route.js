	// create the module and name it routeApp
	var routeApp = angular.module('routeApp', ['ngRoute']);

	// configure our routes
	routeApp.config(function($routeProvider) {
		$routeProvider
            
            // route for the view cat page
			.when('/home', {
				templateUrl : 'home.html',
                controller : 'catCickController',
                controllerAs : 'vm'
			})
        
			// route for the view cat page
			.when('/view', {
				templateUrl : 'viewCat.html',
                controller : 'catCickController',
                controllerAs : 'vm'
			})

			// route for the add cat page
			.when('/add', {
				templateUrl : 'addCat.html',
                controller : 'catCickController',
                controllerAs : 'vm'
			})
        
            // route for the update cat page
			.when('/update', {
				templateUrl : 'updateCat.html',
                controller : 'catCickController',
                controllerAs : 'vm'
			})
            .otherwise({
                redirectTo: '/home'
            });
	});