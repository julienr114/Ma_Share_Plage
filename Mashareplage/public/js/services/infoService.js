// INFO SERVICE
function infoService($http) {
		return {
			getshom : function(param) {
				return $http.get('http://shom.opendatasoft.com/api/records/1.0/search?dataset=references-altimetriques-maritimes0&q=' + param + '&facet=zone&facet=rf&facet=organisme&facet=reference' );
            }
		}
};