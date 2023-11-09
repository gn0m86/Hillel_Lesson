//ДЗ №1 ч.1

function tree(high, symb) {
  for (let i = 1; i <= high; i++) {
    console.log(symb.repeat(i));
  }
}
tree(5, "*");

//ДЗ №1 ч.2
function triangle(high, symb) {
  for (let i = 1; i <= high; i++) {
    let plus = "";
    for (let a = 1; a <= i; a++) {
      plus = plus + symb;
    }
    console.log(plus);
  }
}
triangle(5, "+");

//ДЗ №2

let sum = 0;
for (let i = 1; i <= 100; i++) {
  let res = i % 3;
  if (res !== 0) {
    sum = sum + i;
  }
}
console.log(sum);

//ДЗ №3
function pow(number, step) {
  let first = number;
  for (let i = 1; i < step; i++) {
    first = first * number;
  }
  console.log(first);
}
pow(3, 3);
