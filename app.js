

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
let myNums = [50,100];

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
let bar = 4 == 5-4;
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

if (boo3 == 5){
    console.log("HEY, I'm THE NUMBER 4!")
} else{ 
    console.log("HEY YOU'RE NOT NUMBER 4!")
}


let amHungry = true;

if(amHungry == true) {
    console.log("Let's eat! I want Chicken nuggies!");
} else {
    console.log("Let's keep coding! Yay!");
}


//ELSE if Structure

let howHungry = 0;

if (amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry I can eat a horse.")
} else if (amHungry === true && howHungry >= 25) {
    console.log("I'm hungry enough to eat cheez-its.")
} else if (amHungry === false && howHungry >=25) {
    console.log("I'm depressed.")
}else {
    console.log("I'm not that hungry!")
}


// SWITCH STATEMENTS
switch (amHungry == true) {
    case howHungry >= 75:
        console.log("I'm so hungry I can eat a horse.")
    break;
    case howHungry >=25:
        console.log("I'm hungry enough to eat cheez-its.")
    break;
default: 
    console.log("I just wanna eat to eat.");
}