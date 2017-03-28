(function() {
    'use strict';

    angular
        .module('app')
        .controller('ArtistController', ArtistController);

    ArtistController.$inject = ['artistService', '$state', 'Spotify'];


    function ArtistController(artistService, $state, Spotify) {

        var artistCtrl = this;

        artistCtrl.artistList = ['Bon jovi', 'Coldplay', 'Pink Floyd'];

        artistService.getArtist($state.params.artistId).then(function(artist) {
            console.log(artist);
        }, function(error) {
            console.log(error);
        });

    }

})();
