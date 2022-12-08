var pArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// document.addEventListener(sessionStorage) = randomizer();
function randomizer(){
    // var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    // document.getElementById(".img1").src = pArray[randomNumber1];
    var randomNumber1 = Math.floor((Math.random() * 6));
    var randomNumber2 = Math.floor((Math.random() * 6));

    document.querySelector(".img1").setAttribute("src",pArray[randomNumber1]);
    document.querySelector(".img2").setAttribute("src",pArray[randomNumber2]);
    if (randomNumber1 > randomNumber2){
        document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber1 === randomNumber2){
        document.querySelector(".container h1").innerHTML = "Draw!";
    } else {
        document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
    }
}
// window.onload = document.getElementById("img1").src = pArray[5];
window.onrefresh = randomizer();
