var express = require('express'),
  app = express();
  bodyParser = require('body-parser'),
  controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

/************
 * ROUTES *
 ************/

 // Serve static files from the `/public` directory:
 // i.e. `/images`, `/scripts`, `/styles`
 app.use(express.static(__dirname + '/public'));



 /*
 * JSON API Endpoints
 */

 app.get('/api', controllers.api.index);

 app.get('/api/talks', controllers.talks.index);
 
 app.get('/api/attendees', controllers.attendees.index);
 app.post('/api/attendees', controllers.attendees.create);

//Listen on Port 8080
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
