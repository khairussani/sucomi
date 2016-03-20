
var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('AretisListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/users/aretis.json').success(function(data) {
      $scope.aretis = data;
    });
  }]);

mainControllers.controller('MainController', ['$scope', '$http',
  function($scope, $http) {
    

  }]);

mainControllers.controller('HeaderController', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        console.log($location.path()); 
        return viewLocation === $location.path();
    };

  }]);

mainControllers.controller('SiriListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/komik/siri.json').success(function(data) {
      $scope.siri = data;
    });
  }]);

mainControllers.controller('SiriDetailCtrl', ['$scope', '$routeParams', '$http','$log',
  function($scope, $routeParams, $http,$log) 
  {
  	
    $http.get('/data/komik/' + $routeParams.namaSiri + '.json').success(function(data) 
    {
      $scope.siriDetail = data;
    });

  }]);

mainControllers.controller('EpisodDetailCtrl', ['$scope', '$routeParams', '$http','$log',
  function($scope, $routeParams, $http,$log) 
  {
    $scope.namaSiri = $routeParams.namaSiri;
    $scope.episod = $routeParams.episod;
    $scope.totalPanel = $routeParams.totalPanel;

     $scope.range = function(count){

      var totalEpisod = []; 

      for (var i = 0; i < count; i++) { 
        totalEpisod.push(i) 
      } 

      return totalEpisod;
    };

  }]);

mainControllers.controller('EditorListController', ['$scope', '$http','$log',
  function($scope,$http,$log) 
  {
    $http.get('data/users/editor.json').success(function(data) 
    {
      $scope.listEditor = data;
    });

  }]);

mainControllers.controller('RumbleListCtrl', ['$scope', '$routeParams', '$http','$log',
  function($scope, $routeParams, $http,$log) 
  {
    
    $http.get('data/komik/rumble.json').success(function(data) 
    {
      $scope.siriRumble = data;
    });

  }]);

mainControllers.controller('RumbleDetailCtrl', ['$scope', '$routeParams', '$http','$log',
  function($scope, $routeParams, $http,$log) 
  {
    $scope.namaSiri = $routeParams.namaSiri;
    $scope.episod = $routeParams.episod;
    $scope.totalPanel = 18;

    $scope.range = function(count){

      var totalEpisod = []; 

      for (var i = 0; i < count; i++) { 
        totalEpisod.push(i) 
      } 

      return totalEpisod;
    };

  }]);


