const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//const cors = require('cors');


//Create the app
const app = express();
const path = require('path');
app.use(morgan('combined'));
//app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
//serve our static files
const port = process.env.PORT || 8081;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8081
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});