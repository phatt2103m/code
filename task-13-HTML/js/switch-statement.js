<<<<<<< HEAD
var msg;
var level  = 2;

switch (level){
    case 1:
        msg = 'Gppd luck on the first test';
        break;
    case 2:
        msg = 'Second of three - keep going!';
        break;
    case 3:
        msg = 'Final round, almost there!';
        break;
    default:
        msg = 'Good luck!';
        break;
}

var el = document.getElementById('answer');
=======
var msg;
var level  = 2;

switch (level){
    case 1:
        msg = 'Gppd luck on the first test';
        break;
    case 2:
        msg = 'Second of three - keep going!';
        break;
    case 3:
        msg = 'Final round, almost there!';
        break;
    default:
        msg = 'Good luck!';
        break;
}

var el = document.getElementById('answer');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
el.textContent = msg;