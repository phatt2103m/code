<<<<<<< HEAD
$(function (){
    var $p = $('p');

    var $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
=======
$(function (){
    var $p = $('p');

    var $clonedQuote = $p.clone();
    $p.remove();
    $clonedQuote.insertAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.appendTo('ul');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});