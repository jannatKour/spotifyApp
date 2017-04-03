(function() {
    'use strict';

    angular
      .module('app')
      .controller('ArtistController', ArtistController);

    ArtistController.$inject = ['artistService', '$state', 'Spotify', '$timeout'];


    function ArtistController(artistService, $state, Spotify, $timeout) {

      var artistCtrl = this;

      artistCtrl.slickPanels = {
        method: {},
        dots:false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlay: false,
        event: {
          beforeChange: function() {
            console.log("before change called");
          },
          afterChange: function() {
            console.log("after called");
          }
        }
      };

      function getArtist() {
        artistService.getArtist($state.params.artistId).then(function(artist) {
          artistCtrl.artist = artist.artists[0];
            console.log(artistCtrl.artist);
         }, function(error) {
            console.log('artists retrieval failed ');
          });
        }

      function getArtistAlbums() {

        artistService.getArtistAlbums($state.params.artistId).then(function(data){
          artistCtrl.artistAlbums = data.items;
          console.log(data.items);

          $timeout(function() {
            artistCtrl.viewLoaded = true;
          });
        },function(error){
          console.log('No data found');
        });
      }

      function getArtistTopTracks() {

        artistService.getArtistTopTracks($state.params.artistId).then(function(tracks){
          artistCtrl.tracks = tracks.tracks;
          //console.log(tracks);
          $timeout(function() {
            artistCtrl.viewLoaded = true;
          });
        },function(error){
          console.log('No data found');
        });
      }

      artistCtrl.Songs = function(albumId){
        $state.go('album',{
            'albumId':albumId
        });
      };

        getArtist();
        getArtistAlbums();
        getArtistTopTracks();
    }

})();
