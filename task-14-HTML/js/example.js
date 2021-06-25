<<<<<<< HEAD
var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newTextLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newItemFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i ++);{
    listItems[i].className = 'cool';
}
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
=======
var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newTextLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newItemFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i ++);{
    listItems[i].className = 'cool';
}
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
heading.innerHTML = newHeading;