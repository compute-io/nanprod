/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	nanprod = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-nanprod', function tests() {

	it( 'should export a function', function test() {
		expect( nanprod ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
				'5',
				5,
				true,
				undefined,
				null,
				NaN,
				function(){},
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nanprod( value );
			};
		}
	});

	it( 'should compute the product', function test() {
		var data, expected;

		data = [ 2, 4, NaN, 5, 3, 8, NaN, 2 ];
		expected = 1920;

		assert.strictEqual( nanprod( data ), expected );
	});

	it( 'terminates early if product equals zero', function test() {
		var data, expected;

		data = [ 2, 4, NaN, 0, 3, 8, NaN, 2 ];
		expected = 0;

		assert.strictEqual( nanprod( data ), expected );
	});

});
