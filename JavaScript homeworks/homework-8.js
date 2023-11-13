// Task 1 Object destructuring
const student = () => ({
    firstName: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
});

const {
    firstName,
    lastName,
    faculty,
    year
} = student();

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


// Task 4 Spread operator
//V1 simple operation
const countryName = ['Spain', 'Portugal', 'Norway', 'France'];
const countryCode = [34, 351, 47, 33];

const countryProp = [...countryName, ...countryCode];

console.log(countryProp); // Output: ['Spain', 'Portugal', 'Norway', 'France', 34, 351, 47, 33]


//V2 operation with function 
const combineArrays = (arr1, arr2) => [...arr1, ...arr2];

const country = ['Spain', 'Portugal', 'Norway', 'France'];
const countryPhoneCode = [34, 351, 47, 33];

const countryInfo = combineArrays(country, countryPhoneCode);

console.log(countryInfo); // Output: ['Spain', 'Portugal', 'Norway', 'France', 34, 351, 47, 33]


// Task 5 Rest operator
const addNewProp = (student, language) => ({
    ...student,
    language
});

const studentProp = {
    firstName: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
};

const newStudent = addNewProp(studentProp, 'en');

console.log(newStudent); //Output: {firstName: 'John', lastName: 'Doe', faculty: 'history', year: 3, language: 'en'}