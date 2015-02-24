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
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nanprod( value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nanprod( [1,NaN,NaN,4], value );
			};
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( nanprod( [] ) );
	});

	it( 'should return NaN if provided an array containing only non-numeric values', function test() {
		var val = nanprod( [NaN,NaN,NaN] );
		assert.isNumber( val );
		assert.ok( val !== val );
	});

	it( 'should compute the product', function test() {
		var data, expected;

		data = [ 2, 4, NaN, 5, 3, 8, NaN, 2 ];
		expected = 1920;

		assert.strictEqual( nanprod( data ), expected );
	});

	it( 'should compute the product using an accessor function', function test() {
		var data, expected;

		data = [
			[5,2],
			[1,4],
			[3,NaN],
			[NaN,5],
			[NaN,3],
			[3,8],
			[NaN,NaN],
			[5,2]
		];
		expected = 1920;

		assert.strictEqual( nanprod( data, getValue ), expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

	it( 'should return 0 upon encountering a zero value', function test() {
		var data, expected;

		data = [ 2, 4, NaN, 0, 3, 8, NaN, 2 ];
		expected = 0;

		assert.strictEqual( nanprod( data ), expected );

		data = [
			{'x':1},
			{'x':NaN},
			{'x':0},
			{'x':2}
		];
		expected = 0;

		assert.strictEqual( nanprod( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
