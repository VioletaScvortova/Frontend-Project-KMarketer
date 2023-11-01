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


// Task 3 The result is not correct, but I tried))


const allMovies = "1 The Shawshank Redemption (1994); 2 The Godfather (1972); 3 The Godfather: Part II (1974); 4 Pulp Fiction (1994); 5 The Good, the Bad and the Ugly (1966); 6 The Dark Knight (2008); 7 12 Angry Men (1957); 8 Schindler's List (1993); 9 The Lord of the Rings: The Return of the King (2003); 10 Fight Club (1999)";

const moviesPattern = /\b\d+\s(.*?)(199[1-9]\d|200\d)\);/g;
const moviesAfter1990 = allMovies.match(moviesPattern) || [];

console.log(moviesAfter1990);


// Task 4 I had some issues with this task