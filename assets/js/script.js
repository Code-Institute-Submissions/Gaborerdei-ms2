//Wait for the DOM to finish loading before run the game
document.addEventListener("DOMContentLoaded", function () {

});

//Create variables
let gname = "Guest";
let timer;
let correctGuess = 0;
let currentScore = 0;

//Submit button event
document.getElementById("submit-btn").addEventListener("click", function (e) {

    //show game block
    document.getElementById("game").style.display = "block";

    //hide user input block
    document.getElementById("user-input").style.display = "none";

    //set correct name
    let inputElement = document.getElementById("user");
    if (inputElement.value.length > 0)
        gname = document.getElementById("user").value;

    //update game text
    document.getElementById("game-text").innerText = gname + ",what is the correct answer?";
});


document.getElementById("start-btn").addEventListener("click", function (e) {
    //Timer 30 second

    // Set the target countdown time in seconds
    const targetTime = 32; // 0.5 minutes

    // Calculate the end time
    const endTime = new Date().getTime() + (targetTime * 1000);

    // Update the timer every second
    timer = setInterval(updateTimer, 1000);

    function updateTimer() {
        const currentTime = new Date().getTime();
        const timeLeft = Math.max(0, endTime - currentTime);
        const seconds = Math.floor(timeLeft / 1000);

        document.getElementById('timer').textContent = seconds;
        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById('timer').textContent = '   Time\'s up!';

            //disable Reset button
            document.getElementById("reset-btn").disabled = true;

            //enable Start button
            document.getElementById("start-btn").disabled = false;

            //disable Answer buttons button
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
        }
    }
    //disable start button
    e.target.disabled = true;

    //enable reset
    document.getElementById("reset-btn").disabled = false;

    newRound();
});

//Start the game, create additions
function newRound() {
    //generate addition
    const correctResult = GenerateRandomNumbers();
    correctGuess = correctResult;
    const fakeResult = GenerateRandomExcluding(1, 5, [correctResult]);

    //decide where to put the correct result
    const correctButton = Math.floor(Math.random() * 2) + 1;
    if (correctButton === 1) {
        document.getElementById("btn1").textContent = correctResult;
        document.getElementById("btn2").textContent = fakeResult;
    } else {
        document.getElementById("btn1").textContent = fakeResult;
        document.getElementById("btn2").textContent = correctResult;
    }
}

function GenerateRandomNumbers() {
    //Creates two random numbers between 0 and 5
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
    displayQuestion(num1, num2);
    return num1 + num2;
}

//Generate random answers excluding the right answer
function GenerateRandomExcluding(min, max, exclude) {
    let random;
    while (!random) {
        const x = Math.floor(Math.random() * (max - min + 1)) + min;
        if (exclude.indexOf(x) === -1) random = x;
    }
    return random;
}

//Check your answer is correct or not
function checkAnswer() {
    var guess = parseInt(event.target.innerText);
    if (guess == correctGuess) {
        currentScore = currentScore + 1;
        document.getElementById("score").innerText = currentScore;
        document.getElementById("happy").style.display = "none";
        document.getElementById("cry").style.display = "block";
    } else {
        document.getElementById("cry").style.display = "none";
        document.getElementById("happy").style.display = "block";
    }
    // Start a new round, similar to starting the game
    newRound();
}

//Display addition questions
function displayQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

//Rules info button event
document.getElementById("rules-btn").addEventListener("click", function (e) {
    if (document.getElementById("instruction-area").style.display == "block") {
        document.getElementById("instruction-area").style.display = "none";
    } else if (document.getElementById("instruction-area").style.display == "none") {
        document.getElementById("instruction-area").style.display = "block";
    } else {
        document.getElementById("instruction-area").style.display = "block";
    }
});

//Close game rules if you click on close button
document.getElementById("close-btn").addEventListener("click", function (e) {
    document.getElementById("instruction-area").style.display = "none";
});

document.getElementById("reset-btn").addEventListener("click", function (e) {

    // Reset timer
    clearInterval(timer);
    document.getElementById('timer').textContent = '0';

    // Disable reset button
    e.target.disabled = true;

    // Enable start button
    document.getElementById("start-btn").disabled = false;

    // Reset current score
    currentScore = 0;
    document.getElementById("score").innerText = currentScore;

    //Hide cry and happy emoji
    document.getElementById("happy").style.display = "none";
    document.getElementById("cry").style.display = "none";

    //disable Answer buttons button
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;

});
