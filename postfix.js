// Craig Austgen
// infix to postfix
//


function Stack() {				// creates what is required for a stack
	this.dataStore = []; 			
	this.serparte = separate;
	this.push = push;
	this.pop = pop;
	this.top = 0;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
	this.back = back;
}

// creates functions for the stack
function push(element) {
	this.dataStore[this.top++] = element;
}
function pop() {
	return this.dataStore[--this.top];
}
function peek() {
	return this.dataStore[this.top-1];
}
function clear() { 
	this.top =0;
}
function length() {
	return this.top;
}
function back() {
	return this.dataStore[this.dataStore.length-1];
}



// this separates the expression and puts it into postfix
function separate(userInput) {                                        
	var s = new Stack();                         // creates new statck
        print(userInput); 	
	
	var str = '';                                // creates new empty sting to store output
	var x = userInput.split(' ');
	//print(x);
	for (var i = 0; i < x.length;i++) {  // searches through each character 
		if(!isNaN(x[i])) {                      // sees whether x is a number
			print(str);
			str += x[i];                    // puts x in output string
			//s.push(x[i]);
		        	
		}

		else if(s.length() == 0) {         // pushes to stack if it's empty
		      s.push(x[i]);
		}
		else if(x.length < 1) {            // pushes to stack if the length of expression is less than 1
                      s.push(x[i]);
		}
		else if((x[i] == '+') || (x[i] == '-') || (x[i] == '*') || (x[i] == '/') || (x[i] == '^')) {    // determines if x is an operator        
	            while((x[i] != '^') && (precedence(x[i]) <= s.top)) {      
				 str += s.pop();
	            }
		                 s.push(x[i]);							
	       }
        }
	str += s.pop();
	print(str);
	evaluate(str);					// passes str through another function
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
// looks at the str and evaluates the expression
var evaluate = function(str) {
    var f = new Stack();						// creates new stack
	for (i=0;i<str.length;i++) {
            x = str.charAt(i);
	    //print('this is it ' + x);
	    if(!isNaN(parseInt(x))) {
	       f.push(parseInt(x));
            }
	    else if((x == '+') || (x == '-') || (x == '*') || (x == '/') || (x == '^')) { 
                    calc(f,x);
		    print(f.peek());						// looks at what's left on stack, giving the final answer
        }
}
}
var calc = function(temp, execute) {						// pops the numbers and performs the operations 
	var num2 = temp.pop();
	print('num2 ' +num2);
	var num1 = temp.pop();
	print('num1 ' + num1);
	switch(execute) {
		case '+':
		   temp.push(num1 + num2);
		   break;
		case '-': 
		    temp.push(num1 - num2);
		    break;
		case '*':
		    temp.push(num1 * num2);
		    break;
		case '/':
		    temp.push(num1 / num2);
		    break;
		case '^' :
		    temp.push(Math.pow(num1,num2));
		    break;
	}

}	




//print('Enter infix expression : ');
//var expression = readline('Enter infix expression');
var test = new separate('2 + 3 * 4 + 5 - 6');
