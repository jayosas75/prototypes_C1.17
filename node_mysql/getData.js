//require your modules: express, and mysql
var express = require('express');
var mysql = require('mysql');
var app = express();
var fs = require('fs');
//define your connection info for mysql
function handle_request(request, response){
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'c1.17_db'
    });
    //define your handler for your mysql connection callback
    function connection_callback(){
        //perform your mysql query call
        connection.query('SELECT * FROM students_', query_callback);
    }

    //define your handler for your mysql query call response
    function query_callback(err, rows, fields){
        console.log(rows);
        //handle your data from your response
        response.set({
            'Content-Type': ''
        })
        response.send(JSON.stringify({success: true, data: rows}));
        //return the data in json format to the front end request
    }
    //define your handler for the express web request
    connection.connect(connection_callback);
}

function open_html(request, response){
    fs.readFile('./index.html', function(err, data){
        if(!err) {
            response.end(data);
        }
    });
}

app.get('/', open_html);
app.get('/API', handle_request);
//set up your express server and start listening
app.listen(3306);
