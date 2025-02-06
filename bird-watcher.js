// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
    let sumBirds = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        sumBirds += birdsPerDay[i];
    }
    return sumBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
    if (week * 7 > birdsPerDay.length)
        return 0;
    return birdsPerDay.slice(week * 7 - 7, week * 7).reduce((accumulator = 0, current) => {
        accumulator+=current; return accumulator
    });
}

/**
 * +
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i+=2) {
        const firstDayWithOldBird = birdsPerDay[i] + 1;
        birdsPerDay[i] = firstDayWithOldBird;
    }
    return birdsPerDay;
}

//console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));
//console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2));
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]))
