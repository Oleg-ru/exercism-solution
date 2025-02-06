const WORK_HOUR_IN_DAY = 8;
const WORK_DAY_IN_MONTH = 22;


/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    if (numDays < 22) {
        return numDays * WORK_HOUR_IN_DAY * ratePerHour;
    }
    const fullMonthCounter = Math.floor(numDays / WORK_DAY_IN_MONTH);
    const remainingDaysCounter = numDays - WORK_DAY_IN_MONTH * fullMonthCounter;
    const sumMonthDiscount = WORK_DAY_IN_MONTH * WORK_HOUR_IN_DAY * ratePerHour * (1 - discount);
    const sumFullMonth = sumMonthDiscount * fullMonthCounter;
    const sumRemainingDay = remainingDaysCounter * WORK_HOUR_IN_DAY * ratePerHour;
    return Math.ceil(sumFullMonth + sumRemainingDay);
}

console.log(priceWithMonthlyDiscount(29.654321, 155, 0.2547))
