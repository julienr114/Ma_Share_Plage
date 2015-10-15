// INFO CONTROLLER
function infoCtrl($scope, $routeParams, infoService) {
    var selectedPlage = $routeParams.plage;
    
    var ville = {
        Berck: { title: "Berck sur mer plage", shomid: "berck", image: "img/berk_sur_mer_plage.jpg" },
        SaintMalo: { title: "Grande Plage Saint-Malo", shomid: "", image: "img/st_malo_grande_plage.jpg" },
        Royan: { title: "Grande Conche Royan", shomid: "", image: "img/royan_grande_conche.jpg" },
        Hendaye: { title: "Plage des deux Jumeaux Hendaye", shomid: "", image: "img/hendaye_2_jumeaux.jpg" },
        Porquerolles: { title: "Plage d'Argent Ils de Porquerolles", shomid: "", image: "img/porquerolles_plage_dargent.jpg" },
        Ajaccio: { title: "Plage Saint-François Ajaccio", shomid: "", image: "img/ajacio_plage_st_françois.jpg" },
        LaLoupe: { title: "Wild Code Schools Plage La Loupe", shomid: "", image: "img/wcs_plage.jpg" }
        }
    
    $scope.title = ville[selectedPlage].title;
    $scope.image = ville[selectedPlage].image;
    
    $scope.shom = function(){
        infoService.getshom(ville[selectedPlage].shomid), function(res){
            console.log(res);  
            $scope.maree = res;
            console.log($scope.maree)};
        };
    
    
}
        
    
    
