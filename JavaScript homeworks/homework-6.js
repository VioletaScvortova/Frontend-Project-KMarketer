//Loops task 1//

let PersonDescription = ['name: John', 'age: 30', 'city: New-York'];

let i = 0;
let text = '';
while (PersonDescription[i]) {
    text += PersonDescription[i] + '\n';
    i++;
}

console.log(text);

/*
name: John
age: 30
city: New-York 
*/


//Loops task 2//
function keyInObject(obj, keyToFind) {
    for (let key in obj) {
        if (key == keyToFind) {
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
if (keyInObject(person, keyToFind)) {
    console.log('true');
} else {
    console.log('false');
}

// true 


//Loops task 3 - I had the issues with the "do...while loop"//



//Loops task 4//
function countNumberOfVowels(string) {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let count = 0;
    let i = 0;

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


//Loops task 6 - I had the issues with the "do...while loop"//



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

console.log(isPalindrome(string));