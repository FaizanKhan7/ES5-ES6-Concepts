// var, let const 
console.log('VAR, LET, CONST');

// VAR
var cricketScore = 30;
console.log(cricketScore);
// 30

var goals;
console.log(goals);
// undefined

// console.log(total);
// ReferenceError: total is not defined


// CONST    
const BasketScore = 44;
console.log(BasketScore);
// 44

// if we initalize first and then declare a constant we get error

// const result; 
// result = 20; 
// console.log(result)
// Uncaught SyntaxError: Missing initializer in const declaration

//let
//example to reassing

let score; // intialized
score = 10; // declaring a variable 
console.log(score);
//10

score = 20;
console.log(score);
//20

console.log('FUNCTION & ARROW FUNCTION (=>)');
// FUNCTION

// function declaration - always starts with function keyword otherwise it's a function expression
// FUNCTION DECLARATION
function reception() {
    console.log("let's go to function");
}

//Function Invocation or calling the function
reception();
//Output: let's go to function

// regular function
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
// 10

// In case of function expression the JavaScript statement does not start with function keyword 
// FUNCTION EXPRESSION EXAMPLE
const multiply = function(c, d) {
    return c * d;
}
console.log(multiply(5, 5));
// 25

// FUNCTION EXPRESSION (IIFE) (Immediately invoking function expression)

(function IIFE() {
    var immediate = "i will throw an error";
})();
// immediate; // throws "Uncaught ReferenceError: immediate is not defined"


var result = (function() {
    var userName = "Faizan";
    return userName;
})();
// Immediately creates the output: 
console.log(result);
// "Faizan"

// Arrow function
const Thank = () => {
    console.log("Thanking Salman and Taj for teaching JS");
}
Thank();

// another example
const teacher1 = 'Salman';
const teacher2 = 'Taj';
const language = 'JS';

const teachers = () => {
    console.log(`Thanks to ${teacher1} & ${teacher2} for teaching ${language}`);
}

teachers();

// another one
let sandwich = (nonveg, bread) => {
    return nonveg + bread;
}
console.log(sandwich("chicken", "burger"));

// BLOCK SCOPE & FUNCTION SCOPE

// function displayName() {
//     let userName = 'John Doe';
//     console.log(userName);
// }
// displayName();
// console.log(userName);
//We are defining a variable userName inside the displayUser function and assigning a value to userName, then invoking the function and trying to access the username in global scope. which is not possible hence we get - "ReferenceError: userName is not defined" & if we try to access the userName within that scope we get the value.

//another example 
//  var statement declares a function-scoped or globally-scoped variable
var x = 1;
let y = 1;

if (true) {
    var x = 2;
    let y = 2;
    console.log(y); //2

}

console.log(x); // 2
console.log(y); // 1


// another example
var isPracticing = 'JS';
let isNotPracticing = 'JS';

if (true) {
    var isPracticing = 'React';
    let isNotPracticing = 'React';
    console.log(isNotPracticing); //React

}


console.log(isNotPracticing); //JS
console.log(isPracticing); //React

// another one
var number = 1;

if (number === 1) {
    var number = 2;
    console.log(number);
}
console.log(number);
// another example
var janeDoe = 'female';

if (janeDoe === 'female') {
    var janeDoe = true;
    console.log(janeDoe);
}

console.log(janeDoe);

// Concatination

const movie = 'The Breakfast Club';
const rating = '4.6';

// old way
console.log(movie + ' movie has a rating of ' + rating);

// TEMPLETE LITERALS - better
console.log(`${movie} movie has a rating of ${rating}`);


// Rest and Spread operator

// REST PARAMETERS
const primeNumbers = [2, 3, 5, 7, 9];

console.log(Math.max(...primeNumbers));

// another example
function questions(q1, q2, q3, ...moreQuestions) {
    console.log('what is', q1);
    console.log('what is', q2);
    console.log('what is', q3);
    console.log('what are', moreQuestions);
}

questions('JS?', 'React?', 'Angular?', 'PHP', 'Python', 'Rust', 'Java');

// SPREAD OPERATOR
let games1 = ['Call Of Duty', 'Counter Strike', 'Fortnite', 'Gunslinger'];
let games2 = ['Devil May Cry', 'Assassin\'s Creed', 'Prototype', 'Fifa20'];

games1 = [...games1, ...games2];

console.log(games1);

// another example
function multiplyValues(ab, bc, cd) {
    return ab * bc * cd;
}

const matchNums = [2, 3, 4];
console.log(multiplyValues(...matchNums)); //24

// DESTRUCTURING

// DESTRUCTURING - Array
const actor = ['Tom Cruise', 'American Actor', 'Producer', 'Golden Globe Award Winner', 'stunt Man', 'Legend', 'GOAT'];

console.log(actor);

const actorName = actor[0];
const countryActor = actor[1];
const cinema = actor[2];
const awards = actor[3];
const amazing = actor[4];
const knowAs = actor[5];
const greatest = actor[6];
console.log(actorName, countryActor, cinema, awards, amazing, knowAs, greatest);

console.log(`${actorName}, ${countryActor}, ${cinema} & ${awards}. An amazing ${amazing}, ${knowAs} in Hollywood, he is a ${greatest}.`);


// DESTRUCTURING - Object

const learner = {
    firstName: 'John',
    lastName: 'Doe',
    age: '30',
    interests: ['coding', 'movies', 'books'],
    homeAddress: {
        street: '52nd main st',
        city: 'New York',
        country: 'USA'
    }
}
console.log(learner);

//  if we wanted to create variables, like if we want the above object property or key as actual variables what we can do is

const { firstName, lastName, age, interests, homeAddress: { country } } = learner;

console.log(firstName, lastName, age, interests[0], country);

console.log(`${firstName} ${lastName} aged ${age}, has shown interest in ${interests[0]} and he is from ${country}`);