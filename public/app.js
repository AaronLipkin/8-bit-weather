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

	this.getWeatherByPlace = function() {
		$http({
	            method:'get',
	            url:'http://maps.googleapis.com/maps/api/geocode/json?address=' + this.address,
	        }).then(
	            (location) => {
	            	console.log(location)
	            	this.lat = location.data.results[0].geometry.location.lat
	            	this.lng = location.data.results[0].geometry.location.lng
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
	            },
	            function(){
	            	console.log(this.lat,this.lng)
	            })
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

	this.saveLocation - function() {
		$http({
	            method:'post',
	            url:'/users/' + this.name + '/' + this.password,
	        }).then(
	            (response) => {
	                this.session = response
	            },
	            function(){
	            	console.log('shit')
	            })
	}
}])

