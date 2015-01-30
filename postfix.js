// Craig Austgen
// infix to postfix
//


function Stack() {
	this.operators = [];
	this.operands = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
}

function Output() {
	this.operands = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
}


function push(userInput) {
	//var out = new Output();
	print('I am getting ' + userInput);
	for (var i = 0; i < userInput.length;i++) {
		var x = userInput.charAt(i);
		if( isNaN(x)) {
		   if ((x == '*') ||(x == '-') || (x == '+') || (x == '/')) {
			print(' this is a stack ' + x);
				this.operators[this.top++] = x;
				print('top index for operators is ' + this.top);
				
		   }
		
		}
		         else {
	                      print('this is the output ' + x);
			      this.operands[this.top++] = x;
			      print('top index for operand is ' + this.top);
		         }   	     

	//return this.dataStore;
	}
}



function pop() {
	return this.dataStore[--this.top];
}

var s = new Stack();
print('Enter infix expression : ');
var expression = readline('Enter infix expression');
s.push(expression);
print(s.dataStore);
//print(s.dataStore);
//print(s.push(userInput));
//print(s);
