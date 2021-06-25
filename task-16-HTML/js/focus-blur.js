<<<<<<< HEAD
function checkUsername(){
    var username = el.value;
    if (username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet ...';
    }else {
        elMsg.textContent = '';
    }
}

function tipusername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipusername, false);
=======
function checkUsername(){
    var username = el.value;
    if (username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet ...';
    }else {
        elMsg.textContent = '';
    }
}

function tipusername(){
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipusername, false);
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
el.addEventListener('blur', checkUsername,false);