const refs = {
  input: document.querySelector("#name-input"),
  titleName: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.titleName.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    refs.titleName.textContent = "Anonymous";
  }
});
