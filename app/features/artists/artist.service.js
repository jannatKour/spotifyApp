(function() {
    'use strict';

    angular
        .module('app')
        .factory('artistService', artistService);

    artistService.$inject = ['$http', 'Spotify', '$q'];

    /* @ngInject */
    function artistService($http, Spotify, $q) {
        var service = {
            getArtist: getArtist
        };

        return service;

        function getArtist(artistId) {
            var defer = $q.defer();

            Spotify.getArtists(artistId).then(function(artist) {
                defer.resolve(artist);
            }, function(error) {
                defer.reject(error);
            });

            return defer.promise;
        }
    }
})();
