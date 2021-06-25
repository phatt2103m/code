<<<<<<< HEAD
$(function (){

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function (index){
        $(this).delay(700 * index).fadeIn(700); 
    });

    $li.on('click', function (){
        $(this).fadeOut(700);
    });
=======
$(function (){

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function (index){
        $(this).delay(700 * index).fadeIn(700); 
    });

    $li.on('click', function (){
        $(this).fadeOut(700);
    });
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});