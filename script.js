function handleClick(e) {
  const value = e.target.innerText;
  switch (value) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      result.value += value;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      result.value += value;
      break;
    case "=":
      result.value = eval(result.value);
      break;
    case "AC":
      result.value = "";
      break;
    case "x^2":
      square();
      break;
    case ".":
      result.value += value;
      break;
    default:
      break;
  }
}
const result = document.querySelector("#result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
function square() {
  const currentValue = result.value;
  result.value = Math.pow(currentValue, 2);
}