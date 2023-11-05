$(window).bind('scroll', function(e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('.layer-1').css('top', (0 - (scrolled * .25)) + 'px');
    $('.layer-2').css('top', (0 - (scrolled * .5)) + 'px');
    $('.layer-3').css('top', (0 - (scrolled * .75)) + 'px');
    $('.rock-1').css('top', (400 - (scrolled * .8)) + 'px');
    $('.rock-2').css('top', (200 - (scrolled * .6)) + 'px');
    $('.rock-3').css('top', (500 - (scrolled * .4)) + 'px');
    $('.rock-4').css('top', (600 - (scrolled * .5)) + 'px');
    $('.rock-5').css('top', (600 - (scrolled * .7)) + 'px');
    $('.rock-6').css('top', (400 - (scrolled * .7)) + 'px');
    $('.rock-7').css('top', (600 - (scrolled * .5)) + 'px');
    $('.rock-8').css('top', (200 - (scrolled * .2)) + 'px');
    $('.rock-9').css('top', (200 - (scrolled * .4)) + 'px');
    $('.rock-10').css('top', (400 - (scrolled * .25)) + 'px');
    $('.rock-11').css('top', (600 - (scrolled * .3)) + 'px');
    $('.rock-12').css('top', (800 - (scrolled * .6)) + 'px');
    $('.rock-13').css('top', (300 - (scrolled * .75)) + 'px');
    $('.rock-14').css('top', (300 - (scrolled * .50)) + 'px');
    $('.rock-15').css('top', (100 - (scrolled * .7)) + 'px');
    $('.rock-16').css('top', (600 - (scrolled * .9)) + 'px');
    $('.rock-17').css('top', (0 - (scrolled * .8)) + 'px');
    $('.rock-18').css('top', (0 - (scrolled * .1)) + 'px');
    $('.rock-19').css('top', (250 - (scrolled * .4)) + 'px');
    $('.rock-20').css('top', (100 - (scrolled * .7)) + 'px');

}