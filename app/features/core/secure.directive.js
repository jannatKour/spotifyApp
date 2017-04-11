(function() {
    'use strict';

    angular
        .module('app')
        .directive('secure', secure);

    secure.$inject = ['ngAudio'];

    function secure(ngAudio) {
      return {
        restrict: 'A',
        scope: {
          source:'='
        },
        template: '<audio ng-src="{{url}}" controls></audio>',
        link: function(scope){
          scope.$watch('source', function(newVal, oldVal){
            if(!angular.isUndefined(newVal)){
              scope.url = ngAudio.load(newVal);
            }
          });
        }
      };
    }
})();
