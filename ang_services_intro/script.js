/*
var app = angular.module('johnsApp', []);

app.controller('johnsController', function(){

});*/


function biggestMatch(str1, str2){
    var smaller;
    var bigger;
    var matched;
    if (str1.length > str2.length){
        bigger = str1;
        smaller = str2;
    }
    else{
        bigger = str2;
        smaller=str1;
    }
    for (var i = smaller.length; i > 0 ; i--){
        for (var j = 0; j < smaller.length; j++){
            var tempString = smaller.substr(j, i);
            if (i + j > smaller.length){}
            else if (bigger.indexOf(tempString) != -1){
                matched = tempString;
                console.log('end of function: ' + matched);
                return matched;
            }
        }
    }
    console.log('sorry, no matches');
    return '';
}

biggestMatch('sdfafdsafdsafasdafasdandysdfdsafsdafdsfpandas', 'pandas32134654654andy32132132123');