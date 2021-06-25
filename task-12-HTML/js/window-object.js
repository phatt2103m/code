<<<<<<< HEAD
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth +'</p>';

msg += '<p>height: ' + window.innerHeight + '</p>';

msg +='<h2> history</h2><p>items: ' +window.length + '</p>';

msg += '<h2>screen</h2><p>width: ' +window.screen.width + '</p>';

msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');

el.innerHTML = msg;

=======
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth +'</p>';

msg += '<p>height: ' + window.innerHeight + '</p>';

msg +='<h2> history</h2><p>items: ' +window.length + '</p>';

msg += '<h2>screen</h2><p>width: ' +window.screen.width + '</p>';

msg += '<p>height: ' + window.screen.height + '</p>';

var el = document.getElementById('info');

el.innerHTML = msg;

>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
alert('Current page: ' + window.location);