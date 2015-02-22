'use strict';

var nanprod = require( './../lib' );

var data = new Array( 10 );

for ( var i = 0; i < data.length; i++ ) {
	if ( i%5 === 0 ) {
		data[ i ] = NaN;
	} else {
		data[ i ] = Math.random() + 1;
	}
}

console.log( nanprod( data ) );
