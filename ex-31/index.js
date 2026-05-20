// & E = mc^2
/*
& Parameters
~ The parentheses are used in functions
~ When defining a function one or more paramaeters can be added inside the parentheses to signify what input(s) the function needs when called

~ function example(parameter) {
~   // Function code here
~ }

~ Inside the function body the param is used to return something else such as using it in an evaluation
*/

//& Example of parameters using an updated greetings() function
function greetings(name) {
    console.log('Hi! My name is ' + name + '.');
}
greetings('RoRo');

/*
~ More than one parameter can be added to a function, seperated by commas, and they can be any data type
*/
//& For instance:
function greetings(name, age) {
    console.log('Hi! My name is ' + name + '.');
    console.log('I am ' + age + ' years old.');
}
greetings('RoRo', 30)

//& Arguements
/*
~ After defining a function with parameters, it can be later called in the program, but a value has to be included in the parentheses
~ When calling a function, those values are arguements that a are passed to the function to return something
*/

greetings('Etaria');
//~ This is logged to the console
//~ Hi! My name is Etaria.

/*
~ Note: If an arguement is not passed through, an undefined value is used instead
~ I am undefined years old.

~ Parameters are used when defining a function
~ Arguments are used when calling a function
*/

/*
~ In 1905, Albert Einstein changed the world of physics with his theory of relativity. It transformed how the relationship between space and, time, and energy is understood.
~ The most notable equation to come out of this theory was:
    ~ E=mc ^2
~ The E stands for energy, which is the product of the following:
    ~ m for mass, usually measured in kilograms (kg)
    ~ c^2 is the speed of light multiplied by itself
*/

/*
& Write a function called relativityTheory()
    ~ It should accept a single mass parameter that is an integer or decimal number
    ~ And calculate the energy and return it. Do not forget to Google the speed of light
    ~ Afterward, call the realtivityTheory() function with a mass arguement
    ~ c = speed of light
        ~ 299792458 m/s
*/

function relativityTheory(mass) {
    // let c = (2);
    // console.log(c ** 2);
    const speedOfLight = 299792458
    let energy = mass * (speedOfLight ** 2);
    return energy;
    // console.log(energy);
}

// relativityTheory(15);
//~ Function will be called for when mass is 15
console.log(relativityTheory(15));
