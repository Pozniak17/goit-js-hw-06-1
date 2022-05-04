// доступ до інпуту
const inputRef = document.querySelector("#validation-input");
// доступ до data атрибуту
const validLengthSymbolsRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener("blur", onBlurValidation);

function onBlurValidation(event) {
  //* число введених символів користувачем
  const userNumbersOfSymbols = event.currentTarget.value.length;

  if (userNumbersOfSymbols === Number(validLengthSymbolsRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
