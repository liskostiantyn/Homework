$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
})

$('.carusel').slick({
    // autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});