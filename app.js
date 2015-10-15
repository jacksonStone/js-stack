
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = express();
var cons = require('consolidate');
var mongo = require('mongodb');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//var db = monk('localhost:27017/personalSite');
mongoose.connect('mongodb://localhost:27017/personalSite');

mongoose.connection.on('open', function() {
  console.log('Mongoose connected.');



});


app.engine('html', cons['swig']);
//app.use(function(req,res,next){
 // req.db = db;
  //next();
//});

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/stylesheets',  express.static(__dirname + '/public/stylesheets'));
app.use('/javascripts', express.static(__dirname + '/public/javascripts'));
app.use('/images', express.static(__dirname + '/images'));

app.get('/', routes.index);

var models = require('./models.js');
var YearModel = models.YearModel;

var Year2012 = models.allYears[0];
var Year2014 = models.allYears[1];
var PresentDay = models.allYears[2];


YearModel.remove({}, function(err) {
    if(err) console.log("broke at remove");
    PresentDay.save(function(err) {
        if(err) console.log("broke at PresentDay");
        Year2012.save(function(err){
            if(err) console.log("broke at 2012");
            Year2014.save(function(err){
                if(err) console.log("broke at 2014");
                YearModel.find(function (err, thor){
                    if (err) return console.error("Error in getting!");
                    console.log("did it all.");
                    console.log('Number of things in db: ' + thor.length);
                    console.log('firstThing: ' + thor[0].year);
                });

            });
        });
    });

});



app.get('/data', function(req,res){
    YearModel.find(function (err, thor){
        if (err) return console.error("Error in getting!");
    res.json(thor.sort());
  });
});



app.listen(80, function(){
  console.log("listening on 80!!!!!!!!!!!!!!!");
});
