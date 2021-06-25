<<<<<<< HEAD
var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.getElementById('a');
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, false);
=======
var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.getElementById('a');
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, false);
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
elList.addEventListener('DOMNodeInserted', updateCount,false);