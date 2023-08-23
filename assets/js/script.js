//Wait for the DOM to finish loading before run the game
//Get the button elements and add eventlistehers to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});




/**The main game "loop" called when the script is first loaded and
 * after user's answer has been processed
 */
function runGame(gameType) {
    //Creates two random numbers between 0 and 5
    let num1 = Math.floor(Math.random) * 6;
    let num2 = Math.floor(Math.random) * 6;

    if (gameType === "addition") {
        displayQuestion(num1, num2);
    } else {
        alert(`Unknown game type:`);
        throw `Unknown game type: Aborting!`;
    }
}

function checkAnswer() {

}
function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayQuestion(operand1, operand2) {

    document.getElementById('operand1').textcontent = operand1;
    document.getElementById('operand2').textcontent = operand2;
    document.getElementById('operator').textcontent = "+";
}