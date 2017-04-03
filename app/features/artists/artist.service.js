(function() {
    'use strict';

    angular
        .module('app')
        .factory('artistService', artistService);

    artistService.$inject = ['$http', 'Spotify'];

    /* @ngInject */
    function artistService($http, Spotify) {
        var service = {
            getArtist: getArtist,
            getArtistAlbums: getArtistAlbums,
            getArtistTopTracks: getArtistTopTracks
        },
        country='US';

        return service;

        function getArtist(artistId) {
            return Spotify.getArtists(artistId);
        }

        function getArtistAlbums(artistId) {
            return Spotify.getArtistAlbums(artistId);
        }

        function getArtistTopTracks(artistId) {
            return Spotify.getArtistTopTracks(artistId,country);
        }
    }
})();
