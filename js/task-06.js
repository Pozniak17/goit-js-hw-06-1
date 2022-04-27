const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  input.classList.add("#validation-input");
  if (
    Number(event.currentTarget.value.length) === Number(input.dataset.length)
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

// const refs = {
//   input: document.querySelector("#validation-input"),
// };

// console.log(refs.input);

// refs.input.addEventListener("blur", () => {
//   if (refs.input.value.length === refs.input.dataset.length) {
//     refs.input.classList.add("invalid");
//   } else {
//     refs.input.classList.remove("invalid");
//     refs.input.classList.add("valid");
//   }
// });
