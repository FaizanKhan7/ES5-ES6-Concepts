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

// Value v/s Reference 
/*
If the value is a primitive value, when you access the variable, you manipulate the actual value stored in that variable. In other words, the variable that stores a primitive value is accessed by value.

Unlike a primitive value, when you manipulate an object, you work on the reference of that object, rather than the actual object. It means a variable that stores an object is accessed by reference.

 */

//1.Value type copy

let count = 10; //Declaring a variable count and initialize its value to 10.
let counts = count; //Declaring another variable counts and assign it a value of the variable count. Internally, JavaScript engine copies the value stored in count into the location of counts.

count = 20; //Assigning the variable count a new value

// Since count and counts have no relationship, when you change the value stored in the counts variable, the value of the count variable doesn’t change.
// console.log(count); // 20

console.log(counts); //10


// Another example
let name = "John";

let fullName = name;

name = "John Doe";

console.log(fullName); //John



//2.Reference Copy

var roleName = { name: 'Denver' }; //declaring a variable roleName that holds an object whose name property is 'Denver'.

var listOfNames = roleName; //declaring another variable ListOfNames and assign the roleName variable to ListOfNames. Both roleName and ListOfNames are now referencing the same object on the heap.

listOfNames.name = 'Berlin'; //modify the value stored in the name property of the object using the listOfNames variable.

console.log(roleName.name); //Since both roleName and ListOfNames are referencing the same object, the change is also reflected if you access the object using the roleName variable.


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

// for..in statements
/*The for...in statement iterates over all enumerable(countable) properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties. */

const numberObject = {
    a: 1,
    b: 2,
    c: 3
}

for (const numbers in numberObject) {
    console.log(`${numbers}: ${numberObject[numbers]}`);
}

// for of loop
// we dont have any ugly looking index, we just pass in the itirator and the object/array

const aka = ['Professor', 'Berlin', 'Mascow', 'Nairobi'];

aka.push('Rio');
// console.log(aka);
for (const alsoKnowAs of aka) {
    console.log(alsoKnowAs); //we get all the values present in array of aka
}

// other array methods
// isArray() - it determines whether the passed value is an Array and returns true or false value.
console.log(Array.isArray(aka)); //true

// join() - this method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

console.log(aka.join());
// Professor,Berlin,Mascow,Nairobi,Rio
console.log(aka.join(''));
console.log(aka.join('-'));
console.log(aka.join(' - '));

// slice() - this method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(aka.slice(2));
// ["Mascow", "Nairobi", "Rio"]
console.log(aka.slice(0, 2));
console.log(aka.slice(1, 4));

// reverse()
// console.log(aka.reverse());

// splice() - this method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
aka.splice(5, 0, 'Helsinki')
console.log(aka);

aka.splice(0, 1, 'The Professor')
console.log(aka);

aka.splice(5, 0, 'Oslo')
console.log(aka);


// split() - The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

const professorTold = `${aka[0]} told ${aka[1]}, to sing bella ciao`;
console.log(professorTold);

const sing = professorTold.split(' ');
console.log(sing[4]);
// caio

const strCopy = professorTold.split();
console.log(strCopy);
// ["The Professor told Berlin, to sing bella ciao"]


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

// HIGHER ORDER ARRAY METHODS

const WorkoutSchedule = [{
        day: 'Monday',
        workout: 'Chest',
        variations: 7,
        preWorkOutProtein: 'A Bananna and 2 eggs',
        postworkoutProtein: 'Hammer Protein shake, 4 eggs & a bannana',
        workoutCompleted: true,
        breakfast: '4 slices of brown bread with a peanut butter, and some vegetables',
        lunch: '1 apple, some milk shake, with a rice meal',
        dinner: 'A chicken tikka masala, vegetables'
    },
    {
        day: 'Tuesday',
        workout: 'Biceps',
        variations: 8,
        preWorkOutProtein: 'A Bananna and Hammer Protein shake',
        postworkoutProtein: 'Hammer Protein shake, green vegetables',
        workoutCompleted: true,
        breakfast: '2 slices of brown bread with a peanut butter, and a Tuna fish',
        lunch: 'some fruit & milk shake',
        dinner: 'Briyani with some dessert'
    },
    {
        day: 'Wednesday',
        workout: 'Sholders',
        variations: 10,
        preWorkOutProtein: 'A Bananna and Hammer Protein shake',
        workoutCompleted: false,
        postworkoutProtein: 'Hammer Protein shake, fruits',
        breakfast: '4 slices of brown bread with a peanut butter, some meat',
        lunch: 'some green vegetables & milk shake',
        dinner: 'Anything with some dessert'
    },
    {
        day: 'Thrusday',
        workout: 'Lads',
        variations: 6,
        preWorkOutProtein: 'A Bananna and Fruits',
        postworkoutProtein: 'Hammer Protein shake, some fish',
        workoutCompleted: false,
        breakfast: 'vegetables and rice',
        lunch: '1 bananna, chiken nuggets & milk shake',
        dinner: 'Anything with some dessert'
    },
    {
        day: 'Friday',
        workout: 'Triceps',
        variations: 6,
        preWorkOutProtein: 'A Bananna and some green vegetable',
        postworkoutProtein: 'Hammer Protein shake & brown bread',
        workoutCompleted: true,
        breakfast: 'Fruits and rice',
        lunch: 'chiken burgers & milk shake',
        dinner: 'chicken tikka masala with some dessert'
    },
    {
        day: 'Saturday',
        workout: 'Legs',
        variations: 8,
        preWorkOutProtein: 'A Bananna, Protein & brown bread',
        postworkoutProtein: 'Hammer Protein shake & vegitables',
        workoutCompleted: true,
        breakfast: 'chiken nuggets and rice',
        lunch: 'fruits & milk shake',
        dinner: 'Anything with some dessert'
    },
    {
        day: 'Sunday',
        workout: 'no workout - Rest day',
        variations: false,
        preWorkOutProtein: false,
        postworkoutProtein: false,
        workoutCompleted: false,
        breakfast: 'Some light food',
        lunch: 'fruits, vegetables & milk shake',
        dinner: 'Anything with some dessert'
    },
];

// forEach()
WorkoutSchedule.forEach(function(today) {
    console.log(today.workout);
});
//we loop throught that array and we get each workout of the day

WorkoutSchedule.forEach(function(breakfast) {
    console.log(`${breakfast.day}'s breakfast is ${breakfast.breakfast}`)
});

WorkoutSchedule.forEach((dinner) => {
    console.log(dinner.dinner);
})

WorkoutSchedule.forEach((preWorkout) => {
    console.log(preWorkout.preWorkOutProtein);
})

WorkoutSchedule.forEach((postWorkout) => {
    console.log(postWorkout.postworkoutProtein)
})


// map()
const variationArray = WorkoutSchedule.map(function(variations) {
    return variations.variations;
});

console.log(variationArray);
// returns an whole new array of only variations

const workoutDays = WorkoutSchedule.map((days) => {
    return days.day;
})

console.log(workoutDays);
// returns an whole new array of only days

const food = WorkoutSchedule.map((foodItems) => {
    return (`I'll have ${foodItems.breakfast} as breakfast on ${foodItems.day}, lunch as ${foodItems.lunch} & ${foodItems.dinner} on Dinner`);
})

console.log(food);
// returns an whole new array of breakfast, lunch & dinner on each day


// filter()

const completedWorkout = WorkoutSchedule.filter(function(completed) {
    return completed.workoutCompleted;
});
console.log(completedWorkout);
//it's gonna only return array of true, which is completed

const notCompletedWorkout = WorkoutSchedule.filter(function(tired) {
    return tired.workoutCompleted === false;
}).map(function(workout) {
    return workout.workout;
})

console.log(notCompletedWorkout);
// it's gonna  return an array of false, which is notCompleted & we are also chaining it with map method where its returning the workout which is false or which is notCompleted.


// sort
// lets say we want to sort variations from ascending to descending order
const sortVariation = WorkoutSchedule.sort(function(s1, s2) {
    if (s1.variations > s2.variations) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortVariation);
// we get sorted array of variations from ascending to descending order


// EASIEST WAY
const sortedVariation = WorkoutSchedule.sort((a, b) => (a.variations < b.variations ? 1 : -1));
console.log(sortedVariation);
// we get sorted array of variations from descending to ascending order


// reduce

// lets say we want to add all the workout variations of whole week

// regular function
// const totalVariations = WorkoutSchedule.reduce(function(total, variation) {
//     return total + (variation.variations);
// }, 0);

// console.log(totalVariations);

// arrow function
const totalVariations = WorkoutSchedule.reduce((total, variation) =>
    total + (variation.variations), 0);

console.log(totalVariations);