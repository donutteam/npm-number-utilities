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

const usdFormatter = new Intl.NumberFormat("en-US",
	{
		style: "currency",
		currency: "USD",
	});

/**
 * Formats an amount of cents as USD.
 *
 * @param {Number} cents An amount of cents. For example: 1000 = $10.00
 * @returns {String} The formatted string.
 * @author Loren Goodwin
 */
export function centsToUSD(cents)
{
	return usdFormatter.format(cents / 100);
}

/**
 * Formats an amount of dollars as USD.
 *
 * @param {Number} dollars An amount of dollars. For example: 10.00 = $10.00
 * @returns {String} The formatted string.
 * @author Loren Goodwin
 */
export function dollarsToUSD(dollars)
{
	return usdFormatter.format(dollars);
}