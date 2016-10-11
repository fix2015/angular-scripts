/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .controller('mainController', [ '$scope', 'mainFactory', 'mainService', 'mainProvider', function ($scope, mainFactory, mainService, mainProvider) {
        
        $scope.getFactory  = mainFactory.getPrivate();
        $scope.getService  = mainService.getPrivate();
        $scope.getProvider = mainProvider.getPrivate();

    }]);