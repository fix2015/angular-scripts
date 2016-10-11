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
            .state('component', {
                url         : '/component',
                templateUrl : 'public/templates/component.html'
            })
            .state('module', {
                url         : '/module',
                templateUrl : 'public/templates/newmodule.html'
            })
            .state('provider', {
                url         : '/provider',
                templateUrl : 'public/templates/provider.html',
                controller  : 'mainController'
            })
    }]);