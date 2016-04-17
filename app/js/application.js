(function () {   

    var app = angular.module('Sucomi',[
        'ngRoute',
        'mainControllers',
        'angulartics', 
        'angulartics.google.analytics',
        'firebase'
        ]);


    app.config(function ($routeProvider,$httpProvider) {

        .when("/main",
        {
            title: 'Home',
            templateUrl:"templates/main.html",
            controller:"FireController"
        })
        .when("/mengenai",
        {
            title: 'Mengenai',
            templateUrl:"templates/mengenai.html",
            controller:"MainController"
        })
        .when("/tim",
        {
            title: 'Tim',
            templateUrl:"templates/tim.html",
            controller:"EditorListController"
        })
        .when("/komik/aretis",
        {
            title: 'Komik',
            templateUrl:"templates/list-komik-aretis.html",
            controller:"SiriListCtrl"
        })
        .when("/komik/rumblers",
        {
            title: 'Komik',
            templateUrl:"templates/list-komik-rumblers.html",
            controller:"RumbleListCtrl"
        })
        .when("/rumble",
        {
            title: 'Rumble',
            templateUrl:"templates/rumble.html",
            controller:"RumbleListCtrl"
        })
        .when('/rumble/oneshot/:namaSiri', {
            title: 'Comichat',
            templateUrl: 'templates/rumbleDetails.html',
            controller: 'RumbleDetailCtrl'
        })
        .when('/komik/siri/:namaSiri', {
            title: 'Comichat',
            templateUrl: 'templates/siriDetails.html',
            controller: 'SiriDetailCtrl'
        })
        .when('/komik/siri/:namaSiri/:episod/:totalPanel', {
            title: 'Comichat',
            templateUrl: 'templates/episod.html',
            controller: 'EpisodDetailCtrl'
        })
        .when("/pengkarya",
        {
            title: 'Pengkarya',
            templateUrl:"templates/pengkarya.html",
            controller:"AretisListCtrl"
        })
        .when("/faq-umum",
        {
            title: 'Soalan Lazim Umum',
            templateUrl:"templates/faq-umum.html",
            controller:"MainController"
        })
        .when("/faq-rumble",
        {
            title: 'Soalan Lazim Rumble',
            templateUrl:"templates/faq-rumble.html",
            controller:"MainController"
        })
        .otherwise(
        {
            redirectTo:"main"
        });
    });

    app.run(['$rootScope', function($rootScope) {

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

            $rootScope.title = current.$$route.title;
        });

    }]);
    
}());