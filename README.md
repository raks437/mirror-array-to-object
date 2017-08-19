# Mirror-Keys
Create an object with both keys and values equals to each index of array of strings.

## Usage

```
npm install mirror-keys
```

```js
var mirrorKeys = require('mirrorKeys');

// Create an object with the keys and values
// same as COLORS = {blue: 'blue', green: 'green', yellow: 'yellow', red: 'red'};
var COLORS = mirrorKeys(['blue', 'green', 'yellow', 'red']);

// Assign values
var blueColor = COLORS.blue;

// Check if any values exists in the original array
var isColorValid = !!COLORS[blueColor];
```
## LICENSE

[MIT Licensed](./LICENSE)
