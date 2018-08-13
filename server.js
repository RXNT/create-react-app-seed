var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');


var mongoUtilities = require('./src/utils/mongoUtilities');

mongoose.promise = global.Promise;


app.use(cors());

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


  //Configure Mongoose
mongoose.connect('mongodb://localhost/TestDB', function(err, res) {
    console.log('connected successfully')
});
mongoose.set('debug', true);

require('./src/api/models/users'); 
require('./src/api/config/passport'); 
app.use(require('./src/api/routes'))

  

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/createPatient', function(req, res)  {
    mongoUtilities.insertData("TestDB", "patients", req.body, function(err, result) {
        if (err) throw err;
        return result;
    });
    res.send();
});

app.get('/getPatientList',  function(req, res) {
    var response = mongoUtilities.getData("TestDB", "patients").then(function(items){
        return items;
    });
    response.then(resp => {
        res.json(resp)
    }).catch( err => console.error('err', err))
});


app.listen(5000, function() {
console.log('login RESTful API server started on: 5000');

});





