/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
function cardTypeCheck(stack, card) {
    let count = 0;
    stack.forEach(element => {
        if (element === card)
            count++;
    })
    return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
function determineOddEvenCards(stack, type) {
    let count = 0;
    for (let number of stack) {
        if (number % 2 === 0 && type) {
            count++;
        }
        else if (number % 2 !== 0 && !type) {
            count++;
        }
    }
    return count;
}
function determineOddEvenCardsCool(stack, type) {
    const rest = type ? 0 : 1;
    let count = 0;
    for (let number of stack) {
        if (number % 2 === rest) {
            count++;
        }
    }
    return count;
}
// //1
// const cardType = 3;
// console.log(cardTypeCheck([1, 2, 3, 4, 3], cardType));
//2
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
// => 2
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
// => 4
console.log(determineOddEvenCardsCool([1, 2, 3, 1, 5, 6], true));
// => 2
console.log(determineOddEvenCardsCool([1, 2, 3, 1, 5, 6], false));