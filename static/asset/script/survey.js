/*** /static/asset/script/survey.js
***/


/*** Globals
***/


/*** FUNCTION uiUpdateFriendModal()
***/

const uiUpdateFriendModal = function( friend ) {
    console.group( 'uiUpdateFriendModal()' );

    $( '#friend-name' ).text( friend.name );
    $( '#friend-photo' ).attr( 'src' , friend.photoUrl );

    console.groupEnd();
}


/*** FUNCTION uiToggleModal()
***/

const uiToggleModal = function( friend ) {
    console.group( 'uiToggleModal()' );

    $('#friend-modal').modal();

    console.groupEnd();
}


/*** FUNCTION getFormData()
***/

const getFormData = function() {
    console.group( 'getFormData()' );

    var formDataJQ = $( '#survey-form' ).serializeArray();

    // convert from array to object
    var formData = {};
    formDataJQ.forEach(
        ( formElement , formElementIndex ) => {
            formData[ formElement.name ] = formElement.value;
        }
    );

    console.groupEnd();
    return formData;
}


/*** FUNCTION newFriend()
***/

const newFriend = function() {
    console.group( 'newFriend()' );

    var formData = getFormData();
    var friend = {
        name : formData[ 'name' ] ,
        photoUrl : formData[ 'photo-url' ] ,
        answers : [
            parseInt( formData[ 'question-1' ] ) ,
            parseInt( formData[ 'question-2' ] ) ,
            parseInt( formData[ 'question-3' ] ) ,
            parseInt( formData[ 'question-4' ] ) ,
            parseInt( formData[ 'question-5' ] ) ,
            parseInt( formData[ 'question-6' ] ) ,
            parseInt( formData[ 'question-7' ] ) ,
            parseInt( formData[ 'question-8' ] ) ,
            parseInt( formData[ 'question-9' ] ) ,
            parseInt( formData[ 'question-10' ] )
        ]
    };

    console.groupEnd();
    return friend;
}


/*** FUNCTION handleSubmit()
***/

const handleSubmit = async function( event ) {
    console.group( 'handleSubmit()' );

    // set DOM event handling
    event.stopPropagation();
    event.preventDefault();

    // get friend profile from user
    var userFriend = newFriend();

    // find best match
    var matchFriend = await $.ajax(
        {
            url : '/api/friend' ,
            method : 'POST' ,
            data : { answers : userFriend.answers } ,
            dataType: 'json'
        }
    );

    // add user to list of friends
    await $.ajax(
        {
            url : '/api/friend/add' ,
            method : 'POST' ,
            data : userFriend ,
            dataType: 'json'
        }
    );

    // update and toggle modal
    uiUpdateFriendModal( matchFriend );
    uiToggleModal();

    console.groupEnd();
}


/*** FUNCTION handleReady()
***/

const handleReady = function( event ) {
    console.group( 'handleReady()' );

    // register event handlers
    $( '#survey-form' ).on( 'submit' , handleSubmit );

    console.groupEnd();
}


/*** Run
***/

$( handleReady );    // $( document ).ready( handleReady )
