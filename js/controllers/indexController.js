var app = angular.module("myApp",[]);
	app.controller("myCtrl",function ($scope) {
		$scope.prueba = "Hola mundo";
		$scope.mostrarArticulo = false;

		$scope.showWindow = function(){
			$scope.mostrarArticulo = !$scope.mostrarArticulo;
		}	
	});