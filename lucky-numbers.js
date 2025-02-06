/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
    return  Number(String(array1).replaceAll(",", "")) + Number(String(array2).replaceAll(",", ""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
function luckyNumber(value) {
    return Number(String(value).split("").reverse().toString().replaceAll(",", "")) === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
    if (input === undefined || input === null || input === "") {
        return 'Required field';
    }
    else if (input == 0 || isNaN(Number(input))) {
        return 'Must be a number besides 0'
    }
    return '';
}

//console.log(twoSum([1, 2, 3], [0, 7]));
//console.log(luckyNumber(8998));
console.log(errorMessage('0'));
