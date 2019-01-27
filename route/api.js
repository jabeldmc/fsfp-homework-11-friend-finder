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
        '/api/friends' ,
        ( request , response ) => {
            console.log();
            console.group( `# Route '/'` );
            console.log( 'request.originalUrl :' , request.originalUrl );
            console.log( 'request.method :' , request.method );
            console.log( 'request.params :' , request.params );
            console.log( 'request.body :' , request.body );

            response.json( friends );

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
            console.log( 'request.params :' , request.params );
            console.log( 'request.body :' , request.body );
            console.log( 'request.body.answers :' , request.body.answers );

            response.json( matchFriend( request.body.answers ) );

            console.log( 'done.' );
            console.groupEnd();
        }
    );

}


// Export
module.exports = addRoutes;
