(function() {
    'use strict';
    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['homeService', '$state', 'Spotify', 'storageService'];

    function HomeController(homeService, $state, Spotify, storageService) {
        var homeCtrl = this;

        var options = {
            locale: "nl_NL",
            country: "NL"
        };

        homeCtrl.login = function() {
            Spotify.login().then(function(data) {
                Spotify.getFeaturedPlaylists(options).then(function(playlistData) {
                    console.log(playlistData);
                });
            });
        };


        homeCtrl.placeholder = "Search for Artists or Albums";
        homeCtrl.stringLimit = 10;

        homeCtrl.search = function(keywords) {
            if (keywords) {
                homeService.search(homeCtrl.searchTxt).then(function(res) {
                    homeCtrl.searchResults = res;
                    homeCtrl.albumList = homeCtrl.searchResults.albums.items;
                    homeCtrl.artistList = homeCtrl.searchResults.artists.items;
                    console.log(homeCtrl.searchResults);
                    storageService.setSearchTxt(homeCtrl.searchTxt);
                });
            } else {
                homeCtrl.searchResults = null;
            }
        };

        homeCtrl.searchTxt = storageService.getSearchTxt();

        if(!angular.isUndefined(homeCtrl.searchTxt) && homeCtrl.searchTxt !== ""){
          homeCtrl.search(homeCtrl.searchTxt);
        }

        homeCtrl.artist = function() {
            $state.go('artist');
        };

        homeCtrl.searchArtist = function(artist) {
            var artistId = artist.id;

            $state.go('artist', {
                'artistId': artistId,
                'searchTxt': homeCtrl.searchTxt
            });
        };

        homeCtrl.searchAlbum = function(album) {
            var albumId = album.id;

            $state.go('album',{
                'albumId':albumId,
                'searchTxt': homeCtrl.searchTxt
            });
        };
    }

})();
