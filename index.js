const http = require("http");
const https = require("https");
const express = require("express");
const bodyParser = require('body-parser');
const blacklist = require('./blacklist.js');
const unblocker = require('unblocker');
const userAgent = require('./user-agent.js');
const fs = require('fs');
const hp = require("http-proxy");
const hapi = require("hapi");
// Initialize app object.
var app = new express();
// Use app.set to add the view engine.
// Ass app is an express object, it has a view engine property.
app.set('view engine', 'jade');
 
// Set path to views.
app.set('views', './views');

//
 
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));
// Basic routing.
app.get('/', function(req, res) {
    // res.send is changed to result.render in order to load the correct view.
    res.render('index');
});
        /*var URL = atob(req.query.URL);*/
    
app.use(
	unblocker({
		requestMiddleware: [
			userAgent('uniblock v2.11'),

			blacklist({
				blockedDomains: [],
				message: 'Blacklisted site visited'
			})
		]
	})
);
/*app.get('/', (req, res) => {
	res.sendFile('./public/index.html');


	//req is request
	//res is response
});*/
app.post('/', function(req, res) {
	console.log(req.body.URL); // Have req.body.URL be written in logs.txt

	res.redirect("/proxy/" + req.body.URL);


	let path = 'views/index.txt';
	let buffer = Buffer.from(req.body.URL + '\n');

	fs.open(path, 'a+', function(err, fd) {
		if (err) {
			throw 'Could not open file: ' + err;
		}

		fs.write(fd, buffer, 0, buffer.length, null, function(err) {
			if (err) throw 'let buffer file' + err;
			fs.close(fd, function() {
				console.log('Wrote file');
			});
		});
	});
	console.log('\033[2J');
});

// Create server and listen on port 3030.
http.createServer(app).listen(8080, function() {
    console.log('Server running...');
});