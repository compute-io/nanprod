/**
*
*	COMPUTE: nanprod
*
*
*	DESCRIPTION:
*		- Computes the product over an array of values ignoring any values which are not numeric.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Philipp Burckhardt.
*
*
*	AUTHOR:
*		Philipp Burckhardt. pburckhardt@outlook.com. 2015.
*
*/

'use strict';

// MODULES //

// var module_alias = require( 'module_name' );


// FUNCTIONS //

// NANPROD //
/**
* FUNCTION: nanprod( arr )
* Computes the product over an array of values ignoring non-numeric values.
*
* @param {Array} arr - array of values
* @returns {Number} prod
*/
function nanprod( arr ) {
  if ( !Array.isArray( arr ) ) {
    throw new TypeError( 'nanprod()::invalid input argument. Must provide an array.' );
  }
  var len = arr.length, p = 1, val;

  for ( var i = 0; i < len; i++ ) {
    val = arr[ i ];
    if ( typeof val !== 'number' || val !== val ) {
      continue;
    }
    p *= val;
    if (p === 0){
      break;
    }
  }
  return p;
} // end FUNCTION nanprod()


// EXPORTS //

module.exports = nanprod;
