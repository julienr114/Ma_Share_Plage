function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/accueil.html',
			controller: 'mainController'
		})
		.when('/info', {
			templateUrl: 'views/info.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}

function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .service('todoService', todoService)
    /*.factory('', )*/
    .run(run);


