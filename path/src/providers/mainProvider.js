/**
 * Created by semianchuk on 11.10.16.
 */
angular.module('angularApp')
    .provider('mainProvider',[ function () {
        var privateVariable = 'mainProvider';

        return {
            $get: function() {
                function getPrivate() {
                    return privateVariable;
                }
                return {
                    getPrivate: getPrivate
                };
            }
        };
    }]);