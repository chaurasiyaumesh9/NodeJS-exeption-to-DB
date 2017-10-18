var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var DBURL = "mongodb://su:welcome123@ds011158.mlab.com:11158/sample2";

//mongodb://user:pawsword:host/dbname

var ExceptionSchema = require('./models/exception');

var dbconnection = mongoose.createConnection( DBURL , { server:{ poolSize:2 }, db: { native_parser: true }}, function(err){
	if (err) {
		console.log(err);
	}else{
		console.log('connected to database successfully!');
	}
});
var Exception = dbconnection.model('Exception');


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) ;
app.use('/', express.static(__dirname + '/app') );


// app.get('/',function(req,res){
// 	res.send('App Started!');
// });

app.get('/exceptions',function(req,res){
	Exception.find({}, function(err, results) {
	  if (!err)
		{
		  res.json( results );
		}else{
			console.log('Error Block GET Exceptions', err );
		}
	});
});


app.post('/exceptions',function(req,res){
	//console.log('check:',req.body);
	if ( !req.body.exception ){
		return;
	}
	var exception = req.body.exception ;		
	var NewException = new Exception( exception );

	NewException.save(function(err, exception ) {
		if (!err)
		{
			res.json( exception );
		}else{
			console.log('Error Block POST Exceptions', err );
		}
	});
});


// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });


var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('listening @ port : ' + port);
});



module.exports = app;