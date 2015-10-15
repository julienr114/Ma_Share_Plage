// INFO SERVICE
function infoService($http) {
		return {
			get : function() {
				return $http.get('');
            }
		}
};