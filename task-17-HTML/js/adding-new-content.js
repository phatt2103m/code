<<<<<<< HEAD
$(function (){
    $('ul').before('<p class="notice">Just updated </p>');
    $('li.hot').prepend('+');
    var $newListItem = $('<li><em>gluten-free</em> soy sauce </li>');
    $('li:last').after($newListItem);
=======
$(function (){
    $('ul').before('<p class="notice">Just updated </p>');
    $('li.hot').prepend('+');
    var $newListItem = $('<li><em>gluten-free</em> soy sauce </li>');
    $('li:last').after($newListItem);
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});