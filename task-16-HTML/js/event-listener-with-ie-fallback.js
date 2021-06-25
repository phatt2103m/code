<<<<<<< HEAD
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
    if (elUsername.value.length < minLength){
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    }else {
        elMsg.innerHTML='';
    }
}

if (elUsername.addEventListener){
    elUsername.addEventListener('blur', function (){
        checkUsername(5);
    }, false);
}else {
    elUsername.attachEvent('onblur', function (){
        checkUsername(5);
    });
=======
var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength){
    if (elUsername.value.length < minLength){
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
    }else {
        elMsg.innerHTML='';
    }
}

if (elUsername.addEventListener){
    elUsername.addEventListener('blur', function (){
        checkUsername(5);
    }, false);
}else {
    elUsername.attachEvent('onblur', function (){
        checkUsername(5);
    });
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
}