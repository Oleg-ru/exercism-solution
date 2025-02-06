/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
function setItem(cards, position, replacementCard) {
    const arr = [...cards];
    arr[position] = replacementCard;
    return arr;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
function checkSizeOfStack(cards, stackSize) {
    return cards.length === stackSize;
}

//console.log(setItem([1, 2, 3, 4, 5], 2, 9))
//console.log(insertItemAtTop([0,1,2], -1));
//console.log(removeItem([0,1,2,3,4], 0));
//console.log(removeItemFromTop([1,2,3,4,5]));
//console.log(insertItemAtBottom([1,2,3,4,5], 10));
//console.log(removeItemAtBottom([1,2,3,4,5]));
console.log(checkSizeOfStack([1,2,3,4,5], 5));
