



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
let computerchoicenumber = math.ceil ( math.random()*3); if (computerchoicenumber == 1){
    return "scissors";
}
else if (computerchoicenumber== 2){
    return "paper";

}

else{
    return "rock";
}


};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

};





    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
document.querySelector("scissors").addEventListener('click', function (e){e.preventDefault();
    let computerPlayerChoince = computerChoice();
    compare ("scissors", computerPlayerChoice);

});


