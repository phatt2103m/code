<<<<<<< HEAD
$(function (){
    var $listItems = $('li');

    $listItems.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItems.has('em').addClass('complete');

    $listItems.each(function (){
        var $this = $(this);
        if ($this.is('.hot')){
            $this.prepend('Priority item : ');
        }
    });
    $('li:contains("honey")').append('(local)');
=======
$(function (){
    var $listItems = $('li');

    $listItems.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $listItems.has('em').addClass('complete');

    $listItems.each(function (){
        var $this = $(this);
        if ($this.is('.hot')){
            $this.prepend('Priority item : ');
        }
    });
    $('li:contains("honey")').append('(local)');
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});