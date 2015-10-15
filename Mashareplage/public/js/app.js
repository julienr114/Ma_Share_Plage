function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/accueil.html'
		})
		.when('/info/:plage', {
			templateUrl: 'views/info.html',
            controller: 'infoCtrl'
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
    .controller('infoCtrl', infoCtrl)
    .service('infoService', infoService)
    /*.factory('', )*/
    .run(run);


