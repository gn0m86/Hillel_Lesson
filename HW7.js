// HW1
let a = 10;
let b = 10.2;
let c = "10";
let d = "10.2";
let f = "Hello / 5";
let g = " ";
let h = "";
let i = true;
let j = [];
let k = {};

function itsNaN(value) {
  let check = value * 2;
  return String(check) === String(NaN);
}
console.log(itsNaN(a), a, isNaN(a));
console.log(itsNaN(b), b, isNaN(b));
console.log(itsNaN(c), c, isNaN(c));
console.log(itsNaN(d), d, isNaN(d));
console.log(itsNaN(f), f, isNaN(f));
console.log(itsNaN(g), g, isNaN(g));
console.log(itsNaN(h), h, isNaN(h));
console.log(itsNaN(i), i, isNaN(i));
console.log(itsNaN(j), j, isNaN(j));
console.log(itsNaN(k), k, isNaN(k));

//HW2
function pad(text, symb, dir, count) {
  let countSymbolForAdd = count - text.length;
  if (countSymbolForAdd > 0) {
    if (dir) {
      return symb.repeat(countSymbolForAdd) + text;
    }
    return text + symb.repeat(countSymbolForAdd);
  }
  return text;
}
console.log(pad("examp", "|", true, 8));
console.log(pad("example89", "-", false, 12));
console.log(pad(" ", ",", false, 9));

//HW3

function myRandom() {
  let max = 1000;
  let min = 100;
  let result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}
function calcNumbers(countVariants) {
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < countVariants; i++) {
    let randomNum = myRandom();
    if (randomNum % 2 === 0) {
      positive = positive + 1;
    } else {
      negative = negative + 1;
    }
  }
  let fullNumber = positive + negative;
  console.log(
    "Парних ",
    (positive / fullNumber) * 100,
    "% ,",
    positive,
    "чисел"
  );
  console.log(
    "Не парних ",
    (negative / fullNumber) * 100,
    "% ,",
    negative,
    "чисел"
  );
  console.log("Всього ", fullNumber, "чисел");
}
calcNumbers(121);
