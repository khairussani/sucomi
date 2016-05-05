
var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('AretisListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/users/aretis.json').success(function(data) {
      $scope.aretis = data;
    });
  }]);

mainControllers.controller('MainController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/komik/terkini.json').success(function(data) {
      $scope.komikTerkini = data;
    });
    $http.get('data/komik/popular.json').success(function(data) {
      $scope.komikPopular= data;
    });
  }]);

mainControllers.controller('HeaderController', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        console.log($location.path()); 
        return viewLocation === $location.path();
    };

  }]);

mainControllers.controller('KomikAretisListCtrl', ['$scope', '$http','$location',
  function($scope, $http,$location) {
    $http.get('data/komik/siri.json').success(function(data) {
      $scope.siri = data;
    });

    $scope.go = function ( path ) {
      $location.path( path );
    };

  }]);

mainControllers.controller('KomikAretisDetailCtrl', ['$scope', '$routeParams', '$http','$log',
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

    $scope.go = function ( path ) {
      $location.path( path );
    };

  }]);

mainControllers.controller('KomikRumbleListCtrl', ['$scope', '$routeParams', '$http','$log','$location',
  function($scope, $routeParams, $http,$log,$location) 
  {
    
    $http.get('data/komik/rumble.json').success(function(data) 
    {
      $scope.siriRumble = data;
    });

     $scope.go = function ( path ) {
      $location.path( path );
    };

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


mainControllers.controller("FireController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    //Code here
    var ref = new Firebase("https://j4kn6voqvw6.firebaseio-demo.com/");
    $scope.messages = $firebaseArray(ref);

    //ADD MESSAGE METHOD
    $scope.addMessage = function(e) {

      //LISTEN FOR RETURN KEY
      if (e.keyCode === 13 && $scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var name = $scope.name || "anonymous";

        //ADD TO FIREBASE
         $firebaseArray(ref).$add({
          from: name,
          body: $scope.msg
        });

        //RESET MESSAGE
        $scope.msg = "";
      }
    }
  }
]);


