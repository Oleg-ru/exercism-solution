
/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
function getFirstCard(deck) {
    const [firstElement, ...anyElements] = deck;
    return firstElement;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
function getSecondCard(deck) {
    const [firstElement, secondElement, ...anyElements] = deck;
    return secondElement;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
function swapTopTwoCards(deck) {
    const [firstElement, secondElement, ...anyElements] = deck;
    return [secondElement, firstElement, ...anyElements];
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
function discardTopCard(deck) {
    const [firstElement, ...anyElements] = deck;
    return [firstElement, [...anyElements]];
}

/** @type {Card[]} **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
function insertFaceCards(deck) {
    const [firstElement, ...anyElements] = deck;
    return [firstElement, ...FACE_CARDS, ...anyElements]
}
const arr = [1, 2, 3, 4];
//console.log(getFirstCard(arr));
//console.log(getSecondCard(arr));
//console.log(swapTopTwoCards(arr));
//console.log(discardTopCard(arr));
console.log(insertFaceCards(arr));