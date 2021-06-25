<<<<<<< HEAD
function checkLength(e, minLength){
    var el, elMsg;
    if (!e){
        e = window.event;
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    if (el.value.length < minLength){
        elMsg.innerHTML = 'Username must be' + minLength + 'characters or more';
    }else {
        elMsg.innerHTML='';
    }
}
var elUSername = document.getElementById('username');
if (elUSername.addEventListener){
    elUSername.addEventListener('blur', function (e){
        checkLength(e, 5);
    }, false);
}else {
    elUSername.attachEvent('onblur', function (e){
        checkLength(e, 5);
    });
=======
function checkLength(e, minLength){
    var el, elMsg;
    if (!e){
        e = window.event;
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    if (el.value.length < minLength){
        elMsg.innerHTML = 'Username must be' + minLength + 'characters or more';
    }else {
        elMsg.innerHTML='';
    }
}
var elUSername = document.getElementById('username');
if (elUSername.addEventListener){
    elUSername.addEventListener('blur', function (e){
        checkLength(e, 5);
    }, false);
}else {
    elUSername.attachEvent('onblur', function (e){
        checkLength(e, 5);
    });
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
}