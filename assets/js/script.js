//Wait for the DOM to finish loading before run the game

document.addEventListener("DOMContentLoaded", function () {

    //display user input block
    document.getElementById("user-input").style.display = "block";

    //hide game input block
    document.getElementById("game").style.display = "none";
});


let gname = "Guest";
document.getElementById("submit-btn").addEventListener("click", function (e) {

    //hide user input block
    document.getElementById("user-input").style.display = "none";

    //show game block
    document.getElementById("game").style.display = "block";

    //set correct name
    let inputElement = document.getElementById("user");
    if (inputElement.value.lenght > 0)
        gname = document.getElementById("user").value;
});

