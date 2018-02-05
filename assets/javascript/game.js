/** Create the database of words */
const words = ["loom", "hanes", "calvin", "lauren"];
/** Increments each time a game is won */
let gameIndex = 0;
/** Current word to guess */
let currentWord = words[gameIndex];
/** Number of times a user has guessed an entire word, initialized at zero */
let wins = 0;
/** Turns turnsRemaining */
let turnsRemaining = 12;
/** Is the current game won? */
let isCurrentGameComplete = false;
/** This array will create an array out of the current word to guess */
let currentWordArray = [];
/** Array that will hold the letters that are incorrectly guessed */
let wrongLetter = [];
/** Reserve a space each letter from the current word into the current word array */
createWordSpace();



//MAIN FUNCTION///////////////////////////////////////////////////////////////////////////////////////////////////////

/** Making sure not to go over the amount of words available */
if (gameIndex < words.length - 1){

	/** Upon clicking a letter */
	document.onkeyup = function(event){

		/** Display the lines for each letter in the current word to guess */
		document.querySelector("#correctGuess").innerHTML = currentWordArray.join(" ");
		document.querySelector("#correctGuess").style.visibility="hidden";
		/** Retreive the value of the key that was pressed */
		/** Will retreive once the key is up again */
		var letterChosen = event.key;
		/** Parse the letter chosen to see if it's inside the word to guess */
		parseLetter(letterChosen);
		/** If the user guesses a correct letter */
		if (isInWordToGuess){
			/** Update the status of the correct letters chosen */
			updateCurrentWordArray(letterChosen);
		}
		/** If the user guesses incorrectly */
		else {
			/** Update the status of the wrong letters */
			updateWrongLetterArray(letterChosen);
			/** Decrement the turns remaining */
			turnsRemaining--;
		}
		/** Refresh the view to show the current status of the word to guess */
		displayCurrentWord();
		/** Show current game status */
		updateGameStatus();
		/** Check if the current game has been won or not */
		checkGameCompletion();
		/** If the current game IS complete */
		if (isCurrentGameComplete){
			/** Increment the gameNumber */
			gameIndex++;
			/** Create a new game with the next word */
			setNewGame();
			/** Make space for each letter in the new word */
			createWordSpace();
			/** Reset the complete boolean to false */
			isCurrentGameComplete = false;
		}
	}	
}





// FUNCTIONS TO CALL///////////////////////////////////////////////////////////////////////////////////////////////////

/** If the letter is in the word to guess, append to correctLetter */
function parseLetter(letterChosen){
	/** Reset the boolean to false */
	isInWordToGuess = false;
	/** Traverse the current word's length */
	for (let i = 0; i < currentWord.length; i++){
		/** Check if the letter that was chosen is a letter in the current word */
		if (letterChosen === currentWord.charAt(i)){
			/** Change the boolean to true */
			isInWordToGuess = true;
		}
	}
};
/** Update the array that contains the correct letters */
function updateCurrentWordArray(letterChosen){
	for (let i = 0; i < currentWord.length; i++){
		/** Check if the letter that was chosen is a letter in the current word */
		if (letterChosen === currentWord.charAt(i)){
			/** Change the boolean to true */
			currentWordArray[i] = letterChosen;
		}
	}
};
/** Update array that holds the letters that were wrongfully chosen */
function updateWrongLetterArray(letterChosen){
	/** Push the wrong letter into the wrongletter array */
	wrongLetter.push(letterChosen);
};
/** Display the status of the current word to guess */
function displayCurrentWord(){
	/** Change the html to the current word status */
	document.querySelector("#correctorGuess").innerHTML = currentWordArray.join(" ");
};
/** Display status of the entire game */
function updateGameStatus(){
	/** If player still has lives */
	if (turnsRemaining >= 0){
		/** Show how many lives are remaining */
		document.querySelector("#remainingGuesses").innerHTML=turnsRemaining;
		/** Show wrong letters guessed */
		document.querySelector("#wrongGuess").innerHTML=wrongLetter;
		/** Show how many wins the user has */
		document.querySelector("#wins").innerHTML=("Wins: " + wins);
	}
};
/** Check if the entire word was guessed correctly */
function checkGameCompletion(){
	/** This array will help see if the word was completely guessed correctly */
	var temp = [];
	/** Traverse the current word */
	for (var i = 0; i < currentWord.length; i++){
		/** If the currentWordArray has the same letter as the currentWord */
		if (currentWord[i] === currentWordArray[i]){
			/** Push the correct letter onto the temp array */
			temp.push(currentWord[i]);
		}
	}
	/** If the temp array and currentWord have the same length */
	if (temp.length === currentWord.length){
		/** Then the word was guessed correctly */
		isCurrentGameComplete = true;
	}
};
/** Create a new game for the next level */
function setNewGame(){
	/** Reset the currentWordArray */
	currentWordArray = [];
	/** Reset the guesses remaining */
	turnsRemaining = 12;
	/** Reset the currentWord */
	currentWord = words[gameIndex];
	
	/** Empty the wrong letter array */
	wrongLetter = [];
};
/** Reserve a space for each letter in the word to guess */
function createWordSpace(){
	/** Making sure not to go over the game boundaries */
	if (gameIndex < words.length){
		/** Traverse the current word  */
		for (let i = 0; i < currentWord.length; i++){
			/** Create a space for each letter */
			currentWordArray.push("_");
		}
	}
};