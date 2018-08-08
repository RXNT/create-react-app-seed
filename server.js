var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const path = require('path');

var mongoUtilities = require('./src/utils/mongoUtilities');

app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  mongoUtilities.createDatabase("TestDb");
});

app.post('/login', function(req, res)  {
    var response = mongoUtilities.insertData("TestDB", "userLogins", req.body).then(function(result) {
        return result;
    });
    response.then(resp => {
        res.json(resp)
    }).catch( err => console.error('err', err))
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





