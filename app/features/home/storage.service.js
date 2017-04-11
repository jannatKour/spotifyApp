(function() {
    'use strict';

    angular
        .module('app')
        .factory('storageService',storageService );

        function storageService() {
        var service = {
            setSearchTxt: setSearchTxt,
            getSearchTxt: getSearchTxt
        },
        searchTxt;

        return service;

        function setSearchTxt(txt) {
            searchTxt = txt;
        }

        function getSearchTxt() {
           return searchTxt;
        }
    }
})();
