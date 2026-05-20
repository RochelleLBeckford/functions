//& Greetings

/*
& Functions
~ Functions are blocks of code that we write once and can use later on in the programs.
~ They are useful for seperating tasks into smaller chunks that can be executed multiple times via the function name
*/

//~ A defined function that can be used later on:
function helloWorld() {
    console.log('Hello World!!!');
}

//~ Call the helloWorld function
helloWorld();
//~ All functions in JS use parentheses (), both when they are created and use/call them.

// & ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~ Another example of creating and calling a function
function greetings() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber == 1) {
        console.log('Howdy!');
    } else if (randomNumber == 2) {
        console.log('Hi there!');
    } else if (randomNumber == 3) {
        console.log("Hey what's happening?");
    } else if (randomNumber == 4) {
        console.log('Hola!');
    } else {
        console.log('Heya!');
    }
}

//~ Call the greetings function
greetings();
greetings();
greetings();
