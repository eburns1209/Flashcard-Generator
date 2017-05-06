function BasicFlashcard (front, back){
	this.front = front;
	this.back = back;
	
	if(!(this instanceof BasicFlashcard)){
	 	return new BasicFlashcard(front, back);
	}
	
}

var first = BasicFlashcard("What is 4 x 4?", 16);
var second = BasicFlashcard("What is 4 x 8?", 32);
var three = BasicFlashcard("What is 4 x 12?", 48);


var cards = []
cards.push(first);
cards.push(second);
cards.push(three);
//console.log(cards);

module.exports = cards;




