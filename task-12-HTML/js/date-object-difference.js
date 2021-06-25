<<<<<<< HEAD
var today = new Date();

var year = today.getFullYear();

var est = new Date('Apr 16, 1996 15:45:55');

var difference = today.getTime() - est.getTime();

difference= (difference / 31556900000);

var elMsg = document.getElementById('message');
=======
var today = new Date();

var year = today.getFullYear();

var est = new Date('Apr 16, 1996 15:45:55');

var difference = today.getTime() - est.getTime();

difference= (difference / 31556900000);

var elMsg = document.getElementById('message');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
elMsg.textContent = Math.floor(difference) + ' year of online travel advice';