<<<<<<< HEAD
$(function (){
    $('li').on('click', function (){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        },500,function (){
            $(this).remove();
        });
    });
=======
$(function (){
    $('li').on('click', function (){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        },500,function (){
            $(this).remove();
        });
    });
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});