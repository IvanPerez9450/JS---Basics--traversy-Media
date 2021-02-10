
// TIMESTAMPS
// 1:05 What is JS?
// 3:19 Why learn JS?
// 4:37 What u will learn in this course?
// 6:10 Let's Jump In!
// 6:45 Add JS to HTML
// 9:38 Basic syntax
// 11:14 Variables
// 14:17 Data types
//         18:33 Strings
//         18:44 Concatenation
//         19:44 Template String ES6 (2015)
//         20:38 String properties and methods
// 23:52 Arrays
// 30:07 Object literals
//         34:19 Array of todos
// 35:58 JSON
// 37:42 Loops
//         40:30 Loop through arrays
//         42:24 High order array methods
// 46:30 Conditionals
//         51:24 Ternary operator
//         52:48 Switches
// 54:23 Functions
// 59:25 Object-oriented programming OOP
//         1:05:02 Prototypes
// 1:10:30 DOM Document Object Model
//         1:14:45 Single element
//         1:17:00 Multiple element
//         1:19:25 Loop through
//         1:20:05 Manipulating the DOM or Changing things in the DOM
//         1:30:35 Making a tiny little app

////////////////////////////////////////////////* VARIABLES *///////////////////////////////////////////////////////
// 11:14 Variables
// 14:17 Data types
//         18:33 Strings
//         18:44 Concatenation
//         19:44 Template String ES6 (2015)
//         20:38 String properties and methods

let language = 3;                  //  LET - you can change the value later on
language = 5;
console.log(language);             // language in this case is the variable name

let job = 'Walmart';
console.log(job);

const firstName = 'Ivan';          // CONST - used or fixed values
console.log(firstName);

// DATA TYPES - PRIMITIVES // (strings, numbers, boolean, null, undefined, symbols)
const lastName = 'Perez';           // STRINGS
const age = 30;                     // NUMBER
const rating = 4.5;                 // NUMBER
const isCool = true;                // BOOLEAN
const x = null;                     // NULL
const y = undefined;                // UNDEFINED

console.log(typeof lastName); //console.log to know the type of variable

////////////////////////////////////////////////////* STRINGS *////////////////////////////////////////////////

//STRINGS - CONCATENATION
const middleName = 'Alejandro';           
const city = 'Texas'; 

console.log('My name is ' + middleName + ' and I live in ' + city);    //(old way)
console.log('My name is ${middleName} and I live in ${city}')          //(new way)

//STRINGS - TEMPLATE STRING
const hello = 'My name is ' + middleName + ' and I live in ' + city;
console.log(hello);

//STRINGS - LENGTH
const s = 'Hello World!';
console.log(s.substring(0,5).toUpperCase());

// ARRAY FROM STRINGS
const w = 'technology, computers, it, code';
console.log(w.split(', '));

////////////////////////////////////////////////* [ ARRAYS ] * //////////////////////////////////////////////////////
// 23:52 Arrays

const numbers = new Array(1,2,3,4,5);                                   //old way
console.log(numbers);

const fruits = ['apple', 'mango', 'pinnaple', 'orange', 10, true];      //new way

fruits[6] = 'grapes';

fruits.push('mangos');

fruits.unshift('blueberries');

console.log(fruits);

console.log(fruits.indexOf('pinnaple'));

//////////////////////////////////////////* { OBJECTS } * ///////////////////////////////////////////////////////////
// 30:07 Object literals
//         34:19 Array of todos
// 35:58 JSON

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'coffee', 'dogs'],
    address: {
        street: '300 Main Street',
        apt: '300a',
        city: 'Fort Worth',
        state: 'Texas',
        country: 'US',
    }
}
console.log(person.hobbies[1], person.address.city, person.firstName);

person.email = 'john@gmail.com';

console.log(person);

// ARRAY OF OBJECTS
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false,
    },
]
console.log(todos[1].text);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

///////////////////////////////////////////////////* LOOPS */////////////////////////////////////////////////////
// 37:42 Loops
//         40:30 Loop through arrays
//         42:24 High order array methods

const todosList = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false,
    },
]
for(let todo of todosList) {
    console.log(todo.text)
}
for(let todo of todosList) {
    console.log(todo.id)
}

//forEach
todosList.forEach(function(todo) {
    console.log(todo.text);
});

//map
const todoText = todosList.map(function(todo) {
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todosList.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);

//////////////////////////////////////////// *CONDITIONALS* /////////////////////////////////////////////////////////
// 46:30 Conditionals
//         51:24 Ternary operator
//         52:48 Switches

const z = 4;

if (z > 10) {                             // == statement
    console.log('z is 10');               // === satement + data type
} else if(z > 10){
    console.log('z is GREATER that 10')
} else {
    console.log('z is LESS than 10')
}

const b = 6;
const a = 11;

if (b > 5 || a > 10) {                                                  // || = means or
    console.log('b is more than 5 or a is more than 10');               
} 
if (b > 5 && a > 10) {                                                  
    console.log('b is more than 5 or a is more than 10');               // && = means and
} 

//Ternary operator and switches
const c = 15;

const color = c > 10 ? 'red' : 'blue';                                  // ? = means then  
console.log(color);                                                     // : = means else

switch(color) {
 case 'red':
     console.log('color is red');
     break;
 case 'blue':
     console.log('color is blue');
     break;
 default:
     console.log('color is not red or blue');
 break

}

//////////////////////////////////////////////////*FUNCTION*////////////////////////////////////////////////////////
//54:23 Functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
console.log(addNums(5,5));

//////////////////////////////////////////*OBJECT ORIENTED PROGRAMMING*/////////////////////////////////////////////
// 59:25 Object-oriented programming OOP
//         1:05:02 Prototypes

//Constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Instantiate object
const person1= new Person('John', 'Doe', '04-03-1980')
const person2= new Person('Mary', 'Smith', '04-03-1970')

console.log(person2.dob)

//Prototypes
