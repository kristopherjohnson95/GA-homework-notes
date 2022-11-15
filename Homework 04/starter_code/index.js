/* level one building */

/* start implentmenting a single event listner to the '.js-ball' */

/* remember querySelector is targeting something like css*/

let score = 0; 

let ballEl = document.querySelector('.js-ball');
let scoreEL = document.querySelector('.js-score'); 

/* adding an eventListener is giving something a command */
 
ballEl.addEventListener('click', function() {
    score+= 10;

    if (score < 100){
        scoreEL.innerText=score;

    } else {
        declareWinner();
    }
});

/* in this section we must declare a winner */

function declareWinner(){
    document.body.classList.add('game-over');
}
