//feature set 1
function myMessage(){
    console.log('Can\'t spell function without fun.');
}
function add(x,y) {
    console.log(x + y);
}

//feature set 2
function add2(x,y) {
    var total = x + y;
    return total;
}

var add2result = add2(12,7);

//feature set 3
function cardFlip(element) {
    $(element).hide();
}

