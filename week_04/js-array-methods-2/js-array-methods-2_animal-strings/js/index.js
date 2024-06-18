console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes((animal) => "hippo");

console.log("Hippo exists in animal array: ", hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);

console.log("A cat from index 5 exists: ", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings[0].startsWith("P");

console.log(
  "First animal in array starts with 'P': ",
  firstAnimalStartingWithLetterP
);

const indexOfGiraffe = animalStrings.findIndex(
  (animal) => animal === "giraffe"
);

console.log("Index of 'Giraffe: ", indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// That's why we use toSorted()
const animalsSortedAlphabetically = animalStrings.toSorted((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  else return 0;
});

console.log(
  "Animal array sorted alphabetically: ",
  animalsSortedAlphabetically
);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.endsWith("Z")
);

console.log("Any animal ends with 'z': ", anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);

console.log(
  "Every animal has more than two letters: ",
  everyAnimalHasMoreThanTwoLetters
);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

function characterCount(array) {
  return array.reduce(function (charCount, item) {
    return charCount + item.length;
  }, 0);
}

const sumOfAllAnimalCharacters = characterCount(animalStrings);

console.log("The sum of all animal letters: ", sumOfAllAnimalCharacters);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
