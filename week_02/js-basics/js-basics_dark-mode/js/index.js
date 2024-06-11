console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkColorButton = document.querySelector('[data-js="dark-mode-button"]');
const lightColorButton = document.querySelector(
  '[data-js="light-mode-button"]'
);
const toggleColorButton = document.querySelector('[data-js="toggle-button"]');

darkColorButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightColorButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
