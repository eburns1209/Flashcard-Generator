function ClozeCard(text, cloze) {

	if(!(this instanceof ClozeCard)){
	 	return new ClozeCard(text, cloze);
	}

	this.text = text;
	this.cloze = cloze;
	
	
}

var one =  ClozeCard ("____________ was the first president.", "George Washington");
var two = ClozeCard ("Founded in 1607, Jamestown, ________ is considered the first permanent English settlement in New World.", "Virginia");
var three = ClozeCard ("The _______ U.S. mail service that used horses and riders.", "Pony Express");


var cards = [];
cards.push(one);
cards.push(two);
cards.push(three);

//console.log(cards);
module.exports = cards;
