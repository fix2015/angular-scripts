/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .controller('contactController', [ '$scope',  function ($scope) {

        $scope.contactMe = {
            email  : 'fix20152@gmail.com',
            github : 'https://github.com/fix2015'
        }

    }]);