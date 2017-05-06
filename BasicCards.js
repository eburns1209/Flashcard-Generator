var inquirer = require("inquirer");
var cards = require("./Basic.js");

var counter = 0;
var correct = 0;
var wrong = 0;

function recursion(){
	if (counter < cards.length){

	inquirer.prompt([
		{
			type: "input",
			message: cards[counter].front,
			name: "answer"
		},
	]).then(function(data) {
		
		if(data.answer == cards[counter].back){
			correct ++;
			console.log( correct  + " You got it right! \n----------");
		}else{
			wrong ++;
			console.log( wrong  + " Sorry \n-----------");
		}
		

		
		 counter++;
		 recursion();
		 });
	}else{
		console.log(correct + " correct answer(s) \n------");
		console.log(wrong + " incorrect answer(s) \n--------");
	}
};
	
recursion();





			
