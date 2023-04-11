//
// Module
//

const usdFormatter = new Intl.NumberFormat("en-US",
	{
		style: "currency",
		currency: "USD",
	});

/**
 * Formats an amount of cents as USD.
 *
 * @param cents An amount of cents. For example: 1000 = $10.00
 * @returns The formatted string.
 * @author Loren Goodwin
 */
export function centsToUSD(cents : number) : string
{
	return usdFormatter.format(cents / 100);
}

/**
 * Clamps the given number between the given minimum and maximum values.
 * 
 * @param value The value to clamp.
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns The clamped value.
 * @author Loren Goodwin
 */
export function clamp(value : number, min : number, max : number) : number
{
	return Math.min(Math.max(value, min), max);
}

/**
 * Formats an amount of dollars as USD.
 *
 * @param dollars An amount of dollars. For example: 10.00 = $10.00
 * @returns The formatted string.
 * @author Loren Goodwin
 */
export function dollarsToUSD(dollars : number) : string
{
	return usdFormatter.format(dollars);
}

/**
 * Gets a random integer between the two given numbers.
 *
 * @param min The minimum integer. Inclusive.
 * @param max The maximum integer. Exclusive.
 * @returns A number between the minimum (inclusive) and maximum (exclusive).
 * @author Mozilla
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
 */
export function randomInt(min : number, max : number) : number
{
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor((Math.random() * (max - min)) + min);
}

/**
 * Rounds a number to the nearest multiple of another number.
 * 
 * @param value The input number.
 * @param nearest The number to round to the nearest multiple of.
 * @returns The rounded number.
 * @author Loren Goodwin
 */
export function roundToNearest(value : number, nearest : number) : number
{
	return Math.round(value / nearest) * nearest;
}

/**
 * Rounds a number down to the nearest multiple of another number.
 * 
 * @param value The input number.
 * @param nearest The number to round down to the nearest multiple of.
 * @returns The rounded number.
 * @author Loren Goodwin
 */
export function roundDownToNearest(value : number, nearest : number) : number
{
	return Math.floor(value / nearest) * nearest;
}

/**
 * Rounds a number up to the nearest multiple of another number.
 * 
 * @param value The input number.
 * @param nearest The number to round up to the nearest multiple of.
 * @returns The rounded number.
 * @author Loren Goodwin
 */
export function roundUpToNearest(value : number, nearest : number) : number
{
	return Math.ceil(value / nearest) * nearest;
}