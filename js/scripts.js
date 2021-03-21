//Smooth Scroll
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

//Open Responsive Menu
$('#abrir').click(function() {
    $('#responsive-menu article').animate({
        right: 0
    }, 300, 'easeOutExpo');

    $('#open-btn').hide();
    $('#close-btn').show();

    event.preventDefault();
});

//Close Responsive Menu
$('#cerrar').click(function() {
    $('#responsive-menu article').animate({
        right: -300
    }, 300, 'easeOutExpo');

    $('#open-btn').show();
    $('#close-btn').hide();

    event.preventDefault();
});