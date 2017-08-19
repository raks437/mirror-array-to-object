# Mirror-Array-To-Object
Create an object with both keys and values equals to each index of array of strings.

## Install

```
npm install mirror-array-to-object
```

## Usage

```js
var mirrorKeys = require('mirror-array-to-object');

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
