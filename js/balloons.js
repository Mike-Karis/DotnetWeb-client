$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    const animations=["animate__bounce","animate__flash","animate__pulse","animate__rubberBand","animate__shakeX","animate__shakeY","animate__headShake","animate__swing","animate__tada","animate__wobble","animate__jello","animate__heartBeat"]
    var rand=Math.floor(Math.random() * 12);
    $('h1').removeClass().addClass('animate__animated '+animations[rand]);
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
      // event listener for check/uncheck
      $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});