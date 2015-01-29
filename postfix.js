// Craig Austgen
// infix to postfix
//


function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
}


function push(userInput) {
	print('I am getting ' + userInput);
	for (var i = 0; i < userInput.length;i++) {
		var x = userInput.charAt(i);
		if( isNaN(x)) {
		   if ((x == '*') ||(x == '-') || (x == '+') || (x == '/')) {
			print(' this is an operator ' + x);
				this.dataStore[this.top++] = x;
		   }
		
		}
		         else {
	                      print('this is a number ' + x);
			      this.dataStore[this.top++] = x;

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
