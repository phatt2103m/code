<<<<<<< HEAD
var table = 3;
var operator = 'addition';
var  i = 1;
var msg = '';

if(operator === 'addition'){
    while (i < 11){
        msg += 1 + '+' + table + ' = ' + ( i + table) + '<br/>';
        i++;
    }
}  else {
    while (i < 11){
        msg += 1 + 'x' + table + ' = ' + (i * table) + '<br/>';
        i++;
    }
}

var el = document.getElementById('blackboard');
=======
var table = 3;
var operator = 'addition';
var  i = 1;
var msg = '';

if(operator === 'addition'){
    while (i < 11){
        msg += 1 + '+' + table + ' = ' + ( i + table) + '<br/>';
        i++;
    }
}  else {
    while (i < 11){
        msg += 1 + 'x' + table + ' = ' + (i * table) + '<br/>';
        i++;
    }
}

var el = document.getElementById('blackboard');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
el.innerHTML  = msg;