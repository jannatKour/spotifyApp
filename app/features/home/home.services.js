(function() {
    'use strict';
    angular
        .module('app')
        .service('homeService', homeService);

    homeService.$inject = ['Spotify'];

    function homeService(Spotify) {

        return {
            search: search
        };

        function search(keywords) {
            var type = 'artist,album',
                options = {
                    limit: 50,
                    offset: 0
                };


            if (keywords) {
                return Spotify.search(keywords, type, options);
            }
        }

    }
})();
