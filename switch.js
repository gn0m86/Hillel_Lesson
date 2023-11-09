let inputType = "Kilograms"; // дана змінна буде приймати декілька значень: Hours, Kilometers, Kilograms. Інші значення не передбачено.
let inputValue = "0.5"; // вказати число, якщо число дрібне, то використовуйте крапку, замість коми

if (!isNaN(inputValue)) {
  let number = Number(inputValue);
  switch (inputType) {
    case "Hours":
      console.log(number, inputType, "=>", number * 60, "minutes");
      break;
    case "Kilometers":
      console.log(number, inputType, "=>", number * 1000, "meters");
      break;
    case "Kilograms":
      console.log(number, inputType, "=>", number * 1000, "grams");
      break;
    default:
      console.log("Дане значення не передбачено програмою.");
  }
} else {
  console.log(
    "Ви вказали неприйнятне значення в поле, де необхідно вказати число."
  );
}
