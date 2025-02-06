/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
function calculateResellPrice(originalPrice, age) {
    switch (true) {
        case age < 3:
            return originalPrice * 0.8;
        case age > 10:
            return originalPrice * 0.5;
        case age >= 3 && age <= 10:
            return originalPrice * 0.7;
    }
}

console.log(calculateResellPrice(1000, 10))