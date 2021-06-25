<<<<<<< HEAD
function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if(elUsername.value.length < 5){
        elMsg.textContent = 'Username must be 5 character or more';
    }else {
        elMsg.textContent = '';
    }
=======
function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if(elUsername.value.length < 5){
        elMsg.textContent = 'Username must be 5 character or more';
    }else {
        elMsg.textContent = '';
    }
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
}