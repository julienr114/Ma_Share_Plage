// INFO CONTROLLER
function infoCtrl($scope, $routeParams, infoService) {
    var selectedPlage = $routeParams.plage;
    
    var ville = {
        Berck: { title: "Berck sur mer plage", shomid: "berck", weatherid: "3033415", image: "img/berk_sur_mer_plage.jpg", lat: 50.4, lng: 1.6 },
        SaintMalo: { title: "Grande Plage Saint-Malo", shomid: "saint-malo", weatherid: "2978640", image: "img/st_malo_grande_plage.jpg", lat: 48.65, lng: -2.02 },
        Royan: { title: "Grande Conche Royan", shomid: "royan", weatherid: "2982343", image: "img/royan_grande_conche.jpg", lat: 45.63, lng: -1.03 },
        Hendaye: { title: "Plage des deux Jumeaux Hendaye", shomid: "hendaye", weatherid: "3013534", image: "img/hendaye_2_jumeaux.jpg", lat: 43.37, lng: -1.77 },
        Porquerolles: { title: "Plage d'Argent Ils de Porquerolles", shomid: "saint tropez", weatherid: "3012937", image: "img/porquerolles_plage_dargent.jpg", lat: 43.12, lng: 6.14 },
        Ajaccio: { title: "Plage Saint-François Ajaccio", shomid: "ajaccio", weatherid: "6452235", image: "img/ajacio_plage_st_françois.jpg", lat: 41.92, lng: 8.73 },
        LaLoupe: { title: "Wild Code Schools Plage La Loupe", shomid: "", weatherid: "3008418", image: "img/wcs_plage.jpg", lat: 48.47, lng: 1.02 }
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
    
    var myLatLng = new google.maps.LatLng(ville[selectedPlage].lat, ville[selectedPlage].lng);

      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: (myLatLng),
        scrollwheel: true,
        zoom: 10
      });


      // Create a marker and set its position.
      var marker = new google.maps.Marker({
        map: map,
        position: (myLatLng),
        title: $scope.plage
      });    
    
}

    
