
jQuery(document).ready(function ($) {
    // Header Component
    $(".mainmenu-area").sticky({ topSpacing: 0 });

    // Home Component

    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function () {
        $(".navbar-collapse").removeClass('in');
    });
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-10146041-21', 'auto');
ga('send', 'pageview');

// Slick corasoul  animation

// function initCarousel() {

//     $('.my-carousel').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: false,
//         adaptiveHeight: false,
//        fade: true,
//        speed: 0, // removes Slick's standard animation
//     }).on('beforeChange', function(event, slick, currentSlideIndex, nextSlideIndex) {
//         if(nextSlideIndex > currentSlideIndex) {
//             // Animation to go to next slide
//            $('.my-carousel .slick-slide[data-slick-index=' + currentSlideIndex + ']').addClass('fadeOutLeft').removeClass('fadeInRight');
//            $('.my-carousel .slick-slide[data-slick-index=' + nextSlideIndex + ']').addClass('fadeInRight').removeClass('fadeOutLeft fadeOutRight');
//        } else {
//             // Animation to go to previous slide
//            $('.my-carousel .slick-slide[data-slick-index=' + currentSlideIndex + ']').addClass('fadeOutRight').removeClass('fadeInRight');
//            $('.my-carousel .slick-slide[data-slick-index=' + nextSlideIndex + ']').addClass('fadeInLeft').removeClass('fadeOutLeft fadeOutRight');
//        }
//    });
// }