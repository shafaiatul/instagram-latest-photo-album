//grab all the package 
var express = require('express');
var app = express(); 

var instagram = require('instagram-node').instagram(); //to fetch all the API from Instagram

//Middleware to tell the app where my project resource like css or html or JS files are.
app.use(express.static(__dirname + '/public'));
//setting up the template engine "ejs" for node
app.set('views engine', 'ejs'); 

//configure the Instagram App
instagram.use({
	client_id : 'ee68d81168d94856a5e574e83b2f644c',
	client_secret : '1fc92a06f458454a84272bb9df1e8868'
})

app.get('/', function (req, res) {
	instagram.media_popular(function (err, medias, remaining, limit) {
		res.render('pages/index.ejs', {grams : medias} ) 
	});
});



app.listen(8080, function (err) {
	if(err) {
		console.log("ERROR");
	} else {
		console.log("Listening to port 8080")
	}
});