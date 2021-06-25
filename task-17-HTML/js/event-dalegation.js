<<<<<<< HEAD
$(function (){
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status : 'important'},
        function (e){
            listItem = 'Item :' + e.target.textContent + '<br />';
            itemStatus = 'Status :' + e.data.status + '<br />';
            eventType = 'Event : ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
=======
$(function (){
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        ':not(#four)',
        {status : 'important'},
        function (e){
            listItem = 'Item :' + e.target.textContent + '<br />';
            itemStatus = 'Status :' + e.data.status + '<br />';
            eventType = 'Event : ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});