// Craig Austgen
// infix to postfix
//


function Stack() {
	this.dataStore = [];
	this.serparte = separate;
	this.push = push;
	this.pop = pop;
	this.top = 0;
}

function push(element) {
	this.dataStore[this.top++] = element;
}
function pop() {
	return this.dataStore[--this.top];
}



function separate(userInput) {                                          // separates the operators from operands
	var s = new Stack();                         // creates new statck
	
	var str = '';                                // creates new empty sting to store output
	for (var i = 0; i < userInput.length;i++) {  // searches through each character 
		var x = userInput.charAt(i);         // stores each character as x
		
		if(!isNaN(x)) {                      // sees whether x is a number
			//print(str);
			//s.push(x);
		        str += x;                    // puts x in output string 
		}
		   
		else if((x == '+') || (x == '-') || (x == '*') 
				|| (x == '/') || (x == '^')) {              // checks to see which operator it is
			   //print('about to push operator ' + x);          
			   //print('operators added ' + str);
                           s.push(x);                                       // pushes x to the stack
			   //print(s.dataStore);
			   
			  
			   while((x != '^') && (precedence(x) > 1)) {       // checks  to see if the precedence is greater than one 
				 str += x;
			         s.pop();	 
			  }
			   }

		   }
	print(str);
        }

	
var precedence = function(operator) {                                // gives each operator a rank

       switch(operator) {
	       case '+':
	       case '-':	       
		return 1;
	       case '*':
	       case '/':
	        return 2;
	       case '^':
	        return 3;
	       default:
	        return 0;	
       }
}       


//print('Enter infix expression : ');
//var expression = readline('Enter infix expression');
var test = new separate('2+3+4+5+6');
