var http = require( 'http' ); 
var server = http.createServer( function( req, res ) {
  var from = req.connection.remoteAddress || req.headers['x-forwarded-for'] || 'unknown';

  if ( req.connection.remoteAddress === '127.0.0.1' || req.connection.remoteAddress === 'localhost' ) { 
    from = req.headers['x-forwarded-for'];
  }

  res.end( from + "\n" );
}).listen( 3013 );

