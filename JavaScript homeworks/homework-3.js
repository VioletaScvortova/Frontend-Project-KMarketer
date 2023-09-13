//Switch task 1//

const countryCode = "AR";

switch (countryCode) {
    case "ES":
        console.log("Spain");
        break;
    case "PT":
        console.log("Portugal");
        break;
    case "MK":
        console.log("Macedonia");
        break;
    case "BR":
        console.log("Brazil");
        break;
    case "AR":
        console.log("Argentina");
        break;
    case "GR":
        console.log("Greece");
        break;
    case "CY":
        console.log("Cyprus");
        break;
    default:
        console.log("Sorry, " + countryCode + " is out of the country codes list.");
} // Output: Argentina

//Switch task 2//

const examScore = "87";

switch (true) {
    case examScore >= 97:
        console.log("Grade A+");
        break;
    case examScore >= 93:
        console.log("Grade A");
        break;
    case examScore >= 90:
        console.log("Grade A-");
        break;
    case examScore >= 87:
        console.log("Grade B+");
        break;
    case examScore >= 83:
        console.log("Grade B");
        break;
    case examScore >= 80:
        console.log("Grade B-");
        break;
    case examScore >= 77:
        console.log("Grade C+");
        break;
    case examScore >= 73:
        console.log("Grade C");
        break;
    case examScore >= 70:
        console.log("Grade C-");
        break;
    case examScore >= 67:
        console.log("Grade D+");
        break;
    case examScore >= 63:
        console.log("Grade D");
        break;
    case examScore >= 60:
        console.log("Grade D-");
        break;
    case examScore >= 0:
        console.log("Grade F");
        break;
    default:
        console.log(
            examScore +
            " is undefined. To find out exam grading scale, please enter another exam score."
        );
} // Output: Grade B+

//Ternary Operator task 1//

{
    let number = 17;
    let checkNumber = number % 2 == 0 ? "The number is even" : "The number is odd";

    console.log(checkNumber);
} // Output: The number is odd

//Ternary Operator task 2//

{
    let isLoggedIn = true;
    let message = isLoggedIn ? "Sign in" : "Create an account";

    console.log(message);
} // Output: Sign in

//Ternary Operator task 3//
{
    let bookPrice = 190;
    let bookQuantity = 5;
    let bookStock = true;
    let entireBookOrder = bookStock ?
        "Total order cost: " + bookPrice * bookQuantity + " MDL" :
        "This book is temporarily out of stock. Order now and we`ll deviver when available";

    console.log(entireBookOrder);
} // Output: Total order cost: 950 MDL

//Ternary Operator task 4//

{
    let currentYear = new Date().getFullYear();

    let leapYear =
        currentYear % 4 == 0 && (currentYear % 100 !== 0 || currentYear % 400 == 0) ?
        currentYear + " is a leap year" :
        currentYear + " is a non-leap year";

    console.log(leapYear);
} // Output: 2023 is a non-leap year

//Function task 1//

function tellFortune(X, Y, Z, N) {

    let childrenNumber = N;
    let partnerName = Z;
    let continent = Y;
    let post = X;

    let yourFuture = `You will be a ${X} in ${Y} and will get married to ${Z} with ${N} kids`

    console.log(yourFuture);
}

tellFortune("painter", "South America", "Carlos", "4"); // Output: You will be a painter in South America, and will get married to Carlos with 4 kids
tellFortune("biologist", "Australia", "Louis", "1"); // Output: You will be a biologist in Australia, and will get married to Louis with 1 kids
tellFortune("sculptor", "Europe", "Santiago", "3"); // Output: You will be a sculptor in Europe, and will get married to Santiago with 3 kids

//Function task 2//

function calculateDogAge(humanAge) {
    let dogAge = humanAge * 7;
    let dogAgeMessage = `Your dog is ${dogAge} years old in dog years!`;

    console.log(dogAgeMessage);
}

calculateDogAge("5"); // Output: Your dog is 35 years old in dog years!
calculateDogAge("7"); // Output: Your dog is 49 years old in dog years!
calculateDogAge("3"); // Output: Your dog is 21 years old in dog years!

//Bonus task Arrow Function//

let CalculationSupply = (currentAge, foodPerDay, maxYears = 100) => {
    let reamainingYears = maxYears - currentAge;
    let foodAmount = reamainingYears * foodPerDay * 365;

    return `You will need ${foodAmount} kg of food to live to ${maxYears} years.`
};

let result1 = CalculationSupply(25, 1.5, 75);
let result2 = CalculationSupply(45, 2);
let result3 = CalculationSupply(30, 1.3, 80);

console.log(result1);
console.log(result2);
console.log(result3);