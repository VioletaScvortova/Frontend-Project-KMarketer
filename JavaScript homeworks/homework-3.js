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
}

//Switch task 2//

const examScore = "87";

switch (true) {
  case examScore >= 97 && examScore <= 100:
    console.log("Grade A+");
    break;
  case examScore >= 93 && examScore <= 96:
    console.log("Grade A");
    break;
  case examScore >= 90 && examScore <= 92:
    console.log("Grade A-");
    break;
  case examScore >= 87 && examScore <= 89:
    console.log("Grade B+");
    break;
  case examScore >= 83 && examScore <= 86:
    console.log("Grade B");
    break;
  case examScore >= 80 && examScore <= 82:
    console.log("Grade B-");
    break;
  case examScore >= 77 && examScore <= 79:
    console.log("Grade C+");
    break;
  case examScore >= 73 && examScore <= 76:
    console.log("Grade C");
    break;
  case examScore >= 70 && examScore <= 72:
    console.log("Grade C-");
    break;
  case examScore >= 67 && examScore <= 69:
    console.log("Grade D+");
    break;
  case examScore >= 63 && examScore <= 66:
    console.log("Grade D");
    break;
  case examScore >= 60 && examScore <= 62:
    console.log("Grade D-");
    break;
  case examScore >= 0 && examScore <= 59:
    console.log("Grade F");
    break;
  default:
    console.log(examScore + " is undefined. To find out exam grading scale, please enter another exam score.");
}
