(function() {
    'use strict';

    angular
        .module('app')
        .factory('albumService', albumService);

    albumService.$inject = ['$http', 'Spotify'];

    /* @ngInject */
    function albumService($http, Spotify) {
        var service = {
            getAlbum: getAlbum,
            getAlbumTracks: getAlbumTracks,
        };

        return service;

        function getAlbum(albumId) {
          return Spotify.getAlbum(albumId);
        }

        function getAlbumTracks(albumId){
          return Spotify.getAlbumTracks(albumId);
        }
      }
  })();
