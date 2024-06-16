console.clear();

const form = document.querySelector('[data-js="form"]');
const badnessRange = document.querySelector('[data-js="badness]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      Number(data.age) + Number(data.badness)
    }`
  );

  event.target.reset();
  formElements.firstName.focus();
});

/* badnessRange.addEventListener("input", () => {
  const badnessAgeSum = badnessRange.value + formElements.age.value;
  console.log(badnessAgeSum);
}); */
