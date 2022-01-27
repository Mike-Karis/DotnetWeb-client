$(function(){
    
     // preload audio
     var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
                // first pause the audio (in case it is still playing)
                toast.pause();
                // reset the audio
                toast.currentTime = 0;
        // play audio
        toast.play();
        console.log($(this).data('product'));
        $( ".code" ).data( "test", { first: $(this).data('product'), last: $(this).data('code') } );
        $( "strong#product" ).text( $( ".code" ).data( "test" ).first );
        $( "strong#code" ).text( $( ".code" ).data( "test" ).last );

        $('#toast').toast({ autohide: false }).toast('show');
    });
    var elem = "#toast"; 
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $( elem ).hide();
    }
});
});
