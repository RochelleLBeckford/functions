//& Palindrome

/*
~ Functions are a concept that trups up a lot of people so practice is key
~ Function structure:
    ~ function nameOfFunction(paramerter1, parameter2) {
    ~   The code here
    ~   return value;
    ~ }
*/

/*
~ Some words read the same forwards and backwards, like 'noon', or 'radar'. These are known as palindromes


& Create an isPalindrome() function that does the following:
    ~ It accepts a word string as a parameter
    ~ The function returns true if the word us a palindrome. Otherwise, it returns false

    ~ Note: If there are any capital letters in word, use word.toLowerCase() to make it all lowercase.

    ~ After defining this function, call it a few times on some words to see the results. Words to try out:
        ~ racecar
        ~ madam
        ~ moonlight
        ~ aviary
    ~ Can loop through a string just like an array
    ~   for (let i = 0; i < string.length; i++) {
    ~       code here
    ~   }
*/

//& This function checks whether a word is a palindrome or not
//~ Declare a function named isPalindrome with one parameter called word
//~ word is the string wanting to test to see if it is a palindrome
function isPalindrome(word) {
    //~ This declares a variable that will be used to build the reversed version of the input word letter by letter
    let reverseWord = '';

    // ~ This declares a variable that takes in the input word and converts it to lowercase which treats R and r the same
    let lowerCaseWord = word.toLowerCase();

    /*
    ~ This for loop will interate through the characters of lowerCaseWord backwards
    ~ let i = lowerCaseWord.length -1
        ~ This sets the i to the index of the last character in the string
    ~ The loop will continue until i reaches the character at the index of 0
    ~ After each iteration decrement i by 1, moving backwards through the string
    */
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        //~ Take the character at position i at the last index from lowerCaseWord and adds it to reverseWord to build the reverse string
        reverseWord = reverseWord + lowerCaseWord[i];
    }
    //~ A function must return something or it will comeback undefined
    //~ Return true if the lowerCaseWord is the same as the reverseWord (it is a palindrome) Else false and end the function
    //~ A check of the reverseWord against the original word
    return lowerCaseWord === reverseWord;
}

//~ Will print true to the console if the word is a palindrome and printe false if not
console.log('Is this word a palindrome: ' + isPalindrome('Racecar'));
console.log('Is this word a palindrome: ' + isPalindrome('title'));
console.log('Is this word a palindrome: ' + isPalindrome('madam'));
console.log('Is this word a palindrome: ' + isPalindrome('moonlight'));
console.log('Is this word a palindrome: ' + isPalindrome('aviary'));
