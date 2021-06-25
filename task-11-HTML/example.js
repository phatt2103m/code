var greeting = 'Howdy';

var name = 'Molly';

var welcomeMessage = greeting +' '+ name + ', please check your order:';

var el = document.getElementById('greeting');

el.textContent = welcomeMessage;

var userSign = 'Montague House';
var el = document.getElementById('userSign');
el.textContent= userSign;

var tiles = 14;
var el = document.getElementById('tiles');
el.textContent = tiles;

var subtotal = tiles * 5;
var el = document.getElementById('subTotal');
el.textContent = '$' + subtotal;

var shipping = tiles * 0.5;
var el = document.getElementById('shipping');
el. textContent = '$' + shipping;

var grandtotal = subtotal + shipping;
var el = document.getElementById('grandTotal');
el. textContent = '$' + grandtotal;