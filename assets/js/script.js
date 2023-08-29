//Wait for the DOM to finish loading before run the game

document.addEventListener("DOMContentLoaded", function () {

    //display user input block
    document.getElementById("user-input").style.display = "block";

    //hide game input block
    document.getElementById("game").style.display = "none";
});


document.getElementById("submit-btn").addEventListener("click", function (e) {

    //hide user input block
    document.getElementById("user-input").style.display = "none";

    //show game block
    document.getElementById("game").style.display = "block";
});

