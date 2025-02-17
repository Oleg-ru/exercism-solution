// @ts-check

class ArgumentError extends Error {}

class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage > 70) 
    throw new ArgumentError("Is critical humidity level")
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
function reportOverheating(temperature) {
  if(temperature === null)
    throw new ArgumentError("Sensor is error!");
  if(temperature > 500) 
    throw new OverheatingError(temperature);  
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
function monitorTheMachine(actions) {
  try {
    actions.check(4);
  } catch (error) {
    if (error instanceof ArgumentError)
        actions.alertDeadSensor();
    else if(error instanceof OverheatingError) {
        const message = error.message;
        const temperature = message.match(/\d{3}/g);
        if (+temperature < 600)
            actions.alertOverheating();
        if (+temperature > 600)
            actions.shutdown();        
    }
    else
        throw new Error("UnknownError", {cause: error})        
  }
}

//TEST
// 1
// checkHumidityLevel(71)
// 2
//reportOverheating(null);
// reportOverheating(501);
// 3
function check(typeErr) {
    switch (typeErr) {
        case 1: {
            reportOverheating(null);
            break;
        }
        case 2: {
            reportOverheating(501);
            break;
        }
        case 3: {
            reportOverheating(800);
            break;
        }
        case 4: { 
            throw new Error("Any error");
            break;
        }
    }
}

function alertDeadSensor() {
    console.log("Sensor is die");
}
function alertOverheating() {
    console.log("Temperature is danger");
}
function shutdown() {
    console.log("Temperature is critical");
}

monitorTheMachine({check, alertDeadSensor, alertOverheating, shutdown});