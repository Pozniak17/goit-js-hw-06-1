const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const ingredient = ingredients.map((element) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
});

listEl.append(...ingredient);
console.log(listEl);
