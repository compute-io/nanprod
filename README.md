nanprod
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the product over an array of values ignoring any values which are not numeric.


## Installation

``` bash
$ npm install compute-nanprod
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var nanprod = require( 'compute-nanprod' );
```

#### nanprod( arr )

Computes the product while ignoring non-numeric values.

``` javascript
var data = [ 1, NaN, 2, NaN, 1 ];

var product = nanprod( data );
// returns 2
```

## Examples

``` javascript
var nanprod = require( 'compute-nanprod' );

var data = new Array( 10 );

for ( var i = 0; i < data.length; i++ ) {
	if ( i%5 === 0 ) {
		data[ i ] = NaN;
	} else {
		data[ i ] = Math.random() + 1;
	}
}

console.log( nanprod( data ) );

```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The product of an array containing non-numeric values is equal to the product of an equivalent array which contains only the numeric values. Hence,

``` javascript
var d1 = [ 1, NaN, 2, 3, NaN ],
    d2 = [ 1, 2, 3 ];

console.log( nanprod( d1 ) === nanprod( d2 ) );
// returns true
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
