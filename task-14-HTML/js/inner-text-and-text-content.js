<<<<<<< HEAD
var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showTextContent + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

=======
var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showTextContent + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
firstItem.textContent = 'sourdough bread';