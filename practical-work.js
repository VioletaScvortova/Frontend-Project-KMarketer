// Task 1
// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

// let numbers = [5, 1, 3, 412, 12, 512];
// let [first, second, third, fourth, fifth, sixth] = numbers;

// console.log(second); // Output: 1
// console.log(sixth); // Output: 512


// let values = [5, 1, 3, 412, 12, 512];
// let maxValue = maximun.values();
// let minValue = Math.min.apply(null, values);
// console.log(maxValue); // 512
// console.log(minValue); // 1

let numbers = [5, 1, 3, 412, 12, 512];
let sortedNumbers = numbers.slice().sort((a, b) => b - a);
let maxNumber = sortedNumbers[0];

console.log(maxNumber);




// Task 2
// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов:

const people = [
    {
      name: 'Alex',
      city: 'Chisinau',
    },
    {
      name: 'Ivan',
      city: 'Chisinau',
    },
    {
      name: 'Joe',
      city: 'New York'
    },
    {
      name: 'Johan',
      city: 'Berlin'
    },
  ]

  {
    "Chisinau": [
      "Alex",
      "Ivan"
    ],
    "New York": "Joe",
    "Berlin": "Johan"
  }

// Task 3
//   Преобразовать строку в объект, разделяя свойства по точке.
  const str = 'one.two.three.four.five';
  {
    one: {
      two: {
        three: {
          four: {
            five: {}
          }
        }
      }
    }
  }