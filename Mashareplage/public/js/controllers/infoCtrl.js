// INFO CONTROLLER
function infoCtrl($scope, $routeParams, infoService) {
    var selectedPlage = $routeParams.plage;
    
    var ville = {
        Berck: { title: "Berck sur mer plage" },
        SaintMalo: { title: "Grande Plage Saint-Malo" },
        Royan: { title: "Grande Conche Royan" },
        Hendaye: { title: "Plage des deux Jumeaux Hendaye" },
        Porquerolles: { title: "Plage d'Argent Ils de Porquerolles" },
        Ajaccio: { title: "Plage Saint-François Ajaccio" },
        LaLoupe: { title: "Wild Code Schools Plage La Loupe" }
        }
    
    $scope.title = ville[selectedPlage].title;
    
}
        
    
    
