"use strict";

var prompt = require("prompt");
prompt.start();

prompt.get(["age"], function (err, result) {
  let number = result.age;
  let age = "Люди стільки не живуть";
  number = Number(number);
  if (!isNaN(number) && number >= 0) {
    if (
      number === 1 ||
      number === 21 ||
      number === 31 ||
      number === 41 ||
      number === 51
    ) {
      age = "рік";
    }
    if (
      (number >= 2 && number <= 4) ||
      (number >= 22 && number <= 24) ||
      (number >= 32 && number <= 34) ||
      (number >= 42 && number <= 44) ||
      (number >= 52 && number <= 54)
    ) {
      age = "роки";
    }
    if (
      (number >= 5 && number <= 20) ||
      (number >= 25 && number <= 30) ||
      (number >= 35 && number <= 40) ||
      (number >= 45 && number <= 50) ||
      (number >= 55 && number <= 60)
    ) {
      age = "років";
    }
    if (number > 61 && number <= 99) {
      age = "Ти зовсім старий =))";
    }
    console.log(number, age);
  } else {
    console.log("Ви вказали не число, або воно від'ємне");
  }
  prompt.stop();
});
