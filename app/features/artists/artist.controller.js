(function() {
    'use strict';

    angular
    .module('artist',[
     'ui.router',
     'spotify'
    ])
    .controller('ArtistController', artistCtrl);

    artistCtrl.$inject = ['$scope','artistService','$state'];

    /* @ngInject */
    function artistCtrl($scope, artistService, $state) {

      $scope.artistList = ['Bon jovi','Coldplay','Pink Floyd'];

      artistService.getArtist($state.params.artistId).then(function(artist){
        console.log(artist);
      }, function(error){
        console.log(error);
      });

    }

})();
