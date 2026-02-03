Q.1) What is the difference between var, let, and const?

ANS:Difference between var, let, and const:

var: Function-scoped, can be redeclared and updated, hoisted and initialized with undefined.

let: Block-scoped, cannot be redeclared but can be updated, hoisted but not initialized.

const: Block-scoped, cannot be redeclared or updated, must be initialized at declaration.


Q.2) What is the difference between map(), forEach(), and filter()? 

ANS:Difference between map(), forEach(), and filter():

map(): Creates a new array by applying a function to each element of an array.

forEach(): Executes a function on each element but does not return a new array.

filter(): Creates a new array containing only elements that satisfy a condition.

Q.3) What are arrow functions in ES6?

ANS:Arrow functions in ES6 are a shorter syntax for writing functions in JavaScript.
They use =>, do not have their own this, and make code more concise.
const add = (a, b) => a + b;


Q.4) How does destructuring assignment work in ES6?

ANS:Destructuring assignment in ES6 allows extracting values from arrays or objects into separate variables using a concise syntax.

Q.5) Explain template literals in ES6. How are they different from string concatenation?

ANS:Template literals in ES6 are strings written using backticks ( ).
They allow variable interpolation using ${} and support multi-line strings.

Difference from string concatenation:

Template literals use ${variable} instead of +

They are more readable and cleaner

They support multi-line text easily
const name = "Ali";
const msg = `Hello, ${name}!`;

