/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
function translate2d(dx, dy) {
    return function (x, y) {
        return [x + dx, y + dy];
    }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
function scale2d(sx, sy) {
    return function (x, y) {
        return [x * sx, y * sy];
    }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
function composeTransform(f, g) {
        return function (ff, gg) {
            const array = f(ff, gg);
            return g(array[0], array[1]);
        }

}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
function memoizeTransform(f) {
    let old_x, old_y;
    let cash;
    return function (x, y) {
        if (x === old_x && y === old_y) {
            return cash;
        }
        old_x = x;
        old_y = y;
        cash = f(x,y);
        return cash;
    }
}
//*********************************************************************************************************************
// const moveCoordinatesRight2Px = translate2d(2, 0);
// console.log(moveCoordinatesRight2Px);
// const result = moveCoordinatesRight2Px(4, 8);
// console.log(result);
//*********************************************************************************************************************

//*********************************************************************************************************************
// const doubleScale = scale2d(2, 2);
// console.log(doubleScale);
// const result = doubleScale(6, -3);
// console.log(result);
//*********************************************************************************************************************
//*********************************************************************************************************************
// const moveCoordinatesRight2Px = translate2d(2, 0);
// /*
// function (x, y) {
//         return [x + dx, y + dy];
//     }
//  */
//
// const doubleCoordinates = scale2d(2, 2);
// /*
// function (x, y) {
//         return [x * sx, y * sy];
//     }
//  */
// const composedTransformations = composeTransform(
//     moveCoordinatesRight2Px,
//     doubleCoordinates,
// );
// /*
// composedTransformations =
//  */
//
// console.log(typeof composedTransformations)
// const result = composedTransformations(0, 1);
// console.log(result);
// result => [4, 2]
//*********************************************************************************************************************
const tripleScale = scale2d(3, 3); //scale2d
/*
sx = 3
sy = 3
function (x, y) {
        return [x * sx, y * sy];
    }
 */
const memoizedScale = memoizeTransform(tripleScale); // memoizeTransform =>

console.log(memoizedScale(4, 3)); // => [12, 9], this is computed since it hasn't been computed before for the arguments
console.log(memoizedScale(4, 3)); // => [12, 9], this is remembered, since it was computed already
console.log(memoizedScale(-2, -2)); // => [12, 9], this is remembered, since it was computed already