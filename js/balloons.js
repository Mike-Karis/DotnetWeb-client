$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    const animations=["animate__bounce","animate__flash","animate__pulse","animate__rubberBand","animate__shakeX","animate__shakeY","animate__headShake","animate__swing","animate__tada","animate__wobble","animate__jello","animate__heartBeat"]
    var rand=Math.floor(Math.random() * 12);
    $('h1').removeClass().addClass('animate__animated '+animations[rand]);
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    $('#all').on('change', function () {
        if($('#all').prop('checked')==true){
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
        }
        else if($('#all').prop('checked')==false){
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            });
            }
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
    $('#submit').on("click", function(e){
        e.preventDefault();
        if($('#red').prop('checked')==false && $('#green').prop('checked')==false && $('#blue').prop('checked')==false){
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });
});