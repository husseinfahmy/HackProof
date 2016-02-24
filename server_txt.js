var updatesql = require('./mysqlupload.js')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', function (req, res) {
    console.log(req.body);
   // Prepare output in JSON format
   var softwareArr = req.body.SoftwareTags ? req.body.SoftwareTags : [];
   var array = softwareArr.concat(req.body.hardSelect);
   updatesql(array, req.body.description, req.body.description);
   response = {
       hardOrSoft:req.body.hardOrSoft,
       hardSelect:req.body.hardSelect,
       SoftwareTags:req.body.SoftwareTags,
       nonTechnicalCategories:req.body.nonTechnicalCategories,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
