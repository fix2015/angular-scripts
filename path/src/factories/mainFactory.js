/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .factory('mainFactory', [ function () {

        var thisIsPrivate = "mainFactory";
        
        function getPrivate() {
            return thisIsPrivate;
        }

        return {
            getPrivate: getPrivate
        };
    }]);