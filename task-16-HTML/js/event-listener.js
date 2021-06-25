<<<<<<< HEAD
function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    }else{
        elMsg.textContent='';
    }
}

var elUsername = document.getElementById('username');
=======
function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    }else{
        elMsg.textContent='';
    }
}

var elUsername = document.getElementById('username');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
elUsername.addEventListener('blur', checkUsername, false);