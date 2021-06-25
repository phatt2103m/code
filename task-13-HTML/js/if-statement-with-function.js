<<<<<<< HEAD
var score = 75;
var msg = '';

function  congratulate(){
    msg += 'Congratulation!';
}

if (score >= 50){
    congratulate();
    msg += 'Proceed to the next round.';
}

var el =document.getElementById('answer');
=======
var score = 75;
var msg = '';

function  congratulate(){
    msg += 'Congratulation!';
}

if (score >= 50){
    congratulate();
    msg += 'Proceed to the next round.';
}

var el =document.getElementById('answer');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
el.innerHTML = msg;