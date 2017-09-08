//[VARIABLE DECLARATIONS]/////////////////////////////////////////////////////////////////////////////////////////////////
var gameNumber = 0;
var words = ["loom", "hanes", "calvin", "lauren"];
var correctLetter = [];
var wrongLetter = [];
var wins = 0;
var remaining = 9;
var wrongLetter = [];
var wear = words[gameNumber]; 
var y = ["https://i5.walmartimages.com/asr/db7515cb-8b7f-48a1-81ef-af3a104f38f0_1.b6d35584ffd46360fb097df06100bce3.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", 
	"http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1041281812??hei=64&wid=64&qlt=50",
	"https://asset1.surfcdn.com/calvin-klein-underwear-calvin-klein-modern-cotton-bikini-underwear-grey.jpg?w=1200&h=1200&r=4&q=80&o=$BCckMsR9uKbKzchqAkW5Vii@dgj&V=gAqK",
	"http://slimages.macys.com/is/image/MCY/products/9/optimized/1831269_fpx.tif?bgc=255,255,255&wid=198&qlt=90&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg"];


//[INITIAL LOOK (ONLOAD)]////////////////////////////////////////////////////////////////////////////////////////////////


for (var i = 0; i < wear.length; i++){
	correctLetter[i] = ("_" + " ");
}

//[MAIN FUNCTION]////////////////////////////////////////////////////////////////////////////////////////////////////////

document.onkeyup = function(event){
				var letterChosen = event.key;
				//input letter guessed, if the letter is in the word to guess, append letter to correctLetter array
				parseLetter(letterChosen, wear);

				//if letter is not in the word to guess, append letter to wrongLetter array
				//and lower the guesses remaining
				if (!words.includes(letterChosen)){
					if (!wrongLetter.includes(letterChosen)){
						wrongLetter.push(letterChosen);
						remaining--;
					}
				}
				//check if my guessed function is full
				var x = checkFull(correctLetter, wear);
				
				if (x){
					wins++;

					document.querySelector("#underwear").src=y[gameNumber];
					reset();
				}
				//show process of the game until it ends
				displayValues();

}



//[FUNCTIONS TO CALL]//////////////////////////////////////////////////////////////////////////////////////////////////

//if the letter is in the word to guess, append to correctLetter
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
