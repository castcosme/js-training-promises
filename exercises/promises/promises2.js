/**
 * Requirements:
 *
 *  Create a wait() function that receive a number that represents
 *  the delay time in ms.
 *
 *  Create a add() function that receives two numbers as params and
 *  return the sum of these ones.
 *    Notes:
 *      1. The params should require an special processing, so we
 *      we need to pass each one to a clean() function that emulates an async procedure
 *
 * Exercises:
 *
 *  1. Create a function getSum20 that returns a 20 as result.
 *  2. Create a function getOperation100 that returns 100 as result
 *    Notes:
 *      1. You only can use numbers between 0 and 10
 *       2. Maybe we need to a new function to help us
 *  3. This exersice have two parts:
 *    1. Lets create a function called add5() that receives a number as a param
 *       and return a sum of  this one with 5
 *    2. Create a function called getSum25() that returns 25 as a result.
 *
 * Remember that all the solutions must be done using promises!! Enjoy it!
 */

// General functions

function wait(delay) {
  return new Promise((resolve) => setTimeout(() => resolve, delay));
}

function clean(number) {
  return wait(number).then(() => number);
}

function add(x, y) {
  return Promise.all([clean(x), clean(y)]).then(([x, y]) => x + y);
}

/**
 * Exercise 1
 */

function getSum20() {
  return add(10, 10);
}

/**
 * Exercise 2
 */

function getOperation100() {
  return getSum50() + getSum50();
}

/**
 * Exercise 3
 */

function add5(num) {
  return add(num, 5);
}

function getSum25() {
  return add5(getSum20());
}

function getSum50() {
  return getSum25() + getSum25();
}

module.exports = {
  getSum20,
  getOperation100,
  getSum25,
};
