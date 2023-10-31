// const text = "call: 123-456-7890";
// const phoneRegex = /\d{3}-\d{3}-\d{4}/;
// const phoneNumber = text.match(phoneRegex)[0];
// console.log(phoneNumber); // Output: 123-456-7890

// Task 1 
const string = "Today I went to the shop 123 and bought 4 bananas.";
const numberRegex = /\d+/g;
const numbers = string.match(numberRegex);
console.log(numbers); // Output: ["1", "3"]
