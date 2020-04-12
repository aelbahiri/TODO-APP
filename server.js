const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.port || 3000 ;

const myCon = require('./app/config/db');


app.listen(port);
console.log('Server ON :' + port);

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

// impoting route
var routes = require('./app/routes/appRoutes'); 

//register the routes
routes(app);