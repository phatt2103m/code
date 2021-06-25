<<<<<<< HEAD
$('.accordion').on('click','.accordion-control', function (e){
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
=======
$('.accordion').on('click','.accordion-control', function (e){
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
>>>>>>> ab125c79545c83c8ed075a1e2f19cfdb2acda4b9
});