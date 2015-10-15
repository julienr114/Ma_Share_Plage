// INFO SERVICE
function infoService($http) {
		return {
			getshom : function(param) {
				return $http.get('http://shom.opendatasoft.com/api/records/1.0/search?dataset=references-altimetriques-maritimes0&q=' + param + '&facet=zone&facet=rf&facet=organisme&facet=reference' );
            },
            getwheater : function(param) {
				return $http.get('api.openweathermap.org/data/2.5/weather?id=' + param + '&APPID=44b23ba24dd8ae0dd9fd42de7411dc5c' );
            }
		}
};