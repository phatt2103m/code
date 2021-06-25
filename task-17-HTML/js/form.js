$(function (){

    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $texrInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function (){
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (){
        e.preventDefault();
        var newText = $texrInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $texrInput.val('');
    });
});