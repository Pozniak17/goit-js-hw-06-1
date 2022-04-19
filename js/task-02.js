const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const result = ingredients.forEach((element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  console.log(itemEl);
});
