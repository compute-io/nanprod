nanprod
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the product of an array ignoring any values which are not numeric.


## Installation

``` bash
$ npm install compute-nanprod
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var nanprod = require( 'compute-nanprod' );
```

#### nanprod( arr[, accessor] )

Computes the product of an `array` while ignoring non-numeric values. For primitive `arrays`,

``` javascript
var arr = [ 1, NaN, 2, NaN, 1 ];

var value = nanprod( arr );
// returns 2
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var arr = [
	[1,4],
	[NaN,1],
	[2,2],
	[NaN,0],
	[1,3]
];

function getValue( d ) {
	return d[ 0 ];
}

var value = nanprod( arr, getValue );
// returns 2
```



## Notes

*	The product of an `array` containing non-numeric values is equal to the product of an equivalent `array` containing only the numeric values. Hence,

``` javascript
var arr1 = [ 1, NaN, 2, 3, NaN ],
    arr2 = [ 1, 2, 3 ];

console.log( nanprod( arr1 ) === nanprod( arr2 ) );
// returns true
```
*	If provided an empty `array`, the method returns `null`.
* 	If provided an `array` with __only__ non-numeric values, the method returns `NaN`.



## Examples

``` javascript
var nanprod = require( 'compute-nanprod' );

var data = new Array( 10 );
for ( var i = 0; i < data.length; i++ ) {
	if ( i%5 === 0 ) {
		data[ i ] = NaN;
	} else {
		data[ i ] = Math.round( Math.random()*10 ) + 1;
	}
}

console.log( nanprod( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-nanprod.svg
[npm-url]: https://npmjs.org/package/compute-nanprod

[travis-image]: http://img.shields.io/travis/compute-io/nanprod/master.svg
[travis-url]: https://travis-ci.org/compute-io/nanprod

[coveralls-image]: https://img.shields.io/coveralls/compute-io/nanprod/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/nanprod?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/nanprod.svg
[dependencies-url]: https://david-dm.org/compute-io/nanprod

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/nanprod.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/nanprod

[github-issues-image]: http://img.shields.io/github/issues/compute-io/nanprod.svg
[github-issues-url]: https://github.com/compute-io/nanprod/issues
