/**
 * Number.EPSILON returns the smallest interval between two representable numbers.
 * This is useful for the problem with floating-point approximation.
 * */

function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3)); // true

/**
 * Number.MAX_SAFE_INTEGER returns the largest integer.
 */

console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true

/**
 * This returns true because it cannot go any higher.
 * However, it does not work for floating-point decimals.
 */

console.log(
  Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022
); // false

/**
 * Number.MAX_VALUE returns the largest floating-point number possible.
 * Number.MAX_VALUE is equal to 1.7976931348623157e+308.
 * */

console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // true
console.log(Number.MAX_VALUE + 1.11 === Number.MAX_VALUE + 2.222); // true

/**
 * Number.MIN_SAFE_INTEGER returns the smallest integer.
 * Number.MIN_SAFE_INTEGER is equal to -9007199254740991.
 */

console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true

/**
 * his returns true because it cannot get any smaller. However, it does not work for
floating-point decimals.
*/
console.log(
  Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022
); // false

/** 
Number.MIN_VALUE returns the smallest floating-point number possible.
Number.MIN_VALUE is equal to 5e-324. 
This is not a negative number since it is the smallest floating-point number possible and means that 
Number.MIN_VALUE is actually bigger than Number.MIN_- SAFE_INTEGER.
Number.MIN_VALUE is also the closest floating point to zero. 1 Number.MIN_VALUE - 1 == -1; // true
This is because this is similar to writing 0 - 1 == -1.
 */
