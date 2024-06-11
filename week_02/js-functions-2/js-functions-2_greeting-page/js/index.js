console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const dayTime = new Date().getHours();
  if (dayTime >= 6 && dayTime <= 12) {
    return "Good Morning";
  } else if (dayTime > 12 && dayTime <= 18) {
    return "Good Afternoon";
  } else if (dayTime > 18 && dayTime <= 22) {
    return "Good Evening";
  } else return "Good Night";
}

function getDayColor() {
  const dayColor = new Date().getDay();
  if (dayColor === "monday") {
    return "darkgray";
  } else if (dayColor === "saturday" || dayColor === "sunday") {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
