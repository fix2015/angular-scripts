/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .service('mainService', [ function () {

        var thisIsPrivate = "mainService";
        
        this.getPrivate = function() {
            return thisIsPrivate;
        };

    }]);