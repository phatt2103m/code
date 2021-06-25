<<<<<<< HEAD
var msg = '<p><b>page title: </b>' + document.title + '<br/>';

msg += '<b>page address: </b>' + document.URL + '<br/>';

msg += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
=======
var msg = '<p><b>page title: </b>' + document.title + '<br/>';

msg += '<b>page address: </b>' + document.URL + '<br/>';

msg += '<b>last modified: </b>' + document.lastModified + '</p>';

var el = document.getElementById('footer');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
el.innerHTML = msg;