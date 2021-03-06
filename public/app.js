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

	this.getWeatherByLoc = function(lat,lng) {
		    $http({
	            method:'get',
	            url:'/weather/' + lat + '/' + lng,
	        }).then(
	            (response) => {
	                this.weather = response
	            },
	            function(){
	            	console.log(lat,lng)
	            })
		}

	this.getLocations = function() {
		$http({
	            method:'get',
	            url:'/locations'
	        }).then(
	            (response) => {
	                this.locations = response.data
	            },
	            function(){
	            	console.log(this.lat,this.lng)
	            })
	}


	this.saveLocation = function() {
		    $http({
	            method:'post',
	            url:'/locations/' + this.name + '/' + this.lat + '/' + this.lng,
	        }).then(
	            (response) => {
	                this.getLocations()
	            },
	            function(){
	            	console.log(this.lat,this.lng)
	            })
	}

	this.deleteLocation = function(id) {
		    $http({
	            method:'delete',
	            url:'/locations/' + id,
	        }).then(
	            (response) => {
	                this.getLocations()
	            },
	            function(){
	            	console.log(this.lat,this.lng)
	            })
	}
	
	this.renameLocation = function(id, newName) {
		if(newName) {
		    $http({
	            method:'put',
	            url:'/locations/' + id + '/' + newName
	        }).then(
	            (response) => {
	                this.getLocations()
	            },
	            function(){
	            	console.log(this.lat,this.lng)
	            })
	    }
	}

	this.getLocations()
}])