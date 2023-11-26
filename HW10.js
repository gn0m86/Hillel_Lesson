//ДЗ1
let testWord = "kAta fAfsdsdfefa";
let regex = /[^aA]/gm;
console.log(testWord.match(regex), testWord.match(regex).join(""));

//ДЗ2
var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "test.test@gmail.com",
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "dm434itro.porohov@yahoo.com",
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "andrii@mail.ru", // Нам такі не підходять
  },
];

const validEmail = arr.filter((item) => {
  let regex = /^[a-zA-Z\d.]*@(yahoo\.com|gmail\.com)/gm;
  return regex.test(item.email);
});

console.log(validEmail);
