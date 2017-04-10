(function() {
    'use strict';

    angular
        .module('app')
        .controller('AlbumController', AlbumController);

    AlbumController.$inject = ['albumService', '$state', 'Spotify', 'ngAudio'];

    /* @ngInject */
    function AlbumController(albumService, $state, Spotify, ngAudio) {
        var albumCtrl = this,
          trackObj = {};

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

        albumCtrl.songInfo = function (track) {
          albumCtrl.audio = ngAudio.load(track.preview_url);
          console.log('trackObj', albumCtrl.audio);
          albumCtrl.btnName="Play Song";
        };

        albumCtrl.Play = function () {
        if(albumCtrl.audio.paused)
        {
          albumCtrl.audio.play();
          albumCtrl.btnName= "Pause Song";
        }
        else {
          albumCtrl.audio.pause();
          albumCtrl.btnName= "Play Song";
        }
    };

        getAlbum();
        getAlbumTracks();

  }
})();
