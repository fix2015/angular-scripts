/**
 * Created by semianchuk on 11.10.16.
 */
angular.module('angularApp')
    .component('firstComponent', {
        controller: function () {
           this.label = 'This is Component'
        },
        templateUrl: 'src/components/firstcomponent/index.html'
    });