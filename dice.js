// Takes a number of sides and returns a random whole number
// from 1 up to that number of sides.
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollBothDice() {
    const sides1 = Number(document.getElementById("dice1").value);
    const sides2 = Number(document.getElementById("dice2").value);

    if (
        !Number.isInteger(sides1) || sides1 < 2 || sides1 > 20 ||
        !Number.isInteger(sides2) || sides2 < 2 || sides2 > 20
    ) {
        alert("Choose a whole number from 2 to 20 for each die.");
        return;
    }

    const result1 = rollDice(sides1);
    const result2 = rollDice(sides2);

    document.getElementById("result1").textContent = result1;
    document.getElementById("result2").textContent = result2;
    document.getElementById("result-total").textContent = result1 + result2;

    document.getElementById("dice-selection").hidden = true;
    document.getElementById("dice-results").hidden = false;
}

document.getElementById("roll-button").addEventListener("click", rollBothDice);

function startOver() {
    document.getElementById("dice1").value = 6;
    document.getElementById("dice2").value = 6;

    document.getElementById("result1").textContent = "—";
    document.getElementById("result2").textContent = "—";
    document.getElementById("result-total").textContent = "—";

    document.getElementById("dice-results").hidden = true;
    document.getElementById("dice-selection").hidden = false;
}

document.getElementById("start-over-button").addEventListener("click", startOver);