/* Animation */
$(function() {

    // Smooth Scrolling
    // http://css-tricks.com/snippets/jquery/smooth-scrolling/

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // flowtype typography
    $('.body').flowtype({
        minimum: 500,
        maximum: 1200,
        minFont: 8,
        maxFont: 32,
        fontRatio: 30;
    });

});
