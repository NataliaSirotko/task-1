$(document).ready(function() {

    function go(sel) {
        sel.on('click', function() {
            $('.overlay').fadeTo('slow', 1);
            $('.modal').slideDown('slow');
        });
    }

    go($('.col-sm-3:eq(1)'));
    go($('.col-sm-3:eq(2)'));
    go($('[href="#sheldure"]'));

    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow', 0);
        $('.modal').slideUp('slow');
    });

    

    
});
