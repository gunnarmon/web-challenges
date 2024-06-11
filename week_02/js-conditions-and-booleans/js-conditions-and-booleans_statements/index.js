console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "bla";

let loginMessage = undefined;

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  loginMessage = "Welcome! You are logged in as Brunhilde1984.";
} else {
  loginMessage = "Access denied!";
}

console.log(loginMessage);

// Part 2: Even / Odd
const number = 13;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10;

if (numberOfHotdogs < 5) {
  console.log("The Price is 2€");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("The Price is 1.50€");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 100000) {
  console.log("The Price is 1€");
} else if (numberOfHotdogs >= 100000) {
  console.log("The Price is 0.10€");
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour <= 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Max Mustermann";

const greeting =
  userName === "Coach" ? "Hello " + "Coach!" : "Hello " + userName + "!";

console.log(greeting);
