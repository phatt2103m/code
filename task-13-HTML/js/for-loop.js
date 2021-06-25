<<<<<<< HEAD
var score = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';

for (var i = 0; i < arrayLength; i ++){
    roundNumber = (i + 1);

    msg += 'Round' + roundNumber + ': ';

    msg += scores[i] + '<br />';
}

=======
var score = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';

for (var i = 0; i < arrayLength; i ++){
    roundNumber = (i + 1);

    msg += 'Round' + roundNumber + ': ';

    msg += scores[i] + '<br />';
}

>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
document.getElementById('answer').innerHTML = msg;