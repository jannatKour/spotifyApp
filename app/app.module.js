(function() {
    'use strict';

    angular
    .module('app', [
      'ui.router',
      'spotify',
      'artist'
    ])
    .config(homeConfig)
    .controller('appController',function(Spotify){

    });

    homeConfig.$inject = ['$stateProvider', '$urlRouterProvider','SpotifyProvider'];

    function homeConfig($stateProvider, $urlRouterProvider,SpotifyProvider) {
      $urlRouterProvider
          .when('', '/home')
          .otherwise('/home');

      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/features/home/home.tpl.html',
        controller: 'HomeController'
      })
      .state('artist',{
        url:'/artist',
        templateUrl:'app/features/artists/artist.tpl.html',
        controller:'ArtistController',
        params: {
          'artistId' : ''
        }
      });

      SpotifyProvider.setClientId('b9dfe344d69249b8bd770d1b892f96a1');
      SpotifyProvider.setRedirectUri('http://localhost:3001/callback.html');
      SpotifyProvider.setScope('user-follow-read user-follow-modify user-read-private playlist-read-private playlist-modify-private playlist-modify-public');

    }

})();
