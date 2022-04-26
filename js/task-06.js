const refs = {
  input: document.querySelector("#validation-input"),
};

console.log(refs.input);

refs.input.addEventListener("blur", () => {
  if (refs.input.value.length < refs.input.dataset.length) {
    refs.input.classList.add("invalid");
  } else {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  }
});
