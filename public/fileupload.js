(function(){

    function upload( url, files, callback ) {
        var formData = new FormData( );
        var i=0, file;
        while( file = files[ i ] ) {
            formData.append( file.name, file );
            i++;
        }
        var xhr = new XMLHttpRequest( );
        xhr.open( 'POST', url, true );
        xhr.onload = function( e ) {
            callback( null );
        };
        xhr.send( formData );
    }

    document.querySelector( 'form' ).addEventListener( 'submit', function( e ) {
        e.preventDefault( );

        var fileInput = document.querySelector( 'input[type="file"]' );
        upload( '/upload', fileInput.files, function( ) {
            fileInput.value = '';
        } );

    }, false );

})();
