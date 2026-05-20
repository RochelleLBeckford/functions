<!-- & This creates a banner for the ReadMe -->
<img src="img/blue-peony-maiden.png" alt="Blue Peony Maiden" width="100%" height="350">

# <p align="center">🌸 Function: JavaScript's Reusable Magic Spell 🌸</p>

## Practice: Writing code once and using it whenever it is needed

### Understanding JS -> Teaching programs to package tasks into reusable blocks so we don't hae to repeat ourselves

<hr>

## <p align="center">💫 Overview</p>
-   [ ] Variables gave my programs memory. Conditionals gave them the power to make decisions. Loops gave them the ability to repeat tasks. Arrays gave them organization. Now fucntions superpower -> the ability to wrap a whole chunk of logic into a reusable box that can opened anytime just by saying its name. Its like inventing my own command in a magic language. Write it once, test it once, and then use it everywhere. This is how we stop copyng and pasting code, and start building truly elegant, maintainable programs.

<hr>

## <p align="center">🎨 Key Design Features</p>
-   [ ] <b>Function Declaration</b>
    -   [ ] A named block of code created with the `function` keyword, llike writing your own custom command
-   [ ] <b>Calling a Function</b>
    -   [ ] Using the function's name followed by parentheses `()` to execute the code inside it
-   [ ] <b>The `return` keyword</b>
    -   [ ] Sends a value back from a function to the place where it was called, like a messenger delivering a package
-   [ ] The <b>parameters</b> Property
    -   [ ] Placeholders defined in the function's parentheses that tell it what input to expect
-   [ ] <b>Arguments</b>
    - The actual values passed to a function when it is called, filling the parameter placeholders
-   [ ] <b>Scope</b>
    -   [ ] The idea that variables defined insided a function are trapped there - they cannot be seen or used outside of it
-   [ ] <b>Function Body</b>
    -   [ ] the code inside the curly braces `{ }` that runs every time the function is called
    -   [ ] .includesOf() -> finds the index of an element, returning its position or -1 if not found

<hr>

-   [ ] Simple practice to understand how programs can package logic into reusable chunks
    -   [ ] Copying the same code over and over is messy and error-prone -> functions fix that
    -   [ ] Once a function is defined, it can be called as many times as desired with one line
    -   [ ] Functions can accept inputs (parameters) and give back outputs (return values)
    -   [ ] The `return` keyword stops the function immediately and sends a value back
    -   [ ] Variables inside a function stay inside - they do not leak out and cause confusion

<hr>

## <p align="center">👩🏾‍💻 JavaScript Outline</p>
-   [ ] <b>Defining and Calling a Function </b>:
    -   [ ] Use the `function` keyword, then a name, then parentheses `()`, then curly braces `{}`
    -   [ ] To call (run) the function, writes its name followed by parentheses
        ```javascript
        //~ Define the function
            function helloWorld() {
                console.log('Hello World!!!');
            }

            //~ Call the function
            helloWorld();
            /*
            ~ The output:
                ~ Hello World!!!
            */
        ```

-   [ ] <b>Functions with Logic Inside</b>:
    -   [ ] A function can contain any code: variablesm conditionals, loops, etc.
    -   [ ] Each time you call it, all that code runs again
        ```javascript
            function greetings() {
                const randomNumber = Math.floor(Math.random() * 5) + 1;
                if (randomNumber === 1) {
                    console.log('Howdy!');
                } else if (randomNumber === 2) {
                    console.log('Hi there!');
                } else if (randomNumber === 3) {
                    console.log("Hey what's happening?");
                } else if (randomNumber === 4) {
                    console.log('Hola!');
                } else {
                    console.log('Heya!');
                }
            }
            //~ Logs a random greeting each time
            greetings();
            greetings();
        ```

-   [ ] <b>The `return` Keyword</b>:
    -   [ ] Sends a value back from the function to where it was called
    -   [ ] Without `return`, a function returns `undefined` by default
    -   [ ] To see the returned value, you must log it or store it in a variable
        ```javascript
            function helloWorld() {
                return 'Hello, World! 🌎';
            }

            //~ This does nothing visible by itself
            helloWorld();

            //~ You need to log the returned value
            console.log(helloWorld());
            //~ The output: Hello, World! 🌎
        ```

-   [ ] <b>Returning from a Loop</b>:
    -   [ ] A common pattern: run a loop, then return a final value after the loop finishes
        ```javascript
            function countdown() {
                for (let i = 10; i > 0; i--) {
                    console.log(i);
                }
                return 'Blast Off! 🚀';
            }

            console.log(countdown());
            /*
            ~ The output:
                ~ 10
                ~ 9
                ~ ...
                ~ 1
                ~ Blast Off! 🚀
    */

        ```

-   [ ] <b>Parameters and Arguements</b>:
    -   [ ] Parameters are placeholders you put in the parentheses when <b>defining</b> a function
    -   [ ] Arguments are the actual values you pass when <b>calling</b> a function
        ```javascript
            //~ Parameter 'name' is a placeholder
            function greetings(name) {
                console.log('Hi! My name is ' + name + '.');
            }

            //~ Argument 'RoRo' is the actual value
            greetings('RoRo');
            //~ The output: Hi! My name is RoRo.

            //~ Multiple parameters
            function introduce(name, age) {
                console.log('Hi! My name is ' + name + '.');
                console.log('I am ' + age + ' years old.');
            }
            introduce('Etaria', 25);
            //~ Output: Hi! My name is Etaria. / I am 25 years old.
        ```

-   [ ] <b>Calculating with Paramters</b>:
    -   [ ] You can use parameters just like variables inside the function body
    -   [ ] The function can return the result of a calculation
        ```javascript
                function relativityTheory(mass) {
                const speedOfLight = 299792458; //~ meters per second
                let energy = mass * (speedOfLight ** 2);
                return energy;
            }

            console.log(relativityTheory(15));
            //~ Output: a very large number (E = mc²)
        ```

-   [ ] <b>Scope: Variables Inside Functions Stay Inside</b>:
    -   [ ] A variable declared inside a fucntion (with `let` or `const`) is local to that function
    -   [ ] You cannot access it from outside - that woould cause a `ReferenceError`
    -   [ ] The area outside any function is called the <b>global function</b>
        ```javascript
                function add(x, y) {
                    //~ 'answer' is local to this function
                    let answer = x + y;
                    return answer;
                }

                //~ console.log(answer);
                //~ ❌ ReferenceError: answer is not defined

                //~ The correct way:
                console.log(add(2, 2));
                //~ The output: 4
        ```

<hr>

## <p align="center">✨ Encompassed Technologies</p>
-   [ ] <b>JavaScript:</b>
    -   [ ] The programming language that is the magic behind the scenes that makes webpages react, calculate, and come alive. Turning static pages into conversations.
-   [ ] <b>Browser Developer Tools:</b>
    -   [ ] The little laboratory inside browsers likes Chrome and Safari where you can write, test, and debug code without messing up the actual webpage
-   [ ] <b>The Console:</b>
    -   [ ] The dedicated space to output a message and experimentation
-   [ ] <b>VS Code:</b>
    -   [ ] A lightweight but powerful source code editor that provides an integrated terminal, syntax highlighting, and extensions for writing and testing code efficiently
    -   [ ] A digital notebook where all the coding happens.


