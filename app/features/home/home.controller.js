
(function() {
    'use strict';

    angular
        .module('app')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'homeService','$state', 'Spotify'];

    function HomeController($scope, homeService,$state, Spotify) {
      var options={
        locale: "nl_NL",
        country: "NL"
      };

      $scope.login=function() {
        Spotify.login().then(function(data){
          Spotify.getFeaturedPlaylists(options).then(function(playlistData){
            console.log(playlistData);
          });
        });
      };

      $scope.placeholder = "Search for Artists or Albums";
      $scope.stringLimit = 10;

      $scope.search = function (keywords) {
        if (keywords) {
          homeService.search($scope.searchTxt).then(function (res) {
            $scope.searchResults = res;
            $scope.albumList = $scope.searchResults.albums.items;
            $scope.artistList = $scope.searchResults.artists.items;
            console.log($scope.searchResults);
          });
        } else {
          $scope.searchResults = null;
        }
      };

      $scope.artist=function(){
        $state.go('artist');
      };

      $scope.searchArtist = function(artist){
        var artistId = artist.id;

        $state.go('artist', {
          'artistId' : artistId
        });

      };

      $scope.searchAlbum = function(album){
        var  albumId = album.id;
      };

    }

})();
