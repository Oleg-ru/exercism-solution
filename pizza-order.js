/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

function pizzaPrice(pizza, ...extras) {
  let resultCost = 0;

    switch (pizza) {
      case 'Margherita':
        resultCost += 7;
        break;
      case 'Caprese':
        resultCost += 9;
        break;
      case 'Formaggio':
        resultCost += 10;
        break;
    }

    console.log(Array.isArray(extras));
    function sumExtraOption(extras) {
      if (extras.length === 0) {
        return 0;
      }
      switch (extras[0]) {
        case 'ExtraSauce':
          resultCost += 1;
          break;
        case 'ExtraToppings':
          resultCost += 2;
          break;
      }
      extras.shift();
      return resultCost + sumExtraOption(extras);
  }
  sumExtraOption(extras);
  return resultCost;
}
  
  /**
   * Calculate the price of the total order, given individual orders
   *
   * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
   * for a more info about the type definitions used)
   *
   * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
   * @returns {number} the price of the total order
   */
function orderPrice(pizzaOrders) {
  let sumOrder = 0;  
  for(let i = 0; i < pizzaOrders.length; i++) {
      sumOrder += pizzaPrice(pizzaOrders[i].pizza, ...pizzaOrders[i].extras)
    }
    return sumOrder;
  }

// console.log(pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings'));
// console.log(pizzaPrice('Margherita'));
// console.log(pizzaPrice());
//***********************************************************************

class PizzaOrder {
  constructor (pizza, ...extras) {
     this.pizza = pizza;
     this.extras = extras;
  }
}

const margherita = new PizzaOrder('Margherita');
const caprese = new PizzaOrder('Caprese', 'ExtraSauce', 'ExtraSauce');
console.log(orderPrice([margherita, caprese]));
// => 18