/*** /route/api.js
***/

// Require
var path = require( 'path' );
var friends = require( '../data/friends.json' );


/*** FUNCTION getScore
***/

const getScore = function( answers , otherAnswers ) {
    return answers.reduce(
        ( accumulator , answer , answerIndex ) => ( accumulator + Math.abs( answer - otherAnswers[ answerIndex ] ) ) ,
        0
    );
}


/*** FUNCTION matchFriend()
***/

const matchFriend = function( answers ) {
    var sortedFriends = friends.sort(
        ( thisFriend , otherFriend ) => ( getScore( answers , thisFriend.answers ) - getScore( answers , otherFriend.answers ) )
    );
    return sortedFriends[ 0 ];
}


/*** FUNCTION addRoutes
***/

const addRoutes = function( app ) {

    // GET friends
    app.get(
        '/api/friend' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route '/api/friend'` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'request.params :' , request.params );
            console.log( 'request.body :' , request.body );

            response.json( friends );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

    // POST find friend match
    app.post(
        '/api/friend' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route /api/friend` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'request.params :' , request.params );
            console.log( 'request.body :' , request.body );
            console.log( 'request.body.answers :' , request.body.answers );

            response.json( matchFriend( request.body.answers ) );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

    // POST add friend
    app.post(
        '/api/friend/add' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route /api/friend/add` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'request.params :' , request.params );
            console.log( 'request.body :' , request.body );
            console.log( 'request.body.answers :' , request.body.answers );

            var newFriend = request.body;
            friends.push( newFriend );
            response.json( { message : 'OK' } );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

}


// Export
module.exports = addRoutes;
