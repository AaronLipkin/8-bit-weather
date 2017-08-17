var app = angular.module('PixelWeather', []);

app.controller('WeatherController', ['$http', function($http){

	this.getWeather = function() {
		const onPositionUpdate = (position) => {
		    this.lat = position.coords.latitude;
		    this.lng = position.coords.longitude;

		    $http({
	            method:'get',
	            url:'/weather/' + this.lat + '/' + this.lng,
	        }).then(
	            (response) => {
	                this.weather = response
	            },
	            function(){
	            	console.log(this.lat,this.lng)
	            })
	    }
			if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
			console.log(this.lat,this.lng)
		}


}])

app.controller('UserController', ['$http', function($http) {
	this.login = function() {
			$http({
	            method:'get',
	            url:'/sessions/' + this.name + '/' + this.password,
	        }).then(
	            (response) => {
	                this.session = response
	            },
	            function(){
	            	console.log('shit')
	            })
		}
}])

