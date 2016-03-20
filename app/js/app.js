(function (){
    
    var app = angular.module("comichat",[
        "ngRoute",
        "mainControllers",
        'angulartics', 
        'angulartics.google.analytics'
        ]);
    
    app.config(function($routeProvider,$locationProvider,$analyticsProvider)
    {
        $routeProvider
            .when("/main",
            {
                title: 'Home',
                templateUrl:"templates/main.html",
                controller:"MainController"
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
            .when("/komik",
            {
                title: 'Komik',
                templateUrl:"templates/komik.html",
                controller:"SiriListCtrl"
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
            .otherwise({redirectTo:"/main"});

            /*$locationProvider.html5Mode(true);*/
    });

        app.run(['$rootScope', function($rootScope) {

            $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

                $rootScope.title = current.$$route.title;
            });

        }]);

        app.directive('backImg', function(){    
            return function(scope, element, attrs){

                attrs.backImg = attrs.backImg.replace(" ", "%20");
                var url = attrs.backImg;
                element.css({
                    'background-image': 'url(' + url +')',
                    'background-size' : 'cover',
                    'background-position' : 'center'
                });
            };
        });

        app.directive('bsActiveLink', ['$location', function ($location) {
        return {
            restrict: 'A', //use as attribute 
            replace: false,
            link: function (scope, elem) {
                //after the route has changed
                scope.$on("$routeChangeSuccess", function () {
                    var hrefs = ['/#' + $location.path(),
                                 '#' + $location.path(), //html5: false
                                 $location.path()]; //html5: true
                    angular.forEach(elem.find('a'), function (a) {
                        a = angular.element(a);
                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
                            a.parent().addClass('active');
                        } else {
                            a.parent().removeClass('active');   
                        };
                    });     
                });
            }
        }
        }]);
    
}());