// Answer the questions here:

// - What do you think is going to happen?
// - JY: Console log will display text that is in the new button.
// - What happened?
// - JY: No console.log presented itself
// - Why?
// - JY: The first feature set only targets already made buttons. Not newly made ones.

//========== Write your code below ===========//

$(document).ready(function() {
    //feature set 1
    $('#list button').on('click', function () {
        console.log($(this).text());
    });

    //feature set 2
     var new_button = $('<li><button style="margin-top: 10px">Delegated Button #5 Handler</button></li>');
     $('#list').append(new_button);

     //feature set 3
     $('#list').on('click', 'button', function() {
         console.log($(this).text());
     });


    //additional challenge
    var googleButton = $('<li><button class="google" attr="hi_im_google" style="margin: 10px" checked>Open Google in New Tab</button></li>');
     $('#list').append(googleButton);
     $('#list').on('click', '.google', function(){
     window.open('https://www.google.com');
     });

     $('#list').on('click', 'button', function(){
     if($(event.target).attr('checked')){
     console.log('You clicked the hidden google link!');
     } else{
         console.log('You did not click the hidden google link');
     }
     });
});





