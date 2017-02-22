
var app = angular.module('johnsApp', []);

app.controller('johnsController', function($http, $log){
    var self = this;
    self.artist = '';
    self.create_url = function(){
        var url = 'https://itunes.apple.com/search?term=' + self.artist + '&callback=JSON_CALLBACK';
        return url;
    };
    self.result = [];
    self.get_data = function(){
        $http({
            url: self.create_url(),
            method: 'jsonp',
            cache: false
        }).then (
            function success(response){
                $log.log('Successful Call: ', response);
                self.result = response.data.results;
                $log.log('Results: ', self.result);
            },
            function error(response){
                $log.log('error: ', response);
            }
        )
    }
});

