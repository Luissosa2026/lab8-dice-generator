const rollDice = require("./rollDice.js");

const result = rollDice(6);

if (!Number.isInteger(result) || result < 1 || result > 6) {
    throw new Error("D6 test failed: expected a whole number from 1 to 6");
}

console.log("D6 test passed! Result:", result);


const resultD2 = rollDice(2);

if (!Number.isInteger(resultD2) || resultD2 < 1 || resultD2 > 2) {
    throw new Error("D2 test failed: expected 1 or 2");
}

const resultD20 = rollDice(20);

if (!Number.isInteger(resultD20) || resultD20 < 1 || resultD20 > 20) {
    throw new Error("D20 test failed: expected a whole number from 1 to 20");
}

console.log("D2 and D20 tests passed!");