//& Blast Off

/*
& Function Syntax
~ The function keyword is used to define a function with a name and then a set of parenthesis:

~ function myFunction() {
~     code here
~ Note:
~ Can write the body of the function inside the curly braces { }.
~ This could include anything, such as variable definitions, loops, and conditional statments
~ After a function is defined can use it or 'call it' later in the program by using its name with parentheses
*/

// & return
/*
~ Another important part of JavaScript functuins is the return keyword
~ For the most part, functions process our code and produce a result that we log to the console
~ Here is an example of a helloWordl() function that returns a string
*/
function helloWorld() {
    return 'Hello, World! 🌎';
}

// ~ Call the function
helloWorld();
//~ Cannot make the called function appear on the console without putting it in a console.log()
console.log(helloWorld());

// & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
& Define a function by making a countdown timer
~ Define a countdown() function with the function keyword. Then add the following to the function body
    ~ A loop that interates down from that 10 to 1
    ~ Inside the loop, print the current number
    ~ Outside the loop, return the string 'Blast Off!🚀'
    ~ Lastly, call the countdown() function and remember to log it to the console
*/
function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    return 'Blast Off! 🚀'
}

// ~ Call the function and log it to the console
console.log(countdown());
