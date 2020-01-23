console.log("Up and running!");

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-hearts-cat.png"
},
{
	rank: "queen",
	suit: "spades",
	cardImage: "images/queen-spades-cat.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-hearts-cat.png"
},
{
	rank: "king",
	suit: "spades",
	cardImage: "images/king-spades-cat.png"
}
];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
		}
}

function flipCard() {

	var cardId = this.getAttribute('data-id'); 

	console.log("User flipped " + cards[cardId].rank)

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length===2) {
		checkForMatch();
		}

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

// can't get a javascript reload button to work so have been lazy and done it in html.
// would ideally like it to not reload the whole page so I can add a score tracker
// it should rather return the board to the backs of the cards and add a point to a score tracker
// but alas I can't even get the page to reload tonight :'(

// function reset() {
//	document.getElementById("resetbutton").addEventListener('click', alert("this doesn't work booooo"));
//};


createBoard();
