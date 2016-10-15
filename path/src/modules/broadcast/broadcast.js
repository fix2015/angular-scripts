angular.module('broadcast', ['ui.router'])
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('broadcast', {
                url: '/broadcast',
                views: {
                    '': {
                        templateUrl : 'public/templates/broadcast.html',
                        controller  : 'mainModuleController'
                    },
                    'emit@broadcast': {
                        templateUrl : 'src/modules/broadcast/template/emit.html',
                        controller  : 'emitController'
                    },
                    'broadcast@broadcast': {
                        templateUrl : 'src/modules/broadcast/template/broadcast.html',
                        controller  : 'broadcastController'
                    }
                },

            })
    }])
    .controller('mainModuleController', [ '$scope',  function ($scope) {
        $scope.$on('message', function (event, data) {
            $scope.getMessage = data;
            $scope.$broadcast('sendToChildCtrl', data)
        })

    }])
    .controller('emitController', [ '$scope',  function ($scope) {
        $scope.sendEmit = function(){
            $scope.$emit('message', {message: 'send from Emit'})
        }
    }])
    .controller('broadcastController', [ '$scope',  function ($scope) {
        $scope.$on('sendToChildCtrl', function (event, data) {
            $scope.getMessage = data;
        })

    }])
    .directive('broadcast', function() {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/broadcast/broadcast.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.main = 'I am new Module - "broadcast"';
            }
        }
    });
