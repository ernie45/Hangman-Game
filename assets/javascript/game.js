/** Create the database of words */
var words = ["loom", "hanes", "calvin", "lauren"];

/** Variable declarations */

/** Increments each time a game is won */
var gameNumber = 0;

/** Array that will hold the letters that are correctly guessed */
var correctLetter = [];
/** Array that will hold the letters that are incorrectly guessed */
var wrongLetter = [];
/** Number of times a user has guessed an entire word */
var wins = 0;
/** Turns remaining */
var remaining = 12;

/** Current word to guess */
var currentWord = words[gameNumber];
/** Pictures are ordered along with each word to display if user guesses right */ 
var pictures = ["https://i5.walmartimages.com/asr/db7515cb-8b7f-48a1-81ef-af3a104f38f0_1.b6d35584ffd46360fb097df06100bce3.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", 
	"http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1041281812??hei=64&wid=64&qlt=50",
	"https://asset1.surfcdn.com/calvin-klein-underwear-calvin-klein-modern-cotton-bikini-underwear-grey.jpg?w=1200&h=1200&r=4&q=80&o=$BCckMsR9uKbKzchqAkW5Vii@dgj&V=gAqK",
	"http://slimages.macys.com/is/image/MCY/products/9/optimized/1831269_fpx.tif?bgc=255,255,255&wid=198&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"];


/** Initial onload of the page */
/** Display empty underscores one for each letter to guess */
for (var i = 0; i < wear.length; i++){
	correctLetter[i] = ("_" + " ");
}

/** Code for main functioning */

/** Upon clicking a letter */
document.onkeyup = function(event){
				var letterChosen = event.key;
				/** Input letter guessed, if the letter is in the word to guess, append letter to correctLetter array */
				parseLetter(letterChosen, wear);

				/** If letter is not in the word to guess, append letter to wrongLetter array */
				/** And lower the guesses remaining */
				if (!wear.includes(letterChosen)){
					if (!wrongLetter.includes(letterChosen)){
						wrongLetter.push(letterChosen);
						remaining--;
					}
				}
				/** Check if my guessed function is full */
				var x = checkFull(correctLetter, wear);
				
				if (x){
					wins++;

					document.querySelector("#underwear").src=y[gameNumber];
					reset();
				}
				/** Show process of the game until it ends */
				displayValues();

}



/** Functions to call */

/** If the letter is in the word to guess, append to correctLetter */
function parseLetter(letterChosen, wear){
				for (var i = 0; i < wear.length; i++){
						if (letterChosen === wear.charAt(i)){
							correctLetter[i] = letterChosen;
						}
				}
}
function checkFull(correctLetter, wear){
				for (var i = 0; i < wear.length; i++){
					if (correctLetter[i] !== wear.charAt(i)){
						return false;
					}
				}
				return true;
}
function reset(){
	correctLetter = [];
	for (var i = 0; i < wear.length; i++){
		correctLetter[i] = ("_" + " ");
	}
	gameNumber++;
	remaining = 12;
	wear = words[gameNumber];
	
	wrongLetter = [];
	wrongLetter = [];
	y[gameNumber];
}
function displayValues(){
				if (remaining >= 0){
					document.querySelector("#correctGuess").innerHTML=correctLetter.join(" ");
					document.querySelector("#remainingGuesses").innerHTML=remaining;
					document.querySelector("#wrongGuess").innerHTML=wrongLetter;
					document.querySelector("#wins").innerHTML=("Wins: " + wins);
				}
}