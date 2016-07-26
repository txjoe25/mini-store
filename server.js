var mongoose     = require( 'mongoose' ),
    express      = require( 'express' ),
    bodyParser   = require( 'body-parser' ),
    path         = require( 'path' ),
    root         = __dirname,
    port         = process.env.PORT || 8000,
    app          = express();
require('./server/config/mongoose.js');

// app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'client/static' )));
app.use( express.static( path.join( root, 'client/views' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bodyParser.json() );
var routes = require('./server/config/routes.js')(app);
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});