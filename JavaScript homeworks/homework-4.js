//Array task 1//
let fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits.length); // 3
console.log(fruits); // (3) ['apple', 'banana', 'orange']


//Array task 2//
var numbers = [1, 2, 3, 4, 5];
var removedNumber = numbers.pop();
console.log(removedNumber); // 5
console.log(numbers); // (4) [1, 2, 3, 4]

var removedNumber = numbers.shift();
console.log(removedNumber); // 1
console.log(numbers); // (3) [2, 3, 4]


//Array task 3//
let colours = ["red", "green", "blue", "yellow"];
var index = colours.indexOf("green");
console.log(index); // 1

let hasOrange = colours.includes("orange");
console.log(hasOrange); // false


//Array task 4//
let names = ["John", "Jane", "Mike", "Jennifer"];
names.unshift("David");

console.log(names); // (5) ['David', 'John', 'Jane', 'Mike', 'Jennifer']
var index = names.indexOf("Mike");
console.log(index); // 3


//Array task 5//
var numbers = [2, 4, 6, 8, 10];
var hasNumber = numbers.includes(5);

console.log(hasNumber); // false 
numbers.push(12);
console.log(numbers); // (6) [2, 4, 6, 8, 10, 12]


//Array tasks 6, 7, 8//
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.sort();
console.log(months); // (12) ['April', 'August', 'December', 'February', 'January', 'July', 'June', 'March', 'May', 'November', 'October', 'September']

var result = months.filter((month) => month.length > 3);
console.log(result); // (11) ['April', 'August', 'December', 'February', 'January', 'July', 'June', 'March', 'November', 'October', 'September']

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months.slice(6,11)); // (5) ['July', 'August', 'September', 'October', 'November']


//Array tasks 6, 7, 8, 9//
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.sort();
var result = months.filter((month) => month.length >= 5);
const showString = result.join("-");
console.log(showString);