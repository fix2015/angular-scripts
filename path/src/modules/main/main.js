angular.module('main',[])
    .directive('main', function() {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/main/main.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.main = 'I am new Module - "main"';
            }
        }
    });
