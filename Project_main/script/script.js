$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
})

$('.carusel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
})

$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000)
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
})