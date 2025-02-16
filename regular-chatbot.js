/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

function isValidCommand(command) {
    return /^chatbot/i.test(command);
  }
  
  /**
   * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
   *
   * @param {string} message
   * @returns {string} The message without the emojis encryption
   */
function removeEmoji(message) {
    return message.replace(/emoji\d*/g, "")
  }
  
  /**
   * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
   *
   * @param {string} number
   * @returns {string} the Chatbot response to the phone Validation
   */
function checkPhoneNumber(number) {
    return /\(\+\d{2}\)\s\d{3}-\d{3}-\d{3}/.test(number) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`;
  }
  
  /**
   * Given a certain response from the user, help the chatbot get only the URL.
   *
   * @param {string} userInput
   * @returns {string[] | null} all the possible URL's that the user may have answered
   */
function getURL(userInput) {
    return userInput.match(/[a-zA-Z]+\.(org|com|ru|so)/g);
  }
  
  /**
   * Greet the user using the full name data from the profile.
   *
   * @param {string} fullName
   * @returns {string} Greeting from the chatbot
   */
function niceToMeetYou(fullName) {
    const fullNameArr = fullName.split(/, /)
    return `Nice to meet you, ${fullNameArr[1]} ${fullNameArr[0]}`;
  }
  
// TEST
// 1
// console.log(isValidCommand("Chatbot, play a song from the 80's."));
// console.log(isValidCommand("Hey Chatbot, where is the closest pharmacy?"));
// 2
// console.log(removeEmoji("I love playing videogames emoji3465 it's one of my hobbies"));
// 3
// console.log(checkPhoneNumber('(+34) 659-771-594'));
// console.log(checkPhoneNumber('659-771-594'));
// 4
// console.log(getURL('I learned a lot from exercism.org'));
// 5
let str = 'Smith, John';
console.log(niceToMeetYou(str));