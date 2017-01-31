//Create GLOBAL variable below here on line 2
var global_result = null;
var movie_image = null;
var movie_info = null;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var first_movie_info = result.feed.entry[0]['im:image'][2].label;
                console.log(first_movie_info);
                for(var i = 0; i < result.feed.entry.length; i++){
                    movie_image = result.feed.entry[i]['im:image'][2].label;
                    var each_image = $('<img>', {src: movie_image});
                    movie_info = "Director: " +result.feed.entry[i]['im:artist'].label + " Title: " +result.feed.entry[i].title.label;
                    var new_div = $('<div>');
                    var caption = $('<h2>').text(movie_info);
                    new_div.append(each_image).append(caption);
                    $('#main').append(new_div);
                }
            }
        });
        console.log('End of click function');
    });
});

