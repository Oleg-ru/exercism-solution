/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
function getCardPosition(stack, card) {
    return stack.indexOf(card);
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
function isEachCardEven(stack) {
    return stack.every(num => num % 2 === 0);
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
function doesStackIncludeOddCard(stack) {
    return stack.some(num => num % 2 !== 0);
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
function getFirstOddCard(stack) {
    return stack.find(num => num % 2 !== 0);
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
function getFirstEvenCardPosition(stack) {
    return  stack.findIndex(num => num % 2 === 0);
}

//console.log(getCardPosition([9, 7, 3, 2], 2));
//console.log(doesStackIncludeCard([2, 3, 4, 5], 3));
//console.log(isEachCardEven([2, 4, 6, 7]));
//console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));
//console.log(getFirstOddCard([4, 2, 8, 7, 9]))
console.log(getFirstEvenCardPosition([5, 2, 3, 1]));