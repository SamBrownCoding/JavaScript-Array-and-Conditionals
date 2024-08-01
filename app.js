

let fruits = ["apple", "strawberry", "cherry", "orange"];
let kid = 1;

console.log(fruits);
console.log(fruits[3]);
console.log(fruits[kid]);

//updating array data 
fruits[4] = "blueberries";
console.log(fruits);

//Adding new item to an array
let officeCharacters = ["Michael ", "Jim", "Dwight"];
console.log(officeCharacters);

//.push = adds new data at the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters);

//.pop = take away a data at the end of the array
officeCharacters.pop();
console.log(officeCharacters)

//.shift = take away a data at the begin of the array
officeCharacters.shift();
console.log(officeCharacters)

//.unshift = adds new data at the begin of the array
officeCharacters.unshift("Andy");
console.log(officeCharacters);

//.length = count how many items in the array
console.log(officeCharacters.length);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


//! Access Array Elements
//TODO Define an array of items
let items = ["apple", "banana", "cherry", "date", "elderberry"];

let firstItem = items[0];
let thirdItem = items[2];
let lastItem = items[4];

//Output Results
console.log("Items: " + items);
console.log("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);


//! List of Favorite Movies
//TODO Define an array of favorite movies
//Output each movie individually
let favMovies = ["300", "Gladiator", "Bohemian Rhapsody", "Ace Ventura"];

console.log("List of Favorite Movies: ")
console.log("1. " + favMovies[0]);
console.log("2. " + favMovies[1]);
console.log("3. " + favMovies[2]);
console.log("4. " + favMovies[3]);


//! Sum of Array Elements
//TODO Define an array of numbers
//TODO Calculate sum of the numbers
//Output the result
let myNums = [50, 100];

// let sum = myNums[0] + myNums[1];
// console.log(sum);

let sum = 0;

myNums.forEach(num => {
    sum += num;
});

console.log(sum);

//! Concatenate Strings in an Array
//TODO Define an array of stings
//TODO Concatenate the strings
//Output the result

// let words = ["There are ", "only happy accidents!", "no mistakes", " - Bob Ross"];

// let sentence = words[0] + words[2] + words[1] + words[3];

//console.log(sentencec);

let table = ["Adrea", "Kelvin"]
let table2 = ["Sam", "Joel"]

let students = table.concat(table2);

console.log(students);


//! Update Array Elements

//TODO Define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"];
//TODO Update
//? green to cyan
//?purple to orange
//Output the results

// colors[2] = "cyan";
// colors.pop();
// colors.push("orange");
// console.log(colors);

colors[2] = "cyan";
colors[4] = "orange";

console.log(colors);


// Random numbers
let rng = Math.floor(Math.random() * Math.floor(colors.length));

console.log(colors[rng]);


// !CONDITIONS

let boo = true;
console.log(boo);

/*
"==" - "is equal to"
*/
let bar = 4 == 5 - 4;
console.log(bar);

let boo2 = "4";
let boo3 = 4;
let boo4 = "four";

console.log(boo2 == boo3);
// ?TRUE

//Strictly Equals to "==="
console.log(boo2 === boo3);
// ?FALSE

//Not equal to "!="
console.log(boo3 != boo4);
// ?TRUE

//Greater than ">"
console.log(boo3 > 6);
// ?FALSE

// less than "<"
console.log(boo3 < 6);
// ?TRUE

// less than or equal to "<="
console.log(boo3 <= 4);
// ?TRUE

// greater than or equal to ">="
console.log(boo3 >= 5);
// ?FALSE


// LOGICAL Operator

// AND = "&&"
console.log("Double Ampersans: " + (4 == 4 && 3 == 3));

// OR = "||"
console.log("Double Line: " + (4 == 3 || 3 == 3));

// NOT = "!"
console.log("NOT: " + (!false));


// if Else Statements

if (boo3 == 5) {
    console.log("HEY, I'm THE NUMBER 4!")
} else {
    console.log("HEY YOU'RE NOT NUMBER 4!")
}

/*
THESE ARE FALSY VALUES
================
- false
- 0
- -0
- 0n
- ""
- '' (empty strings)
- null
- undefined
- NaN
=================
*/

//ELSE if Structure
let amHungry = true;

if (amHungry == true) {
    console.log("Let's eat! I want Chicken nuggies!");
} else {
    console.log("Let's keep coding! Yay!");
}



let howHungry = 0;

if (amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry I can eat a horse.")
} else if (amHungry === true && howHungry >= 25) {
    console.log("I'm hungry enough to eat cheez-its.")
} else if (amHungry === false && howHungry >= 25) {
    console.log("I'm depressed.")
} else {
    console.log("I'm not that hungry!")
}


// SWITCH STATEMENTS
switch (amHungry == true) {
    case howHungry >= 75:
        console.log("I'm so hungry I can eat a horse.")
        break;
    case howHungry >= 25:
        console.log("I'm hungry enough to eat cheez-its.")
        break;
    default:
        console.log("I just wanna eat to eat.");
}



//!CONDITIONS PROBLEMS

//! Favorite Fruit Checker
//TODO Define an array of favorite fruits
//TODO Define a variable for the fruit to check
//* Check if the fruit is in the array and output the result

let favFruits = ["strawberry", "date", "banana", "watermelon"];

let fruitToCheck = "strawberry";

//Play with includes part
if (favFruits.includes(fruitToCheck)) {
    console.log("I love those fruit!");
} else {
    console.log("It's not my favorite fruit!");
}

if (fruitToCheck == favFruits[0] || fruitToCheck == favFruits[1] || fruitToCheck == favFruits[2] || fruitToCheck == favFruits[3]) {
    console.log("It is my favorite!!");
} else {
    console.log("It ain't my favorite!");
}

//if else if ELSE statement
if (fruitToCheck == favFruits[0]) {
    console.log("Strawberry is good stuff!");
} else if (fruitToCheck == favFruits[1]) {
    console.log("Date is good replacement for sugar to mix with other!");
} else if (fruitToCheck == favFruits[2]) {
    console.log("Eat a banana once or twice per day!");
} else if (fruitToCheck == favFruits[3]) {
    console.log("Watermelon is great stuff for the summer time!");
} else {
    console.log("Sorry, Whatever it is! I don't want it!");
}




//!Grade Categorizer
//TODO Define a variable for the grade
let grade = 50;
//TODO Categorize the grade
let checkgrade;
let message;

if (grade >= 90) {
    checkgrade = "A";
} else if (grade >= 80) {
    checkgrade = "B";
} else if (grade >= 70) {
    checkgrade = "C";
} else if (grade >= 60) {
    checkgrade = "D";
} else if (grade <= 59) {
    checkgrade = "F";
    message = "He gotta pump up a rookie numbers!";
} else {
    console.log("Invalid number");
}
//* output the result

console.log(`Student grade is ${grade} which it is a ${checkgrade}!! ${message}`);



//! Day of the Week Checker
//TODO Define an array of days of the week
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//TODO Define a variable for the day to check
let checkDay = "Monday";
//TODO Check if the day is a weekday or weekend
let checkWeek;

if (checkDay == week[0] || checkDay == week[6]) {
    checkWeek = "weekend";
} else {
    checkWeek = "weekday";
}
//* output the result
console.log(`${checkDay} is a ${checkWeek}!`);

// SWITCH STATEMENT
switch (checkDay) {
    case week[0]:
        console.log("It's the weekend")
        break;
    case week[1]:
        console.log("It's the weekday");
        break;
    case week[2]:
        console.log("It's the weekday");
        break;
    case week[3]:
        console.log("It's the weekday");
        break;
    case week[4]:
        console.log("It's the weekday");
        break;
    case week[5]:
        console.log("It's the weekday");
        break;
    case week[6]:
        console.log("It's the weekend")
        break;
    default:
        console.log("Unknown");
}


//! Temperature Checker
//TODO Define a variable for the temperature
let curTemp = 87;
//TODO Categorize the temperature and
let result;

if (curTemp >= 90) {
    result = "It's hot as hades!";
} else if (curTemp >= 80) {
    result = "It's still hot";
} else if (curTemp >= 70) {
    result = "It's is nice cool weather";
} else if (curTemp >= 60) {
    result = "It's is very cool.";
} else if (curTemp <= 59) {
    result = "Bzzz bzzz It's...very...cold!";
} else {
    result = "Don't know what planet you are on!";
}
//* output the result

console.log(`Weather is ${curTemp}\u00b0 and ${result}`);


//! Number Sign Checker
//TODO Define a variable for the number
let signNum = -69;
//TODO Check the sign of the number
let checkNum;

if (signNum === 69) {
    checkNum = "Nice, but seriously it's positive!";
} else if (signNum === -69) {
    checkNum = "Nice, but you have a problem because it is negative!!"
} else if (signNum >= 0) {
    checkNum = "It's positive.";
} else if (signNum < 0) {
    checkNum = "It's negative!!";
} else {
    checkNum = "Unreadable"
}
//* output the result
console.log(`Your sign is ${signNum} and result: ${checkNum}`);

