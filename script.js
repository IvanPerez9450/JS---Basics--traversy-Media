
////////////////////////////////////////////////* VARIABLES *///////////////////////////////////////////////////////

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

const numbers = new Array(1,2,3,4,5);                                   //old way
console.log(numbers);

const fruits = ['apple', 'mango', 'pinnaple', 'orange', 10, true];      //new way

fruits[6] = 'grapes';

fruits.push('mangos');

fruits.unshift('blueberries');

console.log(fruits);

console.log(fruits.indexOf('pinnaple'));

//////////////////////////////////////////* { OBJECTS } * ///////////////////////////////////////////////////////////

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

////////////////////////////////////////////*CONDOTIONALS* 46min/////////////////////////////////////////////////////