'use strict';
describe('unit: album controller', function(){
  beforeEach(module('app'));

  var albumCtrl,
      $state,
      Spotify,
      ngAudio,
      albumService;

  beforeEach(inject(function(_$controller_, _$state_, _Spotify_, _ngAudio_, _$albumService_){
    albumCtrl = _$controller_('AlbumController', {});
    $state = _$state_;
    Spotify = _Spotify_;
    ngAudio = _ngAudio_;
    albumService = _$albumService_('albumService', {});
  }));

  spyOn(albumCtrl, 'albumService');
  it('tracks that the spy was called', function() {
    expect(albumService).toHaveBeenCalled();
  });
});