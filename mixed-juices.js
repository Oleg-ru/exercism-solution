/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
function limesToCut(wedgesNeeded, limes) {
    if (limes.length === 0 || wedgesNeeded === 0)
        return 0;
    let counter = 0;
    let cutLime = 0;
    const countLimeJSON = {
        'small' : 6,
        'medium' : 8,
        'large' : 10,
    }
    while (cutLime < wedgesNeeded && counter < limes.length) {
        cutLime += countLimeJSON[`${limes[counter]}`];
        counter++;
    }
    return counter;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
    let counter = 0;
    let totalTime = 0;
    do {
        totalTime += timeToMixJuice(orders.shift());
        counter++;
    } while (timeLeft > totalTime)
    return orders;
}


//console.log(timeToMixJuice('Any'));
console.log(limesToCut(42,[
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',
]));
//console.log(remainingOrders(1, ['Energizer', 'All or Nothing', 'Green Garden']));