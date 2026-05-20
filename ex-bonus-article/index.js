//& Bonus Article: Arrow Functions
/*
& A Different Way To Function
~ In JavaScript arrow functions allow to concisely make nameless functions. They are useful for short one-line operations and provide a more compact syntax compared to traditional function declarations. They have only been aeound for a few years (added to the language in 2015), but arrow functions have become a crucial part of modern JavaScript.
*/

//& Comparing a Traditional Function & Arrow Function
//~ Traditional Function
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log('Traditional Function: ' + greet('RoRo'));

//~ Arrow Function
const greetArrow = (name) => 'Hello, ' + name + '!';
console.log('Arrow Function: ' + greetArrow('EtariaL33'));

//~ These two functions do the same thing.. In the arrow function, the function keyword is not used to define a function. Since it only takes one line, it is easy to see why an arrow function can be preferable when writing clean concise code.


//& Syntax
//~ This is how a simple arrow function is written
const add = (a, b) => {
    return a + b;
}

/*
& Breaking it down add() function:
~ const declares a constant variable named add, which is the function name
~ (a, b) are the parameters of the function
~ => is the arrow notation, indicating that this is an arrow function
~ { } contains the function body where the actual logic goes
~ return a + b; is the statement inside the function, which in this case adds two numbers
*/

//& Benefits
/*
~ 1. Conciseness: Arrow functions help make your code cleaner and more readable
~ 2. Simplified return: When your function is a one-liner with a single operation, you can skip the curly braces and the return keyword
*/
//& This is an example
const multiply = (a, b) => a * b;
//~ In the code above, we defined a one-line arrow function that implicity returns something

//& Numerical Example
//~ Create a program that uses an arrow function to square numbers from an array:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers);
//~ The map() function applies the arrow function (num) => num ** 2 to each element of the numbers array, squaring each value. The squared calues are then stored in the squaredNumbers array, which is printed on the console.
//~ The output: [1, 4, 9, 16, 25]

//& Conclusion
//~ Arrow functions are a fun and useful tool in any JavaScript developers toolkit, giving a different way to define functions. Arrow functions will boost the ability to write clean and concise JavaScript code. 
