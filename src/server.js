// server.js
var app = require('./app');
var port = process.env.PORT || 3001;
var cors = require('cors')
app.use(cors())//use this after the variable declaration

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
