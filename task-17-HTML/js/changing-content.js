<<<<<<< HEAD
$(function (){
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function (){
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
=======
$(function (){
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function (){
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});