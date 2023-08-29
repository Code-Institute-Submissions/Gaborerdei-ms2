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
    debugger;

    //update game text
    document.getElementById("game-text").innerText = gname + ",what is the correct answer?";
});



