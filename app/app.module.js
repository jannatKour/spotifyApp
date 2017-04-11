(function() {
    'use strict';
    angular
        .module('app', [
            'ui.router',
            'spotify',
            'slickCarousel',
            'ngAudio'
        ])
        .config(homeConfig);

    homeConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'SpotifyProvider'];

    function homeConfig($stateProvider, $urlRouterProvider, SpotifyProvider) {
        $urlRouterProvider
            .when('', '/home')
            .otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/features/home/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl',
                params: {
                  'searchTxt': '',
                  'albumId': '',
                  'artistId': ''
                }
            })
            .state('artist', {
                url: '/artist',
                templateUrl: 'app/features/artists/artist.tpl.html',
                controller: 'ArtistController',
                controllerAs: 'artistCtrl',
                params: {
                  'searchTxt': '',
                  'albumId': '',
                  'artistId': ''
                }
            })
            .state('album', {
                url: '/album',
                templateUrl: 'app/features/album/album.tpl.html',
                controller: 'AlbumController',
                controllerAs: 'albumCtrl',
                params: {
                  'searchTxt': '',
                  'albumId': '',
                  'artistId': ''
                }
            });

        SpotifyProvider.setClientId('b9dfe344d69249b8bd770d1b892f96a1');
        SpotifyProvider.setRedirectUri('http://localhost:3001/callback.html');
        SpotifyProvider.setScope('user-follow-read user-follow-modify user-read-private playlist-read-private playlist-modify-private playlist-modify-public');

    }

})();
