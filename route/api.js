/*** /route/api.js
***/

// Require
var path = require( 'path' );


/*** FUNCTION addStaticRoutes
***/

const addRoutes = function( app ) {

    // GET friends
    app.get(
        '/api/friends' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route '/'` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'Parameters :' , request.params );
            console.log( 'Body :' , request.body );

            response.json(
                {
                    originalUrl : request.originalUrl ,
                    method : request.method ,
                    params : request.params ,
                    body : request.body
                }
            );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

    // POST friends
    app.post(
        '/api/friends' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route '/survey'` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'Parameters :' , request.params );
            console.log( 'Body :' , request.body );

            response.json(
                {
                    originalUrl : request.originalUrl ,
                    method : request.method ,
                    params : request.params ,
                    body : request.body
                }
            );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

}


// Export
module.exports = addRoutes;
