var wins= 0;

var losses= 0;

var guesses= 0;
var letterToGuess= "";
var lettersAlreadyGuessed= "";

alert("guess right or lose a life.  Guess A-Z");




var computerChoices=['q','w','e','r','t','y','u','i','o','p','a','s','d','f'
,'g','h','j','k','l','z','x','c','v','b','n','m'];

var arrayLength= computerChoices.length;

// function gameStart() {
	{
		console.log([comSelects] +1);
	


		var comSelects = Math.floor(Math.random() * computerChoices.length);
		lettertoGuess = computerChoices[comSelects];
		lettersAlreadyGuessed =" ";
		gameOver = false;
		document.getElementById("lettersGuessed").innerHTML = lettersAlreadyGuessed;

	


}

document.onkeyup =function(event) {
	var userLetter =String.fromCharCode(event.keyCode).toLowerCase();

if (userLetter== letterToGuess){
	alert ("you win");
}
else{	
	lettersAlreadyGuessed += userLetter
	document.getElementbyId("lettersGuessed").innerHTML= lettersAlreadyGuessed;
}


}










