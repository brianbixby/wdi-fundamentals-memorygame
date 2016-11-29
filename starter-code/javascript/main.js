console.log("JS file is connected to HTML! Woo!")
//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

//if (cardOne === cardFour) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//}

//if (cardOne === cardThree) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//}

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//}

//if (cardTwo === cardThree) {
//	alert('You found a match!');
//} else {
//		alert('Sorry, try again.');
//	}
//if (cardTwo === cardFour) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//	}
//if (cardThree === cardFour) {
//	alert('You found a match!');
//} else {
//	alert('Sorry, try again.');
//}

var gameBoard = document.getElementById('game-board');

var createCards = function() {
	for (var i=0; i<4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}

createCards(); 
var cards = ["queen","queen","king"];


































