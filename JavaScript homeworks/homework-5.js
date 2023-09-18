//Iteration task 1//
let fruits = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // apple banana orange
}


//Iteration task 2//
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // 15


//Iteration task 3//
let names = ['John', 'Jane', 'Mikhael', 'Jennifer', 'Bobby'];
let nameLength = [];

for (let i = 0; i < names.length; i++) {
    let averageNumberOfChar = names[i].length;
    nameLength.push(averageNumberOfChar);
}
console.log(nameLength); // (5) [4, 4, 7, 8, 5]


//Iteration task 4//
let company = [
    ['Production department', 'Logistic department', 'Marketing department', 'Sales department'],
    [70, 3, 5, 10],
    ['Pier', 'Kevin', 'Helen', 'Vivien']
];
let employeeNames = company[2];

for (let i = 0; i < employeeNames.length; i++) {
    console.log(employeeNames[i]); // Pier Kevin Helen Vivien
}

let sortedEmployeeNames = employeeNames.sort();
console.log(sortedEmployeeNames); // (4) ['Helen', 'Kevin', 'Pier', 'Vivien']


//Iteration task 5. Objects//
let person = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    job: 'Developer',
};

let count = Object.keys(person).length;
console.log(count); // 4


//Iteration task 6. Objects//
let n = 5;
let numberList = [...Array(n).keys()].map(i => i + 1);
console.log(numberList); // (5) [1, 2, 3, 4, 5]


//Iteration task 7. Objects//
let value = [5, 8, 2, 10, 3];
let maxValue = Math.max.apply(null, value);
console.log(maxValue); // 10


//Iteration task 8. Objects//
let marks = {
    math: 8,
    literature: 7,
    history: 9,
};

let sumMarks = 0;
let score = 0;

for (let subject in marks) {
    sumMarks += marks[subject];
    score++;
}

let averageMark = sumMarks / score;
console.log(averageMark); // 8

//Iteration task 9. Objects//

let myDog = {
name: 'Luna',
age: 5,
color: 'brown',
puppies: ['Cooper', 'Lucy', 'Daisy', 'Rocky'],
};

let numberOfPuppies = myDog.puppies.length;
console.log (numberOfPuppies); //4

