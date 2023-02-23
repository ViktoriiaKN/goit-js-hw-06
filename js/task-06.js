const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  if (input.value.length === Number(length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
