//Array task 1//
let fruits = [];
fruits.push("apple", "banana", "orange");
console.log(fruits.length); // 3
console.log(fruits); // (3) ['apple', 'banana', 'orange']


//Array task 2//
let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // (4) [1, 2, 3, 4]
numbers.shift();
console.log (numbers);// (3) [2, 3, 4]


//Array task 3//
let colours = ["red", "green", "blue", "yellow"];
console.log (colours.indexOf("green")); // 1

let hasOrange = colours.includes("orange");
console.log(hasOrange); // false


//Array task 4//
let names = ["John", "Jane", "Mike", "Jennifer"];
names.unshift("David");

console.log(names); // (5) ['David', 'John', 'Jane', 'Mike', 'Jennifer']
console.log (names.indexOf("Mike")); // 3


//Array task 5//
let quantity = [2, 4, 6, 8, 10];
let  hasQuantity = quantity.includes(5);

console.log(hasQuantity); // false 
quantity.push(12);
console.log(quantity); // (6) [2, 4, 6, 8, 10, 12]


//Array tasks 6, 7//
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let sort = months.sort();
console.log(sort); // (12) ['April', 'August', 'December', 'February', 'January', 'July', 'June', 'March', 'May', 'November', 'October', 'September']

let overThreeWords = months.filter((month) => month.length > 3);
console.log(overThreeWords); // (11) ['April', 'August', 'December', 'February', 'January', 'July', 'June', 'March', 'November', 'October', 'September']


//Array task 8//
let calendar = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(calendar.slice(6, 11)); // (5) ['July', 'August', 'September', 'October', 'November']


//Array task 9//
months.sort();
let overFiveWords = months.filter((month) => month.length >= 5);
console.log(overFiveWords.join("-")); // April-August-December-February-January-March-November-October-September
