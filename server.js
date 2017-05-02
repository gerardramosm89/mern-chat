const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const socketIO = require('socket.io');

// Create the app with express
const app = express();

// Using http instead to create the server
var server = http.createServer(app);
var io = socketIO(server);

const path = require('path');
// app.use(morgan('combined'));
//app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
//serve our static files
const port = process.env.PORT || 8081;
app.use(express.static(__dirname + '/'));

// viewed at http://localhost:8081
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


io.on('connection', (socket) => {
    console.log(`New user connected`);
    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
});


server.listen(port, function(){
    console.log(`Express server is up on port ${port}`);
});