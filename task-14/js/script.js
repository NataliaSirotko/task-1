$(window).ready(() => {
 
    $('.col-sm-3:eq(1), .col-sm-3:eq(2), [href="#sheldure"]').on('click', () => {
        $('.overlay').fadeTo('slow', 1);
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', () => {
        $('.overlay').fadeOut('slow', 0);
        $('.modal').slideUp('slow');
    });    
});
