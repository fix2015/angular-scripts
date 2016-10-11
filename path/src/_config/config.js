/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url         : '/',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            })            
            .state('contact', {
                url         : '/contact',
                templateUrl : 'public/templates/contact.html',
                controller  : 'contactController'
            })
    }]);