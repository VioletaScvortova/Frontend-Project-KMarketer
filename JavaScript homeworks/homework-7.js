//Task 1. reduce method//
let studentGrades = [{
        name: "Anna",
        note: 9,
    },
    {
        name: "Denis",
        note: 7,
    },
    {
        name: "Cristian",
        note: 8,
    },
    {
        name: "Daniel",
        note: 6,
    },
    {
        name: "Elena",
        note: 10,
    },
];

let sum = studentGrades.reduce(
    (totalNotes, student) => totalNotes + student.note,
    0
);
let average = sum / studentGrades.length;

console.log(`The average note is: ${average}.`); //"The average note is: 8."

//Task 2. filter() and map() methods//
let products = [{
        name: "Tshirt",
        price: 50,
        isAvailable: true,
    },
    {
        name: "Pants",
        price: 80,
        isAvailable: false,
    },
    {
        name: "Jacket",
        price: 120,
        isAvailable: true,
    },
    {
        name: "Shirt",
        price: 60,
        isAvailable: true,
    },
    {
        name: "Skirt",
        price: 40,
        isAvailable: false,
    },
];

let availableProducts = products
    .filter((product) => product.isAvailable)
    .map((product) => product.name);

console.log(availableProducts); // (3) ['Tshirt', 'Jacket', 'Shirt']

//Task 3. reduce method//
let numbers = [10, 5, 8, 15, 3, 20];
let maxNumber = numbers.reduce((acc, number) => Math.max(acc, number));
console.log(maxNumber); //20

//Task 4. reduce method//
let students = [{
    John: [8, 7, 9]
}, {
    Mary: [9, 9, 10]
}, {
    Alex: [6, 8, 7]
}];

let mediumNote = students.reduce((acc, student) => {
    let key = Object.keys(student)[0];
    let value = student[key];
    let total = value.reduce((acc, score) => acc + score, 0);
    let average = total / value.length;
    acc[key] = average.toFixed(2);

    return acc;
}, {});

console.log(mediumNote); //{John: '8.00', Mary: '9.33', Alex: '7.00'}