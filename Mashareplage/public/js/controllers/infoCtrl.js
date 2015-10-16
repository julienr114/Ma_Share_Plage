// INFO CONTROLLER
function infoCtrl($scope, $routeParams, infoService) {
    var selectedPlage = $routeParams.plage;
    
    var ville = {
        Berck: { title: "Berck sur mer plage", shomid: "berck", weatherid: "3033415", image: "img/berk_sur_mer_plage.jpg", lat:"", lng: "" },
        SaintMalo: { title: "Grande Plage Saint-Malo", shomid: "saint-malo", weatherid: "2978640", image: "img/st_malo_grande_plage.jpg", lat: "", lng: "" },
        Royan: { title: "Grande Conche Royan", shomid: "royan", weatherid: "2982343", image: "img/royan_grande_conche.jpg", lat: "", lng: "" },
        Hendaye: { title: "Plage des deux Jumeaux Hendaye", shomid: "hendaye", weatherid: "3013534", image: "img/hendaye_2_jumeaux.jpg", lat: "", lng: "" },
        Porquerolles: { title: "Plage d'Argent Ils de Porquerolles", shomid: "saint tropez", weatherid: "3012937", image: "img/porquerolles_plage_dargent.jpg", lat: "", lng: "" },
        Ajaccio: { title: "Plage Saint-François Ajaccio", shomid: "ajaccio", weatherid: "6452235", image: "img/ajacio_plage_st_françois.jpg", lat: "", lng: "" },
        LaLoupe: { title: "Wild Code Schools Plage La Loupe", shomid: "", weatherid: "3008418", image: "img/wcs_plage.jpg", lat: "", lng: "" }
        }
    
    $scope.title = ville[selectedPlage].title;
    $scope.image = ville[selectedPlage].image;
    
    $scope.shom = function(){
        infoService.getshom(ville[selectedPlage].shomid).then(function(res){
            
            $scope.coef = Math.round(((res.data.records[0].fields.pmve)-(res.data.records[0].fields.bmve))/6.1); 
        });
    }
    
    $scope.shom();

     $scope.weather = function(){
        infoService.getwheater(ville[selectedPlage].weatherid).then(function(res){
            console.log(res);
            $scope.temp = Math.round(res.data.main.temp - 273.15);
            $scope.wind = Math.round(res.data.wind.speed*3.6);
            $scope.winddirection = res.data.wind.deg;
            $scope.meteo = res.data.weather[0].description;
            $scope.icon = res.data.weather[0].icon;
            console.log(res.data.sys.sunrise);
            console.log(res.data.sys.sunset);
            $scope.leve = res.data.sys.sunrise;
            $scope.couche = res.data.sys.sunset;
            });        
    }   
    
    $scope.weather();
    
    
    
    
}
        
    
