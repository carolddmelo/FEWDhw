

// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
	var computerChoiceNumber = Math.random();
	if (computerChoiceNumber < 0.333){
		return 'rock';
	} else if (computerChoiceNumber < 0.667){
		return 'paper';
	} else {
		return 'scissors';
	}
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compareTheGame(me, opponent) {
	//display computer's choice
	jQuery ('#computerSelection').text(opponent);

	//determine who wins
		if (me === opponent){
			return 'TIE';
		} else if (me === 'rock') {

			if (opponent === 'paper'){
				return 'OPPONENT WINS';
			} else if (opponent === 'scissors'){
				return 'PLAYER WINS';
			}

		}else if (me === 'scissors'){

			if (opponent === 'rock'){
				return 'OPPONENT WINS';
			} else if (opponent === 'paper'){
				return 'PLAYER WINS';
			}

		} else if (me === 'paper'){

			if (opponent === 'scissors'){
				return 'OPPONENT WINS';
			} else if (opponent === 'rock'){
				return 'PLAYER WINS';
			}
		}


	};

	//display the winner



jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decision id in the html
jQuery("#scissors").on('click', function(){

  var result = compareTheGame('scissors', computerChoice());
  
  jQuery("#decision").html(result);
});

jQuery('#rock').on('click', function(){
  var result = compareTheGame('rock', computerChoice());
  jQuery("#decision").html(result);
});

jQuery('#paper').on('click', function(){
  var result = compareTheGame('paper', computerChoice());
  jQuery("#decision").html(result);
});

});