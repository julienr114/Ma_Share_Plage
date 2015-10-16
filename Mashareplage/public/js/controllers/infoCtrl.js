// INFO CONTROLLER
function infoCtrl($scope, $routeParams, infoService) {
    var selectedPlage = $routeParams.plage;
    
    
    var ville = {
        Berck: { title: "Berck sur mer plage - Berck", shomid: "berck", weatherid: "3033415", image: "img/berk_sur_mer_plage.jpg", lat: 50.4, lng: 1.6, twitterlien: "https://twitter.com/hashtag/berckplage", twitterid: "654834439940386816", twittertitle: "Tweets sur #berckplage" },
        SaintMalo: { title: "Grande Plage - Saint-Malo", shomid: "saint-malo", weatherid: "2978640", image: "img/st_malo.jpg", lat: 48.65, lng: -2.02, twitterlien: "https://twitter.com/hashtag/saintmaloplage", twitterid: "654834838126641156", twittertitle: "Tweets sur #saintmaloplage" },
        Royan: { title: "Grande Conche - Royan", shomid: "royan", weatherid: "2982343", image: "img/royan.jpg", lat: 45.63, lng: -1.03, twitterlien: "https://twitter.com/hashtag/grandeconche", twitterid: "654835651943206912", twittertitle: "Tweets sur #grandeconche" },
        Hendaye: { title: "Plage des deux Jumeaux - Hendaye", shomid: "hendaye", weatherid: "3013534", image: "img/hendaye_2_jumeaux.jpg", lat: 43.37, lng: -1.77, twitterlien: "https://twitter.com/hashtag/hendaye2jumeaux", twitterid: "654836265276280832", twittertitle: "Tweets sur #hendaye2jumeaux" },
        Porquerolles: { title: "Plage d'Argent - Ile de Porquerolles", shomid: "saint tropez", weatherid: "3012937", image: "img/porquerolles_plage_dargent.jpg", lat: 43.12, lng: 6.14, twitterlien: "https://twitter.com/hashtag/porquerolles", twitterid: "654836615492276224", twittertitle: "Tweets sur #porquerolles" },
        Ajaccio: { title: "Plage Saint-François - Ajaccio", shomid: "ajaccio", weatherid: "6452235", image: "img/ajacio.jpg", lat: 41.92, lng: 8.73, twitterlien: "https://twitter.com/hashtag/ajaccio-plage", twitterid: "654836821826928640", twittertitle: "Tweets sur #ajaccio-plage" },
        LaLoupe: { title: "Wild Code Schools Plage - La Loupe", shomid: "", weatherid: "3008418", image: "img/wcs_plage.jpg", lat: 48.47, lng: 1.02, twitterlien: "https://twitter.com/hashtag/WCSplage", twitterid: "654754580832497664", twittertitle: "Tweets sur #WCSplage" }
}
    
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

    $scope.title = ville[selectedPlage].title;
    $scope.image = ville[selectedPlage].image;
    $scope.twitter = ville[selectedPlage].twitterlien;
    $scope.twitterid = ville[selectedPlage].twitterid;
    $scope.twittertitle = ville[selectedPlage].twittertitle;
    
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
        icon: "img/parasol.png",
        title: $scope.plage
      });    
    
}

    
