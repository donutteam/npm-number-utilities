//
// Exports
//

/**
 * Gets a random integer between the two given numbers.
 *
 * @param {Number} min The minimum integer. Inclusive.
 * @param {Number} max The maximum integer. Exclusive.
 * @returns {Number} A number between the minimum (inclusive) and maximum (exclusive).
 * @author Mozilla
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
 */
export function randomInt(min, max)
{
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor((Math.random() * (max - min)) + min);
}