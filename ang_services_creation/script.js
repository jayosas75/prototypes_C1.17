var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this;
    //Create a variable to hold your api key but set it to an empty string
    this.api_key = '';

    //Create a variable to hold the API url but set it to an empty string
    this.api_url = '';

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        //return an object that contains a function to call the API and get the student data
        return {
            call_api: function(){
                var defer = $q.defer();

                $http({
                    method: 'POST',
                    url: self.api_url,
                    data: 'api_key=' + self.api_key,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(
                    function(response){
                        $log.log('data received: ', response);
                        defer.resolve(response);
                    },
                    function(response){
                        $log.log('error: ', response);
                        defer.reject('Error Message Here');
                    }
                );
                return defer.promise;
            }
            //Refer to the prototype instructions for more help
        };
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function (sgtDataProvider){
    sgtDataProvider.api_key = '8KyFdlyzfV';
    sgtDataProvider.api_url = 'http://s-apis.learningfuze.com/sgt/get';
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(sgtData, $log){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var self_copy = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    this.data = {};
    //Add a function called getData to your controller to call the SGT API
    this.getData = function(){
        sgtData['call_api']().then(
            function(response){
                self_copy.data = response.data;
                $log.log('data received: ', self_copy.data);
            },
            function(response){
                $log.log('error: ', response);
            }
        )
    };
    //Refer to the prototype instructions for more help

});