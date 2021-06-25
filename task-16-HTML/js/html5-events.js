<<<<<<< HEAD
function  setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function (event){
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;
=======
function  setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function (event){
    var message = 'You have changes that have not been saved';
    (event || window.event).returnValue = message;
    return message;
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});