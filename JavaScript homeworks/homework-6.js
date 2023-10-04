//Loops task 1//
let object = {
    name: 'John',
    age: 30,
    city: 'New-York'
};

let method = (object) => {
    let keys = Object.keys(object);
    let i = 0;
    while (i < keys.length) {
        let key = keys[i];
        console.log(`${key}: ${object[key]}`);
        i++;
    }
};

method(object);

/*
name: John
age: 30
city: New-York 
*/


//Loops task 2//
function keyInObject(person, keyToFind) {
    for (let key in person) {
        if (key === keyToFind) {
            return true;
        }
    }
    return false;
}

let person = {
    name: 'John',
    age: 30,
    city: 'New-York'
};

let keyToFind = 'age';

console.log(keyInObject(person, keyToFind));

// true 


//Loops task 3//
function combineTheWords(obj) {
    let keys = Object.keys(obj);

    let combineValue = '';
    let i = 0;

    do {
        let currentProp = keys[i];
        combineValue += obj[currentProp];
        i++;

    } while (i < keys.length);

    return combineValue
}

let obj = {
    prop1: 'Hello',
    prop2: 'World',
    prop3: '!'
}

console.log(combineTheWords(obj));


//Loops task 4//
function countNumberOfVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let i = 0;
    string = string.toLowerCase();

    while (i < string.length) {
        let char = string[i];
        if (vowels.includes(char)) {
            count++;
        }
        i++;
    }
    return count;
}

let stringContent = 'Hello world, my name is Albert';
let result = countNumberOfVowels(stringContent);
console.log(result); // 8 


//Loops task 5//
//v1
let calculatedMediumScore = (initialObj) => {
    let mediumResult = Object.assign({}, studentsResults);

    for (let marks in initialObj) {
        let currentMarks = initialObj[marks];

        let i = 0;
        let sum = 0;
        let medium = 0;
        let arrayLength = currentMarks.length;

        while (i < arrayLength) {
            sum += currentMarks[i];
            i++;
        }
        medium = sum / arrayLength;

        mediumResult[marks] = `medium: ${medium.toFixed(2)}`;
    }
    return mediumResult;
};

let studentsResults = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7],
};

console.log(calculatedMediumScore(studentsResults));

//v2 - with reduce method
function calculateAverageScore(students) {
    let average = {};

    students.forEach(s => {
        let averageScore = s.marks.reduce((a, i) => a + i) / s.marks.length;
        average[s.name] = `medium: ${averageScore.toFixed(2)}`;
    });

    return average;
}

let students = [{
        name: "John",
        marks: [8, 7, 9]
    },
    {
        name: "Mary",
        marks: [9, 9, 10]
    },
    {
        name: "Alex",
        marks: [6, 8, 7]
    }
];

let StudentAverageScore = calculateAverageScore(students);
console.log(StudentAverageScore); // {John: 'medium: 8.00', Mary: 'medium: 9.33', Alex: 'medium: 7.00'}


//Loops task 6 //
let reversedString = (greetingString) => {
    let greetingStringArray = greetingString.split('');

    let resultStringArray = [];
    let i = greetingStringArray.length - 1;
    do {
        resultStringArray.push(greetingStringArray[i]);
        i--;
    } while (i >= 0);

    let resultString = resultStringArray.join('');

    return resultString;
};

let greetingString = 'Hello,world!'

console.log(reversedString(greetingString)); // !dlrow,olleH


//Loops task 7 //
function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let string = 'level';

console.log(isPalindrome(string)); //true