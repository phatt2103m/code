<<<<<<< HEAD
$(function (){

    $('li').on('click', function (){
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">'+ clicked + '' + e.type + '</span>');
    });
=======
$(function (){

    $('li').on('click', function (){
        $('li span').remove();
        var date = new Date();
        date.setTime(e.timeStamp);
        var clicked = date.toDateString();
        $(this).append('<span class="date">'+ clicked + '' + e.type + '</span>');
    });
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});