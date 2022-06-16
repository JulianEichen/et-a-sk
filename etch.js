/* We want to play RPS against the computer */

let play = true;

function computerPlay() {
    let roboHand = ['R', 'P', 'S'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];
    return roboDraw;
}

/*
while (play) {
    let roboHand = ['R', 'P', 'S'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];

    let playerDraw = prompt("[R]ock/[P]aper/[S]cissors?", "R");

    if (playerDraw == 'R' && roboDraw == 'P') {
        console.log("RPSminator chose PAPER, YOU LOSE!");
    } else if (playerDraw == 'R' && roboDraw == 'S') {
        console.log("RPSminator chose SCISSORS, YOU WIN!");
    } else if (playerDraw == 'P' && roboDraw == 'S') {
        console.log("RPSminator chose SCISSORS, YOU LOSE!");
    } else if (playerDraw == 'P' && roboDraw == 'R') {
        console.log("RPSminator chose ROCK, YOU WIN!");
    } else if (playerDraw == 'S' && roboDraw == 'P') {
        console.log("RPSminator chose PAPER, YOU WIN!");
    } else if (playerDraw == 'S' && roboDraw == 'R') {
        console.log("RPSminator chose ROCK, YOU LOSE!");
    } else if (playerDraw == roboDraw) {
        console.log(`RPSminator chose ${roboDraw}, DRAW!`);
    } else {
        console.log("OH NO I CAN'T BELIVE THIS IS HAPPENIGN!");
    }

    let again = prompt("Do you want to play again? Y/N", "N");
    if (again == "N"){
        play = false;
    }
}
*/
// console.log("Thanks for palying.");

function playRound(playerDraw){
    const status = document.querySelector('#status');
    
    // compute robot play
    let roboHand = ['R', 'P', 'S'];
    let roboDraw = roboHand[Math.floor(Math.random() * roboHand.length)];

    if (playerDraw == 'R' && roboDraw == 'P') {
        status.textContent = "RPSminator chose PAPER, YOU LOSE!";
    } else if (playerDraw == 'R' && roboDraw == 'S') {
        status.textContent = "RPSminator chose SCISSORS, YOU WIN!";
    } else if (playerDraw == 'P' && roboDraw == 'S') {
        status.textContent = "RPSminator chose SCISSORS, YOU LOSE!";
    } else if (playerDraw == 'P' && roboDraw == 'R') {
        status.textContent = "RPSminator chose ROCK, YOU WIN!";
    } else if (playerDraw == 'S' && roboDraw == 'P') {
        status.textContent = "RPSminator chose PAPER, YOU WIN!";
    } else if (playerDraw == 'S' && roboDraw == 'R') {
        status.textContent = "RPSminator chose ROCK, YOU LOSE!";
    } else if (playerDraw == roboDraw) {
        status.textContent = `RPSminator chose ${roboDraw}, DRAW!`;
    } else {
        status.textContent = "OH NO I CAN'T BELIVE THIS IS HAPPENING!";
    }


}

const container = document.querySelector('#container');

// Eventlisteners
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        playRound(button.id);
    })
})





