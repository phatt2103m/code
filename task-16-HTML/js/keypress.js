<<<<<<< HEAD
var el;

function charCount(e){
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message');
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code:' + e.keyCode;
}
el = document.getElementById('message');
=======
var el;

function charCount(e){
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message');
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code:' + e.keyCode;
}
el = document.getElementById('message');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
el.addEventListener('keyup', charCount, false);