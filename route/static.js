/*** /route/static.js
***/

// Require
var path = require( 'path' );


/*** FUNCTION addStaticRoutes
***/

const addRoutes = function( app ) {

    // GET home page
    app.get(
        '/' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route '/'` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'Parameters :' , request.params );
            console.log( 'Body :' , request.body );

            var htmlPath = path.join( __dirname , '../static/index.html' );
            console.log( 'htmlPath :' , htmlPath );
            response.sendFile( htmlPath );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

    // GET survey
    app.get(
        '/survey' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route '/survey'` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'Parameters :' , request.params );
            console.log( 'Body :' , request.body );

            var htmlPath = path.join( __dirname , '../static/survey.html' );
            console.log( 'htmlPath :' , htmlPath );
            response.sendFile( htmlPath );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

}


// Export
module.exports = addRoutes;
