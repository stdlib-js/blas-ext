/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name base
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/ext/base}
*/
setReadOnly( ns, 'base', require( '@stdlib/blas-ext-base/dist' ) );

/**
* @name circshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/circshift}
*/
setReadOnly( ns, 'circshift', require( '@stdlib/blas-ext-circshift/dist' ) );

/**
* @name copyWithin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/copy-within}
*/
setReadOnly( ns, 'copyWithin', require( '@stdlib/blas-ext-copy-within/dist' ) );

/**
* @name cuany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/cuany}
*/
setReadOnly( ns, 'cuany', require( '@stdlib/blas-ext-cuany/dist' ) );

/**
* @name cuevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/cuevery}
*/
setReadOnly( ns, 'cuevery', require( '@stdlib/blas-ext-cuevery/dist' ) );

/**
* @name cunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/cunone}
*/
setReadOnly( ns, 'cunone', require( '@stdlib/blas-ext-cunone/dist' ) );

/**
* @name cusome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/cusome}
*/
setReadOnly( ns, 'cusome', require( '@stdlib/blas-ext-cusome/dist' ) );

/**
* @name cusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/cusum}
*/
setReadOnly( ns, 'cusum', require( '@stdlib/blas-ext-cusum/dist' ) );

/**
* @name fillBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/fill-between}
*/
setReadOnly( ns, 'fillBetween', require( '@stdlib/blas-ext-fill-between/dist' ) );

/**
* @name findIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/find-index}
*/
setReadOnly( ns, 'findIndex', require( '@stdlib/blas-ext-find-index/dist' ) );

/**
* @name findIndexBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/find-index-between}
*/
setReadOnly( ns, 'findIndexBetween', require( '@stdlib/blas-ext-find-index-between/dist' ) );

/**
* @name findLastIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/find-last-index}
*/
setReadOnly( ns, 'findLastIndex', require( '@stdlib/blas-ext-find-last-index/dist' ) );

/**
* @name findLastIndexBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/find-last-index-between}
*/
setReadOnly( ns, 'findLastIndexBetween', require( '@stdlib/blas-ext-find-last-index-between/dist' ) );

/**
* @name firstIndexLessThan
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/first-index-less-than}
*/
setReadOnly( ns, 'firstIndexLessThan', require( '@stdlib/blas-ext-first-index-less-than/dist' ) );

/**
* @name indexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/index-of}
*/
setReadOnly( ns, 'indexOf', require( '@stdlib/blas-ext-index-of/dist' ) );

/**
* @name indexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/index-of-falsy}
*/
setReadOnly( ns, 'indexOfFalsy', require( '@stdlib/blas-ext-index-of-falsy/dist' ) );

/**
* @name indexOfNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/index-of-not-equal}
*/
setReadOnly( ns, 'indexOfNotEqual', require( '@stdlib/blas-ext-index-of-not-equal/dist' ) );

/**
* @name indexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/index-of-truthy}
*/
setReadOnly( ns, 'indexOfTruthy', require( '@stdlib/blas-ext-index-of-truthy/dist' ) );

/**
* @name join
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/join}
*/
setReadOnly( ns, 'join', require( '@stdlib/blas-ext-join/dist' ) );

/**
* @name lastIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/last-index-equal}
*/
setReadOnly( ns, 'lastIndexEqual', require( '@stdlib/blas-ext-last-index-equal/dist' ) );

/**
* @name lastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/last-index-of}
*/
setReadOnly( ns, 'lastIndexOf', require( '@stdlib/blas-ext-last-index-of/dist' ) );

/**
* @name lastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/last-index-of-falsy}
*/
setReadOnly( ns, 'lastIndexOfFalsy', require( '@stdlib/blas-ext-last-index-of-falsy/dist' ) );

/**
* @name lastIndexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/last-index-of-truthy}
*/
setReadOnly( ns, 'lastIndexOfTruthy', require( '@stdlib/blas-ext-last-index-of-truthy/dist' ) );

/**
* @name linspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/linspace}
*/
setReadOnly( ns, 'linspace', require( '@stdlib/blas-ext-linspace/dist' ) );

/**
* @name logspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/logspace}
*/
setReadOnly( ns, 'logspace', require( '@stdlib/blas-ext-logspace/dist' ) );

/**
* @name oneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/one-to}
*/
setReadOnly( ns, 'oneTo', require( '@stdlib/blas-ext-one-to/dist' ) );

/**
* @name sort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/sort}
*/
setReadOnly( ns, 'sort', require( '@stdlib/blas-ext-sort/dist' ) );

/**
* @name sorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/sorthp}
*/
setReadOnly( ns, 'sorthp', require( '@stdlib/blas-ext-sorthp/dist' ) );

/**
* @name sum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/sum}
*/
setReadOnly( ns, 'sum', require( '@stdlib/blas-ext-sum/dist' ) );

/**
* @name toSorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/to-sorted}
*/
setReadOnly( ns, 'toSorted', require( '@stdlib/blas-ext-to-sorted/dist' ) );

/**
* @name toSortedhp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/to-sortedhp}
*/
setReadOnly( ns, 'toSortedhp', require( '@stdlib/blas-ext-to-sortedhp/dist' ) );

/**
* @name unitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/unitspace}
*/
setReadOnly( ns, 'unitspace', require( '@stdlib/blas-ext-unitspace/dist' ) );

/**
* @name zeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/zero-to}
*/
setReadOnly( ns, 'zeroTo', require( '@stdlib/blas-ext-zero-to/dist' ) );


// EXPORTS //

module.exports = ns;
