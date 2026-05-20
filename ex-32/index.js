//& Clout

/*
& Scope
~ In programming every function and variable has a 'scope'. This means that when a variable is defined inside a function, that variable can only be used within that function and not outside of it

*/
//& Using an add() function
// function add(x, y) {
// let answer = x + y;
// return answer;
// }

// console.log(answer);

/*
~ This code will throw a ReferenceError that states the answer variable is not defined. This is because it is trying to access a variable that was made in a function.

~ Note: Any area outside the curly brackets of functions or loops is known as the global scope

*/
//& If answer were defined outside the add() function:
// function add(x, y) {
//     let answer = x + y;
//     return answer;
// }

// let answer = 'This';
// console.log(answer); //~ The output: This

/*
~ Now there are two answer variables in two different scopes:
    ~ One defined inside the add() function as a number
    ~ One defined outside the add() function as a string (in the global scope)
~ Always be mindful of where you are defining new variable and where you are using them

~ The way to fix this code is by removing the global answer variale and calling add() inside the console.log() statement
*/
//& If answer removed as global variable and called inside the console.log()
// function add(x, y) {
//     let answer = x + y;
//     return answer;
// }
// console.log(add(2, 2)); //~ The output: 4

//& ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
& Building Clout
~ You are helping your content crrator friend with building clout on their various social media channels by analyzing their views from last week

~ Viewership numbers stored as arrays:
~ const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
~ const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
~ const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

~ The following statistics from each array:
    ~ The mean, or average number of views
    ~ The median, or middle value of the sorted array
~ To calculate the mean and median, create two functions called mean() and median(). Each function accepts an viewsArray parameter

~ Define a totalViews variable that is local to the scope of the mean() function. Use it to calculate the average views.

~ For the median, need to sort the viewsArray parameter beforehand. Inside the scope of the median() array, define two variables called sortedStats and middleIndex.

~ Lastly call these functions on all three arrays and log the resilts to the Console! The output should look like this:

~ TikTok
~ Mean: 4625.142857142857
~ Median: 5222

~ Instagram
~ Mean: 3970
~ Median: 3921

~ YouTube
~ Mean: 3698.285714285714
~ Median: 2789
*/

// & Calculating the mean and median of 3 sets of soial media view counts (TikTok, Instagram, Youtub) and prints the results to the console
//~ The viewership numbers
const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

//~ Defines mean() function or average number of views with one param (array of numbers)
function mean(viewsArray) {
    // ~ Will store the sum of all numbers in the array
    let totalViews = 0;
    //~ This loop will go through each elment of the array
    for (let i = 0; i < viewsArray.length; i++) {
        // ~ This adds the current element to the total sum
        totalViews = totalViews + viewsArray[i];
    }
    // ~ This divides the total sum by the number of elements (the array length) and returns the result -> the mean
    return totalViews / viewsArray.length
}
// console.log(mean(recentTikTokViews));

//~ Define median() function or middle value of the sorted array of views
function median(viewsArray) {
    //~ This will sort the array in ascending numerical order
    //~ .sort() -> sorts the original array in palce and also returns the sorted array.
    const sortedStats = viewsArray.sort(function (a, b) {
        return a - b;
    });

    //~ This computes the middle element of the array
    //~ Using Math.floor:
        //~ For an array of odd length (e.g., 7), 7 / 2 = 3.5 → Math.floor(3.5) gives 3 → the 4th element (0‑based index).
    //~ For an even length, it would give the lower‑middle index. (The code works as‑is for odd lengths only; the given arrays all have 7 elements, so the median is the middle number.)
    const middleIndex = Math.floor(viewsArray.length / 2);

    // ~ This returns the element at the computed middleIndex from the sorted array -> the median
    return sortedStats[middleIndex];
}
// console.log(median(recentTikTokViews));

// ~ Print the results
//~ TikTok Analyzed Views
console.log('TikTok');
console.log('Mean ' + mean(recentTikTokViews));
console.log('Median ' + median(recentTikTokViews));
console.log();

//~ Instagram Analyzed Views
console.log('Instagram');
console.log('Mean ' + mean(recentInstagramViews));
console.log('Median ' + median(recentInstagramViews));
console.log();

//~ Youtube Analyzed Views
console.log('Youtube');
console.log('Mean ' + mean(recentYouTubeViews));
console.log('Median ' + median(recentYouTubeViews));

