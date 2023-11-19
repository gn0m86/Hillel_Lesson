/*
var fio = {
  "user name": "Misha",
  "2 name": "Lena",
  "s Name": "Chernikov",
  getInfo: function () {
    console.log("user name =", this["user name"]);
    console.log("2 name =", this["2 name"]);
    console.log("s Name =", this["s Name"]);
    console.log("newProperty =", this["newProperty"]);
  },
};

fio.getInfo();
fio.newProperty = "32";
fio.getInfo();
*/

var services = {
  стрижка: "60 грн",

  гоління: "80 грн",

  "Миття голови": "100 грн",

  price: function () {
    let keys = Object.keys(this);
    let sum = 0;
    for (let i = 0; i < keys.length; i++) {
      let serviceName = keys[i];
      if (typeof this[serviceName] !== "function") {
        let count = parseInt(this[serviceName]);
        sum = sum + count;
      }
    }
    return sum;
  },
  minPrice: function () {
    let keys = Object.keys(this);
    let minValue = this.maxPrice();
    for (let i = 0; i < keys.length; i++) {
      let serviceName = keys[i];
      if (typeof this[serviceName] !== "function") {
        let count = parseInt(this[serviceName]);
        if (minValue > count) {
          minValue = count;
        }
      }
    }
    return minValue;
  },
  maxPrice: function () {
    let keys = Object.keys(this);
    let maxValue = 0;
    for (let i = 0; i < keys.length; i++) {
      let serviceName = keys[i];
      if (typeof this[serviceName] !== "function") {
        let count = parseInt(this[serviceName]);
        if (maxValue < count) {
          maxValue = count;
        }
      }
    }
    return maxValue;
  },
};

services.newService = "65 грн";
console.log("Загальна сума всіх сервісів =", services.price(), "грн");
console.log("Мінімальна ціна сервісу =", services.minPrice(), "грн");
console.log("Максимальна ціна сервісу =", services.maxPrice(), "грн");
