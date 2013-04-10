var http = require( 'http' ),
geoip = require( 'geoip-lite' ),
server = http.createServer( function( req, res ) {
  var from = '', geo;

  if ( req.connection.remoteAddress === '127.0.0.1' || req.connection.remoteAddress === 'localhost' ) { 
    from = req.headers['x-forwarded-for'] || '127.0.0.1';
  } else {
    from = req.connection.remoteAddress;
  }

  if ( req.url === '/geo' ) {
    geo = geoip.lookup( from ) || {};
    geo.ip = from;
    res.end( JSON.stringify(geo) );
  } else if ( req.url === '/mirror' ) {
    geo = geoip.lookup( from ) || {};
    // lookup in the mirror db 
  } else {
    res.end( from + "\n" );
  }

}).listen( 3013 );
