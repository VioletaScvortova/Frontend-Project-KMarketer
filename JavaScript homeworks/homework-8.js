// Task 1 Object destructuring
const student = () => ({
    firstName: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
});

const { firstName, lastName, faculty, year} = student();

const studentArray = [`${firstName} ${lastName}`, faculty, year];

console.log(studentArray); // Output: ['John Doe', 'history', 3]


// Task 2 Array destructuring
const colors = () => ['red', 'green', 'blue', 'violet'];

const [first, second, third] = colors();

console.log(first); // Output: red
console.log(third); // Output: blue


// Task 3 Spread operator
const func = (...params) => params;
console.log(func(1, 10, 100, 1000, 10000)); // Output: [1, 10, 100, 1000, 10000]





