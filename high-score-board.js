/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
function createScoreBoard() {
    return {
        'The Best Ever' : 1000000
    }
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
function updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return  scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
function applyMondayBonus(scoreBoard) {
    for (const scoreBoardKey in scoreBoard) {
        scoreBoard[scoreBoardKey] += 100;
    }
    return scoreBoard
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
function normalizeScore(params) {
    return params['normalizeFunction'](params['score']);

}

function normalize(score) {
    return 2 * score + 10;
}

console.log(addPlayer(createScoreBoard(), 'legin', 90))
//console.log(removePlayer({"men":20, "zen":300}, "men"))
//console.log(updateScore({"men":20, "zen":300}, 'men',100))
//console.log(applyMondayBonus({"men":20, "zen":300} ))
//const params = { score: 400, normalizeFunction: normalize };
//console.log(normalizeScore(params))