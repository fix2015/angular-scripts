/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .controller('mainController', [ '$scope', 'mainFactory', 'mainService', function ($scope, mainFactory, mainService) {
        
        $scope.getFactory = mainFactory.getPrivate()
        $scope.getService = mainService.getPrivate()
        
    }]);