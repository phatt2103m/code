<<<<<<< HEAD
var i = 1;
var msg = '';

do{
    msg += i + ' x 5 = ' + (i * 5) + '<br/>';
    i++;
}while (i <= 10);

=======
var i = 1;
var msg = '';

do{
    msg += i + ' x 5 = ' + (i * 5) + '<br/>';
    i++;
}while (i <= 10);

>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
document.getElementById('answer').innerHTML = msg;