console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const oldMassage = document.getElementById("oldMessage");

console.log(oldMassage);
console.log(toastContainer);

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
  <p class="newMessage">I'm another toast message.</p>
  `;
  newMessage.classList.add("toast-container__message");
  toastContainer.append(newMessage);
});

clearButton.addEventListener("click", () => {
  while (toastContainer.firstChild) {
    toastContainer.removeChild(toastContainer.firstChild);
  }
});
