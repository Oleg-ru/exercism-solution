/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
function seeingDouble(deck) {
    return  deck.map(element => element *= 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
function threeOfEachThree(deck) {
    return deck.reduce((accumulator, currentValue) => {
        if (currentValue === 3) {
            for (let i = 0; i < 3; i++) {
                accumulator.push(currentValue);
            }
        }
        else
            accumulator.push(currentValue);
        return accumulator;
    }, [])
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
function middleTwo(deck) {
    return deck.slice(deck.length / 2 - 1, deck.length / 2 + 1);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

function sandwichTrick(deck) {
    const oneLatElement = [];
    oneLatElement.push(deck[deck.length - 1], deck[0]);
    deck.splice(deck.length / 2, 0, ...oneLatElement);
    return  deck.slice(1, deck.length - 1);
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
function twoIsSpecial(deck) {
    return deck.filter(element => element === 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
function perfectlyOrdered(deck) {
    return deck.sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
function reorder(deck) {
    return deck.reverse();
}

//1
// const deck = [1, 2, 3, 4, 10];
// console.log(seeingDouble(deck));
// //2
// const deck = [1, 3, 9, 3, 7];
// console.log(threeOfEachThree(deck));
// //3
// const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(middleTwo(deck));
// //4
// console.log(sandwichTrick([1, 6, 7, 7, 2, 1]));
//5
// const deck = [1, 2, 3, 4, 10, 2];
// console.log(twoIsSpecial(deck));
// //6
// const deck = [10, 1, 5, 3, 2, 8, 7];
// console.log(perfectlyOrdered(deck));
//7
const deck = [10, 1, 5, 3, 2];
console.log(reorder(deck));