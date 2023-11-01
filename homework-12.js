// Task 1 
const string = "Today I went to the shop 123 and bought 4 bananas.";
const numberRegex = /\d+/g;
const numbers = string.match(numberRegex);
console.log(numbers); // Output: ["123", "4"]



// Task 2 
// V1 with match()
const myText = "City postal codes: 12345, 98765, 54321";
const postalCodePattern = /\b\d{5}\b|\b\d{5}-\d{4}\b/g;
const matches = myText.match(postalCodePattern);

if (matches) {
    console.log("These postal codes are valid: " + matches.join(", "));
} else {
    console.log("There is no valid postal in the text");
}
// Output: The following postal codes are valid: 12345, 98765, 54321


// V2 with test()
const text = "City postal codes: 12345, 98765, 54321";
const zipCodePattern = /\b\d{5}\b|\b\d{5}-\d{4}\b/;
const zipCodeIsValid = zipCodePattern.test(text);

if (zipCodeIsValid) {
    console.log("The postal codes are valid");
} else {
    console.log("The postal codes are not valid");
}
// Output: The postal codes are valid