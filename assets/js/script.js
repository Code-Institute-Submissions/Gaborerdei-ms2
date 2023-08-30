//Wait for the DOM to finish loading before run the game

document.addEventListener("DOMContentLoaded", function () {

});

let gname = "Guest";

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
        }
    }
    //disable start button
    e.target.disabled = true;

    //enable reset
    document.getElementById("reset-btn").disabled = false;
});

function GenerateRandomNumbers() {
    //Creates two random numbers between 0 and 5
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
}


