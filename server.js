/*** /server.js
***/

// Require
const express = require( 'express' );

// Globals
const DEFAULT_PORT = 8080;
const PORT = ( process.env.PORT || DEFAULT_PORT );

// Check environment variables
console.log();
console.group( '# Environment Variables' );
console.log( 'process.env.PORT =' , process.env.PORT );
console.groupEnd();

// Initialize Express app
var app = express();

// Express data handlers
app.use( express.urlencoded( { extended : true } ) );
app.use( express.json() );

// Express static directory
app.use( express.static( 'static' ) );

// Add routes
var addRoutes = require( './route/static.js' );
addRoutes( app );
var addRoutes = require( './route/api.js' );
addRoutes( app );

// Run Express app
app.listen(
    PORT ,
    () => {
        console.log();
        console.log( `Express app listening to http://localhost:${PORT}` );
    }
);
