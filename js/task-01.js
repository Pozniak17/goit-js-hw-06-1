//*✅ Number of categories: 3

//*✅ Category: Animals
//*✅ Elements: 4

//*✅ Category: Products
//*✅ Elements: 3

//*✅ Category: Technologies
//*✅ Elements: 5

const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((item) => {
  const categoryTitleEl = item.firstElementChild;
  console.log("Category:", categoryTitleEl.textContent);

  const numbersOfEl = item.querySelectorAll("li");
  console.log("Elements:", numbersOfEl.length);
});

// // ========================== Number of categories ===============================
// const numberOfCategories = document.querySelectorAll("h2").length;
// console.log("Number of categories:", numberOfCategories); //numberOfCategories: 3

// // ==================================== Animals ==================================

// const animalsTitle = document.querySelector("h2").textContent;
// console.log("Category:", animalsTitle); //Category: Animals

// const numbersOfAnimals = document.querySelector(".item > ul");
// console.log("Elements:", numbersOfAnimals.children.length); //Elements: 4;

// // ==================================== Products ==================================

// const productsTitle = document.querySelectorAll(".item > h2")[1].textContent;
// console.log("Category:", productsTitle); //Category: Products

// const numbersOfProducts = document.querySelectorAll(".item > ul")[1];
// console.log("Elements:", numbersOfProducts.children.length);

// // ==================================== Technologies ===============================

// const technologiesTitle =
//   document.querySelectorAll(".item > h2")[2].textContent;
// console.log("Category:", technologiesTitle); //Category: Products;

// const numberOfTechnologies = document.querySelectorAll(".item > ul")[2];
// console.log("Elements: ", numberOfTechnologies.children.length); //5
