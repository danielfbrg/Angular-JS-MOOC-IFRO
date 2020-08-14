angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){
    var weatherChannel = $resource('http://api.openweathermap.org/data/2.5/weather?q=rio%20das%20ostras,Br&units=metric&appid=8540b755cdf75a1ec040ab2723be2591&lang=pt_br');

   
    //http://api.openweathermap.org/data/2.5/weather?q=S%C3%A3o%20Paulo,Br&units=metric&appid=8540b755cdf75a1ec040ab2723be2591&lang=pt_br

    var getWeather = function(){
        weatherChannel.get().$promise.then(function(response){
            $scope.tempo = response;
            console.log(response);
        }, function($promise){
            alert("Erro ao requisitar o Recurso!");
        })
    }

    getWeather();
});