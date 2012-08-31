#!/usr/bin/env node

var express = require( 'express' )
var fs = require( 'fs' );
var path = require( 'path' );

var port = 3000;

app = express( );
app.use( express.logger( ) );
app.use( express.bodyParser( { uploadDir: path.join( __dirname, './uploads' ) } ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

app.post( '/upload', function( req, res ) {
    console.info( req.body );
    console.info( req.files );
    res.send( 'ok' );
} );

app.listen( port );

console.info( 'http://127.0.0.1:' + port );
