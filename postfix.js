// Craig Austgen
// infix to postfix
//


function Stack() {
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



function separate(userInput) {                                          // separates the operators from operands
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

		else if(s.length() == 0) {
		      s.push(x[i]);
		}
		else if(x.length < 1) {
                      s.push(x[i]);
		}
		else if((x[i] == '+') || (x[i] == '-') || (x[i] == '*') || (x[i] == '/') || (x[i] == '^')) {            
	            while((x[i] != '^') && (precedence(x[i]) <= s.top)) {      
				 str += s.pop();
				 
	            }
		                 s.push(x[i]);
	       }
        }
        str += s.pop();
	print(str);
	evaluate(str);
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

var evaluate = function(str) {
    var f = new Stack();
	for (i=0;i<str.length;i++) {
            x = str.charAt(i);
	    print('this is it ' + x);
	    if(!isNaN(x)) {
	       f.push(x);
            }
	    else if(x == '+' || x == '-' || x == '*' || x == '/' || x == '^') { 
                    calc(f,x);
		    print(f.top());
        }
}
}
var calc = function(temp, execute) {
	var num2 = temp.pop();
	var num1 = temp.pop();
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
