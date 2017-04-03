(function() {
    'use strict';

    angular
        .module('app')
        .controller('AlbumController', AlbumController);

    AlbumController.$inject = ['albumService', '$state', 'Spotify'];

    /* @ngInject */
    function AlbumController(albumService, $state, Spotify) {
        var albumCtrl = this;

        function getAlbum() {
            albumService.getAlbum($state.params.albumId).then(function(album) {
                albumCtrl.albumName = album.name;
                albumCtrl.albumArtist=album.artists["0"].name;
                albumCtrl.albumPopularity = album.popularity;
                albumCtrl.albumRelease_date = album.release_date;
                albumCtrl.albumImage = album.images[1].url;
                console.log(album);
            }, function(error) {
                console.log('No data found');
            });
        }

        function getAlbumTracks() {
            albumService.getAlbumTracks($state.params.albumId).then(function(tracks) {
               albumCtrl.tracks=tracks.items;
                console.log(tracks);
            }, function(error) {
                console.log("No data found");
            });
        }

        albumCtrl.play= function(trackId){

            albumService.getTrackAudioFeatures(trackId).then(function (data) {
              console.log(data);
            } , function(error) {
              console.log("No data found");
            });
        };

        getAlbum();
        getAlbumTracks();
    }
})();
