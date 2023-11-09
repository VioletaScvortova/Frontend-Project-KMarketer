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


// Task 3 

// V1
const myAllMovies = "1 The Shawshank Redemption (1994); 2 The Godfather (1972); 3 The Godfather: Part II (1974); 4 Pulp Fiction (1994); 5 The Good, the Bad and the Ugly (1966); 6 The Dark Knight (2008); 7 12 Angry Men (1957); 8 Schindler's List (1993); 9 The Lord of the Rings: The Return of the King (2003); 10 Fight Club (1999)";

const myMoviesPattern = /\d+[\s\w:,']+\((199[1-9]|20[0-2]\d)\)/g;
const moviesAfter1990 = myAllMovies.match(myMoviesPattern) || [];

console.log(moviesAfter1990);

// V2 
const allMovies = [
    "1 The Shawshank Redemption (1994)",
    "2 The Godfather (1972)",
    "3 The Godfather: Part II (1974)",
    "4 Pulp Fiction (1994)",
    "5 The Good, the Bad and the Ugly (1966)",
    "6 The Dark Knight (2008)",
    "7 12 Angry Men (1957)",
    "8 Schindler's List (1993)",
    "9 The Lord of the Rings: The Return of the King (2003)",
    "10 Fight Club (1999)"
];

const moviesPattern = /\d{4}/g;

allMovies.forEach(movie => {
    const moviesYear = movie.match(moviesPattern)[0]

    if (moviesYear > 1990) {
        console.log(movie)
    }

}); // Output: 1 The Shawshank Redemption (1994), 4 Pulp Fiction (1994), 6 The Dark Knight (2008), 8 Schindler's List (1993), 9 The Lord of the Rings: The Return of the King (2003), 10 Fight Club (1999)


// Task 4 
// V1 using array and function

const colours = [
    "AliceBlue #F0F8FF",
    "AntiqueWhite #FAEBD7",
    "Aqua #00FFFF",
    "Aquamarine #7FFFD4",
    "Azure #F0FFFF",
    "12 bit:",
    "White #FFF",
    "Red #F00",
    "Green #0F0",
    "Blue #00F",
];

const coloursPattern = /#[0-9A-Fa-f]{6,}/g;

colours.forEach(colour => {
    const myColours = colour.match(coloursPattern)

    if (myColours) {
        console.log(myColours[0])
    }

}); // Output: #F0F8FF, #FAEBD7, #00FFFF, #7FFFD4, #F0FFFF


// V2 using string and pattern only
const allColours = "AliceBlue #F0F8FF, AntiqueWhite #FAEBD7, Aqua #00FFFF, Aquamarine #7FFFD4, Azure #F0FFFF, 12 bit, White #FFF, Red #F00, Green #0F0,Blue #00F"

const allColoursPattern = /#[0-9A-Fa-f]{6,}/g;
const colorsMatching = allColours.match(coloursPattern);
console.log(colorsMatching ? colorsMatching.join(', ') : 'The colours were not founded'); // Output:#F0F8FF, #FAEBD7, #00FFFF, #7FFFD4, #F0FFFF
