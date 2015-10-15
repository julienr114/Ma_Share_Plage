// INFO CONTROLLER
function infoCtrl($scope, $routeParams, infoService) {
    var selectedPlage = $routeParams.plage;
    
    var ville = {
        Berck: { title: "Berck sur mer plage", shomid: "berck" },
        SaintMalo: { title: "Grande Plage Saint-Malo", shomid: "" },
        Royan: { title: "Grande Conche Royan", shomid: "" },
        Hendaye: { title: "Plage des deux Jumeaux Hendaye", shomid: "" },
        Porquerolles: { title: "Plage d'Argent Ils de Porquerolles", shomid: "" },
        Ajaccio: { title: "Plage Saint-François Ajaccio", shomid: "" },
        LaLoupe: { title: "Wild Code Schools Plage La Loupe", shomid: "" }
        }
    
    $scope.title = ville[selectedPlage].title;
    
    $scope.shom = function(){
        infoService.getshom(ville[selectedPlage].shomid), function(res){
            console.log(res);  
            $scope.maree = res;
            console.log($scope.maree)};
        };
    
    
}
        
    
    
