


app.config(function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            name: 'home',
            url: '/home',
            templateUrl: 'partials/home.html',
            controller:'BookSearchController',
            resolve:{

            },
            controllerAs:'search'
        })


})