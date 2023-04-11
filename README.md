# Number Utilities
A collection of various number-related utility functions.

## Installation
Install the package with NPM:

```
npm install @donutteam/number-utilities
```

## Usage
### centsToUSD
Takes an amount of cents and formats it as an amount of US dollars.

```js
import { centsToUSD } from "@donutteam/number-utilities";

// Returns $43.20
const myDollars = centsToUSD(4320); 
```

### clamp
Clamps a number between the given minimum and maximums.

```js
import { clamp } from "@donutteam/number-utilities";

// 50
const clamped1 = clamp(127, 25, 50);

// 130
const clamped2 = clamp(127, 130, 150);

// 127
const clamped3 = clamp(127, 25, 150);
```

### dollarsToUSD
Takes an amount of dollars and formats it as an amount of US dollars.

```js
import { dollarsToUSD } from "@donutteam/number-utilities";

// Returns $43.20
const myDollars = dollarsToUSD(43.20); 
```

### randomInt
Generates a random integer between the minimum (inclusive) and the maximum (exclusive) values given to it:

```js
import { randomInt } from "@donutteam/number-utilities";

// Will be some number from 0 to 9
const myRandomInteger = randomInt(0, 10);
```

### roundToNearestMultiple
Rounds a number to the nearest multiple of the other number.

```js
import { roundToNearestMultiple } from "@donutteam/number-utilities";

// Returns 450
const myRoundedNumber = roundToNearestMultiple(457, 50);
```

### roundDownToNearestMultiple
Rounds a number down to the nearest multiple of the other number.

```js
import { roundDownToNearestMultiple } from "@donutteam/number-utilities";

// Returns 450
const myRoundedNumber = roundDownToNearestMultiple(499, 50);
```

### roundUpToNearestMultiple
Rounds a number up to the nearest multiple of the other number.

```js
import { roundUpToNearestMultiple } from "@donutteam/number-utilities";

// Returns 500
const myRoundedNumber = roundUpToNearestMultiple(457, 50);
```

## License
[MIT](https://github.com/donutteam/number-utilities/blob/main/LICENSE.md)