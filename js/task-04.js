//* 1. ств. лічильник, значення якого = 0

//* 2. ств. слухачів кнопок, які збільшують/зменшують на 1

//* 3. оновити інтерфейс новим значенням counterValue

//! Доступ до кнопки віднімання
const btnDecrement = document.querySelector('button[data-action="decrement"]');

//! Доступ до кнопки додавання
const btnIncrement = document.querySelector('button[data-action="increment"]');

//! Доступ до ел. span
const numberEl = document.querySelector("#value");

let counterValue = 0;

//* кнопка -1
const listDecr = btnDecrement.addEventListener("click", () => {
  numberEl.textContent = counterValue -= 1;
});

//* кнопка +1
const listIncr = btnIncrement.addEventListener("click", () => {
  numberEl.textContent = counterValue += 1;
});
