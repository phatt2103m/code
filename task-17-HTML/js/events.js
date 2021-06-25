<<<<<<< HEAD
$(function (){
    var ids ='';
    var $listItems = $('li');

    $listItems.on('mouseover click',function (){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append('<span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function (){
        $(this).children('span').remove();
    });
=======
$(function (){
    var ids ='';
    var $listItems = $('li');

    $listItems.on('mouseover click',function (){
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append('<span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function (){
        $(this).children('span').remove();
    });
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});