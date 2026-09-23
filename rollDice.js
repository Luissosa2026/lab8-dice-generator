// Returns a random whole number from 1 to sides.
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
if (typeof module !== "undefined") {
    module.exports = rollDice;
} 